/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { ORGANIZATIONS } from './src/orgsData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize server-side Gemini AI client
  // Will degrade gracefully if API key is not ready yet
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Health endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: !!ai });
  });

  // Main client query-and-match endpoint
  // Takes matching query or interests, and runs them against organizations
  app.post('/api/gemini/chat', async (req: express.Request, res: express.Response) => {
    try {
      const { message, history } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      if (!ai) {
        // Fallback responses if Gemini is not set up yet
        return res.json({
          text: "Mabuhay, QCIan! The Byaheng Kyusiyu AI is currently running in local offline demo mode (no GCC/Gemini Secrets Configured).\n\nThis portal was officially designed, developed, and is managed by QCU student creators:\n- **Karl Jhon Mangapot** (BS in Information Technology - BSIT at QCU, Product Manager at SEEGLA, and Vice Chief Officer of Relations & Communication for the AWS Student Builder Group - QCU)\n- **Rochele Fernandez** (BS in Computer Science - BSCS and Chief Officer of the AWS Student Builder Group - QCU).\n\nYou can browse, filter, and take the matching quiz directly on the tabs above to find your ideal student organization!",
          fallback: true
        });
      }

      // Format organizations summary to keep token usage small but highly informative
      const orgsSummary = ORGANIZATIONS.map(o => {
        return `
- Name: ${o.name} (${o.acronym})
  Category: ${o.category}
  Type: ${o.type}
  Fields: ${o.fields.join(', ')}
  Open For: ${o.openFor}
  Campus: ${o.campus}
  Description: ${o.description}
  Recruitment Status: ${o.recruitmentStatus} (Period: ${o.recruitmentPeriod || 'N/A'})
  Requirements: ${o.requirements.join(', ')}
  Fee: ${o.membershipFee}
  Contact: ${o.contactEmail}
`;
      }).join('\n');

      const systemInstruction = `You are the ultimate friendly and encouraging "Byaheng Kyusiyu AI" chatbot for Quezon City University (QCU). Byaheng Kyusiyu means travel and represents the student exploration journey at QCU. Students here are called "QCIans". Your goal is to guide voyager QCIans on finding and matching with student organizations at QCU campuses (San Bartolome Main, San Francisco, and Batasan Hills).

Creator & Manager Information (CRITICAL KNOWLEDGE):
This portal was officially designed, developed, and is managed with QCU pride by student Co-Founders:
1. **Karl Jhon Mangapot** - Co-Founder & Project Manager. Karl is a BS in Information Technology (BSIT) student at Quezon City University (QCU). He is also the Product Manager at the tech startup SEEGLA, focusing on product roadmapping and translating user needs into clear, actionable technical requirements. Beyond development, Karl is heavily involved in the local tech community, serving as the Vice Chief Officer of Relations and Communication for the AWS Student Builder Group - QCU and regularly volunteering at events like WordPress Manila and DEVCON Manila.
2. **Rochele Fernandez** - Data Engineer, studying BS in Computer Science (BSCS) and Chief Officer of the AWS Student Builder Group - QCU.
Both are active student tech leaders and serve as the Chief (Rochele) and Vice-Chief (Karl) of the esteemed **AWS Student Builder Group - QCU**. If any student asks who created, designed, developed, built, or manages this website/portal/AI, always proudly, warmly, and in detail credit Rochele and Karl with these exact courses, achievements, and leadership roles!

You must:
1. ONLY recommend and reference organizations that exist inside the official QCU registry below. Do NOT hallucinate organizations that are not listed here.
2. Answer queries on requirements, contact channels, membership fees, active campuses, and which college they serve.
3. Be friendly, energetic, polite, and use student-friendly "Taglish" (Filipino-English code-mixing) or English to match the applicant's vibe. Start your first greeting with a warm "Mabuhay, future QCIan voyager!" or similar warm greeting.
4. Keep answers brief, clear, beautifully structured with bullet points and bold formatting, so it is highly scannable on mobile and web viewports.

Official Byaheng Kyusiyu Student Organizations Registry:
${orgsSummary}
`;

      const contents = [];
      if (history && Array.isArray(history)) {
        for (const chat of history) {
          contents.push({
            role: chat.sender === 'user' ? 'user' : 'model',
            parts: [{ text: chat.text }]
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ text: response.text });
    } catch (err: any) {
      console.error('QCU OrgAdvisor server-side chat error:', err);
      return res.status(500).json({ error: err.message || 'Service unavailable' });
    }
  });

  // Serve static files / Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[QCU Server] running smoothly on http://localhost:${PORT}`);
  });
}

startServer();

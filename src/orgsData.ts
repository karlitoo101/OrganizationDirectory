/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Organization, QuizQuestion } from './types';

export const CAMPUSES = [
  'San Bartolome (Main)',
  'San Francisco',
  'Batasan Hills',
  'All Campuses'
] as const;

export const CATEGORIES = [
  'Departmental Organizations',
  'University-Wide Organizations',
  'Community-Based (?)'
] as const;

export const TYPES = [
  'Leadership',
  'Academic & Professional',
  'Recreational',
  'Socio-Civic',
  'Fraternity/Sorority'
] as const;

export const FIELDS = [
  'Engineering & Technology',
  'Cultural & Humanities',
  'Journalism',
  'Arts & Creatives',
  'Varsity & Sports',
  'Public Service',
  'Commerce & Enterprise'
] as const;

export const ORGANIZATIONS: Organization[] = [
  {
    id: 'aws-cloud-club',
    name: 'AWS Cloud Club - QCU',
    acronym: 'AWSCC',
    category: 'University-Wide Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology', 'Arts & Creatives'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The Amazon Web Services Student Builder Group - Quezon City University (AWS SBG - QCU) is a student-led, non-profit organization dedicated to empowering learners through cloud computing, innovation, and emerging technologies. Formerly established as the AWS Learning Club in April 2025, the organization has transitioned into a Cloud Club to expand its scope.',
    vision: 'To build a community of builders ready to solve local and global challenges through modern cloud computing and continuous tech integration.',
    mission: 'To map student skill sets with Amazon Web Services paths, enabling professional readiness and cloud design standards.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [
      'Enrolled student of Quezon City University',
      'Passionate about networking, server infrastructure, backend design, or web rendering',
      'Willingness to join regular community webinar meetups and interactive laboratory sessions'
    ],
    membershipFee: 'Free',
    contactEmail: 'awscc@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/awscc.qcu',
    officers: [
      { name: 'John Benedict M. Badilla', role: 'Captain & Chief Executive Officer' },
      { name: 'Jv D. Bialen', role: 'Co-Captain' },
      { name: 'Rochele L. Fernandez', role: 'Chief Relations Officer' },
      { name: 'Karl Jhon A. Mangapot', role: 'Vice-Chief Relations Officer' },
      { name: 'Jean Piere R. Roxas', role: 'Executive Secretary' },
      { name: 'Bea B. Bacato', role: 'Chief Finance Officer' },
      { name: 'Ma. Princess G. Cunanan', role: 'Vice-Chief Finance Officer' },
      { name: 'Stephen Mark A. Mirador', role: 'Chief Operations Officer' },
      { name: 'Rex D. Bacalocos Jr', role: 'Vice-Chief Operations Officer' },
      { name: 'Michael Angelo D. Ricamata', role: 'Executive Secretary of Operations' },
      { name: 'Luzviminda D. Abianda', role: 'Chief Marketing Officer' },
      { name: 'Franc Randell D. Coton', role: 'Vice-Chief Marketing Officer' },
      { name: 'Leighann Jewel Q. Necesito', role: 'Chief Creatives Officer' }
    ],
    featuredEvents: [
      { title: 'AWS Cloud Day QCU', description: 'Interactive keynote speaking sessions with AWS certified solutions experts and practitioners.', date: 'October 12, 2026' },
      { title: 'Cloud Jam Weekend', description: 'A 24-hour AWS console builder challenge to design serverless architectures.', date: 'November 20, 2026' }
    ],
    logoBg: 'bg-orange-500/10 text-orange-600 border-orange-200',
    logoImage: '/logos/aws-cloud-club.jpg',
    accentColor: '#f97316'
  },
  {
    id: 'developer-camp-qcu',
    name: 'Developer Camp - QCU',
    acronym: 'DEVCAMP',
    category: 'University-Wide Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'Developer Camp QCU empowers a diverse community of student builders to transform bold ideas into impactful works through end-to-end support: education, mentorship, platforms, and funding, rotating initiatives across four core tracks: Future of Work, Climate & Regeneration, Health & Human Potential, and Collective Prosperity.',
    vision: "To spark a global movement that privileges innovation in the service of human flourishing by creating a decentralized, cooperative ecosystem where the most impactful ideas emerge from diverse communities and are sustained by collective contribution, not extractive capital.",
    mission: 'Developer Camp QCU empowers a diverse global community of builders to transform bold ideas into impactful works through end-to-end support, actively participating in community service initiatives and developing a well-rounded perspective on contributing to society.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [
      'Duly signed membership form and electronic form',
      'Softcopy of the latest Certificate of Registration from QCU',
      '2x2 picture taken within 6 months'
    ],
    membershipFee: 'Free',
    contactEmail: 'devcamp@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/devcamp.qcu',
    officers: [
      { role: 'Executive Director', name: 'Karl Jhon A. Mangapot' },
      { role: 'Deputy Executive Director', name: 'Jv D. Bialem' },
      { role: 'Director of Internal Relations Division', name: 'Lance Kent Magollado' },
      { role: 'Director of Finance and Budgeting Division', name: 'Rochele Fernandez' },
      { role: 'Director of Events and Logistics Division', name: 'Moira Chelsey Burbos' }
    ],
    featuredEvents: [],
    logoBg: 'bg-stone-900/5 text-stone-900 border-stone-300',
    logoImage: '/logos/developer-camp-qcu.png',
    logoImageScale: 1.20,
    accentColor: '#1c1917'
  },
  {
    id: 'supreme-student-council',
    name: 'QCU Supreme Student Council',
    acronym: 'SSC',
    category: 'University-Wide Organizations',
    type: 'Leadership',
    fields: ['Public Service'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The highest governing student representative body of Quezon City University. Champions student welfare, coordinates campus initiatives, and fosters transparent governance across San Bartolome, San Francisco, and Batasan Hills branches.',
    vision: 'A unified student body advocating for student-centered development, national awareness, and educational excellence across Quezon City.',
    mission: 'To safeguard student rights, collaborate with university departments, and implement dynamic student service frameworks.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 1 to September 15, 2026',
    requirements: [
      'Enrolled undergraduate QCU student of any campus branch',
      'Minimum GWA of 2.25 without any failing grades',
      'Clean student record certified by the Office of Student Affairs'
    ],
    membershipFee: 'Free',
    contactEmail: 'ssc@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.ssc',
    officers: [
      { role: 'President', name: 'Maria Cassandra Cruz' },
      { role: 'Vice President', name: 'Joshua Manuel Santos' },
      { role: 'Treasurer', name: 'Angela Mae Romero' }
    ],
    featuredEvents: [
      { title: 'QCU Student Congress', description: 'Assembly of student representatives to formulate school policies and discuss student challenges.', date: 'September 20, 2026' },
      { title: 'Hakbang Kabataan Leadership Initiative', description: 'A comprehensive values formation and project governance bootcamp for QCU class officers.', date: 'November 05, 2026' }
    ],
    logoBg: 'bg-blue-900/10 text-blue-900 border-blue-200',
    accentColor: '#1e3a8a'
  },
  {
    id: 'peer-counselors',
    name: 'QCU Peer Counselors',
    acronym: 'QPC',
    category: 'University-Wide Organizations',
    type: 'Socio-Civic',
    fields: ['Cultural & Humanities', 'Public Service'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'Empowering students to provide empathetic, peer-to-peer mental support, facilitating active listening circles, stress management drives, and self-care advocacy campaigns under the guidance of counselors.',
    vision: 'A compassionate academic community where mental wellness and psychological resilience are embraced and sustained.',
    mission: 'To create warm, non-judgmental platforms encouraging dialogue, active validation, and comprehensive peer guides.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 10 to September 25, 2026',
    requirements: [
      'Genuine compassion for listening and supporting classmate struggles',
      'Good moral character certificate from guidance advisors',
      'Mandatory attendances in peer facilitator orientation modules'
    ],
    membershipFee: '₱30.00',
    contactEmail: 'guidance@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.peercoun',
    officers: [
      { role: 'President', name: 'Sophia Louise Vergara' },
      { role: 'VP Internal', name: 'Jan Russell Aquino' }
    ],
    featuredEvents: [
      { title: 'Mental Wellness Caravan', description: 'Educational interactive booths with psychological wellness games and quiet rooms.', date: 'October 15, 2026' },
      { title: 'Comfort Circles Summit', description: 'Gathering of peer advocates to specialize in stress relief mechanisms and active peer counseling indicators.', date: 'November 12, 2026' }
    ],
    logoBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
    accentColor: '#10b981'
  },
  {
    id: 'qcu-times',
    name: 'The QCU Times Publication',
    acronym: 'TQCT',
    category: 'University-Wide Organizations',
    type: 'Leadership',
    fields: ['Cultural & Humanities', 'Public Service', 'Arts & Creatives', 'Journalism'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The premier official student campus press of Quezon City University, informing the student body through truth, critical investigative reports, opinion, visual arts, and literary folios.',
    vision: 'The guardian of critical thought, transparency, and students rights through investigative media and literary pursuits.',
    mission: 'To produce regular printed pamphlets, online journalism columns, editorial designs, and digital podcasts addressing student realities.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 1 to September 20, 2026',
    requirements: [
      'Outstanding writing proficiency in English or Filipino',
      'Submission of a 3-piece portfolio sample (news articles, graphics, cartoons, or photographs)',
      'Passing evaluation of basic journalism and media ethics exam'
    ],
    membershipFee: 'Free',
    contactEmail: 'qcutimes@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/theqcutimes',
    officers: [
      { role: 'Editor-in-Chief', name: 'Karl Jhon Abano' },
      { role: 'Associate Editor', name: 'Therese Marie Santos' },
      { role: 'Art Director', name: 'Kyle Justin Lopez' }
    ],
    featuredEvents: [
      { title: 'Press Freedom Masterclass', description: 'An immersive workshop with distinguished national journalists and columnists.', date: 'September 22, 2026' },
      { title: 'Katha literary folios Launch', description: 'Presenting the annual compilation of QCU student poems, digital paintings, and short narratives.', date: 'December 05, 2026' }
    ],
    logoBg: 'bg-stone-500/10 text-stone-700 border-stone-200',
    accentColor: '#78716c'
  },
  {
    id: 'iskolar-council',
    name: 'QCU Iskolar Council',
    acronym: 'QIC',
    category: 'University-Wide Organizations',
    type: 'Leadership',
    fields: ['Public Service', 'Cultural & Humanities'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'An elite student coalition centered on supporting city scholars, advocating for sustainable academic subsidies, organizing localized community pantry programs, and holding scholastic aid networks.',
    vision: 'A model student scholar service guild upholding academic excellence, altruistic community commitment, and proactive leadership.',
    mission: 'To organize scholar development workshops, facilitate local civic services, and protect scholar grants and academic conditions.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [
      'Quezon City local scholar under a student aid grant',
      'Commitment to render weekend community checkups and donation services',
      'Maintained scholarship GWA requirement standards'
    ],
    membershipFee: 'Free',
    contactEmail: 'iskolarcouncil@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.iskolarcouncil',
    officers: [
      { role: 'Chairperson', name: 'Janice Nicole Flores' },
      { role: 'Secretariat Head', name: 'Mark Bryan Sola' }
    ],
    featuredEvents: [
      { title: 'QC Scholar Outreach Summit', description: 'Continuous localized teaching services and community pantry activations for local families.', date: 'October 19, 2026' },
      { title: 'Scholastic Review BootCamp', description: 'Structured peer support reviews and lectures bridging midterms and final mock assessments.', date: 'November 22, 2026' }
    ],
    logoBg: 'bg-blue-600/10 text-blue-800 border-blue-200',
    accentColor: '#2563eb'
  },
  {
    id: 'jpcs-qcu',
    name: 'Junior Philippine Computer Society - QCU Chapter',
    acronym: 'JPCS',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'Exclusive to Computer Science students',
    campus: 'All Campuses',
    description: 'The official department student guild for BS Computer Science, specialized in algorithm designs, machine learning simulations, artificial intelligence research, and database structuring.',
    vision: 'A premier technological student sandbox producing high-potential software engineers and computer scientists in Quezon City.',
    mission: 'To offer intensive algorithmic engineering bootcamps, code contests, and prepare students with portfolio mock interviews.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 10 to September 25, 2026',
    requirements: [
      'Currently enrolled Bachelor of Science in Computer Science student of any level',
      'Keen curiosity about algorithms, Python backend scripts, or AI modeling architectures',
      'Submission of a simple code snippet or GitHub username'
    ],
    membershipFee: '₱50.00',
    contactEmail: 'jpcs.cs@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.jpcs',
    officers: [
      { role: 'President', name: 'Kevin Jhon Mangapot' },
      { role: 'VP Tech Ops', name: 'Patricia Nicole Rivera' }
    ],
    featuredEvents: [
      { title: 'CS Code Wars', description: 'An algorithm speed challenge where CS majors fight optimizing backend performance.', date: 'October 25, 2026' },
      { title: 'Intro to Neural Networks', description: 'An expert-guided hands-on workshop building a basic prediction engine from scratch.', date: 'November 18, 2026' }
    ],
    logoBg: 'bg-emerald-600/10 text-emerald-800 border-emerald-200',
    accentColor: '#059669'
  },
  {
    id: 'creatives-student-society',
    name: 'Creative Student Society - LIKHA Production',
    acronym: 'CSS',
    category: 'University-Wide Organizations',
    type: 'Leadership',
    fields: ['Cultural & Humanities', 'Public Service', 'Arts & Creatives', 'Journalism'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'A dedicated multi-campus union for visual engineers, cartoonists, videographers, poets, and writers that spearheads creative support for campaigns and events.',
    vision: 'A visual powerhouse transforming artistic imaginations into designs that inspire connection, critical consciousness, and community movement.',
    mission: 'To provide technical training on Figma, Adobe, and blender tools, while hosting collaborative student arts exhibits.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 12 to September 30, 2026',
    requirements: [
      'Strong passion or willingness to practice graphic designing, video editing, photography, or copy writing',
      'Completed the online creative assessment form',
      'Ready to actively support student service design needs'
    ],
    membershipFee: '₱30.00',
    contactEmail: 'creatives@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.creatives',
    officers: [
      { role: 'Creative Director', name: 'Kyle Justin Lopez' },
      { role: 'Media Head', name: 'Abigail Grefalda' }
    ],
    featuredEvents: [
      { title: 'Sining Lente Expo', description: 'A massive visual exhibition displaying outstanding student photographs and graphic representations.', date: 'October 28, 2026' },
      { title: 'Figma and Motion Basics', description: 'A thorough training session detailing vector graphics, layouts, and typography pairing.', date: 'November 15, 2026' }
    ],
    logoBg: 'bg-purple-600/10 text-purple-800 border-purple-200',
    accentColor: '#9333ea'
  },
  {
    id: 'iecep-qcu',
    name: 'Institute of Electronic Engineers of the Philippines - QCU Student Chapter',
    acronym: 'IECEP-QCU',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'Exclusive to Electronics Engineering students',
    campus: 'All Campuses',
    description: 'Upholding highest hardware competencies, PCB alignments, telecommunication research, microcontrollers operations, and signal systems mastery for BSCpE and BSECE majors.',
    vision: 'A world-class engineering student forum piloting electronics and radio technologies preparation.',
    mission: 'Providing physical engineering labs, logic simulation bootcamps, and board-prep review forums.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 28, 2026',
    requirements: [
      'Currently enrolled BS Electronics Engineering student',
      'Enthusiastic to construct microcontroller gadgets or explore wireless systems',
      'Submission of laboratory safety clearance certification'
    ],
    membershipFee: '₱60.00',
    contactEmail: 'iecep@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.iecep',
    officers: [
      { role: 'President', name: 'Arnel Gabriel Custodio' },
      { role: 'Lab Coordinator', name: 'Janelle Castro' }
    ],
    featuredEvents: [
      { title: 'Circuit Design Jam', description: 'A timed hardware competition of layout, soldering, and terminal program operations.', date: 'October 24, 2026' },
      { title: 'Radio Wave & IoT Seminar', description: 'Exploring internet of things, smart cities, and microwave transmission systems.', date: 'December 10, 2026' }
    ],
    logoBg: 'bg-amber-600/10 text-amber-700 border-amber-200',
    accentColor: '#d97706'
  },
  {
    id: 'piie-orsp-qcu',
    name: 'Philippine Institute of Industrial Engineers Operations Research Society of the Philippines - QCU Student Chapter',
    acronym: 'PIIE-ORSP',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'Exclusive to Industrial Engineering students',
    campus: 'All Campuses',
    description: 'Promoting peak system logistics, Lean Manufacturing, ergonomics configurations, and statistics-driven operations optimization for BS Industrial Engineering majors.',
    vision: 'Incubating highly integrated operations managers who lead institutional systems streamlining.',
    mission: 'To guide industrial process modeling simulations, supply chain boards, and quality assurance courses.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 20 to September 25, 2026',
    requirements: [
      'Enrolled Industrial Engineering major of any year',
      'Desire to master statistical quality toolsets, optimization charts, or human factor logs',
      'Active attendance in the introductory assembly session'
    ],
    membershipFee: '₱50.00',
    contactEmail: 'piie@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.piie',
    officers: [
      { role: 'President', name: 'Dolly Rose Marasigan' },
      { role: 'Operations Lead', name: 'Ivan Gabriel Diaz' }
    ],
    featuredEvents: [
      { title: 'Lean Operations Challenge', description: 'Corporate simulation game of bottleneck analysis and material workflows.', date: 'October 30, 2026' },
      { title: 'Six Sigma Introductory Seminar', description: 'Detailed study of DMAIC methodologies, metrics, and quality controls.', date: 'November 27, 2026' }
    ],
    logoBg: 'bg-teal-650/10 text-teal-800 border-teal-200',
    accentColor: '#0d9488'
  },
  {
    id: 'icep-qcu',
    name: 'Institute of Computer Engineers of the Philippines - QCU Student Chapter',
    acronym: 'ICpEP',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'Exclusive to Computer Engineering students',
    campus: 'All Campuses',
    description: 'Unifying Bachelor of Science in Computer Engineering (BSCpE) majors under practical robotics integrations, VLSI designs, memory hardware structures, and embedded system systems.',
    vision: 'A top-ranked community of computer engineering leaders architecting scalable hardware-software modules.',
    mission: 'To develop logic gates masterclasses, embedded Arduino program practices, and networking drills.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [
      'BS Computer Engineering enrolled student of any year',
      'Basic background or keen motivation to integrate computer boards with software operations',
      'Compliance with basic laboratory safety standards'
    ],
    membershipFee: '₱50.00',
    contactEmail: 'icpep@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.icpep',
    officers: [
      { role: 'Governor', name: 'Dexter James Ocampo' },
      { role: 'Vice Governor', name: 'Mark Anthony Reyes' }
    ],
    featuredEvents: [
      { title: 'Robotics Assembly Day', description: 'Coordinated workshop compiling microprocessor parts into obstacle-evasive micro machines.', date: 'October 15, 2026' },
      { title: '嵌入式 Firmware BootCamp', description: 'Constructing firmware programs and loading real-time calculations directly into flash chips.', date: 'November 29, 2026' }
    ],
    logoBg: 'bg-indigo-650/10 text-indigo-800 border-indigo-200',
    accentColor: '#4f46e5'
  },
  {
    id: 'lesit-qcu',
    name: 'League of Excellent Students in Information Technology',
    acronym: 'L.E.S.I.T.',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'Exclusive to Information Technology students',
    campus: 'All Campuses',
    description: 'Promoting excellence, digital literacy, and industrial competence for Information Technology majors of San Francisco campus through systematic software pathways.',
    vision: 'A cohesive tech harbor in the San Francisco branch transforming students into competitive technology specialists.',
    mission: 'To operate regular web development loops, system integration webinars, and maintain responsive student files database.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 18 to September 28, 2026',
    requirements: [
      'BS Information Technology major enrolled in San Francisco Campus',
      'Keen commitment to practice design scripts, relational databases, or network topologies',
      'Completed the online registration checklist'
    ],
    membershipFee: '₱40.00',
    contactEmail: 'lesit@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.lesit',
    officers: [
      { role: 'Chairperson', name: 'Lester John Giner' },
      { role: 'Operations Head', name: 'Sarah Denise Ocampo' }
    ],
    featuredEvents: [
      { title: 'Fullstack React Launch', description: 'Comprehensive sessions constructing simple server routes, components, and Tailwind alignments.', date: 'October 19, 2026' },
      { title: 'DB Normalization Night', description: 'A fun gamified session where groups design efficient database ERDs under pressure.', date: 'November 25, 2026' }
    ],
    logoBg: 'bg-blue-600/10 text-blue-700 border-blue-200',
    accentColor: '#2563eb'
  },
  {
    id: 'syvesis-qcu',
    name: 'Synergy of Young Visionary Students of Information System',
    acronym: 'SYVESIS',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'Exclusive to Information System students',
    campus: 'All Campuses',
    description: 'Promoting analytical system evaluations, tech-driven business management, project metrics pipelines, and IT audit checks for BS Information Systems students.',
    vision: 'To produce expert systems analysts, technology consultants, and enterprise solutions administrators of high visual caliber.',
    mission: 'To map complex enterprise requirements with tech architectures through modeling models and CRM drills.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 12 to September 25, 2026',
    requirements: [
      'Undergraduate student majoring in BS Information Systems',
      'Desire to bridging technological capabilities with entrepreneurial standard procedures',
      'Participation in the introductory systems analysis orientation'
    ],
    membershipFee: '₱50.00',
    contactEmail: 'syvesis@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.syvesis',
    officers: [
      { role: 'President', name: 'Glecerio Mercado' },
      { role: 'Audit Lead', name: 'Micaela Santos' }
    ],
    featuredEvents: [
      { title: 'IT Audit & Security Challenge', description: 'Simulating complex vulnerabilities detection in system logs and outlining prevention strategies.', date: 'October 29, 2026' },
      { title: 'Enterprise Architecture Workshop', description: 'A class modeling system components and mapping business workflows using UML charts.', date: 'November 30, 2026' }
    ],
    logoBg: 'bg-emerald-650/10 text-emerald-800 border-emerald-200',
    accentColor: '#059669'
  },
  {
    id: 'jpia-qcu',
    name: 'Junior Philippine Institute of Accountants - QCU',
    acronym: 'JPIA',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Commerce & Enterprise'],
    openFor: 'Exclusive to Accountancy students',
    campus: 'All Campuses',
    description: 'Fostering accounting competencies, audit practices, complex taxation formulas, and professional financial statement analytics for BS Accountancy (BSA) majors.',
    vision: 'A premier academic organization shaping certified public accountants who uphold absolute transparent ledger recording and corporate ethics.',
    mission: 'To hold continuous audit quizzes, peer study circles, and prep courses matching the national boards framework.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 05 to September 18, 2026',
    requirements: [
      'Currently enrolled BS Accountancy major of Quezon City University',
      'Dedicated commitment to complete complex accounting calculation review sessions',
      'Maintained academic standard GWA index without major defaults'
    ],
    membershipFee: '₱100.00 (includes regional federation chapter membership)',
    contactEmail: 'jpia@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/jpia.qcu',
    officers: [
      { role: 'President', name: 'Therese Marie Santos' },
      { role: 'VPAA', name: 'Kyle Justin Lopez' }
    ],
    featuredEvents: [
      { title: 'JPIA Tax Arena', description: 'Intensive peer audit and individual income taxation quiz bee challenge.', date: 'October 14, 2026' },
      { title: 'Forensic Accounting Forum', description: 'A detailed look on modern tracking scripts, ledger audits, and preventing fraud.', date: 'December 05, 2026' }
    ],
    logoBg: 'bg-yellow-600/10 text-yellow-800 border-yellow-200',
    accentColor: '#ca8a04'
  },
  {
    id: 'jmaex-qcu',
    name: 'Junior Management Accountants Executives - QCU',
    acronym: 'JMAEX',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Commerce & Enterprise'],
    openFor: 'Exclusive to Management Accountancy students',
    campus: 'All Campuses',
    description: 'Building professional cost controllers, enterprise budgeting planners, asset appraisers, and investment analysis specialists for BS Management Accounting majors.',
    vision: 'A model student management accounting body formulating financial dashboards and cost calculation models.',
    mission: 'To stage dynamic cost control contests, business valuation mock pitches, and professional preparation.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 08 to September 20, 2026',
    requirements: [
      'BS Management Accounting major of Quezon City University',
      'Desire to master balance sheets, microeconomics, and operations budgeting designs',
      'Attendance in the general introductory departmental congress'
    ],
    membershipFee: '₱60.00',
    contactEmail: 'jmaex@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.jmaex',
    officers: [
      { role: 'President', name: 'Abigail Grefalda' },
      { role: 'Financial Dir.', name: 'Cyrus Paul Santos' }
    ],
    featuredEvents: [
      { title: 'Operations Cost Battle', description: 'Fictional enterprise case study challenge to restructure budget flows and minimize wastages.', date: 'October 18, 2026' },
      { title: 'Asset Valuation Seminar', description: 'Expert discussion on tracking stock trends and appraising company capital projects.', date: 'November 22, 25' }
    ],
    logoBg: 'bg-amber-600/10 text-amber-800 border-amber-200',
    accentColor: '#d97706'
  },
  {
    id: 'young-entreps',
    name: 'QCU Young Entrepreneurs Society',
    acronym: 'YES',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Commerce & Enterprise'],
    openFor: 'Exclusive to Entrepreneurship students',
    campus: 'All Campuses',
    description: 'Elevating student startup ideas, business pitch coordinates, micro-loan modeling, and retail management frameworks for BS Entrepreneurship majors in the Batasan Hills branch.',
    vision: 'To produce highly ethical young startup founders boosting QC local merchant capabilities with digital tech operations.',
    mission: 'Providing physical business incubation centers, interactive retail boards, and seed finance presentations.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [
      'Enrolled BS Entrepreneurship student of QCU Batasan Hills Campus',
      'Willingness to draft a simple 1-page business pitch or startup concept summary',
      'Ready to actively join local business and trade fair activations'
    ],
    membershipFee: '₱50.00',
    contactEmail: 'yes.bh@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/yes.qcu',
    officers: [
      { role: 'President', name: 'Gerry Gomez' },
      { role: 'Marketing Head', name: 'Sophia Louise Vergara' }
    ],
    featuredEvents: [
      { title: 'QCU Pitch Festival', description: 'Pitching student-made business prototypes and digital applications to local startup mentors.', date: 'October 29, 2026' },
      { title: 'Sari-Sari Digital App Workshop', description: 'Helping micro QC merchants update schedules, scan digital payments, and track inventories online.', date: 'November 26, 2026' }
    ],
    logoBg: 'bg-lime-600/10 text-lime-800 border-lime-200',
    accentColor: '#65a30d'
  },
  {
    id: 'eduk-club',
    name: 'QCU EDUK Club',
    acronym: 'EC',
    category: 'Departmental Organizations',
    type: 'Academic & Professional',
    fields: ['Cultural & Humanities'],
    openFor: 'Exclusive to Early Childhood Education students',
    campus: 'All Campuses',
    description: 'The supreme academic community for Bachelor of Early Childhood Education majors, refining pedagogical methodologies, speech coaching, demonstration mock classes, and public teaching drives.',
    vision: 'A unified pedagogical framework producing teachers who integrate tech with soft child-centered mentoring methodologies.',
    mission: 'To run continuous weekend reading caravans, speech seminars, and maintain teacher support review cycles.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 01 to September 18, 2026',
    requirements: [
      'Currently enrolled Bachelor of Secondary Education major of Quezon City University',
      'Sincere interest to tutor neighborhood children or lead literacy projects',
      'Passes the basic communicative self-introduction screening'
    ],
    membershipFee: '₱40.00',
    contactEmail: 'eduk@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.eduk',
    officers: [
      { role: 'President', name: 'Kyla Althea Tolentino' },
      { role: 'Tutor Convener', name: 'Mark Bryan Sola' }
    ],
    featuredEvents: [
      { title: 'QC Mobile Literacy Drive', description: 'Continuous weekend reading libraries constructed across local Day Care schools.', date: 'September 30, 2026' },
      { title: 'Gamified Classroom Seminar', description: 'Teaching secondary education educators how to construct online quiz systems, digital boards, and visual aids.', date: 'November 15, 2026' }
    ],
    logoBg: 'bg-emerald-600/10 text-emerald-800 border-emerald-200',
    accentColor: '#059669'
  },
  {
    id: 'qcu-robotics',
    name: 'QCU Robotics',
    acronym: 'QR',
    category: 'University-Wide Organizations',
    type: 'Academic & Professional',
    fields: ['Engineering & Technology'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'Uniting hardware assembly, microcontroller programming, and autonomous vehicle algorithms under one tech organization open to all computer science, engineering, and IT majors alike.',
    vision: 'To represent Quezon City University in nationwide smart robotics challenges and IoT exhibitions.',
    mission: 'To conduct comprehensive electronic soldering crash courses, C++ algorithm structuring, and micro-sensors integrations.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 10 to September 25, 2026',
    requirements: [
      'Enrolled QCU student of any course or year level',
      'Basic curiosity regarding electronic components, motors, or algorithmic design strategies',
      'Attendance in the physical laboratory safety and tools simulation is required'
    ],
    membershipFee: 'Free',
    contactEmail: 'robotics@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.robotics',
    officers: [
      { role: 'Lead Programmer', name: 'Renz Ryan Salazar' },
      { role: 'Hardware head', name: 'Arnel Gabriel Custodio' }
    ],
    featuredEvents: [
      { title: 'Autonomous Speedway Rally', description: 'Developing code for micro vehicular chassis navigating high-speed tracks with color indicators.', date: 'October 12, 2026' },
      { title: 'C++ Arduino Crash Course', description: 'A thorough layout session coding servo movements, sound sensors, and custom distance meters.', date: 'November 22, 2026' }
    ],
    logoBg: 'bg-zinc-650/10 text-zinc-800 border-zinc-200',
    accentColor: '#52525b'
  },
  {
    id: 'kalayaan-dance',
    name: 'QCU Kalayaan Dance Company',
    acronym: 'KDC',
    category: 'University-Wide Organizations',
    type: 'Recreational',
    fields: ['Varsity & Sports'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The central modern, street, and contemporary dance performing troupe of QCU, directing regular campus concerts, athletic half-times, and representing the university in metropolitan fests.',
    vision: 'To build exceptional movement artists who convey high cultural narratives, values, and energy through choreography mastery.',
    mission: 'Providing active conditioning regimens, contemporary dance classes, and designing dynamic visual performance concepts.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 12 to September 30, 2026',
    requirements: [
      'Enrolled QCU student of any program or camp branch',
      'Passes the coordination, flexibility, and physical choreographic tryout session',
      'Willingness to commit to regular evening rehearsal schedules'
    ],
    membershipFee: 'Free',
    contactEmail: 'danceco@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.kalayaandance',
    officers: [
      { role: 'Lead Choreographer', name: 'Rochelle Joy Pineda' },
      { role: 'Art Director', name: 'Maestro Fernando Ramos' }
    ],
    featuredEvents: [
      { title: 'Sining Indak Show', description: 'A marvelous visual performing concert detailing the rich history of struggles in Manila through street choreography.', date: 'October 16, 2026' },
      { title: 'Active Studio conditioning', description: 'Weekend full-body fitness, split timings, and group styling masterclasses.', date: 'November 21, 2026' }
    ],
    logoBg: 'bg-rose-600/10 text-rose-800 border-rose-200',
    accentColor: '#e11d48'
  },
  {
    id: 'kyusi-esports',
    name: 'Kyusi Esports Community',
    acronym: 'KEC',
    category: 'University-Wide Organizations',
    type: 'Recreational',
    fields: ['Varsity & Sports'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'Governing competitive esports setups, multiplayer strategy reviews, mobile tournament streams, and promoting structured digital wellness guidelines for QCU gamers.',
    vision: 'A prestigious collegiate gaming network advocating for professional esports careers, gaming wellness, and strategic thinking.',
    mission: 'To hold coordinated campus championships on popular game modes, provide casting webinars, and maintain healthy screen boundaries.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 20 to September 28, 2026',
    requirements: [
      'Enrolled undergraduate student of Quezon City University',
      'Commitment to uphold sport and gaming ethics without toxic behaviors',
      'Must pass a short tactical coordination check or in-app tier review'
    ],
    membershipFee: '₱30.00',
    contactEmail: 'esports@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.esports',
    officers: [
      { role: 'President', name: 'Jan Russell Aquino' },
      { role: 'Casting head', name: 'Karl Jhon Abano' }
    ],
    featuredEvents: [
      { title: 'QCU Gaming Arena 2026', description: 'Intra-campus multi-course gaming league with live digital streams and cast reviews.', date: 'October 22, 2026' },
      { title: 'Esports Wellness Seminar', description: 'Focusing on strategic teamwork calculations, carpal tunnel prevention, and balancing screen hours.', date: 'November 18, 2026' }
    ],
    logoBg: 'bg-red-650/10 text-red-800 border-red-200',
    accentColor: '#dc2626'
  },
  {
    id: 'jade-cultural',
    name: 'QCU Jade Cultural Society',
    acronym: 'JCS',
    category: 'University-Wide Organizations',
    type: 'Socio-Civic',
    fields: ['Cultural & Humanities'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The Jade Cultural Society empowers QCU students by fostering literacy, cultivating ethical virtues (Benevolence, Justice, and Modesty), and promoting an inclusive environment dedicated to peace and mutual respect.',
    vision: 'To lead cultural mindfulness and elevate folklore, arts, and traditions on the modern academic stage.',
    mission: 'Providing folk dance sessions, history research loops, and designing responsive museum guide pamphlets.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [
      'Enrolled QCU student celebrating local arts, literature, or structural crafts',
      'Desire to help volunteer during municipal cultural presentations',
      'Completion of simple cultural onboarding seminar'
    ],
    membershipFee: 'Free',
    contactEmail: 'cultural@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.jCS',
    officers: [
      { role: 'Art Convener', name: 'Gervic John Perez' },
      { role: 'Secretary', name: 'Janice Nicole Flores' }
    ],
    featuredEvents: [
      { title: 'Araw ng Kalinangan Exhibit', description: 'Displaying ancestral local scripts, folk visual patterns, and interactive theater showcases.', date: 'October 14, 2026' },
      { title: 'QC Heritage Tour Forum', description: 'Expert review detailing local monuments, revolutionary meeting spots, and historical accounts of Diliman.', date: 'November 10, 2026' }
    ],
    logoBg: 'bg-cyan-600/10 text-cyan-800 border-cyan-200',
    accentColor: '#0891b2'
  },
  {
    id: 'gen-z',
    name: 'QCU Gen. Z Learners',
    acronym: 'GZL',
    category: 'University-Wide Organizations',
    type: 'Socio-Civic',
    fields: ['Cultural & Humanities', 'Public Service', 'Arts & Creatives'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'A proactive civic movement utilizing digital trends, social media campaigns, informative graphic designs, and video reels to advocate for civic duty and youth support services.',
    vision: 'Harnessing internet methodologies and peer connections to drive youth empowerment, clean communities, and responsive peer support.',
    mission: 'To formulate functional online awareness portfolios, local environment cleanups, and tutoring sessions.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 25, 2026',
    requirements: [
      'Active student enrolled in Quezon City University of any course branch',
      'Basic familiarity or willingness to practice visual graphics, dynamic editing, or copy writing',
      'Passionate about environment cleaning or online civic discussions'
    ],
    membershipFee: 'Free',
    contactEmail: 'genz@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.genz',
    officers: [
      { role: 'Community Facilitator', name: 'Mark Bryan Sola' },
      { role: 'Reels director', name: 'Patricia Nicole Rivera' }
    ],
    featuredEvents: [
      { title: 'QC Tech Clean Initiative', description: 'Coordinating local street cleaning drives paired with basic sorting instructions.', date: 'October 24, 2026' },
      { title: 'Infographics and Civic Action', description: 'Constructing easy-to-read cards regarding civic duties, disaster steps, and health guidelines.', date: 'December 02, 2026' }
    ],
    logoBg: 'bg-indigo-600/10 text-indigo-700 border-indigo-200',
    accentColor: '#4f46e5'
  },
  {
    id: 'ligers-tetsquad',
    name: 'QCU Ligers Tetsquad',
    acronym: 'QLT',
    category: 'University-Wide Organizations',
    type: 'Recreational',
    fields: ['Varsity & Sports'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The official active booster squad and athletic cheering group of Quezon City University, motivating athletic fests, local meets, and supporting general fitness routines.',
    vision: 'A highly recognized cheerleader coalition boosting physical discipline, team synergy, and student spirit representing QCU.',
    mission: 'To refine cheering patterns, design interactive gymnastics/cardio reviews, and represent QCU in local parades.',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 18 to September 30, 2026',
    requirements: [
      'Enrolled QCU student holding complete medical clinic clearance',
      'High level of coordination, rhythmic alignment, physical endurance, or voice projections',
      'Mandatory tryouts matching coordination alignments'
    ],
    membershipFee: 'Free',
    contactEmail: 'cheer@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.ligers',
    officers: [
      { role: 'Team Captain', name: 'Ivan Gabriel Diaz' },
      { role: 'Conditioning Coach', name: 'Rochelle Joy Pineda' }
    ],
    featuredEvents: [
      { title: 'Intramurals Cheering Camp', description: 'Intense training detailing dynamic steps, team alignment, and safety gymnastics protocols.', date: 'September 28, 2026' },
      { title: 'Parade of Champion fests', description: 'Leading student marchers with rhythmic drums and central university cheer cards.', date: 'October 09, 2026' }
    ],
    logoBg: 'bg-fuchsia-600/10 text-fuchsia-800 border-fuchsia-200',
    accentColor: '#c026d3'
  },
  {
    id: 'tanghalang-qcu',
    name: 'Tanghalang Quezon City University',
    acronym: 'TQCU',
    category: 'University-Wide Organizations',
    type: 'Recreational',
    fields: ['Varsity & Sports'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The official theater and performing arts guild of Quezon City University, staging dramatic productions and live performances that showcase student talent in acting, direction, and stagecraft.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'tanghalang@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.tanghalang',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-violet-600/10 text-violet-800 border-violet-200',
    accentColor: '#7c3aed'
  },
  {
    id: 'kyusi-cosplay',
    name: 'Kyusi Cosplay Community',
    acronym: 'KCC',
    category: 'Community-Based (?)',
    type: 'Recreational',
    fields: ['Arts & Creatives'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'A vibrant community for QCU students who share a passion for cosplay, costume craftsmanship, and character portrayal, gathering to celebrate anime, gaming, and pop culture fandoms through creative self-expression.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'cosplay@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.kyusicosplay',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-pink-600/10 text-pink-800 border-pink-200',
    accentColor: '#db2777'
  },
  {
    id: 'kitsan-club',
    name: "Kit'san Club",
    acronym: 'KSC',
    category: 'Community-Based (?)',
    type: 'Recreational',
    fields: ['Arts & Creatives'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: "Kit'san Club brings together QCU students who enjoy drawing and other hobby-based visual arts, offering a relaxed space to sketch, share techniques, and grow as hobbyist artists.",
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'kitsan@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.kitsan',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-orange-600/10 text-orange-800 border-orange-200',
    accentColor: '#ea580c'
  },
  {
    id: 'triskelion-qcu',
    name: 'QCU Main Triskelion (Tau Gamma Phi/Sigma)',
    acronym: 'TGP',
    category: 'Community-Based (?)',
    type: 'Fraternity/Sorority',
    fields: ['Public Service'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The QCU chapter of the Tau Gamma Phi Fraternity and Tau Gamma Sigma Sorority (Triskelion), a nationwide brotherhood and sisterhood organization engaged in community service, brotherhood-building activities, and civic outreach programs.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'triskelion@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.triskelion',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-red-700/10 text-red-900 border-red-300',
    accentColor: '#b91c1c'
  },
  {
    id: 'lightning-spinners',
    name: 'QCU Lightning Spinners Table Tennis Club',
    acronym: 'LSTTC',
    category: 'University-Wide Organizations',
    type: 'Recreational',
    fields: ['Varsity & Sports'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The official table tennis club of Quezon City University, training competitive paddlers, hosting friendly matches, and representing QCU in intercollegiate table tennis tournaments.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'tabletennis@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.lightningspinners',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-sky-600/10 text-sky-800 border-sky-200',
    accentColor: '#0284c7'
  },
  {
    id: 'youth-on-the-rock',
    name: 'Youth On The Rock',
    acronym: 'YOTR',
    category: 'University-Wide Organizations',
    type: 'Socio-Civic',
    fields: ['Cultural & Humanities', 'Public Service'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'A faith-based youth ministry organization empowering QCU students through fellowship, values formation, and community outreach programs rooted in Christian service and leadership.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'yotr@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.youthontherock',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-yellow-500/10 text-yellow-700 border-yellow-200',
    accentColor: '#eab308'
  },
  {
    id: 'cfc-youth-for-christ',
    name: 'QCU CFC Youth for Christ',
    acronym: 'CFC-YFC',
    category: 'University-Wide Organizations',
    type: 'Socio-Civic',
    fields: ['Cultural & Humanities', 'Public Service'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'The QCU chapter of Couples for Christ Youth for Christ, a faith-based youth movement fostering spiritual growth, values formation, and active community service among young Catholics.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'cfcyfc@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.cfcyfc',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-green-600/10 text-green-800 border-green-200',
    accentColor: '#16a34a'
  },
  {
    id: 'dzqc-radio',
    name: 'DZQC Quezon City University',
    acronym: 'DZQC',
    category: 'University-Wide Organizations',
    type: 'Academic & Professional',
    fields: ['Cultural & Humanities', 'Public Service', 'Arts & Creatives', 'Journalism'],
    openFor: 'ALL',
    campus: 'All Campuses',
    description: 'DZQC - QCU Radio, also known as DZQC Quezon City University "Ibang Klase sa QCU," envisions being the first Local Government University to establish a radio station in the National Capital Region, delivering quality, inclusive, and accessible education to the City on-air and online.',
    vision: '',
    mission: '',
    recruitmentStatus: 'Open',
    recruitmentPeriod: 'August 15 to September 30, 2026',
    requirements: [],
    membershipFee: 'Free',
    contactEmail: 'dzqc@qcu.edu.ph',
    facebookUrl: 'https://facebook.com/qcu.dzqcradio',
    officers: [],
    featuredEvents: [],
    logoBg: 'bg-blue-700/10 text-blue-900 border-blue-300',
    accentColor: '#1d4ed8'
  }
];

// Force join fee to always be Free, clear mission & vision, empty officers/requirements/featured events except for orgs with verified officer rosters
const ORGS_WITH_VERIFIED_OFFICERS = ['aws-cloud-club', 'developer-camp-qcu'];

ORGANIZATIONS.forEach((org) => {
  org.membershipFee = 'Free';
  org.mission = '';
  org.vision = '';

  if (!ORGS_WITH_VERIFIED_OFFICERS.includes(org.id)) {
    org.officers = [];
  }

  org.requirements = [];
  org.featuredEvents = [];
});

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Choose the area or practice that sparks your highest motivation:',
    options: [
      { text: 'Coding programs, cloud frameworks, robotics, or hardware architectures', scores: { 'Academic & Professional': 3, 'Engineering & Technology': 5 } },
      { text: 'Formulating student laws, speech debates, team organizations, or civic projects', scores: { 'Leadership': 5, 'Public Service': 3 } },
      { text: 'Writing opinion columns, reporting facts, capture photos, or designing vector canvases', scores: { 'Leadership': 2, 'Journalism': 5, 'Arts & Creatives': 3 } },
      { text: 'Modern choreography, sports leagues, gaming competitions, or athletic stunts', scores: { 'Recreational': 4, 'Varsity & Sports': 5 } },
      { text: 'Mentoring children, mental health counseling, stress reliefs, or local donation drives', scores: { 'Socio-Civic': 5, 'Public Service': 4 } },
      { text: 'Starting profit ventures, product valuation sheets, bookkeeping, or commerce operations', scores: { 'Academic & Professional': 4, 'Commerce & Enterprise': 5 } }
    ]
  },
  {
    id: 2,
    question: 'How do you prefer to spend your off-hours around the university halls?',
    options: [
      { text: 'Modifying a GitHub repository, connecting server boards, or configuring cloud files', scores: { 'Engineering & Technology': 5, 'Academic & Professional': 2 } },
      { text: 'Reviewing news logs, writing flash essays, or sketching vector layout presets', scores: { 'Journalism': 4, 'Arts & Creatives': 5 } },
      { text: 'Discussing budget models, investment trends, or drafting customer pitches', scores: { 'Commerce & Enterprise': 5 } },
      { text: 'Holding fitness routines, playing esports coordination files, or checking steps routines', scores: { 'Varsity & Sports': 5, 'Recreational': 2 } },
      { text: 'Guiding classroom classmates, active validation sessions, or coordinating charity packages', scores: { 'Socio-Civic': 4, 'Public Service': 4 } }
    ]
  },
  {
    id: 3,
    question: 'What is your ultimate objective for wanting to join a QCU organization?',
    options: [
      { text: 'Lead students, collaborate on high policy decisions, and coordinate public services', scores: { 'Leadership': 5, 'Public Service': 2 } },
      { text: 'Hone programming systems, build cloud-native templates, and explore algorithms', scores: { 'Engineering & Technology': 5, 'Academic & Professional': 3 } },
      { text: 'Participate in dance perform circles, sports tournaments, or esports leagues', scores: { 'Recreational': 5, 'Varsity & Sports': 4 } },
      { text: 'Champion truth on campus and design modern artistic visual portfolios', scores: { 'Journalism': 3, 'Arts & Creatives': 5, 'Cultural & Humanities': 3 } },
      { text: 'Provide support to needy communities and help students manage stress or peer challenges', scores: { 'Socio-Civic': 5, 'Public Service': 3 } }
    ]
  }
];

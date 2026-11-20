import { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Manoharan K',
  monogram: 'MK',
  avatarUrl: `${import.meta.env.BASE_URL}assets/images/avatar.png`,
  title: 'Software Developer & Technology Enthusiast',
  subtitle: 'SOFTWARE ENGINEERING · APPLIED AI · FULL-STACK',
  headline: [
    'Building resilient software architectures',
    'and purposeful digital systems.'
  ],
  bio: [
    "I am a Computer Science and Engineering student at Rajalakshmi Engineering College (Batch 2023–2027) with a deep technical focus on full-stack software development, mobile systems, artificial intelligence, and applied computer vision.",
    "My engineering philosophy values architectural clarity, dependable execution, and real-world utility over superficial complexity. Whether building IoT telemetry gateways, designing cloud-based workflows, or deploying on-device AI inference pipelines, I take projects from concept to robust implementation.",
    "During my Machine Learning Internship at Tata Consultancy Services (TCS, June–July 2025), I explored production ML workflows, data analysis paradigms, and enterprise software practices.",
    "Beyond software engineering, I am a passionate consumer technology enthusiast actively tracking smartphones, laptops, audio technology, smartwatches, and emerging wearable gadgets."
  ],
  location: 'Chennai, India',
  email: 'kmanoharan2005@gmail.com',
  github: 'https://github.com/k-manoharan',
  linkedin: 'https://www.linkedin.com/in/manoharan-k-a5b1862a2/',
  resumeUrl: `${import.meta.env.BASE_URL}Manoharan_K_Resume.pdf`,
  interests: [
    'Full-Stack Engineering',
    'Mobile Application Development',
    'Applied Artificial Intelligence',
    'Computer Vision Systems',
    'Cloud-Based Systems',
    'Practical Technology Experimentation'
  ],
  techInterests: [
    {
      category: 'Smartphones & Mobile Silicon',
      items: ['Flagship SoC Architectures (Apple A/M Series, Snapdragon 8 Gen, Tensor)', 'Display Tech (LTPO, 120Hz OLED, Peak Nits calibration)', 'Computational Mobile Photography & ISP Pipelines'],
      description: 'Following mobile computing paradigms, thermal management breakthroughs, and on-device neural processing units (NPU).'
    },
    {
      category: 'Laptops & Computing Hardware',
      items: ['ARM-based Architecture Transition', 'Thermals & Efficiency Curves', 'Chassis Craftsmanship & Keyboard Ergonomics'],
      description: 'Analyzing personal workstation productivity, silicon efficiency benchmarks, and display accuracy standards.'
    },
    {
      category: 'Audio Engineering & Acoustics',
      items: ['Active Noise Cancellation (ANC) algorithms', 'Spatial Audio & Head Tracking DSP', 'LDAC / Lossless Audio Codecs & Driver Tuning'],
      description: 'Exploring planar magnetic drivers, acoustic seal physics, and consumer earbud DSP tuning for accurate sound reproduction.'
    },
    {
      category: 'Smartwatches & Health Wearables',
      items: ['Photoplethysmography (PPG) optical sensors', 'ECG & SpO2 tracking algorithms', 'Battery endurance optimizations in RTOS vs WearOS'],
      description: 'Tracking wearable health telemetry accuracy, micro-battery density innovations, and glanceable UI micro-interactions.'
    },
    {
      category: 'Emerging Consumer Gadgets',
      items: ['Smart Rings & Minimalist Trackers', 'Augmented Reality Smart Glasses', 'Spatial Hardware & Ambient Computing'],
      description: 'Keeping a pulse on next-generation wearable form factors, ambient spatial interfaces, and hardware miniaturization.'
    }
  ],
  languages: [
    { language: 'English', proficiency: 'Professional Working Fluency' },
    { language: 'Tamil', proficiency: 'Native / Bilingual' }
  ],
  status: {
    available: true,
    label: 'Available for Summer Internships & Engineering Roles'
  }
};

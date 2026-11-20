import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-tcs-internship',
    organization: 'Tata Consultancy Services (TCS)',
    role: 'Machine Learning Intern',
    period: 'June 2025 – July 2025',
    location: 'Chennai / Virtual',
    type: 'Internship',
    logo: `${import.meta.env.BASE_URL}assets/images/tcs.png`,
    description: 'Intensive industry internship focusing on production machine learning pipelines, predictive model evaluation, and enterprise software practices.',
    responsibilities: [
      'Engineered machine learning workflows, preprocessing structured enterprise datasets and tuning statistical feature representations.',
      'Explored model evaluation metrics, validation pipelines, and cross-functional deployment architectures.',
      'Participated in agile sprint cycles, technical design reviews, and engineering documentation ceremonies.'
    ],
    technologies: ['Machine Learning', 'Python', 'Scikit-Learn', 'Pandas', 'Enterprise Workflows', 'Git']
  },
  {
    id: 'exp-rec',
    organization: 'Rajalakshmi Engineering College',
    role: 'B.E. in Computer Science and Engineering',
    period: '2023 – 2027 (Batch)',
    location: 'Chennai, India',
    type: 'Education',
    logo: `${import.meta.env.BASE_URL}assets/images/rec.png`,
    description: 'Rigorous 4-year undergraduate curriculum in computer science theory, systems programming, and modern application development.',
    responsibilities: [
      'Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, Cloud Computing.',
      'Active developer focusing on practical project-based engineering across cross-functional student teams.',
      'Leading technical development for mobile applications, computer vision, and IoT hardware integrations.'
    ],
    technologies: ['Java', 'Python', 'C', 'Data Structures', 'Algorithms', 'DBMS', 'Computer Networks']
  },
  {
    id: 'exp-school',
    organization: 'Hayagriva Vidhyashram School',
    role: 'Higher Secondary Education (HSC)',
    period: 'Completed 2023',
    location: 'Sriperumbudur, India',
    type: 'Education',
    logo: `${import.meta.env.BASE_URL}assets/images/hvs.webp`,
    description: 'Foundational coursework in Mathematics, Physics, Chemistry, and Computer Science.',
    responsibilities: [
      'Built early programming foundations through structured problem solving and algorithmic logic.',
      'Participated in science exhibitions and school-level technology challenges.'
    ],
    technologies: ['Mathematics', 'Computer Science Fundamentals', 'C++']
  }
];

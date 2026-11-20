import { SkillItem, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  'Languages',
  'Frontend',
  'Mobile',
  'Backend',
  'Databases',
  'AI / ML',
  'Computer Vision',
  'Cloud & DevOps',
  'Tools & Platforms',
  'Design'
];

export const skills: SkillItem[] = [
  // ==========================================
  // LANGUAGES
  // ==========================================
  {
    id: 'lang-python',
    name: 'Python',
    category: 'Languages',
    icon: `${import.meta.env.BASE_URL}assets/images/python.png`,
    description: 'High-level programming language applied for artificial intelligence, computer vision pipelines, automation, and backend architectures.',
    practicalUsage: 'Used extensively in OpenCV pipelines, image recognition preprocessing, and data analysis tasks for SmartSync.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'lang-sql',
    name: 'SQL',
    category: 'Languages',
    icon: `${import.meta.env.BASE_URL}assets/images/sql.svg`,
    description: 'Declarative language for querying, designing, and optimizing relational databases with transactional integrity and index tuning.',
    practicalUsage: 'Designed normalized schemas, complex joins, and stored procedures in PostgreSQL and Supabase for student attendance records.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'lang-c',
    name: 'C',
    category: 'Languages',
    icon: `${import.meta.env.BASE_URL}assets/images/c.png`,
    description: 'Low-level systems programming language providing direct memory manipulation, hardware-level control, and embedded efficiency.',
    practicalUsage: 'Wrote firmware for ESP32 microcontrollers, SPI/I2C sensor buses, and FreeRTOS tasks in the NeoPack project.',
    relatedProjects: ['neopack']
  },
  {
    id: 'lang-java',
    name: 'Java',
    category: 'Languages',
    icon: `${import.meta.env.BASE_URL}assets/images/java.png`,
    description: 'Object-oriented language fundamental to academic computer science, data structures, and enterprise architecture.',
    practicalUsage: 'Studied enterprise design patterns, object modeling, and microservice backend architecture during Citi development training.',
    relatedProjects: []
  },
  {
    id: 'lang-kotlin',
    name: 'Kotlin',
    category: 'Languages',
    icon: `${import.meta.env.BASE_URL}assets/images/kotlin.svg`,
    description: 'Modern concise statically typed language for modern native Android engineering with coroutines and Jetpack Compose.',
    practicalUsage: 'Engineered native Android UI modules, background service workers, and biometric hardware bindings.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'lang-js',
    name: 'JavaScript / TypeScript',
    category: 'Languages',
    icon: `${import.meta.env.BASE_URL}assets/images/javascript.svg`,
    description: 'Modern ECMAScript and typed JavaScript for responsive client applications, scalable servers, and cross-platform mobile systems.',
    practicalUsage: 'Primary language for developing modern web user interfaces and cross-platform React Native mobile applications.',
    relatedProjects: ['smartsync', 'neopack']
  },

  // ==========================================
  // FRONTEND
  // ==========================================
  {
    id: 'front-react',
    name: 'React',
    category: 'Frontend',
    icon: `${import.meta.env.BASE_URL}assets/images/react.png`,
    description: 'Declarative component-driven UI library for building accessible, high-performance web applications with modular state isolation.',
    practicalUsage: 'Building single-page web applications, interactive dashboards, and design system components with modern hooks and state isolation.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'front-html5',
    name: 'HTML5',
    category: 'Frontend',
    icon: `${import.meta.env.BASE_URL}assets/images/html5.svg`,
    description: 'Semantic markup standard structuring accessible, SEO-optimized, and screen-reader compliant web documents.',
    practicalUsage: 'Structured semantic web layouts with rich media, ARIA live regions, and responsive canvas containers.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'front-tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: `${import.meta.env.BASE_URL}assets/images/tailwindcss.svg`,
    description: 'Utility-first CSS framework enabling rapid, highly maintainable, and responsive UI composition with zero design debt.',
    practicalUsage: 'Composed responsive layouts, dark/light themes, and custom animation utilities for portfolio and product dashboards.',
    relatedProjects: []
  },
  {
    id: 'front-vite',
    name: 'Vite',
    category: 'Frontend',
    icon: `${import.meta.env.BASE_URL}assets/images/vite.svg`,
    description: 'Next-generation frontend tooling offering instantaneous hot module replacement (HMR) and optimized Rollup builds.',
    practicalUsage: 'Configured lightning-fast modern bundling workflows, path aliases, environment pipelines, and static deployments.',
    relatedProjects: []
  },
  {
    id: 'front-css',
    name: 'Modern CSS & Design Systems',
    category: 'Frontend',
    icon: `${import.meta.env.BASE_URL}assets/images/css.svg`,
    description: 'Modern CSS standards including CSS Custom Properties, Flexbox, Grid, Clamp fluid typography, and micro-interactions.',
    practicalUsage: 'Crafting pixel-perfect, accessible, and responsive user interfaces with zero-clutter semantic styling and thoughtful animations.',
    relatedProjects: []
  },

  // ==========================================
  // MOBILE
  // ==========================================
  {
    id: 'mob-rn',
    name: 'React Native',
    category: 'Mobile',
    icon: `${import.meta.env.BASE_URL}assets/images/react-native.png`,
    description: 'Cross-platform mobile application framework rendering native iOS and Android interface components from a unified codebase.',
    practicalUsage: 'Developed full production-grade mobile frontends for SmartSync (camera, biometric scanning) and NeoPack (BLE communication).',
    relatedProjects: ['smartsync', 'neopack']
  },
  {
    id: 'mob-expo',
    name: 'Expo',
    category: 'Mobile',
    icon: `${import.meta.env.BASE_URL}assets/images/expo.svg`,
    description: 'Comprehensive React Native platform and ecosystem for rapid development, native sensor APIs, and seamless OTA updates.',
    practicalUsage: 'Leveraged Expo Camera, BarCodeScanner, LocalAuthentication, and SecureStore APIs for cross-platform mobile apps.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'mob-android',
    name: 'Android Development',
    category: 'Mobile',
    icon: `${import.meta.env.BASE_URL}assets/images/android.svg`,
    description: 'Native Android ecosystem engineering using Gradle builds, Android SDK services, permissions lifecycles, and device hardware APIs.',
    practicalUsage: 'Configured native Android manifests, camera permissions, background push notification handlers, and Bluetooth LE permissions.',
    relatedProjects: ['smartsync', 'neopack']
  },

  // ==========================================
  // BACKEND
  // ==========================================
  {
    id: 'back-node',
    name: 'Node.js',
    category: 'Backend',
    icon: `${import.meta.env.BASE_URL}assets/images/nodejs.png`,
    description: 'Asynchronous event-driven JavaScript runtime environment for scalable, non-blocking network services and API architectures.',
    practicalUsage: 'Implemented lightweight backend utility services, build scripts, and RESTful routing layers for project integrations.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'back-express',
    name: 'Express.js',
    category: 'Backend',
    icon: `${import.meta.env.BASE_URL}assets/images/express.svg`,
    description: 'Minimalist and flexible Node.js web application framework providing a robust suite of features for web and mobile APIs.',
    practicalUsage: 'Built RESTful routing endpoints, rate-limiting middleware, CORS configurations, and token validation layers.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'back-rest',
    name: 'REST API Development',
    category: 'Backend',
    icon: `${import.meta.env.BASE_URL}assets/images/restapi.svg`,
    description: 'Architectural pattern for designing predictable, stateless HTTP endpoints with standardized HTTP verbs, status codes, and JSON serialization.',
    practicalUsage: 'Designed and documented microservice communication contracts between mobile clients and database tiers.',
    relatedProjects: ['smartsync', 'neopack']
  },
  {
    id: 'back-socketio',
    name: 'Socket.IO',
    category: 'Backend',
    icon: `${import.meta.env.BASE_URL}assets/images/socketio.svg`,
    description: 'Bidirectional low-latency communication engine enabling event-driven real-time data streaming between client and server.',
    practicalUsage: 'Implemented instant live attendance feed push, real-time sensor status updates, and peer-to-peer room broadcasts.',
    relatedProjects: ['smartsync', 'neopack']
  },
  {
    id: 'back-prisma',
    name: 'Prisma ORM',
    category: 'Backend',
    icon: `${import.meta.env.BASE_URL}assets/images/prisma.svg`,
    description: 'Next-generation TypeScript ORM providing declarative data modeling, automated schema migrations, and type-safe query generation.',
    practicalUsage: 'Modeled database schemas with strict relation constraints and executed type-safe queries without raw SQL boilerplate.',
    relatedProjects: []
  },

  // ==========================================
  // DATABASES
  // ==========================================
  {
    id: 'db-supabase',
    name: 'Supabase (PostgreSQL)',
    category: 'Databases',
    icon: `${import.meta.env.BASE_URL}assets/images/supabase.svg`,
    description: 'Open-source Firebase alternative featuring PostgreSQL relational architecture, real-time engines, and Row-Level Security.',
    practicalUsage: 'Configured relational tables, secure role-based queries, and live subscriptions for verified classroom attendance tracking in SmartSync.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'db-firebase',
    name: 'Firebase',
    category: 'Databases',
    icon: `${import.meta.env.BASE_URL}assets/images/firebase.svg`,
    description: 'Google cloud-hosted backend platform offering NoSQL Firestore, real-time database, and device telemetry sync.',
    practicalUsage: 'Stored sensor telemetry logs, daily pack item audits, and student reminder schedules for NeoPack.',
    relatedProjects: ['neopack']
  },
  {
    id: 'db-mongodb',
    name: 'MongoDB',
    category: 'Databases',
    icon: `${import.meta.env.BASE_URL}assets/images/mongodb.svg`,
    description: 'Document-oriented NoSQL database offering flexible JSON-like BSON schemas, horizontal sharding, and aggregation pipelines.',
    practicalUsage: 'Designed dynamic schema storage for unstructured audit events, activity logs, and polymorphic sensor payloads.',
    relatedProjects: []
  },
  {
    id: 'db-redis',
    name: 'Redis',
    category: 'Databases',
    icon: `${import.meta.env.BASE_URL}assets/images/redis.svg`,
    description: 'In-memory key-value data store used as a distributed cache, message broker, and ephemeral session coordinator.',
    practicalUsage: 'Implemented high-speed caching for biometric matching tokens, rate limit counters, and temporary session tokens.',
    relatedProjects: ['smartsync']
  },

  // ==========================================
  // AI / ML
  // ==========================================
  {
    id: 'ai-ml',
    name: 'Machine Learning',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/aiml.svg`,
    description: 'Supervised and unsupervised statistical learning algorithms covering regression, classification, clustering, and model validation.',
    practicalUsage: 'Applied in predictive telemetry, pattern recognition, and data preprocessing during TCS Machine Learning internship.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-deeplearning',
    name: 'Deep Learning',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/deeplearning.svg`,
    description: 'Multi-layer artificial neural networks (CNNs, RNNs, Transformers) for high-dimensional feature extraction and representation learning.',
    practicalUsage: 'Trained and fine-tuned convolutional neural network architectures for image classification and feature encoding.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-yolov8',
    name: 'YOLOv8',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/yolo.svg`,
    description: 'State-of-the-art single-stage real-time object detection and instance segmentation architecture with exceptional inference speeds.',
    practicalUsage: 'Deployed YOLOv8 models for automated classroom headcounts, bounding box student detection, and edge inference.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-pytorch',
    name: 'PyTorch',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/pytorch.svg`,
    description: 'Dynamic computational graph deep learning framework widely used in cutting-edge computer vision and AI research.',
    practicalUsage: 'Constructed neural network layers, custom loss functions, and tensor transformation pipelines for model training.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-tensorflow',
    name: 'TensorFlow',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/tensorflow.svg`,
    description: 'End-to-end open source machine learning platform with rich support for model deployment, quantization, and TensorFlow Lite on mobile.',
    practicalUsage: 'Converted neural network weights to lightweight TFLite models for real-time mobile on-device inference.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-scikit',
    name: 'Scikit-learn',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/scikitlearn.svg`,
    description: 'Python machine learning library providing efficient tools for predictive data analysis, hyperparameter tuning, and dimensionality reduction.',
    practicalUsage: 'Trained classifiers (SVM, Random Forests), calculated evaluation metrics (ROC-AUC, F1), and ran PCA dimensionality reduction.',
    relatedProjects: []
  },
  {
    id: 'ai-numpy',
    name: 'NumPy',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/numpy.svg`,
    description: 'Fundamental package for scientific computing with Python, offering multidimensional array objects and linear algebra routines.',
    practicalUsage: 'Optimized vector and matrix arithmetic, image array reshaping, and high-performance pixel calculations.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-pandas',
    name: 'Pandas',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/pandas.svg`,
    description: 'Fast, powerful data analysis and manipulation library providing DataFrame structures for structured datasets.',
    practicalUsage: 'Aggregated, filtered, cleaned, and exported complex sensor logs and student attendance data frames.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-paddleocr',
    name: 'PaddleOCR',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/paddleocr.svg`,
    description: 'Practical ultra-lightweight OCR system supporting text detection, direction classification, and multilingual recognition.',
    practicalUsage: 'Extracted text and numeric IDs from student identity cards and attendance register sheets with high accuracy.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'ai-genai',
    name: 'GenAI & Applied Analytics',
    category: 'AI / ML',
    icon: `${import.meta.env.BASE_URL}assets/images/genai.svg`,
    description: 'Generative AI methodologies and data analysis pipelines for insights extraction, LLM prompting, and intelligent automation.',
    practicalUsage: 'Explored through Google Cloud GenAI Academy and Tata GenAI Analytics program, applied in automated telemetry interpretation.',
    relatedProjects: []
  },

  // ==========================================
  // COMPUTER VISION
  // ==========================================
  {
    id: 'cv-opencv',
    name: 'OpenCV',
    category: 'Computer Vision',
    icon: `${import.meta.env.BASE_URL}assets/images/opencv.svg`,
    description: 'Comprehensive computer vision library for image processing, feature detection, contour matching, and video stream analysis.',
    practicalUsage: 'Implemented real-time face matching, biometric verification, and classroom audience headcount tallying in SmartSync.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'cv-imageprocessing',
    name: 'Image Processing',
    category: 'Computer Vision',
    icon: `${import.meta.env.BASE_URL}assets/images/imageprocessing.svg`,
    description: 'Digital signal operations including grayscale conversion, histogram equalization, Gaussian blurring, morphological filtering, and thresholding.',
    practicalUsage: 'Preprocessed live camera frames under challenging classroom lighting conditions prior to feature recognition.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'cv-objectdetection',
    name: 'Object Detection',
    category: 'Computer Vision',
    icon: `${import.meta.env.BASE_URL}assets/images/objectdetection.svg`,
    description: 'Computer vision discipline identifying semantic objects in images and predicting localized 2D bounding boxes with class probabilities.',
    practicalUsage: 'Built multi-person bounding box tracking and identification mechanisms for automated attendance auditing.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'cv-ocr',
    name: 'OCR (Optical Character Recognition)',
    category: 'Computer Vision',
    icon: `${import.meta.env.BASE_URL}assets/images/ocr.svg`,
    description: 'Electronic conversion of images of typed, handwritten or printed text into machine-encoded characters.',
    practicalUsage: 'Digitized physical ID cards, registration roll numbers, and printed certificates directly from mobile camera feeds.',
    relatedProjects: ['smartsync']
  },

  // ==========================================
  // CLOUD & DEVOPS
  // ==========================================
  {
    id: 'cloud-gcp',
    name: 'Google Cloud Platform (GCP)',
    category: 'Cloud & DevOps',
    icon: `${import.meta.env.BASE_URL}assets/images/googlecloud.svg`,
    description: 'Suite of cloud computing services including Compute Engine, Vertex AI, Cloud Storage, and serverless Cloud Functions.',
    practicalUsage: 'Deployed generative AI models and serverless webhook pipelines during Google Cloud Gen AI Academy APAC hackathon.',
    relatedProjects: []
  },
  {
    id: 'cloud-azure',
    name: 'Microsoft Azure',
    category: 'Cloud & DevOps',
    icon: `${import.meta.env.BASE_URL}assets/images/azure.svg`,
    description: 'Enterprise cloud platform providing virtual computing, App Services, Blob storage, and AI cognitive services.',
    practicalUsage: 'Configured cloud app hosting, container registries, and scalable backend microservices.',
    relatedProjects: []
  },
  {
    id: 'cloud-docker',
    name: 'Docker',
    category: 'Cloud & DevOps',
    icon: `${import.meta.env.BASE_URL}assets/images/docker.svg`,
    description: 'Containerization engine packaging applications and dependencies into standardized lightweight containers for reproducible execution.',
    practicalUsage: 'Created Dockerfiles and docker-compose configurations for isolated Python OpenCV servers and backend microservices.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'cloud-cicd',
    name: 'CI / CD Pipelines',
    category: 'Cloud & DevOps',
    icon: `${import.meta.env.BASE_URL}assets/images/cicd.svg`,
    description: 'Automated continuous integration and deployment workflows enforcing automated test suites, linting, and build validation.',
    practicalUsage: 'Automated pull-request verification, TypeScript type-checking, and zero-downtime hosting deployments.',
    relatedProjects: []
  },

  // ==========================================
  // TOOLS & PLATFORMS
  // ==========================================
  {
    id: 'tool-git',
    name: 'Git & GitHub',
    category: 'Tools & Platforms',
    icon: `${import.meta.env.BASE_URL}assets/images/git.png`,
    description: 'Distributed version control system for atomic commits, branching strategies, and collaborative code reviews.',
    practicalUsage: 'Standard tool for all repository management, branching strategies, and open-source portfolio publishing.',
    relatedProjects: ['smartsync', 'neopack']
  },
  {
    id: 'tool-actions',
    name: 'GitHub Actions',
    category: 'Tools & Platforms',
    icon: `${import.meta.env.BASE_URL}assets/images/githubactions.svg`,
    description: 'CI/CD and workflow automation platform running test runners, build pipelines, and automated artifact publishing.',
    practicalUsage: 'Crafted automated GitHub Actions workflows for continuous build testing and automated GitHub Pages deployment.',
    relatedProjects: []
  },
  {
    id: 'tool-postman',
    name: 'Postman',
    category: 'Tools & Platforms',
    icon: `${import.meta.env.BASE_URL}assets/images/postman.svg`,
    description: 'API testing platform for crafting HTTP requests, mocking endpoints, creating automated test suites, and sharing OpenAPI specs.',
    practicalUsage: 'Tested, documented, and validated REST API schemas, headers, authentication tokens, and JSON response bodies.',
    relatedProjects: ['smartsync']
  },
  {
    id: 'tool-vscode',
    name: 'VS Code',
    category: 'Tools & Platforms',
    icon: `${import.meta.env.BASE_URL}assets/images/vscode.svg`,
    description: 'High-performance extensible code editor with integrated terminal, debugging protocol, and language server support.',
    practicalUsage: 'Primary daily IDE configured with ESLint, Prettier, debugger launch targets, and Git lens integration.',
    relatedProjects: []
  },
  {
    id: 'tool-linux',
    name: 'Linux',
    category: 'Tools & Platforms',
    icon: `${import.meta.env.BASE_URL}assets/images/linux.svg`,
    description: 'Unix-like operating system kernel offering powerful shell environments, process management, and server administration.',
    practicalUsage: 'Configured headless Ubuntu environments, bash shell automation scripts, systemd service units, and package management.',
    relatedProjects: []
  },
  {
    id: 'tool-iot',
    name: 'IoT Hardware (ESP32, BLE, NFC)',
    category: 'Tools & Platforms',
    icon: `${import.meta.env.BASE_URL}assets/images/iot.svg`,
    description: 'Hardware prototyping ecosystem covering microcontrollers, wireless communication protocols, and sensor integration.',
    practicalUsage: 'Assembled and integrated physical hardware circuits, load cell amplifiers, NFC reader modules, and BLE transmitters.',
    relatedProjects: ['neopack']
  },

  // ==========================================
  // DESIGN
  // ==========================================
  {
    id: 'des-uiux',
    name: 'UI/UX Design',
    category: 'Design',
    icon: `${import.meta.env.BASE_URL}assets/images/uiux.svg`,
    description: 'User-centered design discipline focusing on wireframing, information architecture, visual hierarchy, and usability testing.',
    practicalUsage: 'Mapped intuitive user flows, interaction states, and accessibility affordances for SmartSync and NeoPack.',
    relatedProjects: ['smartsync', 'neopack']
  },
  {
    id: 'des-responsive',
    name: 'Responsive Web Design',
    category: 'Design',
    icon: `${import.meta.env.BASE_URL}assets/images/responsiveweb.svg`,
    description: 'Designing fluid, adaptable web layouts that deliver optimal viewing and interaction across desktop, tablet, and mobile screens.',
    practicalUsage: 'Built fluid CSS Grid and Flexbox layouts with dynamic clamping, fluid typography, and mobile-friendly touch targets.',
    relatedProjects: []
  },
  {
    id: 'tool-figma',
    name: 'Figma',
    category: 'Design',
    icon: `${import.meta.env.BASE_URL}assets/images/figma.png`,
    description: 'Collaborative interface design tool for high-fidelity wireframing, component design systems, and ergonomic UI prototyping.',
    practicalUsage: 'Designed end-to-end interface mockups, design tokens, and user flow blueprints for mobile and web applications.',
    relatedProjects: ['smartsync', 'neopack']
  }
];

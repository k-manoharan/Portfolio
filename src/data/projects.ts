import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'parkit',
    title: 'ParkIt — Computer Vision-Integrated Smart Parking Management System',
    tagline: 'AI-powered vehicle recognition, intelligent parking allocation, and automated parking management',
    category: 'Computer Vision & Intelligent Automation',
    year: 2025,
    featured: true,
    overview: 'ParkIt is a computer vision-integrated smart parking platform designed to automate vehicle entry, parking slot allocation, occupancy monitoring, and exit management. It combines real-time video analysis, vehicle number plate recognition, and intelligent backend processing to streamline parking operations across facilities such as shopping malls, hospitals, educational institutions, IT parks, and commercial complexes.',
    problem: 'Conventional parking facilities rely heavily on manual ticketing, slow boom-barrier bottlenecks, and physical patrolling to determine spot availability. This creates extensive queueing at facility perimeters, manual data entry errors, lost parking tickets, and inefficient slot utilization across multi-level structures.',
    solution: 'Engineered an automated end-to-end vision-powered parking platform: RTSP camera feeds capture incoming vehicles, applying YOLOv8 models for real-time vehicle detection and PaddleOCR for automated number plate recognition (ANPR). Backend services allocate available slots dynamically, stream status updates over Socket.IO and Redis, and record full entry/exit lifecycles in PostgreSQL.',
    architecture: [
      'Visual Input Tier: RTSP camera video streams monitoring facility entry portals, drive aisles, and designated parking zones',
      'Vision & AI Pipeline: Python microservices using YOLOv8 for vehicle localization and PaddleOCR for Automatic Number Plate Recognition (ANPR)',
      'Backend Services: Node.js & Express.js REST APIs with Prisma ORM orchestrating entry verification, session state, and slot allocation rules',
      'Real-Time Messaging: Socket.IO and Redis Pub/Sub broadcasting instant occupancy updates and entry alerts to connected clients',
      'Data Layer: PostgreSQL storing vehicle registrations, timestamped entry/exit logs, slot occupancy topologies, and audit records',
      'Client Interfaces: Administrative web dashboard built with React.js & TypeScript, paired with a React Native & Expo mobile application'
    ],
    keyFeatures: [
      'Vehicle Entry and Identification: Automated vehicle detection and entry authorization from camera video streams',
      'Computer Vision-Based Vehicle Detection: Real-time inference identifying vehicle presence and vehicle classification',
      'Automatic Number Plate Recognition (ANPR): High-accuracy plate text extraction using PaddleOCR without dedicated sensors',
      'Intelligent Parking Slot Allocation: Rule-based engine routing vehicles to optimal available bays based on facility topology',
      'Parking Occupancy Monitoring: Camera-based visual inspection tracking occupied and vacant slots across designated regions',
      'Vehicle Exit Management: Timestamp verification, duration calculation, and automated exit log reconciliation',
      'Real-Time System Updates: Instant bi-directional state synchronization via Socket.IO and Redis messaging',
      'Administrative Dashboard: Web management portal for real-time occupancy heatmaps, log inspection, and override controls',
      'Mobile Application: Cross-platform React Native client for user parking discovery and slot status visibility'
    ],
    implementation: [
      'Configured Python vision service connecting to RTSP video streams with OpenCV for frame pre-processing and region-of-interest extraction.',
      'Trained and integrated YOLOv8 models for vehicle bounding-box detection across varying lighting and camera angles.',
      'Implemented PaddleOCR pipeline with character filtering and pattern normalization for robust number plate string extraction.',
      'Developed Node.js and Express backend services using Prisma ORM to maintain strict relational data integrity in PostgreSQL.',
      'Integrated Socket.IO and Redis Pub/Sub to deliver live entry events and slot status updates with sub-second propagation.',
      'Built responsive React administrative UI with live visual slot status indicators and searchable audit logs.'
    ],
    contributions: [
      'Architected system topology integrating camera video streams, Python vision inference, and Node.js backend services.',
      'Developed the ANPR and vehicle detection pipeline utilizing YOLOv8 and PaddleOCR with OpenCV.',
      'Engineered backend REST APIs, Prisma database models, and real-time Socket.IO event dispatchers.',
      'Constructed the administrative management dashboard interface using React and TypeScript.',
      'Implemented real-time Redis messaging bridge linking Python vision events with frontend subscriber clients.'
    ],
    technologies: [
      'Python',
      'OpenCV',
      'YOLOv8',
      'PaddleOCR',
      'PyTorch',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma ORM',
      'Redis',
      'Socket.IO',
      'React',
      'TypeScript',
      'React Native',
      'Expo'
    ],
    image: `${import.meta.env.BASE_URL}assets/images/parkit-logo.png`,
    logo: `${import.meta.env.BASE_URL}assets/images/parkit-logo.png`,
    links: {
      github: 'https://github.com/k-manoharan',
      demo: undefined
    }
  },
  {
    id: 'smartclaim',
    title: 'SmartClaim — Automated Insurance Claim Processor',
    tagline: 'Digital claim ingestion and rule-based verification pipeline for accelerated settlement',
    category: 'Enterprise Full-Stack & Workflow Automation',
    year: 2025,
    featured: false,
    overview: 'SmartClaim streamlines medical and vehicle insurance claim filing through automated document parsing, policy validation rules, and an end-to-end adjudicator dashboard.',
    problem: 'Manual insurance claim processing suffers from multi-week turnaround times, human data entry error rates, and paper-heavy verification bottlenecks that frustrate policyholders while increasing operational costs for carriers.',
    solution: 'Developed an automated claim processing portal where policyholders submit incident reports and invoices digitally. A rules engine validates policy eligibility, flags anomalies, and routes verified claims to underwriters for one-click approval.',
    architecture: [
      'Client: React single-page application with responsive multi-step claim submission wizards',
      'API Layer: RESTful backend validating policy coverage terms and processing claim submissions',
      'Data Layer: Relational database tracking claim lifecycle stages, evidence attachments, and audit trails',
      'Audit System: Cryptographic timestamping and immutable status logging for regulatory compliance',
      'Validation Pipeline: Microservice checking submitted line items against policy limit tables and copay matrices',
      'Notification Dispatcher: Asynchronous webhook queue triggering SMS/Email status updates on state changes'
    ],
    keyFeatures: [
      'Guided multi-step claim filing with live validation of required supporting documents',
      'Automated policy limit verification and deductible calculations in sub-second execution',
      'Adjudicator dashboard with risk flags, policy history, document side-by-side viewer, and instant decision tools',
      'Real-time status tracking portal for policyholders with automated notification triggers and milestone timelines',
      'Comprehensive audit trails logging every status modification, timestamp, and review note',
      'Automated fraud indicator scoring: flags duplicate invoices and inconsistent incident timestamps',
      'Exportable compliance reports formatted for insurance regulatory compliance and internal audit reviews'
    ],
    implementation: [
      'Crafted intuitive, accessible forms with file upload drag-and-drop, format validation, and image previews.',
      'Built backend validation rules checking claim parameters against policy threshold tables with zero false negatives.',
      'Created granular role-based access control separating policyholder and claims officer permissions.',
      'Implemented optimistic UI updates ensuring responsive user feedback during state changes and approvals.',
      'Optimized database queries with compound indexing to deliver sub-100ms dashboard load times.'
    ],
    contributions: [
      'Designed the clean, professional user interface and administrative dashboard wireframes.',
      'Engineered the client-side state machine handling complex conditional form logic and validation.',
      'Built REST API endpoints for claim submission, file storage, and status reviews with Express.js.',
      'Designed database schemas with strict foreign key constraints and transactional integrity guarantees.',
      'Conducted end-to-end user testing to optimize form completion times and minimize drop-off rates.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'Figma'],
    image: `${import.meta.env.BASE_URL}assets/images/smartclaim-logo.jpg`,
    logo: `${import.meta.env.BASE_URL}assets/images/smartclaim-logo.jpg`,
    links: {
      github: 'https://github.com/k-manoharan',
      demo: undefined
    }
  },
  {
    id: 'cloudfm',
    title: 'CloudFM — Smart Cloud File Manager',
    tagline: 'High-performance cloud storage client with chunked multi-part uploads and granular permissions',
    category: 'Cloud Engineering & Web Systems',
    year: 2025,
    featured: false,
    overview: 'CloudFM is a modern, responsive cloud file management platform built for seamless digital asset organization, secure file transfers, and collaborative access control.',
    problem: 'Many standard file storage interfaces are bloated, sluggish on large file directories, or lock users into proprietary ecosystems without transparent metadata insights or fine-grained programmatic sharing.',
    solution: 'Built a lightweight, ultra-responsive web file manager featuring resilient chunked uploads, instant search filtering, breadcrumb navigation, and secure presigned URL asset sharing.',
    architecture: [
      'Frontend: React + TypeScript client with virtualized directory lists for rendering thousands of assets',
      'Storage Tier: Cloud object storage integration with client-direct presigned URL upload capabilities',
      'Metadata Service: Database storing file taxonomies, mime-types, tags, and permission hierarchies',
      'Caching: Client-side cache minimizing redundant network roundtrips during folder navigation',
      'Worker Thread: Dedicated Web Worker handling client-side binary hashing (MD5/SHA-256) for deduplication',
      'Access Control: JWT auth layer with expiring cryptographic tokens for fine-grained sharing links'
    ],
    keyFeatures: [
      'Resilient chunked upload manager with pause, resume, and retry capabilities for multi-gigabyte files',
      'Instant client-side filename and tag search with zero perceived latency using in-memory trie indexes',
      'Multi-format file previewer for images, code files, and PDFs directly in-browser without external software',
      'Granular link sharing with expiration dates, download counters, and optional password barriers',
      'Keyboard-first navigation shortcuts for rapid file management (rename, move, delete, inspect)',
      'Batch file operations: multi-select files for bulk compression, tagging, download, and deletion',
      'Storage analytics visualizer: interactive disk breakdown by file type, age, and folder allocation'
    ],
    implementation: [
      'Implemented virtualized list view ensuring 60fps scrolling even across 10,000+ files per folder.',
      'Engineered chunked file upload pipeline utilizing web workers to keep UI thread unblocked during hashing.',
      'Constructed intuitive breadcrumb navigation and nested folder tree structure with instant drag-and-drop.',
      'Created dark/light responsive layout matching enterprise storage utility benchmarks.',
      'Implemented offline cache with IndexedDB allowing browse-only mode during network interruptions.'
    ],
    contributions: [
      'Developed the complete frontend architecture and virtualized file tree component.',
      'Integrated cloud object storage presigned upload protocols and multi-part upload coordinators.',
      'Designed the asset preview modal and file detail metadata inspector with dark-mode aesthetic.',
      'Engineered the search debounce and caching mechanism for instantaneous directory traversal.',
      'Authored automated unit tests validating file chunk reconstruction and checksum integrity.'
    ],
    technologies: ['React', 'TypeScript', 'Cloud Object Storage', 'Web Workers', 'Node.js', 'REST API'],
    image: `${import.meta.env.BASE_URL}assets/images/cloudfm-logo.png`,
    logo: `${import.meta.env.BASE_URL}assets/images/cloudfm-logo.png`,
    links: {
      github: 'https://github.com/k-manoharan',
      demo: undefined
    }
  },
  {
    id: 'chronoclass',
    title: 'ChronoClass — Smart Timetable Management App',
    tagline: 'Algorithmic conflict-free class scheduling and mobile student calendar synchronizer',
    category: 'Mobile Applications & Algorithmic Systems',
    year: 2025,
    featured: false,
    overview: 'ChronoClass eliminates scheduling conflicts in university departments through an automated timetable generator and a reactive mobile companion for students and faculty.',
    problem: 'Academic scheduling across hundreds of faculty members, diverse elective tracks, and limited laboratory spaces often results in overlapping rooms, double-booked professors, and chaotic semester transitions.',
    solution: 'Designed a constraint-satisfaction scheduling engine that models room capacities, faculty availability, and student batches, paired with a companion app that delivers personalized daily timetables and room change alerts.',
    architecture: [
      'Mobile App: React Native client featuring daily timeline agendas and offline timetable storage',
      'Scheduler Engine: Constraint solver algorithm running in Python to generate optimal conflict-free grids',
      'Sync Backend: Real-time database pushing schedule amendments and classroom changes instantly',
      'Calendar Bridge: Native calendar sync export generating standard .ics calendar subscriptions',
      'Notification Gateway: Firebase Cloud Messaging dispatching localized room change push notifications',
      'Offline Layer: SQLite mobile database caching student timetables and room assignments locally'
    ],
    keyFeatures: [
      'Constraint-based automatic conflict detection across faculty, courses, venues, and student cohorts',
      'Personalized mobile view highlighting current and upcoming lecture locations with countdown timers',
      'Instant push notifications when an instructor reschedules, cancels, or relocates a class',
      'Offline-first architecture ensuring schedule availability without requiring an active cellular connection',
      'Native calendar export allowing seamless two-way sync with Google Calendar, Apple Calendar, and Outlook',
      'Interactive room finder: shows available empty classrooms and laboratories during free study hours',
      'Faculty portal: intuitive mobile reschedule requests with automatic substitute conflict validation'
    ],
    implementation: [
      'Authored conflict detection rules modeling elective splits and shared laboratory resources with backtracking.',
      'Built clean daily timeline view with active class indicator, classroom location pins, and countdown badges.',
      'Implemented local SQLite storage on mobile for instantaneous offline startup with zero flicker.',
      'Created faculty dashboard for quick cancellation or venue reassignment with real-time student push.',
      'Engineered timezone-aware recurrent event generator handling odd/even semester week schedules.'
    ],
    contributions: [
      'Designed mobile user interface, interaction tokens, and daily calendar agenda component.',
      'Integrated offline synchronization logic with local device storage and remote real-time subscriptions.',
      'Contributed to constraint validation models for elective course allocations and lab batching.',
      'Implemented push notification orchestration for instantaneous schedule change alerts.',
      'Conducted usability testing across diverse student cohorts to refine navigation ergonomics.'
    ],
    technologies: ['React Native', 'TypeScript', 'Python', 'SQLite', 'Firebase', 'Mobile UI'],
    image: `${import.meta.env.BASE_URL}assets/images/chronoclass-logo.png`,
    logo: `${import.meta.env.BASE_URL}assets/images/chronoclass-logo.png`,
    links: {
      github: 'https://github.com/k-manoharan',
      demo: undefined
    }
  },
  {
    id: 'smartsync',
    title: 'Smart-Sync Attendance System',
    tagline: 'Multi-modal verification attendance platform powered by computer vision & mobile client',
    category: 'Computer Vision & Mobile Systems',
    year: 2024,
    featured: false,
    overview: 'Smart-Sync eliminates attendance fraud and classroom administrative overhead through a synchronized, multi-layered verification protocol combining dynamic QR tokens, local IP subnet validation, and computer vision face matching.',
    problem: 'Traditional attendance tracking in higher education institutions suffers from proxy attendance, deliberate manual logging delays, and lost instructional time. Standard digital QR methods can be trivially spoofed via photo forwarding across remote locations.',
    solution: 'Engineered a secure 4-factor attendance verification pipeline: timed rotational QR codes with ephemeral secrets, local WiFi subnet/IP gateway validation, OpenCV-driven face match against enrollment embeddings, and automated video headcount auditing to prevent discrepancy between scans and physical bodies.',
    architecture: [
      'Client: React Native mobile application for student check-in & instructor controls',
      'Vision Engine: Python + OpenCV microservice running face detection and headcount tracking',
      'Data Layer: Supabase (PostgreSQL) with Row-Level Security for cryptographic session records',
      'Networking: Ephemeral session handshake tied to institution wireless router subnets',
      'Embedding Storage: High-dimensional vector tables storing 128-d face landmark embeddings',
      'Telemetry Sync: Real-time Supabase subscriptions streaming verification results to faculty screens'
    ],
    keyFeatures: [
      'Dynamic QR scanning with 15-second expiring cryptographically signed tokens to stop photo forwarding',
      'IP address & subnet gating preventing scans from outside designated lecture halls and campus zones',
      'OpenCV-powered facial recognition verification matching live student face against enrolled embeddings',
      'Continuous video-based aggregate headcount cross-validation comparing room heads vs. recorded scans',
      'Real-time instructor dashboard displaying real-time audit trail and attendance telemetry',
      'Liveness detection: verifies blinks and head motion to prevent static photo spoofing attacks',
      'Automated compliance reporting: generates instant PDF and CSV attendance rosters for academic records'
    ],
    implementation: [
      'Built cross-platform student client in React Native with smooth camera scanning workflows and visual cues.',
      'Developed OpenCV Python module for Haar cascade / deep facial feature vector verification.',
      'Constructed relational database schema in Supabase with RLS rules protecting student identity and biometrics.',
      'Implemented robust offline fallback cache to handle temporary network dropouts during lectures.',
      'Engineered encryption layer for on-device landmark vector extraction prior to server transmission.'
    ],
    contributions: [
      'Designed end-to-end system architecture, security handshake, and relational data models.',
      'Built the entire React Native mobile interface and scan orchestration pipeline.',
      'Integrated backend API communication with Supabase and real-time event subscriptions.',
      'Tuned computer vision pipeline for optimal balance between accuracy and mobile inference latency.',
      'Deployed on-premise local gateway server to facilitate low-latency subnet verification.'
    ],
    technologies: ['React Native', 'Python', 'OpenCV', 'Supabase', 'PostgreSQL', 'JavaScript', 'REST API'],
    image: `${import.meta.env.BASE_URL}assets/images/smartsync-logo.svg`,
    logo: `${import.meta.env.BASE_URL}assets/images/smartsync-logo.svg`,
    links: {
      github: 'https://github.com/k-manoharan',
      demo: undefined
    }
  },
  {
    id: 'neopack',
    title: 'NeoPack – Smart IoT Backpack',
    tagline: 'Embedded IoT sensor hub with mobile companion for automated physical gear tracking',
    category: 'Embedded IoT & Mobile Applications',
    year: 2024,
    featured: false,
    overview: 'NeoPack transforms everyday student backpacks into proactive smart gear using an embedded microcontroller, load sensing arrays, NFC book tagging, and tactile haptic alerts linked to class timetables.',
    problem: 'Students frequently forget vital textbooks, lab notebooks, or expensive hardware devices, while simultaneously suffering chronic posture fatigue from unmonitored over-packing and uneven bag weight distribution.',
    solution: 'Designed an integrated embedded platform utilizing an ESP32 microcontroller, load cells for continuous weight distribution monitoring, high-frequency NFC tags for individual textbook identification, and a Bluetooth Low Energy (BLE) link to a React Native companion mobile app that cross-references daily schedule requirements before the user leaves home.',
    architecture: [
      'Hardware Core: ESP32 dual-core microcontroller with low-power deep sleep modes',
      'Sensor Bus: HX711 load cell amplifiers for weight analysis + PN532 NFC reader module over I2C',
      'Actuator: Vibration motor driver providing non-visual immediate tactile feedback',
      'Mobile Client: React Native app with BLE bridge, schedule sync, and Firebase sync',
      'Power Management: LiPo battery charging module with voltage monitoring telemetry',
      'Cloud Synchronization: Real-time Firebase database logging daily gear audit trails and compliance'
    ],
    keyFeatures: [
      'Instant inventory scanning: detects present books vs. expected daily timetable items in milliseconds',
      'Haptic warning buzzers triggered when required items are missing prior to departure from home',
      'Dynamic weight & ergonomic balance monitoring to alert on unhealthy pack loads and posture risks',
      'Real-time Bluetooth Low Energy sync with mobile companion dashboard and live telemetry graph',
      'Cloud telemetry logging daily compliance and schedule adherence in Firebase for habit tracking',
      'Smart power management: bag enters ultra-low power standby until motion or NFC activity is sensed',
      'Custom item pairing: easily register new notebooks, chargers, or lab tools via mobile NFC scan'
    ],
    implementation: [
      'Programmed ESP32 firmware in Embedded C / C++ utilizing FreeRTOS tasks for simultaneous sensor reading.',
      'Created custom BLE GATT service and characteristic protocol for responsive bidirectional communication.',
      'Developed React Native user interface for schedule configuration, item pairing, and weight telemetry graphs.',
      'Implemented power optimization routines allowing battery operation over weeks on a single charge.',
      'Engineered calibration script for HX711 dual-load-cell bridge to ensure sub-10g weight accuracy.'
    ],
    contributions: [
      'Designed the full circuit diagram, sensor mounting layout, and hardware component selection.',
      'Authored the Embedded C firmware for NFC interrogation and load cell calibration routines.',
      'Engineered the React Native companion app and BLE connection management layer.',
      'Conducted field reliability testing and battery discharge profiling across multiple weeks.',
      'Fabricated the ergonomic physical sensor enclosure prototype using 3D-printed housing.'
    ],
    technologies: ['Embedded C', 'ESP32', 'React Native', 'IoT', 'NFC', 'HX711 Sensors', 'Firebase'],
    image: `${import.meta.env.BASE_URL}assets/images/neopulse-logo.jpg`,
    logo: `${import.meta.env.BASE_URL}assets/images/neopulse-logo.jpg`,
    links: {
      github: 'https://github.com/k-manoharan',
      demo: undefined
    }
  }
];

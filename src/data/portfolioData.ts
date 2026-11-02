export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  period: string;
  category: 'QA Automation' | 'Manual QA' | 'UI/UX Design' | 'System Analysis';
  image?: string;
  gallery?: string[];
  description: string;
  points: string[];
  tags: string[];
  accentColor: string;
  badgeBg: string;
  sketchNote: string;
  links?: {
    github?: string;
    demo?: string;
    figma?: string;
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface OrganizationItem {
  name: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface JournalNote {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  note: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const personalData = {
  name: "Diyah Ramadhani Putri",
  title: "Quality Assurance (QA) Engineer | UI/UX Designer | System Analyst",
  location: "Malang, Jawa Timur, Indonesia",
  contact: {
    email: "diyahrp10@gmail.com",
    phone: "+62 856-2470-4748",
    whatsapp: "https://wa.me/6285624704748",
    linkedin: "https://linkedin.com/in/diyah-ramadhani-putri-428305327",
    github: "https://github.com/dyhptri"
  },
  about: "Mahasiswa D4 Sistem Informasi Bisnis di Politeknik Negeri Malang dengan keahlian utama dalam Software Quality Assurance (QA), UI/UX Design, dan System Analysis. Berpengalaman dalam pengujian perangkat lunak terotomatisasi (E2E Cypress) maupun manual functional testing, didukung kemampuan perancangan antarmuka berbasis Figma dan dokumentasi teknis SKPL/UML.",
  education: [
    {
      institution: "Politeknik Negeri Malang",
      degree: "D4 Sistem Informasi Bisnis - Jurusan Teknologi Informasi",
      period: "2024 – Sekarang",
      score: "IPK 3.78 / 4.00"
    },
    {
      institution: "SMA Negeri 1 Purwosari",
      degree: "Ilmu Pengetahuan Alam (IPA)",
      period: "2021 – 2024",
      score: "Lulus"
    }
  ] as EducationItem[],
  skillCategories: [
    {
      name: "Software Quality Assurance",
      skills: ["Cypress (E2E)", "Manual Testing", "Black-box Testing", "Test Case Design", "Bug Lifecycle & Reporting", "UAT", "System Usability Scale (SUS)"]
    },
    {
      name: "Design & System Analysis",
      skills: ["UI/UX Design (Figma)", "Wireframing", "Design Systems", "UML Modeling", "SRS / SKPL Specification", "RBAC"]
    },
    {
      name: "Development & Database",
      skills: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript", "PHP", "SQL / MySQL", "PostgreSQL", "Supabase", "Laravel", "Flutter"]
    },
    {
      name: "Tools & Collaboration",
      skills: ["Git", "GitHub", "Figma", "Cypress", "Google Workspace", "VS Code"]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "sorai",
      title: "SORAI",
      subtitle: "Web-Based B2B Supply Chain Partnership Portal",
      role: "QA Automation Tester & UI/UX Designer",
      period: "Sep 2026 – Sekarang",
      category: "QA Automation",
      image: "/images/projects/sorai-1.png",
      description: "Platform portal kemitraan pengadaan komoditas pangan antara UMKM kuliner dan supplier bahan baku pangan dengan validasi susut timbangan dan otomasi Cypress E2E.",
      points: [
        "Mengembangkan dan mengeksekusi automated test E2E menggunakan Cypress untuk skenario pengadaan berkala, fulfillment rate, dan susut timbangan.",
        "Merancang test case menyeluruh serta tracking bug berkala untuk menjamin reliabilitas payment gateway.",
        "Mendesain arsitektur UI/UX di Figma untuk fitur Collaborative Supply Planning (CSP), etalase pangan, dan dashboard kemitraan B2B.",
        "Menyusun dokumen teknis SKPL lengkap dengan pemodelan use case dan activity diagram."
      ],
      tags: ["Cypress", "E2E Testing", "Figma", "UI/UX", "SKPL", "Supabase", "Tailwind CSS"],
      accentColor: "#F6C945",
      badgeBg: "#FBE9A6",
      sketchNote: "Cypress E2E suites: 100% critical path coverage!"
    },
    {
      id: "buildmatch",
      title: "BuildMatch",
      subtitle: "Platform Marketplace Jasa Arsitek & Kontraktor",
      period: "Mar 2026 – Jun 2026",
      category: "Manual QA",
      image: "/images/projects/buildmatch-1.jpg",
      description: "Platform digital lelang proyek konstruksi transparan yang menghubungkan klien, arsitek, dan kontraktor dengan sistem escrow terverifikasi, tracking milestone, dan chat real-time.",
      points: [
        "Mengeksekusi Black-box Manual Testing pada form pengajuan penawaran tender dan alur termin pembayaran proyek.",
        "Menjalankan exploratory & usability testing aplikasi mobile multi-role guna menemukan anomali navigasi dan validasi data.",
        "Merancang antarmuka mobile application di Figma untuk 3 role pengguna (Klien, Arsitek, Kontraktor).",
        "Menyusun dokumen spesifikasi kebutuhan perangkat lunak (SRS) dilengkapi matriks Role-Based Access Control (RBAC)."
      ],
      tags: ["Manual QA", "Black-box Testing", "Figma", "Mobile UI/UX", "SRS/SKPL", "RBAC"],
      accentColor: "#F07A3C",
      badgeBg: "#FBE9A6",
      sketchNote: "30+ mobile screens in Figma + multi-role RBAC matrix!"
    },
    {
      id: "inlet-polinema",
      title: "Lab InLET Polinema",
      subtitle: "Website Profil & Sistem Absensi Terintegrasi Laboratorium",
      period: "Okt 2025 – Des 2025",
      category: "System Analysis",
      image: "/images/projects/inlet-2.jpg",
      gallery: [
        "/images/projects/inlet-2.jpg",
        "/images/projects/inlet-1.jpg"
      ],
      description: "Sistem informasi manajemen kehadiran riset laboratorium terintegrasi dengan portal publikasi profil riset resmi Information and Learning Engineering Technology (InLET) Polinema.",
      points: [
        "Memimpin User Acceptance Testing (UAT) dan pengujian fungsional modul absensi digital serta verifikasi kehadiran real-time.",
        "Merancang antarmuka UI/UX responsif di Figma untuk portal publik profil riset laboratorium, direktori peneliti, dan modul Content Management System (CMS).",
        "Menyusun analisis teknis sistem mencakup perancangan basis data relasional serta use case dan activity diagram.",
        "Mempresentasikan demo prototipe sistem dan alur interaksi kepada dosen pembimbing dan pemangku kepentingan laboratorium."
      ],
      tags: ["UAT Testing", "System Analysis", "UML", "Figma", "Database Design"],
      accentColor: "#35B47C",
      badgeBg: "#CDEBDD",
      sketchNote: "UAT sign-off with 98.5% positive feedback from faculty & researchers!"
    }
  ] as ProjectItem[],
  organizations: [
    {
      name: "Himpunan Mahasiswa Teknologi Informasi (HMTI) Polinema",
      role: "Koordinator Kesekretariatan & Bendahara Pelaksana Dies Natalis",
      period: "2024 – 2025",
      highlights: [
        "Mengelola tata kelola persuratan resmi, perizinan internal/eksternal, dan digitalisasi arsip program kerja jurusan.",
        "Mengelola arus kas, Rencana Anggaran Biaya (RAB), serta menyusun LPJ keuangan akuntabel berstatus Zero Deficit pada Dies Natalis HMTI 2025.",
        "Menginisiasi program kerja penguatan internal organisasi untuk meningkatkan kolaborasi tim lintas departemen."
      ]
    },
    {
      name: "Prastudi Mahasiswa Baru Jurusan TI Polinema",
      role: "Panitia Pendamping Kelompok (Student Mentor)",
      period: "Agustus 2025",
      highlights: [
        "Mendampingi puluhan mahasiswa baru dalam masa orientasi pengenalan kultur akademik dan kepatuhan SOP jurusan."
      ]
    }
  ] as OrganizationItem[],
  services: [
    {
      id: "e2e-automation",
      title: "Automated QA & Cypress",
      description: "Merancang dan mengeksekusi automated test E2E menggunakan Cypress untuk alur transaksi kritikal, validasi formula, dan payment gateway.",
      timeline: "1 to 3 weeks",
      price: "Available for Project / Internship",
      features: [
        "End-to-End Cypress test script suite",
        "Validasi alur payment & data integrity",
        "Dokumentasi skenario & test execution report"
      ],
      accentColor: "#F6C945"
    },
    {
      id: "manual-testing",
      title: "Manual & Black-Box QA",
      description: "Pengujian fungsional sistematis menggunakan Equivalence Partitioning dan Boundary Value Analysis untuk mendeteksi defect sebelum rilis.",
      timeline: "1 to 2 weeks",
      price: "Available for Project / Internship",
      features: [
        "Test Case & Test Matrix design",
        "Exploratory & usability bug hunting",
        "Laporan defect terstruktur dengan reproduksi langkah"
      ],
      accentColor: "#F07A3C"
    },
    {
      id: "uiux-design",
      title: "UI/UX Design in Figma",
      description: "Merancang antarmuka web dan mobile application yang intuitif, konsisten, dan siap diimplementasikan oleh tim developer.",
      timeline: "2 to 4 weeks",
      price: "Available for Project / Internship",
      features: [
        "High-fidelity responsive UI mockups",
        "Scalable component library & auto-layout",
        "Interactive click-through prototype"
      ],
      accentColor: "#F2679B"
    },
    {
      id: "system-analysis",
      title: "System Analysis & SRS/UML",
      description: "Menganalisis kebutuhan bisnis dan menerjemahkannya ke dalam dokumen teknis formal (SKPL/SRS) dan diagram arsitektur UML.",
      timeline: "1 to 2 weeks",
      price: "Available for Project / Internship",
      features: [
        "Dokumentasi Spesifikasi Kebutuhan Perangkat Lunak (SKPL)",
        "Diagram Use Case, Activity, & Sequence UML",
        "Matriks hak akses Role-Based Access Control (RBAC)"
      ],
      accentColor: "#35B47C"
    }
  ],
  pricingTiers: [
    {
      id: "qa-audit",
      name: "QA Testing Sprint",
      price: "Sprint Based",
      scope: "Manual Black-Box & Regression Audit",
      summary: "Ideal untuk memvalidasi MVP atau fitur baru sebelum peluncuran resmi.",
      timeline: "1 to 2 weeks",
      features: [
        "Test Scenario & Test Matrix lengkap",
        "Black-box & Exploratory testing pass",
        "Bug reports dengan langkah reproduksi detail",
        "Usability feedback & edge-case verification"
      ],
      ctaText: "Mulai QA Sprint",
      accentColor: "#F07A3C"
    },
    {
      id: "full-role",
      name: "Internship / Full Role",
      price: "Full Commitment",
      scope: "QA Engineer / UI/UX Designer",
      summary: "Dedikasi penuh untuk bergabung dengan tim engineering dan produk Anda.",
      timeline: "3 to 6+ months",
      popular: true,
      features: [
        "Full-time / Part-time internship commitment",
        "Automated E2E testing (Cypress)",
        "Desain sistem dan prototyping Figma",
        "Dokumentasi analisis sistem & kolaborasi tim"
      ],
      ctaText: "Rekrut Diyah",
      accentColor: "#F6C945"
    },
    {
      id: "blueprint",
      name: "System Blueprint",
      price: "Project Based",
      scope: "SRS/SKPL + Figma High-Fi UI",
      summary: "Paket lengkap analisis kebutuhan teknis dan antarmuka sebelum tim developer menulis kode.",
      timeline: "2 to 3 weeks",
      features: [
        "Dokumen formal SKPL / SRS",
        "Pemodelan diagram UML & skema ERD basis data",
        "High-fidelity UI mockups di Figma",
        "Matriks otorisasi hak akses (RBAC)"
      ],
      ctaText: "Rancang Sistem",
      accentColor: "#35B47C"
    }
  ],
  journalNotes: [
    {
      id: "cypress-sorai",
      title: "Mencegah Bug Timbangan Susut pada B2B Supply Chain dengan Cypress",
      date: "Oktober 2026",
      category: "QA Automation",
      readTime: "4 min read",
      summary: "Catatan bagaimana skenario otomatisasi E2E Cypress memvalidasi toleransi susut komoditas pangan dan mencegah mismatch pada payment gateway.",
      note: "tested on SORAI live flows"
    },
    {
      id: "uiux-and-qa",
      title: "Mengapa Designer UI/UX yang Paham QA Menghasilkan Sistem Lebih Kokoh",
      date: "Agustus 2026",
      category: "Design & Quality",
      readTime: "5 min read",
      summary: "Menjembatani empati pengguna dengan ketatnya validasi boundary limits untuk mencegah anomali input sebelum baris kode ditulis.",
      note: "shift-left QA mindset"
    },
    {
      id: "rbac-matrix",
      title: "Merancang Matriks Wewenang RBAC yang Nyaman Dibaca Developer",
      date: "Juni 2026",
      category: "System Analysis",
      readTime: "4 min read",
      summary: "Studi kasus penyusunan matriks akses 3 peran (Klien, Arsitek, Kontraktor) pada BuildMatch untuk menutup celah keamanan tender lelang.",
      note: "security by design"
    }
  ] as JournalNote[],
  heroStickers: [
    { label: "QA Engineer", color: "#F6C945", rot: "-3deg" },
    { label: "Malang, Indonesia", color: "#F2679B", rot: "2deg" },
    { label: "Cypress E2E", color: "#CDEBDD", rot: "-2deg" },
    { label: "UI/UX Designer", color: "#FBE9A6", rot: "3deg" },
    { label: "System Analyst", color: "#D9DCF7", rot: "-1.5deg" },
    { label: "SRS / SKPL", color: "#F07A3C", rot: "2deg" },
    { label: "Polinema (IPK 3.78)", color: "#35B47C", rot: "-2.5deg" },
    { label: "Figma Systems", color: "#F2679B", rot: "1.5deg" }
  ],
  clientTechnologies: [
    "Cypress",
    "Figma",
    "Supabase",
    "Laravel",
    "Tailwind CSS",
    "PostgreSQL",
    "Git & GitHub"
  ],
  faqs: [
    {
      question: "Apakah Diyah terbuka untuk magang atau posisi entry-level?",
      answer: "Ya, saya sangat terbuka untuk kesempatan magang (internship) maupun posisi kerja entry-level sebagai Software Quality Assurance (QA Engineer), UI/UX Designer, maupun System Analyst."
    },
    {
      question: "Apakah pengujian yang dilakukan mencakup otomatisasi dan manual?",
      answer: "Benar. Saya berpengalaman mengembangkan Automated End-to-End (E2E) testing menggunakan Cypress untuk alur transaksi kritikal, serta pengujian manual fungsional (Black-box testing, Boundary Value Analysis, dan Exploratory testing)."
    },
    {
      question: "Bagaimana latar belakang akademik dan keahlian organisasi Anda?",
      answer: "Saya saat ini menempuh semester 5 di D4 Sistem Informasi Bisnis Politeknik Negeri Malang dengan IPK 3.78/4.00. Di luar akademik, saya aktif sebagai Koordinator Kesekretariatan HMTI dan Bendahara Pelaksana Dies Natalis 2025 dengan pencapaian laporan keuangan akuntabel berstatus Zero Deficit."
    },
    {
      question: "Apakah Diyah bisa bekerja secara remote?",
      answer: "Ya, saya berdomisili di Malang, Jawa Timur, dan terbiasa bekerja secara remote maupun hybrid dengan ritme kolaborasi berbasis tools modern seperti Git/GitHub, Figma, dan Google Workspace."
    }
  ] as FAQItem[]
};


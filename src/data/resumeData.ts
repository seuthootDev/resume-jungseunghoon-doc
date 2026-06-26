import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  profile: {
    name: { en: 'Jung Seunghoon', ko: '정승훈' },
    subtitle: {
      en: 'Software Developer · Digital Twin & Full-Stack',
      ko: '소프트웨어 개발자 · 디지털 트윈 & 풀스택',
    },
    summary: {
      en: 'Software developer grounded in mathematical thinking from a B.S. in Mathematics. Experienced across manufacturing digital twin desktop apps (PySide6/QML, QtQuick3D, URDF), PLC–robot integration web toolchains (Next.js, NestJS), and VTK-based 3D visualization. First-hand ERP experience as an end-user shaped a deep focus on user-centric UX design. Earned 9 certifications — including Engineer Information Processing, 3× AWS Associate, and SQLD — reflecting a commitment to continuous growth.',
      ko: '수학 전공을 통해 다져온 논리적 사고를 바탕으로 소프트웨어 개발에 임하는 개발자입니다. PySide6/QML·QtQuick3D·URDF 기반 제조 디지털 트윈 데스크톱부터 Next.js·NestJS PLC–로봇 통합 웹 툴체인까지 폭넓은 경험을 보유하고 있으며, ERP 사용자 경험에서 얻은 통찰로 사용자 중심 UX 설계를 중시합니다. 정보처리기사, AWS 3종, SQLD 등 총 9개 자격증 취득으로 지속적인 성장을 이어가고 있습니다.',
    },
    photo: 'https://github.com/seuthootDev.png?size=160',
    email: 'seuthootdev@gmail.com',
    location: {
      en: '⌂ Seoul, Republic of Korea',
      ko: '⌂ 대한민국 서울',
    },
    links: [
      { label: 'github.com/seuthootDev', href: 'https://github.com/seuthootDev' },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/seunghoon-jung-38b270335',
      },
      { label: 'Blog', href: 'https://seuthootdev.tistory.com' },
    ],
  },
  sections: {
    experience: { en: 'Experience', ko: '경력' },
    skills: { en: 'Skills', ko: '기술 스택' },
    education: { en: 'Education', ko: '교육' },
    credentials: { en: 'Credentials', ko: '자격증' },
    language: { en: 'Language', ko: '어학' },
    languageLevel: { en: 'Level', ko: '레벨' },
    languageCert: { en: 'Certification', ko: '인증 성적' },
    community: { en: 'Community', ko: '봉사활동' },
  },
  experience: [
    {
      company: { en: 'F4GE Co., Ltd.', ko: '(주)F4GE' },
      date: 'Jun 2026 – Present',
      role: { en: 'Software Developer', ko: '소프트웨어 개발자' },
      subtitle: {
        en: 'Government-funded R&D — PLC–Robot Integration',
        ko: '정부 지원 R&D — PLC–로봇 통합',
      },
      bullets: [
        {
          en: 'Building a web toolchain that links factory PLC logic (IEC 61131-3) with URDF robot models for digital twin workflows — PLCopen XML conversion, PLC–joint mapping, AI-assisted simulation sequence generation, and multi-platform PLC ST reverse generation',
          ko: '공장 PLC 로직(IEC 61131-3)과 URDF 로봇 모델을 디지털 트윈 워크플로우로 연결하는 웹 툴체인 개발 — PLCopen XML 변환, PLC–관절 매핑, AI 기반 시뮬레이션 시퀀스 생성, 다중 플랫폼 PLC ST 역생성',
        },
        {
          en: 'Designed bidirectional integration flow: infer PLC–URDF mappings from existing ST, generate robot motion sequences for simulation, then reverse-generate and validate PLC ST across Siemens SCL and Mitsubishi ST platforms',
          ko: '기존 PLC ST에서 PLC–URDF 매핑을 역추론하고, 로봇 동작 시퀀스를 생성·시뮬레이션한 뒤 Siemens SCL·Mitsubishi ST로 PLC ST를 역생성·검증하는 양방향 통합 흐름 설계',
        },
        {
          en: 'Built equipment-specific deterministic PLC code generation with 2-stage validation and Gemini-assisted mapping repair for production-line automation scenarios',
          ko: '생산라인 자동화 시나리오용 장비별 결정론 PLC 코드생성 및 2단계 검증·Gemini 기반 매핑 보정 구현',
        },
      ],
    },
    {
      company: { en: 'Codeflex Co., Ltd.', ko: '(주)코드플렉스' },
      date: 'Oct 2025 – May 2026',
      role: { en: 'Software Developer', ko: '소프트웨어 개발자' },
      subtitle: {
        en: 'Government-funded R&D — Manufacturing Digital Twin',
        ko: '정부 지원 R&D — 제조 디지털 트윈',
      },
      bullets: [
        {
          en: 'Developed a PySide6/QML design-time desktop app for virtual workcell configuration with QtQuick3D URDF visualization, joint control, and inverse kinematics',
          ko: 'PySide6/QML 기반 가상 워크셀 구성 데스크톱 애플리케이션 개발 — QtQuick3D URDF 시각화, 관절 제어, 역기구학',
        },
        {
          en: 'Built a workcell monitoring runtime desktop app integrating OPC UA, WebSocket, and MySQL KPI dashboards (OEE, throughput) with live 3D digital twin visualization',
          ko: '워크셀 모니터링 런타임 데스크톱 애플리케이션 개발 — OPC UA·WebSocket·MySQL KPI 대시보드(OEE, 처리량)와 실시간 3D 디지털 트윈 시각화',
        },
        {
          en: 'Supported TKC GS (Good Software) certification for the workcell monitoring application; authored user manual, installation guide, and product documentation integrated in-app',
          ko: '워크셀 모니터링 애플리케이션 TKC GS(Good Software) 인증 획득 지원; 사용자 매뉴얼·설치 가이드 등 제품 문서 직접 작성 및 앱 내 연동',
        },
        {
          en: 'Implemented data service authoring pipeline (WDF/WPF/Link → DSF XML) and migrated legacy Python UI to PySide6 + QML MVVM with VTK → QtQuick3D transition',
          ko: '데이터 서비스 스키마 생성 파이프라인 구현(WDF/WPF/Link → DSF XML); 레거시 Python UI를 PySide6 + QML MVVM으로 이식, VTK → QtQuick3D 전환',
        },
      ],
    },
    {
      company: { en: 'Herss Co., Ltd.', ko: '(주)헤르스' },
      date: 'Aug 2023 – Oct 2025',
      role: { en: 'Software Developer', ko: '소프트웨어 개발자' },
      subtitle: {
        en: 'Ministry of Environment R&D — CFD Sensor Placement Optimization Software',
        ko: '환경부 과제 — CFD 센서 배치 최적화 응용 소프트웨어 개발',
      },
      bullets: [
        {
          en: 'Developed a desktop-based CFD sensor placement optimization application using PySide (Qt) and VTK',
          ko: 'PySide(Qt) & VTK를 활용한 데스크톱 기반 CFD 센서 배치 최적화 프로그램 개발',
        },
        {
          en: 'Led web migration of the desktop app: React + Vite frontend, VTK.js 3D visualization, FastAPI backend, GitLab CI/CD auto-deployment',
          ko: '데스크톱 앱의 웹 마이그레이션 주도: React + Vite 프론트엔드, VTK.js 3D 시각화, FastAPI 백엔드, GitLab CI/CD 자동 배포',
        },
        {
          en: 'Developed and implemented sensor optimization models using the Chama library',
          ko: 'Chama 라이브러리를 활용한 센서 최적화 모델 개발 및 구현',
        },
        {
          en: 'Migrated and modernized the FORTRAN SLAB fluid dispersion model to Python',
          ko: 'FORTRAN SLAB 유체 확산 모델을 Python으로 마이그레이션 및 현대화',
        },
        {
          en: 'Implemented workflow automation systems using n8n',
          ko: 'n8n을 활용한 워크플로우 자동화 시스템 구현',
        },
        {
          en: 'Built 3D GUI for CFD simulation results, modular workflows, and detector placement optimization algorithms',
          ko: 'CFD 시뮬레이션 결과 3D GUI, 모듈화 워크플로우, 감지기 배치 최적화 알고리즘 구현',
        },
      ],
    },
    {
      company: { en: 'Evezary Co., Ltd.', ko: '(주)이브자리' },
      date: 'May 2021 – Dec 2022',
      role: { en: 'Senior Staff · Sales Manager', ko: '주임 · 영업관리자' },
      bullets: [
        {
          en: 'Developed sales strategies based on product planning and revenue data analysis',
          ko: '상품 기획 및 매출 데이터 기반 영업 전략 수립',
        },
        {
          en: 'Managed key account relationships, order intake, and production/logistics scheduling',
          ko: '주요 거래처 응대 및 주문 수주 관리; 생산·물류 일정 조율',
        },
        {
          en: 'Gained deep UX insight from daily ERP use — directly informed user-centric approach to software design after career pivot',
          ko: 'ERP 시스템 실사용 경험을 통해 사용자 중심 UX 중요성 체득',
        },
      ],
    },
    {
      company: {
        en: 'Republic of Korea Marine Corps, 1st Division',
        ko: '해병 1사단',
      },
      date: 'Mar 2019 – Feb 2021',
      role: {
        en: '1st Lieutenant · Platoon Commander (ROTC Officer)',
        ko: '중위 · 소대장 (ROTC 장교)',
      },
      bullets: [
        {
          en: 'Commanded and managed a unit of 100+ personnel; planned and executed operational tasks',
          ko: '100명 이상의 병력 지휘 및 관리, 부대 운영 계획 수립 및 실행',
        },
        {
          en: 'Strengthened crisis response, leadership, and organizational management capabilities',
          ko: '위기 상황 대처, 리더십 및 조직 관리 역량 강화',
        },
      ],
    },
  ],
  skills: [
    {
      title: 'Frontend',
      tags: ['TypeScript', 'React', 'Next.js', 'QML', 'Tailwind CSS', 'Three.js', 'VTK.js', 'Vite'],
    },
    {
      title: 'Backend',
      tags: ['NestJS', 'FastAPI', 'Python', 'MySQL', 'MongoDB', 'Gemini API'],
    },
    {
      title: 'Desktop & 3D',
      tags: ['PySide6 (Qt)', 'QtQuick3D', 'URDF', 'VTK', 'OPC UA'],
    },
    {
      title: 'Domain',
      tags: ['Digital Twin', 'PLCopen XML', 'IEC 61131-3', 'Robotics'],
    },
    {
      title: 'DevOps & Tools',
      tags: ['AWS', 'Docker', 'Nginx', 'Git', 'GitHub', 'Vercel', 'Render', 'n8n'],
    },
  ],
  education: [
    {
      school: {
        en: 'Team Sparta — Hanghae Plus Backend, Cohort 9',
        ko: '팀스파르타 — 항해 플러스 백엔드 9기',
      },
      major: {
        en: 'TDD & Clean Architecture · Redis / Kafka · High-Availability Design',
        ko: 'TDD & 클린 아키텍처 · Redis / Kafka · 고가용성 설계',
      },
      date: 'Jul 2025 – Sep 2025',
      description: {
        en: 'Server development with TDD and clean architecture; high-traffic processing with Redis & Kafka; failure response training and high-availability system design.',
        ko: 'TDD와 클린 아키텍처 기반 서버 구축, 대용량 트래픽 처리(Redis/Kafka), 장애 대응 훈련 및 고가용성 설계.',
      },
    },
    {
      school: {
        en: 'Yonsei University, Mirae Campus',
        ko: '연세대학교 미래캠퍼스',
        // en: 'Yonsei University',
        // ko: '연세대학교',        
      },
      major: { en: 'B.S. in Mathematics', ko: '수학과 학사' },
      date: 'Mar 2015 – Feb 2019',
      description: {
        en: 'Studied mathematical statistics, algebra, analysis, and topology. Built strong logical reasoning and mathematical modeling skills directly applied to VTK 3D visualization work in industry.',
        ko: '수리통계, 대수학, 해석학, 위상수학 학습. 논리적 사고력 및 수학적 모델링·알고리즘 설계 능력 배양. 선형대수 & 기하학 지식을 VTK 3D 시각화 실무에 직접 적용.',
      },
    },
    {
      school: {
        en: 'Hi-Media Academy',
        ko: '하이미디어 학원',
      },
      major: {
        en: 'Java Web Developer Full-Stack Bootcamp',
        ko: '자바 웹 개발자 풀스택 과정',
      },
      date: 'Apr 2023 – Aug 2023',
      description: {
        en: 'Java & Spring Framework web application development; HTML/CSS/JS frontend, MySQL/Oracle, Linux server environments, and team project delivery.',
        ko: 'Java, Spring Framework 기반 웹 애플리케이션 개발. HTML/CSS/JS 프론트엔드, MySQL/Oracle, Linux 서버 환경 및 팀 프로젝트 수행.',
      },
    },
  ],
  credentials: [
    {
      name: {
        en: 'Engineer Information Processing',
        ko: '정보처리기사',
      },
      issuer: { en: 'HRD Korea', ko: '한국산업인력공단' },
      date: '2024.09.10 · #24202010662E',
    },
    {
      name: {
        en: 'AWS Certified Solutions Architect – Associate',
        ko: 'AWS Certified Solutions Architect – Associate',
      },
      issuer: { en: 'Amazon Web Services', ko: 'Amazon Web Services' },
      date: '2024.12.28',
    },
    {
      name: {
        en: 'AWS Certified Developer – Associate',
        ko: 'AWS Certified Developer – Associate',
      },
      issuer: { en: 'Amazon Web Services', ko: 'Amazon Web Services' },
      date: '2025.01.11',
    },
    {
      name: {
        en: 'AWS Certified SysOps Administrator – Associate',
        ko: 'AWS Certified SysOps Administrator – Associate',
      },
      issuer: { en: 'Amazon Web Services', ko: 'Amazon Web Services' },
      date: '2025.01.31',
    },
    {
      name: {
        en: 'AWS Certified Cloud Practitioner',
        ko: 'AWS Certified Cloud Practitioner',
      },
      issuer: { en: 'Amazon Web Services', ko: 'Amazon Web Services' },
      date: '2024.11.23',
    },
    {
      name: { en: 'SQLD (SQL Developer)', ko: 'SQLD (SQL Developer)' },
      issuer: {
        en: 'Korea Data Agency (K-DATA)',
        ko: '한국데이터산업진흥원',
      },
      date: '2024.09.20 · #SQLD-054002358',
    },
    {
      name: {
        en: 'ADsP (Data Analysis Semi-Professional)',
        ko: 'ADsP (데이터 분석 준전문가)',
      },
      issuer: {
        en: 'Korea Data Agency (K-DATA)',
        ko: '한국데이터산업진흥원',
      },
      date: '2024.09.06 · #ADsP-042005357',
    },
    {
      name: {
        en: 'Network Administrator Level 2',
        ko: '네트워크 관리사 2급',
      },
      issuer: { en: 'ICQA', ko: '한국정보통신자격협회' },
      date: '2024.12.10 · #NT2076028',
    },
    {
      name: { en: 'Linux Master Level 2', ko: '리눅스마스터 2급' },
      issuer: { en: 'KAIT', ko: '한국정보통신진흥협회' },
      date: '2024.10.04 · #LMS-2403-007805',
    },
  ],
  languages: [
    {
      name: { en: 'Korean', ko: '한국어' },
      level: { en: 'Native', ko: '원어민' },
    },
    {
      name: { en: 'English', ko: '영어' },
      level: 'OPIc IH',
      certification: 'ACTFL · 2025.03 – 2027.03 · #BBUL-1R2D-G843-U8TL-F8AD',
    },
    {
      name: { en: 'Japanese', ko: '일본어' },
      level: 'N3',
    },
  ],
  community: [
    {
      name: { en: 'Blood Donation', ko: '헌혈' },
      organization: {
        en: 'Korean Red Cross Blood Services',
        ko: '대한적십자사혈액관리본부',
      },
      hours: { en: '82 times · 328 hrs', ko: '82회 · 328시간' },
    },
    {
      name: { en: 'Daily Living Support', ko: '생활지원 봉사' },
      organization: {
        en: 'Seoul Jungnang Senior Care Facility & others',
        ko: '서울특별시립중랑노인전문요양원 외',
      },
      hours: '59 hrs',
    },
  ],
};

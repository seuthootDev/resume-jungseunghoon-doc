import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  profile: {
    name: { en: 'Jung Seunghoon', ko: '정승훈' },
    subtitle: {
      en: 'Software Developer · Full-Stack & 3D Visualization',
      ko: '소프트웨어 개발자 · 풀스택 & 3D 시각화',
    },
    summary: {
      en: 'Software developer grounded in mathematical thinking from a B.S. in Mathematics. Experienced across VTK-based 3D visualization desktop applications and React · FastAPI full-stack web development. First-hand ERP experience as an end-user shaped a deep focus on user-centric UX design. Earned 9 certifications — including Engineer Information Processing, 3× AWS Associate, and SQLD — in a short span, reflecting a commitment to continuous growth.',
      ko: '수학 전공을 통해 다져온 논리적 사고를 바탕으로 소프트웨어 개발에 임하는 개발자입니다. VTK 기반 3D 시각화 데스크톱 애플리케이션부터 React·FastAPI 웹 풀스택 개발까지 폭넓은 경험을 보유하고 있으며, ERP 사용자 경험에서 얻은 통찰로 사용자 중심 UX 설계를 중시합니다. 단기간 내 정보처리기사, AWS 3종, SQLD 등 총 9개 자격증 취득으로 지속적인 성장을 이어가고 있습니다.',
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
    community: { en: 'Community', ko: '봉사활동' },
  },
  experience: [
    {
      company: { en: 'Hers Co., Ltd.', ko: '(주)헤르스' },
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
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'VTK.js', 'Vite'],
    },
    {
      title: 'Backend',
      tags: ['FastAPI', 'NestJS', 'MySQL', 'MongoDB', 'Python'],
    },
    {
      title: 'Desktop & 3D',
      tags: ['PySide (Qt)', 'VTK'],
    },
    {
      title: 'DevOps & Tools',
      tags: ['AWS', 'Docker', 'Nginx', 'Git', 'GitHub', 'Vercel', 'n8n'],
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
        en: 'Hi-Media Academy, Guri Campus',
        ko: '하이미디어 학원 구리캠퍼스',
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
      badge: { en: 'Native', ko: '원어민' },
    },
    {
      name: { en: 'English', ko: '영어' },
      badge: 'OPIc IH',
      detail: 'ACTFL · 2025.03 – 2027.03 · #BBUL-1R2D-G843-U8TL-F8AD',
    },
  ],
  community: [
    {
      name: { en: 'Blood Donation', ko: '헌혈' },
      organization: {
        en: 'Korean Red Cross Blood Services',
        ko: '대한적십자사혈액관리본부',
      },
      hours: { en: '78 times · 312 hrs', ko: '78회 · 312시간' },
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

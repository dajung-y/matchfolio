const mockPortfolio = {
  profile: {
    name: "홍길동",
    position: "Frontend Developer",

    links: {
      github: "example@github.com",
      blog: "",
      portfolio: "",
    },
  },

  skills: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Firebase"],

  projects: [
    {
      id: 1,

      name: "모여모여",
      description: "스터디 모집 및 관리 플랫폼",

      period: {
        start: "2025.09",
        end: "2025.11",
      },

      role: "Frontend Developer",

      techStack: ["Next.js", "React Query", "Zustand"],

      features: [
        "스터디 모집 및 신청 기능 구현",
        "출석 관리 기능 구현",
        "일정 CRUD 구현",
      ],

      achievements: ["React Query를 활용한 서버 상태 관리"],

      links: {
        github: "",
        demo: "",
      },
    },
  ],

  experiences: [
    {
      id: 1,
      name: "구름 프론트엔드 부트캠프",

      period: {
        start: "2025.05",
        end: "2025.11",
      },

      description: "React 기반 웹 개발 및 팀 프로젝트",
    },
  ],

  education: [
    {
      id: 1,
      school: "OO대학교",
      major: "컴퓨터공학과",

      period: {
        start: "2019.03",
        end: "2024.02",
      },
    },
  ],

  certificates: [
    {
      id: 1,
      name: "정보처리기사",
      date: "2024.00",
    },
  ],

  awards: [
    {
      id: 1,
      name: "OO 해커톤 우수상",
      date: "2025.08",
      description: "AI 기반 서비스 개발",
    },
  ],
};

export default mockPortfolio;

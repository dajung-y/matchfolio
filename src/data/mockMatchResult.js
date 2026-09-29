export const mockMatchResult = {
  matchScore: 82,

  breakdown: {
    techStack: 85,
    responsibilities: 88,
    requirements: 82,
    preferred: 68,
  },

  strengths: [
    {
      id: 1,
      title: "React 기반 프로젝트 경험",
      description:
        "채용공고에서 요구하는 React 기반 웹 개발 경험을 여러 프로젝트를 통해 확인할 수 있습니다.",
      jobRequirement: "React를 활용한 웹 개발 경험",
      portfolioEvidence: [
        "모여모여 - Next.js 기반 스터디 모집 및 관리 플랫폼 개발",
        "React Query Lab - React 기반 서버 상태 관리 실험 프로젝트",
      ],
    },

    {
      id: 2,
      title: "서버 상태 관리 경험",
      description:
        "React Query를 직접 사용하고 동작 방식을 실험한 경험이 공고의 우대사항과 연결됩니다.",
      jobRequirement: "React Query 등 서버 상태 관리 라이브러리 사용 경험",
      portfolioEvidence: [
        "React Query Lab - 캐싱, staleTime 및 데이터 요청 동작 비교",
        "모여모여 - React Query를 활용한 서버 상태 관리",
      ],
    },

    {
      id: 3,
      title: "상태 관리 라이브러리 활용 경험",
      description:
        "프로젝트에서 Zustand를 활용한 상태 관리 경험을 확인할 수 있습니다.",
      jobRequirement: "Zustand 등 상태 관리 라이브러리 사용 경험",
      portfolioEvidence: [
        "모여모여 - Zustand를 활용한 클라이언트 상태 관리",
        "Pomodoro Timer - Zustand 기반 타이머 상태 관리",
      ],
    },

    {
      id: 4,
      title: "Next.js 프로젝트 경험",
      description:
        "공고의 우대사항인 Next.js 사용 경험과 일치하는 프로젝트 경험이 있습니다.",
      jobRequirement: "Next.js 사용 경험",
      portfolioEvidence: ["모여모여 - Next.js App Router 기반 웹 서비스 개발"],
    },
  ],

  gaps: [
    {
      id: 1,
      title: "TypeScript 경험 확인 어려움",
      importance: "techStack",
      jobRequirement: "TypeScript",
      portfolioEvidence: null,
      suggestion:
        "TypeScript를 사용한 프로젝트 경험이 있다면 기술 스택과 구현 내용에 구체적으로 추가해보세요.",
    },

    {
      id: 2,
      title: "테스트 코드 경험 확인 어려움",
      importance: "preferred",
      jobRequirement: "프론트엔드 테스트 코드 작성 경험",
      portfolioEvidence: null,
      suggestion:
        "테스트 경험이 있다면 사용한 테스트 도구와 테스트한 기능을 프로젝트에 구체적으로 작성해보세요.",
    },

    {
      id: 3,
      title: "성능 개선 경험이 구체적이지 않음",
      importance: "responsibility",
      jobRequirement: "프론트엔드 성능 및 사용자 경험 개선",
      portfolioEvidence:
        "React Query의 캐싱 및 데이터 요청 방식에 대한 실험 경험은 확인되지만 실제 서비스의 성능 개선 결과는 명확하지 않습니다.",
      suggestion:
        "렌더링 최적화, 네트워크 요청 감소 등 실제 프로젝트에서 개선한 경험이 있다면 수치나 결과와 함께 추가해보세요.",
    },
  ],

  recommendations: [
    {
      id: 1,
      title: "TypeScript 경험을 보완해보세요",
      description:
        "공고의 기술 스택에 TypeScript가 포함되어 있습니다. TypeScript를 적용한 프로젝트 경험을 추가하면 기술 스택 적합도를 높이는 데 도움이 됩니다.",
    },

    {
      id: 2,
      title: "프로젝트 성과를 구체적으로 작성해보세요",
      description:
        "기능 구현 내용뿐 아니라 성능 개선, 네트워크 요청 감소, 사용자 경험 개선처럼 결과를 보여줄 수 있는 내용을 프로젝트 성과에 추가해보세요.",
    },

    {
      id: 3,
      title: "테스트 경험을 보여주세요",
      description:
        "공고에서 테스트 코드 작성 경험을 우대하고 있습니다. 테스트 경험이 있다면 사용한 도구와 테스트 범위를 프로젝트에 추가해보세요.",
    },
  ],
};

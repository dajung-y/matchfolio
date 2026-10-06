export const mockMatchResult = {
  matchScore: 82,

  summary: {
    title: "이 공고와 잘 맞는 포트폴리오예요!",
    description:
      "React 기반 프로젝트와 상태 관리 경험이 공고의 주요 요구사항과 잘 맞아요. TypeScript와 테스트 경험을 보완하면 직무 적합도를 더욱 높일 수 있어요.",
  },

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
      description:
        "공고에서는 TypeScript를 요구하지만, 포트폴리오에서는 관련 사용 경험을 확인하기 어려워요.",
    },

    {
      id: 2,
      title: "테스트 코드 경험 확인 어려움",
      importance: "preferred",
      jobRequirement: "프론트엔드 테스트 코드 작성 경험",
      portfolioEvidence: null,
      description:
        "공고에서는 테스트 코드 작성 경험을 우대하지만, 포트폴리오에서는 관련 경험이 드러나지 않아요.",
    },

    {
      id: 3,
      title: "성능 개선 경험이 구체적이지 않음",
      importance: "responsibility",
      jobRequirement: "프론트엔드 성능 및 사용자 경험 개선",
      portfolioEvidence:
        "React Query의 캐싱 및 데이터 요청 방식에 대한 실험 경험은 확인되지만 실제 서비스의 성능 개선 결과는 명확하지 않습니다.",
      description:
        "성능 관련 학습 경험은 확인되지만, 실제 서비스에서 개선한 과정이나 결과는 구체적으로 드러나지 않아요.",
    },
  ],

  recommendations: [
    {
      id: 1,
      title: "TypeScript 경험을 보완해보세요",
      description:
        "기존 React 프로젝트에 TypeScript를 적용하고, 타입을 어떻게 설계하고 활용했는지 포트폴리오에 구체적으로 작성해보세요.",
    },

    {
      id: 2,
      title: "성능 개선 결과를 구체적으로 보여주세요",
      description:
        "렌더링 최적화나 네트워크 요청 감소 경험이 있다면 적용한 방법과 개선 전후의 결과를 수치나 사례와 함께 작성해보세요.",
    },

    {
      id: 3,
      title: "테스트 경험을 추가해보세요",
      description:
        "주요 컴포넌트나 사용자 기능에 테스트 코드를 작성하고, 사용한 테스트 도구와 테스트 범위를 프로젝트에 추가해보세요.",
    },
  ],
};

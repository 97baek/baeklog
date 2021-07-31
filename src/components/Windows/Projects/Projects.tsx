import React from 'react';
import {
  Container,
  ProjectWrap,
  ProjectTitle,
  ProjectPeriod,
  ProjectPreview,
  ProjectSkills,
  ProjectDesc,
  ProjectLinks,
  ProjectDetails,
} from './styles';

const Projects = () => {
  return (
    <Container>
      <ProjectWrap>
        <ProjectTitle>Kiwee (기술 블로그 모아보기)</ProjectTitle>
        <ProjectPeriod>2021. 05 ~ 2021. 06</ProjectPeriod>
        <ProjectPreview>이미지</ProjectPreview>
        <ProjectSkills>
          <ul>
            <li>Front-End: TypeScript, React.js, Next.js, Styled-Components</li>
            <li>Back-End: TypeScript, Node.js, Express, MongoDB, Python</li>
            <li>Infra: Google Cloud Platform</li>
          </ul>
        </ProjectSkills>
        <ProjectDesc>
          국내 주요 기업들의 기술 블로그에 올라온 게시글들을 RSS를 통해 모아서 보여주는
          사이트입니다. 로그인 후 북마크, 좋아요 등의 기능을 사용할 수 있으며 프로필 페이지에서
          읽어본 게시글 및 좋아요 한 게시글을, 북마크 페이지에서 북마크한 게시글을 확인할 수
          있습니다. 추후 RSS 등록을 통해 일반 사용자들의 블로그도 등록할 수 있도록 하여 컨텐츠가
          확장될 수 있도록 할 계획입니다.
        </ProjectDesc>
        <ProjectLinks>
          <a href="https://kiwee.dev/">링크</a>
          <a href="https://github.com/LM-channel-team-project/kiwee.dev">GitHub</a>
        </ProjectLinks>
        <ul>
          <li>메인 페이지 UI 작업</li>
          <li>설정 탭의 다크모드, 새 탭에서 열기 ON/OFF 구현 (Context API)</li>
          <li>카드 컴포넌트 제작 (PostCardLAyout, PostCard)</li>
          <li>무한 스크롤 구현 (useInfiniteScroll Hooks, IntersectionObserver 이용)</li>
        </ul>
        <ProjectDetails>
          전역 상태관리에 대한 학습의 필요성을 느껴 실제 프로젝트에서 공부해보며 사용해보고
          싶었는데, 다크모드와 새로운 탭에서 열기 기능을 구현해보면서 각종 컴포넌트의 상태를 Context
          API를 이용해 전역으로 관리하는 흐름을 알게 되었습니다. 또한 페이지 단위가 아닌 스크롤이 맨
          아래로 내려갔을 때 새로운 데이터를 요청하는 무한스크롤 기능에 대한 이해가 생겼으며,
          백엔드와 함께한 프로젝트이기 때문에 REST API를 통한 요청(좋아요, 북마크 등)에 대한 이해가
          생겼습니다. 단순히 기능이 작동하게만 하는 것이 아니라 어떻게 하면 더 깔끔한 코드를 작성할
          수 있을지 고민하는 시간이 필요하며, 좋은 개발자로 성장하는 데 중요한 것이라는 알게
          되었습니다. 배포하는 과정에서 개발 과정에서는 보이지 않거나 별 것 아니라고 생각하고
          넘어갔던 것들로 인한 작은 오류들이 하나씩 발견되는 것을 보고 사전에 오류를 잡는 것의
          중요성을 느꼈고, 서비스의 규모가 커질수록 사소한 변경사항이라도 해결이 쉽지 않다는 것을
          느끼게 된 좋은 경험이었습니다. 배포 후에도 기능을 추가하거나 기존 버그를 수정하기 위해
          노력하고 있습니다.
        </ProjectDetails>
      </ProjectWrap>
    </Container>
  );
};

export default Projects;

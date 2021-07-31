import React from 'react';
import {
  Channel,
  Contact,
  ContactBox,
  Container,
  Header,
  Introduction,
  ProfileDesc,
  ProfileImage,
  Skills,
  Title,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Title>백상흔 | 끊임없이 학습하는 개발자</Title>
      </Header>
      <Introduction>
        <ProfileImage>내얼굴</ProfileImage>
        <ProfileDesc>
          <p>👨‍💻 프론트엔드 개발자, 백상흔</p>
          <ul>
            <li>
              <span>React를 활용한 컴포넌트로 구성된 프로젝트를 진행했습니다.</span>
            </li>
            <li>
              <span>개발 시 깔끔하고 효율적으로 코드를 작성하기 위해 노력합니다.</span>
            </li>
            <li>
              <span>Git Flow 브랜치 전략을 통해 협업을 진행합니다.</span>
            </li>
            <li>
              <span>하루도 쉬지 않고 개발하려 노력합니다.</span>
            </li>
            <li>
              <span>새로운 것을 배우는 데 흥미를 느낍니다.</span>
            </li>
          </ul>
        </ProfileDesc>
      </Introduction>
      <ContactBox>
        <Contact>
          <h2>🤳🏻 Contact.</h2>
          <ul>
            <li>
              <span>
                Email. <strong>170410_@naver.com</strong>
              </span>
            </li>
            <li>
              <span>
                Phone. <strong>010-2861-7875</strong>
              </span>
            </li>
          </ul>
        </Contact>
        <Channel>
          <h2>🚀 Channel.</h2>
          <ul>
            <li>
              <span>
                GitHub.{' '}
                <strong>
                  <a href="https://github.com/97baek">https://github.com/97baek</a>
                </strong>
              </span>
            </li>
          </ul>
        </Channel>
      </ContactBox>
      <Skills>
        <h2>🛠 Skills.</h2>
        <ul>
          <li>Front-end: JavaScript(ES6+), TypeScript, React.js, Styled-Components, HTML/CSS </li>
          <li>ETC: Git, GitHub, Visual Studio Code, Slack</li>
        </ul>
      </Skills>
    </Container>
  );
};

export default Profile;

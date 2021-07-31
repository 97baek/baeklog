import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 720px;
  padding: 0 80px;
`;

export const Header = styled.header``;

export const Title = styled.h1`
  text-align: center;
`;

export const Introduction = styled.section`
  margin: 24px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled.article``;

export const ProfileDesc = styled.aside`
  p {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  li {
    margin-bottom: 8px;
  }
`;

export const ContactBox = styled.section`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Contact = styled.aside`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 8px;
    strong {
      font-size: 18px;
    }
  }
`;
export const Channel = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 24px 0;
`;

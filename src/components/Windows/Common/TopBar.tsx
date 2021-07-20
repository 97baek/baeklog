import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface IProps {
  icon: string;
  title: string;
}

const TopBar = ({ icon, title }: IProps) => {
  return (
    <Container>
      <Info>
        {icon}
        <p>{title}</p>
      </Info>
      <Button state={title} />
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid black;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
  }
`;

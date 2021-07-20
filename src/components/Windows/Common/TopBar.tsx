import React from 'react';
import styled from 'styled-components';
import Button from './Buttons/Button';

interface IProps {
  icon: string;
  title: string;
}

const TopBar = ({ icon, title }: IProps) => {
  // console.log(title);
  return (
    <Container>
      <Info>
        {icon}
        <p>{title}</p>
      </Info>
      <Button title={title} />
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

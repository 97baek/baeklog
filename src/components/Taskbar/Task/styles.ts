import styled from 'styled-components';

export const TaskIcons = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const TaskIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  list-style: none;

  &:hover {
    background-color: #e9e9e9;
    div {
      transform: scaleX(1.2);
    }
  }
`;

export const ActiveTask = styled.div`
  position: fixed;
  width: 50px;
  height: 4px;
  flex-wrap: wrap;
  align-self: flex-end;
  background: rgb(55, 71, 255);
  transition: all 0.1s ease 0s;
`;

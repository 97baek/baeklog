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
  }
`;

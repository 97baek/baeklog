import styled from 'styled-components';

export const Icons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Icon = styled.div<{ clicked: boolean }>`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: ${(props) => props.clicked && '#FFFFFF55'};
  border: ${(props) => props.clicked && '1px solid #ffffff77;'};

  &:hover {
    background: ${(props) => (props.clicked ? '#FFFFFF55' : '#FFFFFF33')};
    border: 1px solid #ffffff77;
  }
`;

import styled from 'styled-components';

interface IProps {
  isShowing: number;
}

export const WindowWrap = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0px, 0px);
  width: 100%;
  height: calc(100% - 60px);
  min-width: 200px;
  min-height: 30px;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.5s ease 0s;
  z-index: ${(props) => props.isShowing};
  cursor: default;
`;

export const WindowContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background: rgb(255, 255, 255);
  border: 1px solid black;
`;

export const Contents = styled.div`
  width: 100%;
  height: calc(100% - 31px);
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  background-color: gray;
`;

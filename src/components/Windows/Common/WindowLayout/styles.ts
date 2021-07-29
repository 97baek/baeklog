import styled from 'styled-components';

interface IProps {
  isShowing: number;
}

// width: 100%;
//   height: calc(100% - 60px);

// transform: translate(${(props) => props.style.posX}px, ${(props) => props.style.posY}px);
// transform: translate(0px, -500px);
export const WindowWrap = styled.div<IProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 300px;
  min-height: 30px;
  border: none;
  display: ${(props) => (props.isShowing > -1 ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: flex-start;
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

export const ContentsWrapper = styled.div`
  width: 100%;
  height: calc(100% - 31px);
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  background-color: gray;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background: rgb(234, 234, 234);
`;

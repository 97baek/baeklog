import styled from 'styled-components';

export const ButtonWrap = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-self: flex-end;
  flex-wrap: nowrap;
  float: right;
  flex-basis: 0px;
`;

export const Button = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 0px;
  color: black;
  font-size: 1rem;
  background: none;
  border: none;
  transform: none;
  line-height: 30px;
  cursor: pointer;
  transition: background 0.25s ease-in-out;

  &:hover {
    background: red;
  }
`;

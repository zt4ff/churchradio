import styled from "styled-components";

export const MediaControllerContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    font-size: 40px;
  }
`;

import styled from "styled-components";

export const MediaControllerContainer = styled.div`
  height: 100px;
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

  & button:nth-of-type(2) {
    font-size: 60px;
  }
`;

export const CurrentlyPlayingContainer = styled.div`
  color: #fff;
  position: absolute;
  bottom: 20px;
  height: 100px;
  left: 40px;
  font-size: 24px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & p {
    transform: translateY(-25%);
    margin: 0;
    border-bottom: 1px solid #fff;
  }
`;

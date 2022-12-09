import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 40px;
  right: 40px;
  text-align: center;
  background: #ffffff3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & a {
    text-decoration: none;
    color: #000;
  }
`;

export const ThumbnailContainer = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  cursor: pointer;
`;

import styled from "styled-components";

export const PlaylistDropDownContainer = styled.select`
  position: absolute;
  top: 20px;
  left: 40px;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 0 15px 10px 5px;
  font-size: 20px;
  color: #fff;
  background: none;

  &:focus {
    outline: none;
  }
`;

export const PlaylistOption = styled.option`
  color: #000;
`;

import styled from "styled-components";
import { Avatar } from "@mui/material";
// import { AccessTime, Search } from "@mui/icons-material";

export const HeaderContainer = styled.div`
  background-color: var(--slack-colors);
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 15px;
    color: white;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  border-color: gray;
  border: 1px gray solid;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    color: gray;
  }
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30dvw;
    outline: none;
    color: white;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
`;

export const MyAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

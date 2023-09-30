import styled from "styled-components";

export const SideBarContainer = styled.div`
  background-color: var(--slack-colors);
  color: white;
  flex: 0.3;
  border-top: 2px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
export const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #40274b;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    color: #49274b;
    padding: 8px;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
export const SideBarInfo = styled.div`
  flex: 1;
  > h3 {
    font-size: 15px;
    font-weight: 900px;
    margin-bottom: 5px;
  }
  > h4 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h4 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
  }
`;

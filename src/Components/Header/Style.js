import styled from "styled-components";

export const DivHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 72px;
  box-shadow: 1px;
  border-bottom: 2px solid #ccc;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 100%;
  padding: 24px;
  align-items: center;
`;
export const LogoText = styled.p`
    background: linear-gradient(to right, blue, #444444);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 90%;
    font-size: 19px;
`;
export const H4Crp = styled.h4`
    background: linear-gradient(to right, #077897, #444444);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 47%;
    font-size: 11px;
`;
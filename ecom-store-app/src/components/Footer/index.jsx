import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #fff;
`;

const FooterNav = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterNav>
        <p>About</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Contact</p>
        <p>Help</p>
      </FooterNav>
    </FooterDiv>
  );
}

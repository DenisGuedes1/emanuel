import React from 'react';
import { FooterContainer, FooterText, EmailIcon, SocialIcons, WhatsAppIcon } from './Styled';

const FooterComponents = () => {
  return (
    <FooterContainer>
      <FooterText>Desenvolvido por DGM Tech &copy; 2024. Todos os direitos reservados.</FooterText>
      <FooterText>Psicólogo: Emanuel Gomez - CRP 03/30717</FooterText>
      <SocialIcons>
        <a href="mailto:emanuelgomezz718@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
        <a href="http://wa.me/+5575999756360" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default FooterComponents;
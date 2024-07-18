import styled from 'styled-components';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

// Contêiner principal do footer
export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Texto do footer
export const FooterText = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

// Contêiner de ícones sociais
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
`;

// Ícone de e-mail
export const EmailIcon = styled(AiOutlineMail)`
  color: #fff; /* Cor do ícone do e-mail (branco) */
  transition: color 0.3s ease; /* Transição suave de cor */
  
  &:hover {
    color: #f39c12; /* Cor do ícone do e-mail ao passar o mouse (amarelo) */
  }
`;

// Ícone do WhatsApp
export const WhatsAppIcon = styled(AiOutlineWhatsApp)`
  color: #fff; /* Cor do ícone do WhatsApp (branco) */
  transition: color 0.3s ease; /* Transição suave de cor */
  
  &:hover {
    color: #25D366; /* Cor do ícone do WhatsApp ao passar o mouse (verde) */
  }
`;
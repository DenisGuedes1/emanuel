import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8; /* Cor calma e agradável */
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ProfileImage = styled.img`
    width: 160px;
    height: 190px;
    border-radius: 50%;
    margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 140px;
    height: 175px;
  }

  @media (max-width: 480px) {
    width: 170px;
    height: 183px;
  }
`;

export const ProfileName = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImportanceSection = styled.div`
  text-align: center;
  margin: 0 20px;
  width: 70%;
`;

export const ImportanceTitle = styled.h2`
  font-size: 28px;
  color: #4CAF50; /* Cor verde calmante */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ImportanceText = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 65%;
    margin-top: 3%;
    margin-left: 3%;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 15px 32px;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
  }

  /* Media query for tablets */
  @media (max-width: 768px) {
        width: 30%;
        height: auto;
        margin-left: 68%;
    padding: 12px 24px;
    font-size: 14px;
  }

  /* Media query for mobile devices */
  @media (max-width: 480px) {
    width: 80%;
    height: auto;
    margin-left: 10%;
    padding: 10px 20px;
    font-size: 16px;
  }
`;
export const MalefitsSection = styled.div`
  text-align: center;
  margin: 20px 20px 50px 20px;
  width:70%;
`;

export const MalefitsTitle = styled.h2`
  font-size: 28px;
  color: #FF6347; /* Cor tomate para destacar */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const MalefitsText = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const IconWpp = styled.img`
width:70px;
`;
const floatAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
`;

export const FloatingImage = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  margin-left: 38rem;
  animation: ${floatAnimation} 1s infinite alternate ease-in-out;
`;
export const TherapyDescriptionSection = styled.section`
    text-align: center;
    margin: 20px 20px 50px 20px;
    width: 70%;
`;

export const TherapyTitle = styled.h2`
    font-size: 28px;
    color: #FF6347;
    margin-bottom: 20px;
`;

export const TherapyText = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
`;

export const TargetAudienceSection = styled.section`
    text-align: center;
    margin: 20px 20px 50px 20px;
    width: 70%;
`;

export const TargetAudienceTitle = styled.h2`
    font-size: 28px;
    color: #FF6347;
    margin-bottom: 20px;
`;

export const TargetAudienceText = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
`;

export const CallToActionSection = styled.section`
    text-align: center;
    margin: 20px 20px 50px 20px;
    width: 70%;
`;

export const CallToActionTitle = styled.h2`
    font-size: 28px;
    color: #FF6347;
    margin-bottom: 20px;
`;

export const CallToActionText = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
`;

export const CallToActionButton = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #25D366; /* Cor do WhatsApp */
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1EBE57; /* Cor mais escura do WhatsApp */
    }

    img {
        margin-right: 10px;
    }
`;
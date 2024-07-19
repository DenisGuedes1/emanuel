import React from 'react';
import {
    Container,
    ProfileSection,
    ProfileImage,
    ProfileName,
    ImportanceSection,
    ImportanceTitle,
    ImportanceText,
    MalefitsSection,
    MalefitsTitle,
    MalefitsText, FloatingImage, IconWpp,
    TherapyDescriptionSection, TherapyTitle,
    TherapyText, CallToActionButton,
     CallToActionSection,
    CallToActionText,
    TargetAudienceSection, TargetAudienceText, TargetAudienceTitle
} from './Style';
import image2 from '../../Image/trader2.jpg';
import Wpp from '../../Image/whatsaap.png';
export const TextBody = () => {
    return (
        <Container>
            <ProfileSection>
                <ProfileImage src={image2} alt="Psicólogo" />
                <ProfileName>Emanuel Gomes</ProfileName>
                <h4>CRP 03/30717</h4>
            </ProfileSection>
            <ImportanceSection>
                <ImportanceTitle>A Importância do Atendimento Psicológico</ImportanceTitle>
                <ImportanceText>
                    O atendimento psicológico é fundamental para o autoconhecimento, proporcionando um espaço seguro para explorar seus sentimentos, pensamentos e comportamentos. É especialmente benéfico para pessoas que sofrem de depressão, ansiedade e outras condições emocionais e psicológicas, ajudando a desenvolver estratégias de enfrentamento eficazes e promovendo uma melhor qualidade de vida.
                </ImportanceText>
                <ImportanceText>
                    Além disso, a terapia pode ser uma ferramenta valiosa para melhorar as relações interpessoais, aumentar a resiliência e fomentar um maior bem-estar mental e emocional.
                </ImportanceText>
            </ImportanceSection>
            <MalefitsSection>
                <MalefitsTitle>Malefícios da Ansiedade e Depressão</MalefitsTitle>
                <MalefitsText>
                    A ansiedade e depressão podem ter um impacto profundo na vida de uma pessoa, afetando sua saúde mental, física e emocional. Sem tratamento, essas condições podem levar a uma diminuição da qualidade de vida, comprometendo em outros aspectos como;
                    Problemas de sono, dificuldades de concentração, isolamento social e até pensamentos suicidas.
                </MalefitsText>
                <MalefitsText>
                    Viver com ansiedade ou depressão pode ser debilitante e interfere em diversos aspectos da vida diária, incluindo trabalho, estudos e relacionamentos pessoais.
                </MalefitsText>
                <MalefitsText>
                    A boa notícia é que, com o acompanhamento psicológico adequado, é possível administrar e superar esses desafios, levando a uma vida mais equilibrada e satisfatória.
                </MalefitsText>
            </MalefitsSection>

            <TherapyDescriptionSection>
                <TherapyTitle>Abordagem - (ACT)</TherapyTitle>
                <TherapyText>
                    A Terapia de Aceitação e Compromisso (ACT) é uma abordagem terapêutica que visa ajudar as pessoas a aceitarem os sentimentos e pensamentos indesejados, ao mesmo tempo que se comprometem a agir de acordo com seus valores pessoais.
                    Essa terapia é baseada na ideia de que a aceitação e a flexibilidade psicológica são fundamentais para o bem-estar do paciente.
                </TherapyText>
            </TherapyDescriptionSection>

            <TargetAudienceSection>
                <TargetAudienceTitle>Público-Alvo</TargetAudienceTitle>
                <TargetAudienceText>
                    A Terapia ACT é indicada para pessoas que estão enfrentando uma variedade de desafios emocionais e psicológicos, incluindo ansiedade,
                    depressão, estresse, transtornos de humor e problemas de relacionamento. 
                    Também é eficaz para aqueles que procuram um maior entendimento de si mesmos e desejam viver uma vida mais alinhada com seus valores e objetivos.
                </TargetAudienceText>
            </TargetAudienceSection>

            <CallToActionSection>
                <CallToActionText>
                    Se você está pronto para começar sua jornada de autoconhecimento e melhorar sua saúde mental,
                    entre em contato pelo link abaixo! Agende sua consulta e dê o primeiro passo em busca do 
                    equilíbrio e autoconhecimento.
                    Atendimento Presencial e On-line.
                </CallToActionText>
                <CallToActionButton href="http://wa.me/+5575999756360" target="_blank" rel="noopener noreferrer">
                    <IconWpp id="iconWhats" src={Wpp} alt="whatsapp" />
                    Fale Conosco pelo WhatsApp
                </CallToActionButton>
            </CallToActionSection>
            <FloatingImage>
                <a href="http://wa.me/+5575999756360" target="_blank" rel="noopener noreferrer">
                    <IconWpp id="iconWhats" src={Wpp} alt="whatsaap" />
                </a>
            </FloatingImage>
        </Container>
    );
};
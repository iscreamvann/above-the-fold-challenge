import styled from 'styled-components';
import theme from '../theme';

const SectionOneStyled = styled.section`
  background-color: ${theme.background};
  display: flex;
  flex-direction: column;
  min-height: 500px;
  
  margin-top: 20px;

  // Desktop layout
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const MainSection = styled.div`
  flex: 1;
  margin: 10px;

  
  // Desktop layout
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  // Mobile layout
  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin: 10px;
  }
    
`;

const H1Styled =  styled.h1`
font-size: 70px;
`

const PStyled  = styled.p`
font-size: 18px;


  // Desktop layout
  @media (min-width: 769px) {
margin-bottom:  20px;

  }
`

const ButtonWrapperStyled =  styled.div`
width: 100%;
`

const ButtonStyled = styled.button`
  font-size: 18px;
  color: white;
  white-space:  nowrap;
  height: 50px;
  border-radius: 25px;
  font-weight: 600;
  padding: 0 30px;
  background-color: ${theme.primary};
  border: none;
  display: inline-block;

  &.circleButton{
  width: 50px;
  padding:  0;
  }
`

const SectionOne = () => {
  return (
    <SectionOneStyled>
      <MainSection>
        <H1Styled>
            District-wide,<br/> 
            In-Person & Online <br/>
            Tutoring Services
        </H1Styled>
        </MainSection>
      <MainSection>
        <PStyled>
            HeyTutor provides trained, passionate tutors to support your students with recovery from unfinished learning, remediation, acceleration, and/or enrichment!
        </PStyled>
        <ButtonWrapperStyled>
            <ButtonStyled >
                Find a tutor
            </ButtonStyled>
            <ButtonStyled className='circleButton'>
                /
            </ButtonStyled>
        </ButtonWrapperStyled>
      </MainSection>
    </SectionOneStyled>
  );
};

export default SectionOne;

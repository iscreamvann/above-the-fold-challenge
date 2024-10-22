import styled from 'styled-components';
import theme from '../theme';
import spacing from '../spacing';
import ContainerStyled from './Container';

const SectionOneStyled = styled(ContainerStyled)`
  background-color: ${theme.background};
  display: flex;
  flex-direction: column;
  min-height: 500px;
  margin-top: 20px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  box-sizing: border-box;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
    padding: ${spacing.xl};
    gap: ${spacing.xl};
  }

  @media (max-width: 768px) {
    padding: ${spacing.l};
  }
`;

const MainSection = styled.div`
  flex: 1;
  margin: 10px;
  z-index: 1;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin: 10px;
  }
`;

const H1Styled = styled.h1`
  font-family: 'Fraunces', sans-serif;

  @media (min-width: 769px) {
    font-size: 56px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    font-weight: 600;
  }
`;

const PStyled = styled.p`
  font-size: 18px;
  line-height: 1.6;

  @media (min-width: 769px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const ButtonWrapperStyled = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;

    & > button:first-child {
      flex: 1;
    }
  }

  @media (min-width: 769px) {
    display: flex;
  }
`;

const ButtonStyled = styled.button`
  font-size: 18px;
  color: white;
  white-space: nowrap;
  height: 50px;
  border-radius: 25px;
  font-weight: 600;
  padding: 0 30px;
  background-color: ${theme.primary};
  border: none;
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: ${theme.primary};
    border-radius: 50%;
    left: 100%;
    top: 0;
    background-image: url('/assets/forward-arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      &::after {
        transform: rotate(-45deg);
      }
    }

    &::after {
      transition: transform 0.2s ease;
    }
  }

  @media (max-width: 768px) {
  margin-right: 50px;
  }
`;

const SquiggleImageStyled = styled.img`
  position: absolute;

  @media (min-width: 769px) {
    width: 120px;
    bottom: ${spacing.m};
    right: ${spacing.l};
  }

  @media (max-width: 768px) {
    width: 100px;
    top: ${spacing.xl};
    right: ${spacing.l};
  }
`;

const SectionOne = () => {
  return (
    <SectionOneStyled>
      <SquiggleImageStyled alt="Decorative Squiggle" src="/assets/Squiggle.webp" />
      <MainSection>
        <H1Styled>
          District-wide,<br />
          In-Person & Online <br />
          Tutoring Services
        </H1Styled>
      </MainSection>
      <MainSection>
        <PStyled>
          HeyTutor provides trained, passionate tutors to support your students with recovery from unfinished learning, remediation, acceleration, and/or enrichment!
        </PStyled>
        <ButtonWrapperStyled>
          <ButtonStyled>Find a tutor</ButtonStyled>
        </ButtonWrapperStyled>
      </MainSection>
    </SectionOneStyled>
  );
};

export default SectionOne;

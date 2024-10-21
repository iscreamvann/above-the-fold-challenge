import styled from 'styled-components';
import theme from '../theme';
import ContainerStyled from './Container';

const BLOCK_HEIGHT = '150px';

const SectionTwoStyled = styled(ContainerStyled)`
  display: flex;
  background-color: ${theme.background};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
  }
`;

const BlockStyled = styled.div`
  min-width: ${BLOCK_HEIGHT};
  display: inline-block;

  @media (max-width: 1100px) {
    height: 30vw;
    &.desktopOnly {
      display: none;
    }
  }

  @media (min-width: 769px) {
    height: ${BLOCK_HEIGHT};
  }
`;

const PurpleTextStyled = styled.p`
  color: white;
  background-color: ${theme.highlight};
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    border-radius: 0px 15vw 15vw 15vw;
    height: 30vw;
  }

  @media (min-width: 769px) {
    border-radius: 0px calc(${BLOCK_HEIGHT} / 2);
    height: ${BLOCK_HEIGHT};
  }
`;

const OrangeBallStyled = styled.div`
  background-color: ${theme.accent};
  border-radius: 100%;
  display: inline-block;

  @media (max-width: 768px) {
    height: 30vw;
    width: 30vw;
  }

  @media (min-width: 769px) {
    height: ${BLOCK_HEIGHT};
    width: ${BLOCK_HEIGHT};
  }
`;

const PurpleLeafStyled = styled.div`
  height: ${BLOCK_HEIGHT};
  width: ${BLOCK_HEIGHT};
  background-color: ${theme.highlight};
  display: inline-block;

  @media (max-width: 768px) {
    height: 30vw;
    width: 30vw;
    border-radius: 0px 15vw;
  }

  @media (min-width: 769px) {
    height: ${BLOCK_HEIGHT};
    width: ${BLOCK_HEIGHT};
    border-radius: calc(${BLOCK_HEIGHT} / 2) 0px;
  }
`;

const BoyPictureStyled = styled.img`
  display: inline-block;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 30vw;
    width: 40vw;
    border-top-right-radius: 15vw;
  }

  @media (min-width: 769px) {
    height: ${BLOCK_HEIGHT};
    width: 240px;
    border-top-right-radius: calc(${BLOCK_HEIGHT} / 2);
  }
`;

const GirlPictureStyled = styled.img`
  display: inline-block;
  height: ${BLOCK_HEIGHT};
  width: 300px;
  border-radius: calc(${BLOCK_HEIGHT} / 2);
  object-fit: cover;
`;

const SectionTwo = () => {
  return (
    <SectionTwoStyled>
      <BlockStyled style={{ flex: 1 }}>
        <PurpleTextStyled>
          We provide 1-on-1 learning environments and personalized lesson plans to meet each student&apos;s needs.
        </PurpleTextStyled>
      </BlockStyled>
      <BlockStyled>
        <OrangeBallStyled />
        <BoyPictureStyled alt="Boy Learning" src="/assets/Boy.webp" />
        <PurpleLeafStyled />
      </BlockStyled>
      <BlockStyled className="desktopOnly">
        <GirlPictureStyled alt="Girl Learning" src="/assets/Girl.webp" />
      </BlockStyled>
    </SectionTwoStyled>
  );
};

export default SectionTwo;

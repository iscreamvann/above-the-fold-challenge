import styled from 'styled-components';
import theme from '../theme';

const BLOCK_HEIGHT = '150px';

const SectionTwoStyled = styled.section`
  display: flex;
  background-color: ${theme.background};


  /* Mobile layout */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  /* Desktop layout */
  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
  }
`;

const BlockStyled = styled.div`
  min-width: ${BLOCK_HEIGHT};
  display: inline-block;

  /* Mobile layout */
  @media (max-width: 1100px) {
    &.desktopOnly {
      display: none;
    }
  }

  /* Desktop layout */
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

    /* Mobile layout */
  @media (max-width: 768px) {
  border-radius: 0px 15vw 15vw 15vw;
  height: 30vw;
  }

  /* Desktop layout */
  @media (min-width: 769px) {
  border-radius: 0px calc(${BLOCK_HEIGHT} / 2);
  height: ${BLOCK_HEIGHT};
  }
  
`;

const OrangeBallStyled = styled.div`
  background-color: ${theme.accent};
  border-radius: 100%;
  display: inline-block;

    /* Mobile layout */
  @media (max-width: 768px) {
  height: 30vw;
  width: 30vw;
  }

  /* Desktop layout */
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

    /* Mobile layout */
  @media (max-width: 768px) {
  height: 30vw;
  width: 30vw;
  border-radius: 0px 15vw;
  }

  /* Desktop layout */
  @media (min-width: 769px) {
  height: ${BLOCK_HEIGHT};
  width: ${BLOCK_HEIGHT};
  border-radius: calc(${BLOCK_HEIGHT} / 2) 0px;
  }
`;

const BoyPictureStyled = styled.img`
  display: inline-block;
   object-fit: cover;

     /* Mobile layout */
  @media (max-width: 768px) {
  height: 30vw;
  width: 40vw;
  border-top-right-radius: 15vw;
  }

  /* Desktop layout */
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
      <BlockStyled style={{flex: 1}}>
        <PurpleTextStyled>
          We provide 1-on-1 learning environments and personalized lesson plans to meet each student&apos;s needs.
        </PurpleTextStyled>
      </BlockStyled>
      <BlockStyled>
        <OrangeBallStyled />
        <BoyPictureStyled src='/assets/Boy.webp'/>
        <PurpleLeafStyled />
      </BlockStyled>
      <BlockStyled className='desktopOnly'>
        <GirlPictureStyled src='/assets/Girl.webp'/>
      </BlockStyled>
    </SectionTwoStyled>
  );
};

export default SectionTwo;

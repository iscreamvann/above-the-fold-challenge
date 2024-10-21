import styled from 'styled-components';
import theme from '../theme';

const BLOCK_HEIGHT = '200px';

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
  height: ${BLOCK_HEIGHT};
  display: inline-block;

  /* Mobile layout */
  @media (max-width: 768px) {
    &.desktopOnly {
      display: none;
    }
  }
`;

const PurpleTextStyled = styled.p`
  color: white;
  background-color: ${theme.highlight};
  height: ${BLOCK_HEIGHT};
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 0px calc(${BLOCK_HEIGHT} / 2);
  
`;

const OrangeBallStyled = styled.div`
  background-color: ${theme.accent};
  height: ${BLOCK_HEIGHT};
  width: ${BLOCK_HEIGHT};
  border-radius: 100%;
  display: inline-block;
`;

const PurpleLeafStyled = styled.div`
  height: ${BLOCK_HEIGHT};
  width: ${BLOCK_HEIGHT};
  background-color: ${theme.highlight};
  border-radius: calc(${BLOCK_HEIGHT} / 2) 0px;
  display: inline-block;
`;

const BoyPictureStyled = styled.img`
  display: inline-block;
  height: ${BLOCK_HEIGHT};
  width: 300px;
  background-color: green;
  border-top-right-radius: calc(${BLOCK_HEIGHT} / 2);
   object-fit: cover;
`;

const GirlPictureStyled = styled.img`
  display: inline-block;
  height: ${BLOCK_HEIGHT};
  width: 300px;
  background-color: green;
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

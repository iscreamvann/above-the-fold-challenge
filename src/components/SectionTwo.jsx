import styled from 'styled-components'

const SectionTwoStyled = styled.section`
background-color: orange;
display: flex;

//phone
@media (max-width: 768px) {
flex-direction:  column-reverse;
}

//desktop
@media (min-width: 769px) {
  flex-direction: row;
  display: flex;
}
`
const BlockStyled =  styled.div`
min-width: 200px;
height: 200px;
background-color: blue;
display: inline-block;



//mobile
@media (max-width: 768px) {
  &.desktopOnly{
  display: none;
}
}
`

const PurpleTextStyled =  styled.p`

`

const OrangeBallStyled =  styled.div`

`

const PurpleLeafStyled =   styled.div`

`

const BoyPictureStyled =   styled.img`

`

const GirlPictureStyled =    styled.img`

`


const SectionTwo = () => {
    return (
<SectionTwoStyled>
    <BlockStyled>
<PurpleTextStyled>
  We provide 1-on-1 learning environments and personalized lesson plans to meet each students needs.
</PurpleTextStyled>
    </BlockStyled>
    <BlockStyled>
        <OrangeBallStyled>

        </OrangeBallStyled>
        <BoyPictureStyled>

        </BoyPictureStyled>
      <PurpleLeafStyled>

      </PurpleLeafStyled>
        </BlockStyled>
        <BlockStyled className='desktopOnly'>
        <GirlPictureStyled>

        </GirlPictureStyled>
        </BlockStyled>
</SectionTwoStyled>
    );
  };
  
  export default SectionTwo;
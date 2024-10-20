import styled from 'styled-components'
import theme from '../theme'

const SectionOneStyled = styled.section`
background-color: ${theme.background};
display: block;
min-height: 400px;
margin-top: 20px;
`

const MainSection =  styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: blue;
height: 30px;
`

const SectionOne = () => {
    return (
<SectionOneStyled>
<MainSection></MainSection>
<MainSection></MainSection>
</SectionOneStyled>
    );
  };
  
  export default SectionOne;
import styled from 'styled-components';
import theme from '../theme';
import ContainerStyled from './Container';

const SectionThreeStyled = styled.div`
border-top-left-radius: 100px;
border-top-right-radius: 100px;
width: 100%;
Height:  150px;
background-color: #EDEDED;
`;

const SectionThreeWrapperStyled =  styled(ContainerStyled)`
background-color: ${theme.background}
`

const SectionThree = () => {
    return(
        <SectionThreeWrapperStyled>
        <SectionThreeStyled>
        </SectionThreeStyled>
    </SectionThreeWrapperStyled>
    )
}

export default SectionThree;
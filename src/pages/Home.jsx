import Nav from '../components/Nav'
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import  SectionThree from '../components/SectionThree';
import styled  from 'styled-components';
import theme  from '../theme';


const MainStyled = styled.main`
padding-top: 60px;
background-color: ${theme.secondary};
min-height: 100dvh;
`

const Home = () => {
  return (
    <div className="container">
    <Nav/>
    <MainStyled>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </MainStyled>
    </div>
  );
};

export default Home;
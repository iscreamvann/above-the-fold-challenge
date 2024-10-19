import Nav from '../components/Nav'
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import styled  from 'styled-components';


const MainStyled = styled.main`
padding-top: 60px;
`

const Home = () => {
  return (
    <div className="container">
    <Nav/>
    <MainStyled>
        <SectionOne/>
        <SectionTwo/>
    </MainStyled>
    </div>
  );
};

export default Home;
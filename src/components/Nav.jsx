import styled from 'styled-components'
import { useState } from 'react'

const NavStyled = styled.nav`
//both
background-color: pink;
position: fixed;
top: 0;
width: 100%;
min-height: 60px;

//mobile
@media  (max-width: 768px) {
background-color: blue;

} 
//desktop
@media  (min-width: 769px) {
background-color: green;
display: flex;

}
`
const HeaderStyled =  styled.header`
background-color: yellow;
height: 60px;
min-width: 30px;
display: flex;
align-items: center;
padding:  0 10px;
box-sizing:  border-box;




//mobile
@media  (max-width: 768px) {
width: 100%;
} 
//desktop
@media  (min-width: 769px) {
min-width: 300px;
flex: 1;
}
`
const UlStyled = styled.ul`
background-color: green;
min-width: 30px;
list-style: none;
margin: 0;
display: flex;
align-items: center;



//desktop
@media  (min-width: 769px) {
justify-content: flex-end;
padding:  0 20px;


& li:last-child{
margin-left: 20px;
}
}
`

const LiStyled = styled.li`
margin: 0;
`

const AStyled =  styled.a`
height: 30px;
border-radius: 30px;
display: inline-block;
line-height:  30px;
padding: 10px;
margin: 0;


&:hover{
background-color: grey;
}

&.secondary{
background-color: yellow;
font-weight: 800;
}
`
const ImgStyled =  styled.img`
width: 200px;
`
const ButtonStyled =  styled.button`
width: 50px;
height:  30px;
background-color: aqua;


//mobile
@media  (max-width: 768px) {
} 
//desktop
@media (min-width: 769px) {
display: none;
}
`




const Nav = () => {
    const  [isOpen, setIsOpen] = useState(false);
    const toggleOpenClose = () => {
        setIsOpen(!isOpen);
    }

   return (
<NavStyled>
<HeaderStyled>
<ImgStyled src='/assets/Logo.svg'/>
<ButtonStyled onClick={toggleOpenClose}>{isOpen.toString()}</ButtonStyled>
</HeaderStyled>
<UlStyled>
    <LiStyled>
        <AStyled>Find Tutors</AStyled>
    </LiStyled>
    <LiStyled>
        <AStyled>For Schools</AStyled>
    </LiStyled>
    <LiStyled>
        <AStyled>Find Courses</AStyled>
    </LiStyled>
    <LiStyled>
        <AStyled>Find Answers</AStyled>
    </LiStyled>
    <LiStyled>
        <AStyled>Jobs</AStyled>
    </LiStyled>
    <LiStyled>
        <AStyled className='secondary'>Sign In</AStyled>
    </LiStyled>
</UlStyled>

</NavStyled>
    );
  };
  
  export default Nav;
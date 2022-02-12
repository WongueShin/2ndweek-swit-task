import styled from "styled-components";

export const NavContainer = styled.nav`
    position: fixed;
    height: 100vh;
    width: 10vw;
    background-color: #343268;
    display: flex;
    flex-direction: column;
`

export const LogoContainer = styled.div`
    background-color: #5252fa;
    width: 100%;
    height: 5vh;
    max-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const LogoDiv = styled.div`
    background-image: url('Images/logo.PNG');
    background-repeat: no-repeat;
    background-size: cover;
    width: 4.5vw;
    max-width: 40px;
    height: 4.5vw;
    max-height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    
`
export const IconList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 30%;
`

export const IconContainer = styled.div`
    padding: 5% 15%;
    color: #706db1;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    &:hover{
        background-color: #3b3987;
    }
`
export const SelectedContainer = styled.div`
    padding: 5% 15%;
    color: #706db1;
    background-color: #454389;
    text-align: center;
    font-size: 25px;
`
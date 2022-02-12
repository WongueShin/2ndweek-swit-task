import styled from "styled-components";

export const NavContainer = styled.div`
  height: 10vw;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  width: 70%;
  background-color: #e6e6ee;
  margin-left:50px;
  border-radius: 6px;
  box-shadow: inset 10px 10px 20px #cdcdd4,
            inset -10px -10px 20px #ffffff;
  input {
    width: 70%;
    outline:none;
    border:none;
    background-color: #e6e6ee;
    margin-left:30px;
  }
`;

export const Badge = styled.span`
position:absolute;
display: flex;
align-items: center;
justify-content: center;
top:0;
right:-5px;
width: 16px;
height: 16px;
border-radius: 4px;
color:#fff;
background-color:red;
font-size: 12px;
font-weight: bolder;
`

export const NavItemContainer = styled.div`
  width: 20%;
  display: flex;
  margin-right: 110px;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItem = styled.span`
  font-size: 22px;
  margin: 0 16px;
  color: #b5b5c6;
  position:relative;
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const LoginLight = styled.span<{ isLogin: boolean }>`
  border: 2px solid #fff;
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isLogin ? "green" : "red")};
  border-radius: 50px;
`;

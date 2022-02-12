import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell,faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "Components/TopBar/style.TopBar";
import UserProfile from "Components/UserProfile/index.UserProfile";
import { USER_PROFILE_PATH } from "Const/Constant";
import { RootState } from "../../Redux/index.Redux";
import { useSelector } from "react-redux";

const handleOnClick = ():void => {
  alert("데모버전에서는 지원하지않는 기능입니다.")
}

const Nav = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <S.NavContainer>
        <S.SearchBar>
        <form onSubmit={(e)=>{ e.preventDefault(); handleOnClick();}}>
          <input type="text" placeholder="🔎Search"/>
        </form>
        </S.SearchBar>
      <S.NavItemContainer>
      <S.NavItem onClick={()=>{handleOnClick()}}>
        <FontAwesomeIcon icon={faBell} />
        {user.isLogin && <S.Badge>2</S.Badge>}
      </S.NavItem>
      <S.NavItem onClick={()=>{handleOnClick()}}>
        <FontAwesomeIcon icon={faEnvelope} />
        {user.isLogin && <S.Badge>2</S.Badge>}
      </S.NavItem>
      <S.ProfileContainer onClick={()=>{handleOnClick()}}>
      <UserProfile USER_PROFLE_PATH={USER_PROFILE_PATH.ID_65bd3353} />
      <S.LoginLight isLogin={user.isLogin}/>
      </S.ProfileContainer>
      <S.NavItem>{user.userName}</S.NavItem>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default Nav;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell,faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "Components/TopBar/style.TopBar";
import UserProfile from "Components/UserProfile/index.UserProfile";
import { USER_PROFILE_PATH } from "Const/Constant";
import { RootState } from "../../Redux/index.Redux";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <S.NavContainer>
        <S.SearchBar>
        <S.NavItem>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <input type="text" placeholder="🔎Search"/>
        </form>
        </S.NavItem>
        </S.SearchBar>
      <S.NavItemContainer>
      <S.NavItem>
        <FontAwesomeIcon icon={faBell} />
        {user.isLogin && <S.Badge>2</S.Badge>}
      </S.NavItem>
      <S.NavItem>
        <FontAwesomeIcon icon={faEnvelope} />
        {user.isLogin && <S.Badge>2</S.Badge>}
      </S.NavItem>
      <S.ProfileContainer>
      <UserProfile USER_PROFLE_PATH={USER_PROFILE_PATH.ID_65bd3353} />
      <S.LoginLight isLogin={user.isLogin}/>
      </S.ProfileContainer>
      <S.NavItem>{user.userName}</S.NavItem>
      </S.NavItemContainer>
    </S.NavContainer>
  );
};

export default Nav;

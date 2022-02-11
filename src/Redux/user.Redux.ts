type userState = {
  userId: string;
  userName: string;
  isLogin: boolean;
};
const initialState: userState = {
  userId: '',
  userName: '',
  isLogin: false,
};

const ONLOGIN = 'ONLOGIN' as const;
const ONLOGOUT = 'ONLOGOUT' as const;

export interface userNameType {
  userName: string;
}
export const onLogin = (data: userNameType) => ({
  type: ONLOGIN,
  data,
});
export const onLogout = () => ({
  type: ONLOGOUT,
});

type UserAction = ReturnType<typeof onLogin> | ReturnType<typeof onLogout>;

const user = (
  state: userState = initialState,
  action: UserAction
): userState => {
  switch (action.type) {
    case ONLOGIN:
      return {
        ...state,
        userName: action.data.userName,
        userId: '65bd3353',
        isLogin: true,
      };
    case ONLOGOUT:
      return {
        ...state,
        userId: '65bd3353',
        userName: '',
        isLogin: false,
      };
    default:
      return state;
  }
};

export default user;

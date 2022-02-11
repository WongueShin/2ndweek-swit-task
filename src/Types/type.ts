export interface MockDataType {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
  isDel: boolean;
}

export type userState = {
  userId: string;
  userName: string;
  isLogin: boolean;
};
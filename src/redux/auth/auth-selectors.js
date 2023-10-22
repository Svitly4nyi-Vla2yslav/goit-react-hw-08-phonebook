import { useSelector } from "react-redux";

export const selectIsLoggedIn = state => state.auth.isLoggeIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const useAuth = () => {
    const isLoggeIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
  
    return {
      isLoggeIn,
      isRefreshing,
      user,
    };
  };
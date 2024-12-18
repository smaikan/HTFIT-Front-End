import { useSelector } from "react-redux";

export const useCurrentauth =()=> useSelector(state=>state.Auth.CurrentAuth);
export const useAuths =()=> useSelector(state=>state.Auth.Auths)
export const useCart =()=> useSelector(state=>state.Cart)


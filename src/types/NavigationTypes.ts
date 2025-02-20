import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    LOGIN: undefined;
    LOGOUT:undefined;
    FORGOT_PASSWORD: undefined;
    RESET_PASSWORD: { data?: any };
    SIGN_UP:undefined;
    LOADING_SCREEN:undefined;
    PRODUCT_LIST:undefined;
  };
export type loginScreenProp = NativeStackNavigationProp<RootStackParamList, 'LOGIN'>;
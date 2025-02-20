import EndPoint from "../api/ApiEndpoint";
import { postRequestWithoutToken } from "../api/ApiRequest";
import Toast from 'react-native-simple-toast'
import { useState } from "react";
import RNSecureStorage, { ACCESSIBLE } from "rn-secure-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { loginScreenProp } from "../types/NavigationTypes";
import { LOGIN, PRODUCT_LIST } from "../navigation/Routes";

const useLoginHook = () =>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const navigation = useNavigation<loginScreenProp>();
    const onSubmit = async(data: any) => {
        console.log("Login Data:", data);
        setIsLoading(true);
        const requestBody = {
            username:data.email,
            password:data.password,
            expiresInMins:79
        }
        const response = await postRequestWithoutToken(EndPoint.login, requestBody);
       setIsLoading(false);
        response?.message?Toast.show(response?.message, Toast.LONG):null;
        if(response?.accessToken && response?.refreshToken){
          navigation.dispatch(
            CommonActions.reset({
                index: 0, // Set the active route to the first screen
                routes: [{ name: PRODUCT_LIST }], // Specify the new stack
            })
        )
            RNSecureStorage.setItem('key1-accessToken', response.accessToken, {
                accessible: ACCESSIBLE.WHEN_UNLOCKED,
              }).catch(err => console.log(err));
              RNSecureStorage.setItem('key2-RefreshToken', response.refreshToken, {
                accessible: ACCESSIBLE.WHEN_UNLOCKED,
              }).catch(err => console.log(err));
              RNSecureStorage.setItem('key3-UserId', response.id, {
                accessible: ACCESSIBLE.WHEN_UNLOCKED,
              }).catch(err => console.log(err));
        }
        console.log("before product");
        
        
      };
      const onCheckLogin = async()=>{
        const BearerToken = await RNSecureStorage.getItem("key1-accessToken").catch((err) => {
            console.log(err)
          })
          if(BearerToken){
            navigation.dispatch(
                CommonActions.reset({
                    index: 0, // Set the active route to the first screen
                    routes: [{ name: PRODUCT_LIST }], // Specify the new stack
                })
            )
          }else{
            navigation.dispatch(
                CommonActions.reset({
                    index: 0, // Set the active route to the first screen
                    routes: [{ name: LOGIN }], // Specify the new stack
                })
            )
          }
      }
      const onLogout = async()=>{
        try{
          navigation.dispatch(
            CommonActions.reset({
                index: 0, // Set the active route to the first screen
                routes: [{ name: LOGIN }], // Specify the new stack
            })
        ) 
           await RNSecureStorage.removeItem("key1-accessToken");
           await RNSecureStorage.removeItem("key2-RefreshToken");
           await RNSecureStorage.removeItem("key3-UserId");
        }catch(err){
          console.log(err);
        }
      }
      return{
        onSubmit,isLoading,toggleCheckBox, setToggleCheckBox, onCheckLogin,onLogout
      }
};
export default useLoginHook;
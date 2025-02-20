import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";

const useSignup = () => {
  const navigation = useNavigation();
  const onSignup = useCallback((data: any) => {
    Alert.alert("Success", "Account created successfully!");
    navigation.goBack();
  }, []);

  return { onSignup };
};

export default useSignup;

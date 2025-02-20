import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import PrimaryButton from "../../../components/Buttons";
import globalStyle from "../../../styles/globalStyles";
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";
import { loginScreenProp } from "../../../types/NavigationTypes";
import { SIGN_UP } from "../../../navigation/Routes";
import useLoginHook from "../../../hooks/useLoginHook";
import Loader from "../../../components/Loader";
import CheckBox from '@react-native-community/checkbox';


const LoginScreen: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation<loginScreenProp>();
 const { onSubmit, isLoading,toggleCheckBox, setToggleCheckBox } = useLoginHook();
  

  return (
    <KeyboardAwareScrollView>
    <SafeAreaView style={[globalStyle.container, { justifyContent:"center"}]}>

      <Text style={styles.title}>Login</Text>
      
      <Controller
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyle.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={styles.errorText}>{String(errors.email.message)}</Text>}
      
      <Controller
        control={control}
        rules={{ 
          required: "Password is required", 
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyle.input}
            placeholder="Password"
            secureTextEntry={!toggleCheckBox}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>{String(errors.password.message)}</Text>}
      <View style={[globalStyle.rowView, {alignItems:"center"}]}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text>View Password</Text>
      </View>
      
      
      <PrimaryButton title="Login" onPress={handleSubmit(onSubmit)}/>
      
      <TouchableOpacity style={globalStyle.selfCenter} onPress={()=> navigation.navigate(SIGN_UP)}>
        <Text style={styles.forgotText}>Sign Up</Text>
      </TouchableOpacity>
      <Loader visible={isLoading}/>
    </SafeAreaView>
    </KeyboardAwareScrollView>

  );
};

export default LoginScreen;

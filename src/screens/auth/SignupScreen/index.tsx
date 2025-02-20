import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import useSignup from "../../../hooks/useSignup";
import PrimaryButton from "../../../components/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import globalStyle from "../../../styles/globalStyles";

const SignupScreen: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { onSignup } = useSignup();

  return (
    <KeyboardAwareScrollView>
    <SafeAreaView style={[globalStyle.container,{justifyContent:"center"}]}>
      <Text style={styles.title}>Signup</Text>
      
      <Controller
        control={control}
        rules={{ required: "First name is required",
            pattern: { value: /^[A-Za-z]+$/, message: "First name should contain only letters" }
         }}
        
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyle.input}
            placeholder="First Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.errorText}>{String(errors.firstName.message)}</Text>}
      
      <Controller
        control={control}
        rules={{ required: "Last name is required",
            pattern: { value: /^[A-Za-z]+$/, message: "First name should contain only letters" }
         }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyle.input}
            placeholder="Last Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />
      {errors.lastName && <Text style={styles.errorText}>{String(errors.lastName.message)}</Text>}
      
      <Controller
        control={control}
        rules={{ 
          required: "Email is required", 
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
        }}
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
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
            message: "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyle.input}
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text style={styles.errorText}>{String(errors.password.message)}</Text>}
      
      <Controller
        control={control}
        rules={{ required: "Phone number is required",
            pattern: { value: /^\d{10}$/, message: "Phone number must be 10 digits" }
         }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={globalStyle.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
        defaultValue=""
      />
      {errors.phone && <Text style={styles.errorText}>{String(errors.phone.message)}</Text>}
      
      <PrimaryButton onPress={handleSubmit(onSignup)} title="Signup"/>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default SignupScreen;

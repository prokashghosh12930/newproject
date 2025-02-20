import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import globalStyle from "../../../styles/globalStyles";
import styles from "./styles";
import useLoginHook from "../../../hooks/useLoginHook";

const LogoutScreen: React.FC = () => {
  const {onLogout} = useLoginHook();

  return (
    <SafeAreaView style={[globalStyle.container, {alignItems:"center", justifyContent:"center"}]}>
      <View style={styles.align}>
      <Text style={styles.title}>Are you sure you want to logout?</Text>
      <TouchableOpacity style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};



export default LogoutScreen;

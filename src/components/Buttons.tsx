import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { PRIMARY } from "../styles/colors";
import { PrimaryButtonProps } from "../types/ComponentProps";
import { verticalScale } from "../utils/Metrix";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY, 
    borderRadius: 20,
    width: "100%",
    height: verticalScale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PrimaryButton;

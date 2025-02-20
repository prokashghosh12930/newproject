import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { HeaderProps } from "../types/ComponentProps";
import { LOGOUT } from "../navigation/Routes";
import { ImageBackgroundColor, LightGrayColor, PRIMARY, SkyColor } from "../styles/colors";
import { moderateScale } from "../utils/Metrix";

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false, }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(LOGOUT)} style={styles.button}>
        <Icon name="log-out" size={24} color={PRIMARY} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: PRIMARY,
  },
  button: {
    padding: 8,
  },
});

export default Header;

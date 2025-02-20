import { StyleSheet } from "react-native";
import { DeleteButtonColor } from "../../../styles/colors";

const styles = StyleSheet.create({
  
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    button: {
      backgroundColor: DeleteButtonColor,
      padding: 12,
      borderRadius: 5,
      alignItems: "center",
      width: "90%",
      alignSelf:"center"
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    align:{
      alignItems:"center",
      justifyContent:"center",
    }
  });
export default styles;

import { StyleSheet } from "react-native";

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
    forgotText: {
      marginTop: 10,
      color: "#007bff",
    },
    errorText: {
      color: "red",
      marginBottom: 10,
    },
  });

export default styles;
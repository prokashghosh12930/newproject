import { StyleSheet, DimensionValue, Dimensions } from "react-native";
import { BorderColor, PRIMARY } from "./colors";

const globalStyle = StyleSheet.create({
    container: {
        height:Dimensions.get("screen").height,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
      },
      input: {
        width: "100%",
        padding: 10,
        borderWidth: 3,
        borderColor: PRIMARY,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: "#fff",
      },
      rowView:{
        flexDirection:'row',
      },
      selfCenter:{
        alignSelf:"center",
      }
});
export default globalStyle;

import React from "react";
import { View, ActivityIndicator, Modal, StyleSheet } from "react-native";
import { LoaderProps } from "../types/ComponentProps";
import { horizontalScale, verticalScale } from "../utils/Metrix";

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loaderContainer: {
    width: horizontalScale(100),
    height:verticalScale(100),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Loader;

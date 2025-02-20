import { View, Text, Image, StyleSheet, } from "react-native";
import { Product } from "../types/ComponentProps";
import { horizontalScale, verticalScale } from "../utils/Metrix";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.rating}>*{product.rating}</Text>
          <Text style={styles.stock}>Stock: {product.stock}</Text>
        </View>
      </View>
    );
  };
export default ProductCard;

  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10,
      marginVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height:verticalScale(2) },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    image: {
      width: horizontalScale(80),
      height:verticalScale(80),
      borderRadius: 10,
    },
    cardContent: {
      marginLeft: 10,
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    brand: {
      fontSize: 14,
      color: "gray",
    },
    price: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#007bff",
    },
    rating: {
      fontSize: 14,
      color: "#ff9800",
    },
    stock: {
      fontSize: 12,
      color: "red",
    },
  });
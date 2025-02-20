import React from "react";
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import globalStyle from "../../../styles/globalStyles";
import { height } from "../../../utils/Metrix";
import { Product } from "../../../types/ComponentProps";
import ProductCard from "../../../components/ProductCard";
import Header from "../../../components/Header";


const products: Product[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    brand: "Essence",
    thumbnail: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];



const ProductListScreen: React.FC = () => {
  return (
    <SafeAreaView style={globalStyle.container}>
      <Header title="Products"/>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        style={{width:"100%"}}
      />

      
    </SafeAreaView>
  );
};

export default ProductListScreen;

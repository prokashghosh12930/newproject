import React from "react";
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import globalStyle from "../../../styles/globalStyles";
import { height } from "../../../utils/Metrix";
import { Product } from "../../../types/ComponentProps";
import ProductCard from "../../../components/ProductCard";
import Header from "../../../components/Header";
import { products } from "../../../constants/dummy";

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

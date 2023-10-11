import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProductsDetailsPageProps } from "../navigation/ProductsStack";
import { useEffect, useState } from "react";
import { Product, fetchProductDetails } from "../api/api";


const ProductDetails = ({ route }: ProductsDetailsPageProps) => {
    const { id } = route.params;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const productData = await fetchProductDetails(id);
                console.log(productData);
                setProduct(productData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            { product && (
                <>
                <Image  style={styles.productImage}source={{ uri: product.product_image }} />
                <Text style={styles.productName}>{product.product_name}</Text>
                <Text style={styles.productCategory}>{product.product_category}</Text>
                <Text style={styles.productDescription}>{product.product_description}</Text>
                <Text style={styles.productPrice}>${product.product_price}</Text>
            

                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20,
    },
    productImage: {
        height: 300,
        resizeMode: 'contain',
        borderRadius: 8,   
    },
    productName:{
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",   
    },
    productPrice:{   
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    productCategory:{
        marginTop: 5,
        fontSize: 16,
        color: "#666",
    },
    productDescription:{
        marginTop: 10,
        fontSize: 16,
    },
});

export default ProductDetails;
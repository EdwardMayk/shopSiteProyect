import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProductsDetailsPageProps } from "../navigation/ProductsStack";
import { useEffect, useState } from "react";
import { Product, fetchProductDetails } from "../api/api";
import useCartStore from "../state/cartStore";
import { Ionicons } from '@expo/vector-icons';


const ProductDetails = ({ route }: ProductsDetailsPageProps) => {
    const { id } = route.params;
    const [product, setProduct] = useState<Product | null>(null);
    const { products, addProduct, reduceProduct } = useCartStore((state) => ({
        products: state.products,
        addProduct: state.addProduct,
        reduceProduct: state.reduceProduct,
    }));
    const [ count, setCount] = useState(0);

    useEffect(() => {
        console.log('UPDATE PRODUCTS');

        updateProductQuantity();
    }, [products]);

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

    const updateProductQuantity = () => {
        const result = products.filter(p => p.id === id);
        if (result.length > 0) {
            setCount(result[0].quantity);
        } else {
            setCount(0);
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            { product && (
                <>
                <Image  style={styles.productImage}source={{ uri: product.product_image }} />
                <Text style={styles.productName}>{product.product_name}</Text>
                <Text style={styles.productCategory}>{product.product_category}</Text>
                <Text style={styles.productDescription}>{product.product_description}</Text>
                <Text style={styles.productPrice}>${product.product_price}</Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => reduceProduct(product)}
                    
                    >
                        <Ionicons name="remove" size={24} color={'#1FE687'} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{count}</Text>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => addProduct(product)}
                    >
                        <Ionicons name="add" size={24} color={'#1FE687'} />
                    </TouchableOpacity>
                </View>
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
    buttonsContainer:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
    },
    button: {
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
        flex: 1,
        borderColor: "#1FE687",
        borderWidth: 1,
    },
    quantity:{
        fontSize: 26,
        width: 50,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default ProductDetails;
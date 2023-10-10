import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { fetchProducts } from "../api/api";


const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const load = async () => {
            const data = await fetchProducts();
            console.log("Products", data);
            setProducts(data);
        }
        load();
    }, []);

    return (
        <View>
            <Text>Products</Text>
        </View>
    );

}
export default Products;
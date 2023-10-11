import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";


type ProcuctsStackParamList = {
    Products: undefined;
    ProductDetails: { id: number };
};


const ProductsStack = createNativeStackNavigator<ProcuctsStackParamList>();

export type ProductsProps = NativeStackScreenProps<ProcuctsStackParamList, "Products">;

export type ProductsDetailsPageProps = NativeStackScreenProps<ProcuctsStackParamList, "ProductDetails">;



const ProductsStackNav = () => {
    return (
        <ProductsStack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1FE687",
                },
                headerTintColor: "#141414",
            }}
        >
        <ProductsStack.Screen name="Products" component={Products} options={{
                headerTitle: "Neon Shop",
        }} />
        <ProductsStack.Screen name="ProductDetails" component={ProductDetails} options={{
                headerTitle: "",
        }} />
        </ProductsStack.Navigator>
    );
};

export default ProductsStackNav;
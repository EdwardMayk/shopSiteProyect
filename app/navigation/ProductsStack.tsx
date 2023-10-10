import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";


type ProcuctsStackParamList = {
    Products: undefined;
    ProductDetails: { id: number };
};


const ProductsStack = createNativeStackNavigator<ProcuctsStackParamList>();


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
        </ProductsStack.Navigator>
    );
};

export default ProductsStackNav;
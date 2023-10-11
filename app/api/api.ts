const API_URL = process.env.EXPO_PUBLIC_API_URL


export interface Product {
    id: number;
    product_name: string;
    product_category: string;
    product_description: string;
    product_price: number;
    product_stock: number;
    product_image: string;
}

interface CreateOrder {
    email: string;
    products: Array<{ product_id: number; quantity: number }>;
}

export interface Order {
    id: number;
    order_date: string;
    customer_email: string;
    total: number;   
}

export async function fetchProducts(): Promise<Product[]> {
    try{
        const response = await fetch(`${API_URL}/products`);
        return await response.json();
    } catch (error) {
        return error
    }
}

export async function fetchProductDetails(productId: number): Promise<Product | null>{
    try{
        const response = await fetch(`${API_URL}/products/${productId}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching product details', error);
        return null;
    }
}
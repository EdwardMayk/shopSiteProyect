import { create } from 'zustand';
import { Product } from '../api/api';


export interface CartState {
    products: Array<Product & { quantity: number }>;
    addProduct: (product: Product) => void;
    reduceProduct: (product: Product) => void;
    clearCart: () => void;
    total: number;
}

const useCartStore = create<CartState>((set) => ({
    products: [],
    total: 0,
    addProduct: (product: Product) => 
        set((state) => {
            return null;
        }),
        reduceProduct: (product: Product) => (null),
        clearCart: () => 
        set((state) => {
            state.total = 0;
            return {
                products: [],
            };
        }),
}));

export default useCartStore;
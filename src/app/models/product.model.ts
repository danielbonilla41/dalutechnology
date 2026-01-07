export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    description: string;
    image: string;
    linkMeli?: string;
}
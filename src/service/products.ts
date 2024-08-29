import path from 'path';
import {promises as fs} from 'fs';

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
}

// getProducts 호출 시, 제품의 정보 제공
export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(process.cwd(), 'data', 'products.json'); // products.json file 경로
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

// 객체의 정보 전달
// 전달된 ID에 한하여 해당하는 제품 리턴
export async function getProduct(id: string): Promise<Product | undefined>{
    const products = await getProducts();
    return products.find(item => item.id === id);
}
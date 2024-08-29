import { getProducts } from '@/service/products';
import Link from "next/link";
import {Metadata} from "next";
import MeowArticle from "@/app/components/MeowArticle";
import Image from "next/image";
import clothesImage from '../../../public/image/clothes.jpg';

export const metadata: Metadata = {
    title: '멋진 제품 사이틑 | 전체 제품 확인',
    description: '멋진 제품을 확인해 보세ㅛㅇ.'
}

//export const revalidate = 3;

export default async function ProductsPage() {
    // 서버 파일(데이터 베이스)에 있는 제품의 레스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();

    const res = await fetch('https://meowfacts.herokuapp.com', {
        next: { revalidate: 0},
        cache: 'no-store'
    });
    const data = await res.json();
    const factText = data.data[0];

    return (
        <>
            <h1>제품 설명 페이지</h1>
            <Image src={clothesImage} alt='Clothes' priority/>
            <ul>
                {products.map((product, index) => 
                    <li key={index}>
                        <Link href={`products/${product.id}`}>{product.name}</Link>
                    </li>
                )}
            </ul>
            <MeowArticle/>
        </>
    )
}
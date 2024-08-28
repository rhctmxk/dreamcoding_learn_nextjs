/**
 * @description: 정적인 Static Route 가 아닌 동적인 Dynamic Route 를 의미하는 페이지 '[keyword]'
 * */
import {Metadata} from "next";
import {getProduct, getProducts} from "@/service/products";
import {notFound} from "next/navigation";

//export const revalidate = 3;

type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({params}: Props) {
    return{
        title: `제품의 이름: ${params.slug}`,
    }
}

export default async function PantsPage({params : {slug}}: Props) {
    const product = await getProduct(slug);

    if(!product) {
        notFound();
    }

    return <h1>{product.name} 제품 설명 페이지!</h1>
}

/**
 * @desc: Dynamic Route Page 안에서 특정한 경로에 한해 미리 페이지를 만들고 싶을 때
 * */
export async function generateStaticParams() {
    // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
    // 렌더링 하고 싶은 경로
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id,
    }));
}

/**
 * @desc:
 * (1) generateStaticParams 사용 X: Props으로 전달해서 데이터를 채워 HTML을 만든 걸 사용자가 요청할 때 SSR 가 발생
 * (2) generateStaticParams 사용 O: Build 할때, 미리 요청한 페이지들을 만들어 놓느냐
 * -> 기본 골격을 가지고 있고, Props 을 받는 Component Page
 * */
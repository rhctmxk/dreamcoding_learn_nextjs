/**
 * @description: 정적인 Static Route 가 아닌 동적인 Dynamic Route 를 의미하는 페이지 '[keyword]'
 * */

type Props = {
    params: {
        slug: string;
    }
}

export default function PantsPage({params}: Props) {
    return <h1>{params.slug} 제품 설명 페이지!</h1>
}

/**
 * @desc: Dynamic Route Page 안에서 특정한 경로에 한해 미리 페이지를 만들고 싶을 때
 * */
export function generateStaticParams() {
    // 렌더링 하고 싶은 경로
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug: product
    }))
}

/**
 * @desc:
 * (1) generateStaticParams 사용 X: Props으로 전달해서 데이터를 채워 HTML을 만든 걸 사용자가 요청할 때 SSR 가 발생
 * (2) generateStaticParams 사용 O: Build 할때, 미리 요청한 페이지들을 만들어 놓느냐
 * -> 기본 골격을 가지고 있고, Props 을 받는 Component Page
 * */
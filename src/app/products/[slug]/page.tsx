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
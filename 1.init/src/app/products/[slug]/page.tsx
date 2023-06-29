type Props = {
    params: {
        slug: string;
    }
}

export default function PantsPage({ params }: Props) {
    return <h1>{params.slug} 제품 설명 페이지</h1>;
}

export function generateStaticParams() { // 규격사항. 다이나믹 라우트 페이지에서 특정한 경로에 대해서 페이지를 만들고 싶을떄 경로를 알려줌
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug: product
    }))

}
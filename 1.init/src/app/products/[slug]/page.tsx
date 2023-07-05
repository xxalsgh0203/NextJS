import { getProduct, getProducts } from "@/service/products";

type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    };
}

export default function PantsPage({ params: { slug } }: Props) {
    const product = getProduct(slug);

    // if (!product) {

    // }
    return <h1>{product} 제품 설명 페이지</h1>;
}

export function generateStaticParams() { // 규격사항. 다이나믹 라우트 페이지에서 특정한 경로에 대해서 페이지를 만들고 싶을떄 경로를 알려줌
    const products = getProducts();
    return products.map(product => ({
        slug: product
    }))

}
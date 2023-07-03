import Link from "next/link";
import styles from './layout.module.css'

const products = ['pants', 'Shirts', 'Skirts', 'Shoes'];

export default function ProductPage() {
    return <>
        <h1>제품페이지</h1>
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    <Link href={`/products/${product}`}>{product}</Link>
                </li>
            ))}
        </ul >

    </>;
}
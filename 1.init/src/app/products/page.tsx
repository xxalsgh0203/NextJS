import Link from "next/link";
import styles from './layout.module.css'
import { getProducts } from "@/service/products";


export default function ProductPage() {
    const products = getProducts();
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
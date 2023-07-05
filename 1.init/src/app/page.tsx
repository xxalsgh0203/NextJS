import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Counter from '@/component/Counter'
// import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // notFound();
  console.log('안녕하세요!');
  return (
    <>
      <Counter></Counter>
      <h1>홈페이지다!</h1>
    </>
  )
}

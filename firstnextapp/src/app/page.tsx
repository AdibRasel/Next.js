import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      Hi this is Home Page

      <h1 className="text-3xl font-bold underline text-stone-950 p-5 bg-green-500">
        Hello world!
      </h1>

      

    </>
  )
}

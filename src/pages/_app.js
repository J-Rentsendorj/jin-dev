import { Footer } from '@/compounents/Footer'
import NavBar from '@/compounents/NavBar'
import '@/styles/globals.css'
import { Cinzel } from "next/font/google"
import Head from 'next/head'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: [ "400", "700" ]
})

export default function App({ Component, pageProps }) {
  // const router = useRouter()

  // useEffect(() => {
  //   router.replace('/intro')
  // }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href='/images/icon.png' />
      </Head>

      <main className={`${cinzel.varaible} font.cinzel`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}


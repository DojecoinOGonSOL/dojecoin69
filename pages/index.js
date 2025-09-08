import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Community from '../components/Community'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>$DOJECOIN - The First Derivative of Dogecoin from 2014</title>
        <meta name="description" content="Experience the evolution of the classic meme. $DOJECOIN brings the original Dojecoin spirit to the Solana Network with community-driven features." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Community />
        </main>
        <Footer />
      </div>
    </>
  )
}

import Head from 'next/head';
import Navbar from "../components/Navbar";


export default function Home({ meta }) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main className="w-full min-h-screen">
        <img className="fixed -z-20 min-w-full min-h-full max-w-none max-h-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src='\images\bg.jpg'>
        </img>

        <div className="w-full h-full bg-black/60 -z-10 fixed">
        </div>

        <div className="min-h-screen flex flex-col md:px-[10%] lg:px-[15%] 2xl:px-[20%] 4xl:px-[25%]">
          <Navbar />
          <div className="flex-grow p-8 md:px-0 flex flex-col justify-between">
            {/* 1st item */}
            <div className='flex flex-col gap-8 mt-24'>
              <h1 className='font-mercedes text-[42px] 2xl:text-5xl'>Maschine</h1>
              <h2 className='font-aktiv-light text-2xl'>
                Coming soon — a collection about velocity and perception.
              </h2>
            </div>

            {/* 2nd item */}
            <div className='flex flex-col md:flex-row gap-4 md:items-center mb-12'>
              <h2 className='font-aktiv-light text-lg md:text-xl'>
                By Harm van den Dorpel, in partnership with Mercedes-Benz and Fingerprints DAO.
              </h2>
              <div className='flex flex-row gap-5 items-center'>
                <a href="https://harm.work/">
                  <img src="Harm Studio.svg" alt="" className='w-12' />
                </a>
                <a href="https://www.mercedes-benz.com/en/">
                  <img src="Mercedes Logo.svg" alt="" className='w-12' />
                </a>
              </div>
            </div>

          </div>
        </div>
        {/* <Footer custom={'border-t-2'}/> */}
      </main >
    </div>
  )
}

export async function getStaticProps() {
  const meta = {
    title: 'Maschine',
    description: 'A project by Harm van den Dorpel in partnership with Mercedes-Benz and Fingerprints DAO.',
    navPage: 'home',
    image: '/images/seo.png',
  }

  return {
    props: {
      meta,
    },
  }
}

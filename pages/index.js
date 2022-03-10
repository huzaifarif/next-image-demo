import Head from 'next/head'
import Image from 'next/image';

const myLoader = ({ src }) => `${src}`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>next/image Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          loader={myLoader}
          layout="fill"
          src="https://bit.ly/3pTgJrM"
        />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

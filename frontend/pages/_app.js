import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import store from "@/store/store";
import { Provider } from "react-redux";

import Head from "next/head";
const structData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  headline: "Melody Shoes or Shop Melody Shoes",
  description: "Demo Nike Store made by Abdulqadir Bhinderwala",
  author: [
    {
      "@type": "Person",
      name: "Abdulqadir Bhinderwala",
    },
  ],
  datePublished: "2023-06-07T22:00:00.000Z",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nike | Abdulqadir</title>
        <meta
          name="description"
          content="Nike official website. Abdulqadir's personal project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          key="structured-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
        />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

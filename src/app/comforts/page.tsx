
// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import HotelCategories from '../../components/HotelCategories';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hotel Room Categories</title>
        <meta name="description" content="Explore our hotel room categories and amenities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HotelCategories />
      </main>
    </>
  );
};

export default HomePage;
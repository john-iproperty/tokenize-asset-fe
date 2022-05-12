import { useState } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';

import { GlobalFooter } from '@propertyguru/hive-ui-widgets';
import { Header, Hero, ListingCardList, LoginModal } from '../../components';

import data from './data/common';
import { footerData } from './data/footer';
import API_ROUTES from './data/api';

export async function getServerSideProps() {
  const resp = await fetch(API_ROUTES.listings);
  const { listings } = await resp.json();

  return { props: { listings } };
}

export default function Home({ listings }) {
  const contactDetails = {
    searchItems: { placeholder: 'PropertyGuru Search' },
    contactLinks: footerData.contactLinks,
  };

  const seoData = JSON.parse(JSON.stringify(footerData.seoData));
  Object.keys(footerData.seoData).forEach((seoDataKey) => {
    seoData[seoDataKey] = parse(seoData[seoDataKey]);
  });

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLoginModalClose = () => setLoginModalOpen(false);

  const handleLoginPress = () => setLoginModalOpen(true);

  const onLoginSubmit = async (data) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    console.log(response.json());
  };

  return (
    <div>
      <Head>
        <title>PropertyGuru Invest - Property investment made simple</title>
      </Head>
      <Header navLinks={[]} onLoginPress={handleLoginPress} />
      <LoginModal title={data.loginModal.title} isOpened={isLoginModalOpen} onClose={handleLoginModalClose} onSubmit={onLoginSubmit} />
      <Hero title={data.hero.title} subtitle={data.hero.subtitle} />
      <ListingCardList listings={listings} />
      <GlobalFooter
        data={{
          contactSegment: contactDetails,
          sitemapSegment: footerData.siteMapData,
          copyrightSegment: footerData.copyrightDetails,
          countrySelectSegment: footerData.countryDropDownDetails,
          socialSegment: footerData.socialDetails,
          marketSegment: footerData.marketDetails,
          seoSegment: seoData,
        }}
      />
    </div>
  );
}

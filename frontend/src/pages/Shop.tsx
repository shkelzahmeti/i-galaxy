// This will be our Homepage

import Hero from "../components/hero/Hero";
import NewCollections from "../components/new-collections/NewCollections";
import NewsLetter from "../components/newsletter/NewsLetter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;

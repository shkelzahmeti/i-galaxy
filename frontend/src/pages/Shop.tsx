// This will be our Homepage

import Hero from "../components/hero/Hero";
import NewSmartphones from "../components/new-smartphones/NewSmartphones";
import NewsLetter from "../components/newsletter/NewsLetter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewSmartphones />
      <NewsLetter />
    </div>
  );
}

export default Shop;

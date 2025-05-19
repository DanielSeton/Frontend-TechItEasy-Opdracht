import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTv from "./Helpers/soldTv.js";
import boughtTv from "./Helpers/boughtTv.js";
import toSellTv from "./Helpers/toSellTv.js";
import createPrice from "./Helpers/createPrice.js";
import createProduct from "./Helpers/createProduct.js";
import createTvInfo from "./Helpers/createTvInfo.js";
import {opdracht1A, opdracht1B, opdracht1C, opdracht1D} from './constants/oefenbestand.js';

function App() {
    opdracht1A();
    opdracht1B();
    opdracht1C();
    opdracht1D();

    function sortByBestSeller(){
        inventory.sort((a, b) => {
            return b.sold - a.sold;
    });

        console.log('Best verkochte geklikt ' + inventory);
    }

    function sortByCheapest(){
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log('Goedkoopste geklikt ' + inventory);
    }

    function sortBestForSport(){
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });

        console.log('Beste sport geklikt ' + inventory);
    }

  return (
  <main className="page-container">
      <h1>Tech it easy dashboard</h1>
      <section>
        <h2>Verkoopoverzicht</h2>
          <div className="dashboard-container">
              <article className="dashboard-item items-sold">
                  <h3>Aantal verkochte producten</h3>
                  <h2>{soldTv(inventory)}</h2>
              </article>
              <article className="dashboard-item items-bought">
                  <h3>Aantal ingekochte producten</h3>
                  <h2>{boughtTv(inventory)}</h2>
              </article>
              <article className="dashboard-item items-tobesold">
                  <h3>Aantal te verkopen producten</h3>
                  <h2>{toSellTv(inventory)}</h2>
              </article>
          </div>
      </section>
      <section>
          <h2>Best verkochte TV</h2>
          <div className="product-container">
              <article className="product-article">
                  <span className="tv-image">
                        <img src={bestSellingTv.sourceImg} alt="image van beste tv"/>
                  </span>
                  <div className="tv-info">
                      <h3>{createProduct(bestSellingTv)}</h3>
                      <p className="price-name">{createPrice(bestSellingTv.price)}</p>
                      <p>{createTvInfo(bestSellingTv.availableSizes)}</p>
                      <ul className="option-list">
                          <li><img src="src/assets/check.png" className="icon"/>wifi</li>
                          <li><img src="src/assets/minus.png" className="icon"/>speech</li>
                          <li><img src="src/assets/check.png" className="icon"/>hdr</li>
                          <li><img src="src/assets/check.png" className="icon"/>bluetooth</li>
                          <li><img src="src/assets/minus.png" className="icon"/>ambilight</li>
                      </ul>
                  </div>
              </article>
          </div>
      </section>
      <section>
          <h2>Beschikbare merken</h2>
          <div>
              <ul>
                  {inventory.map((tv) => {
                      return <li key={'merkenlijst-${tv.name}'}>{tv.brand}</li>
                  })}
              </ul>
          </div>
      </section>
      <section>
          <h2>Alle tvs</h2>
          <button name="most-sold-button" type="button" onClick={sortByBestSeller}>Meest verkocht eerst</button>
          <button name="cheap-button" type="button" onClick={sortByCheapest}>Goedkoopste eerst</button>
          <button name="best-sport-button" type="button" onClick={sortBestForSport}>Meest geschikt voor sport eerst</button>
          {inventory.map((tv) => {
              return (
                  <article className="product-article" key={tv.type}>
                  <span className="tv-image">
                        <img src={tv.sourceImg} alt="image van beste tv"/>
                  </span>
                      <div className="tv-info">
                          <h3>{createProduct(tv)}</h3>
                          <p className="price-name">{createPrice(tv.price)}</p>
                          <p>{createTvInfo(tv.availableSizes)}</p>
                          <ul className="option-list">
                              {tv.options.map((option) => {
                                  if (option.applicable === true) {
                                      return <li key={`${tv.type}-${option.name}`}>
                                          <img src="src/assets/check.png" className="icon"/>
                                          {option.name}
                                      </li>
                                  } else {
                                      return <li key={`${tv.type}-${option.name}`}>
                                          <img src="src/assets/minus.png" className="icon"/>
                                          {option.name}
                                      </li>
                                  }
                              })}
                          </ul>
                      </div>
                  </article>
              )
          })}
      </section>
  </main>
  )
}

export default App

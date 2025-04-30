import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTv from "./Helpers/soldTv.js";
import boughtTv from "./Helpers/boughtTv.js";
import toSellTv from "./Helpers/toSellTv.js";
import createPrice from "./Helpers/createPrice.js";
import createProduct from "./Helpers/createProduct.js";
import createTvInfo from "./Helpers/createTvInfo.js";

function App() {

  return (
  <main className="page-container">
      <h1>Tech it easy dashboard</h1>
      <section>
          <button name="most-sold-button" type="button" onClick={() => console.log("Meest verkocht button geklikt")}>Meest verkocht eerst</button>
          <button name="cheap-button" type="button" onClick={() => console.log("Goedkoopste button geklikt")}>Goedkoopste eerst</button>
          <button name="best-sport-button" type="button" onClick={() => console.log("Beste sport button geklikt")}>Meest geschikt voor sport eerst</button>
      </section>
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
          <div className="best-seller-container">
              <article className="best-seller-article">
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
  </main>
  )
}

export default App

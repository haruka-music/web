import React from "react";
import Image from "next/image";
import classes from "../Card/card.module.css";
import eggs from "../../../public/eggs.jpg";
import pizza from "../../../public//pizza.jpg";
import wine from "../../../public//wine.jpg";
import cake from "../../../public//cake.jpg";
import juice from "../../../public/juice.jpg";
import ice from "../../../public/ice.jpg";
import hamburger from "../../../public/hamburger.jpg";
import waffle from "../../../public/waffle.jpg";

const card = () => {
  return (
    <>
      <section className={classes.section}>
        <ul className={classes.Grid}>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <span className={classes.label}>New</span>
              <Image
                className={classes.image}
                src={eggs}
                alt="eggs"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <span className={classes.label}>New</span>
              <Image
                className={classes.image}
                src={pizza}
                alt="pizza"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <Image
                className={classes.image}
                src={wine}
                alt="wine"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <Image
                className={classes.image}
                src={cake}
                alt="cake"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <Image
                className={classes.image}
                src={juice}
                alt="cake"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <span className={classes.label}>New</span>
              <Image
                className={classes.image}
                src={ice}
                alt="eggs"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <span className={classes.label}>New</span>
              <Image
                className={classes.image}
                src={hamburger}
                alt="pizza"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
          <li className={classes.GridItem}>
            <article className={classes.Card}>
              <span className={classes.label}>New</span>
              <Image
                className={classes.image}
                src={waffle}
                alt="pizza"
                width={200}
                height={200}
              />
              <div className={classes.info}>
                <h1 className={classes.price}>$9.99</h1>
                <h2 className={classes.headline}>Fried Egge</h2>
                <p className={classes.description}>
                  Made with eggs. lettuce,salt,oil
                  <br />
                  and other ingredients.
                </p>
              </div>
              <a href="#" className={classes.CardLink}>
                <button>submit</button>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default card;

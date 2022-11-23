import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import IconArrowForward from '../components/IconArrowForward/IconArrowForward'
import LocationCarousel from '../components/LocationCarousel/LocationCarousel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome Homes</title>
        <meta name="description" content="Welcome Homes demo app" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=0" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <div className={styles.flex}>
              <div className={styles.titleWrapper}>
                <h1 className="display-1">We make building a new home possible</h1>
                <p>A new home is so much better than a used one- Welcome makes the process of building a home super-simple. We handle everything at a guaranteed all-in price.</p>
                <div className={styles["btn-row"]}>
                  <a href="#" className="btn-link">Our models</a>
                  <a href="#" className="btn-outline-link">Explore towns</a>
                </div>
              </div>
              <div className={styles.carouselWrapper}>
                <HeroCarousel/>
              </div>
            </div>
          </div>
        </section>
        <section className={`section theme-dark ${styles.how}`}>
          <div className="container">
            <h2 className="display-2">How it works</h2>
            <div className={styles.grid}>
              <div>
                <div className={styles.icon}>
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z"></path>
                  </svg>
                </div>
                <h3>Select & Customize</h3>
                <p>Our architects & designers have developed beautiful transitional homes in 3, 4 and 5 bedroom options with more on the way! The designs are thoughtful around real world living and we have tons of upgrades to make life amazing in your new home</p>
              </div>
              <div>
                <div className={styles.icon}>
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
                    <circle cx="12" cy="9" r="2.5"></circle>
                  </svg>
                </div>
                <h3>Choose the best location</h3>
                <p>We operate in 703 towns with more towns being added every week Our team reviews every available parcel the towns we cover and offer a guaranteed all-in price for each.</p>
              </div>
              <div>
                <div className={styles.icon}>
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path>
                  </svg>
                </div>
                <h3>Financing & Closing</h3>
                <p>Financing is simple with Welcome&apos;s banking partners, who can help vou secure a construction loan that will cover your whole project and transitions to a permanent mortgage when your house is ready.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`section ${styles.where}`}>
          <div className={styles.container}>
            <div className={styles["section-head"]}>
              <h2 className="display-2">Live where you want to live</h2>
              <p>We currently service the Greater Metro areas of New York City, Washington D.C. & Philadelphia. <br /> Check back as we add more regions throughout the country</p>
            </div>
            <div className={styles.carouselWrapper}>
              <LocationCarousel/>
            </div>
          </div>
        </section>
        <section className={`section ${styles.models}`}>
          <div className="container">
            <div className="section-head">
              <h2 className="display-2">Our models</h2>
              <p>Compare our models to find the perfect home for you, customized to your liking.</p>
            </div>
          </div>
        </section>
        <section className={`section ${styles.information}`}>
          <div className="container">
            <div className={styles.flex}>
              <div className={styles.imgWrapper}>
                <Image src="/images/more-info.jpg" alt="" fill />
              </div>
              <div className={styles.listWrapper}>
                <h2 className="display-2">Browse more information</h2>
                <ul className={styles.linkList}>
                  <li><a href="#">Frequently asked questions <span className={styles.iconWrapper}><IconArrowForward/></span></a></li>
                  <li><a href="#">How it works <span className={styles.iconWrapper}><IconArrowForward/></span></a></li>
                  <li><a href="#">Learn more about our models <span className={styles.iconWrapper}><IconArrowForward/></span></a></li>
                  <li><a href="#">Check out our land inventory <span className={styles.iconWrapper}><IconArrowForward/></span></a></li>
                  <li><a href="#">Check out our blog <span className={styles.iconWrapper}><IconArrowForward/></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

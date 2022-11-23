import Head from 'next/head'
import styles from '../styles/About.module.scss'
export default function About() {
  return (
    <div className={styles.about}>
      <Head>
        <title>Welcome Homes</title>
        <meta name="description" content="Welcome Homes demo app" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=0" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <svg id="dl-logo" className={styles["dl-logo"]} viewBox="0 0 100 100">
        <path id="d" fill="#000000" d="m 10.1,30 28,0 c 3.8,0.2 6.8,0.9 9.1,2.2 2.6,1.5 4.6,3.6 6.1,6.5 1.5,2.9 2.3,6.3 2.3,10.4 0,4 -0.7,7.5 -2.2,10.7 -1.4,3.1 -3.6,5.6 -6.3,7.4 -2.8,1.8 -6.6,2.7 -11.4,2.7 l -16.5,0 0,-24.5 8.3,0 0,18.8 6.2,0 c 3.2,0 5.7,-0.5 7.4,-1.5 1.7,-1 3.1,-2.7 4.1,-5.1 1,-2.4 1.5,-5.1 1.5,-8 0,-2.8 -0.5,-5.3 -1.5,-7.5 -1,-2.2 -2.3,-3.8 -4,-4.9 -1.7,-1.1 -4.6,-1.7 -8.7,-1.7 l -5,0 -16.3,0 C 9.5,40 8.6,44.9 8.6,50 8.6,72.9 27.2,91.5 50.1,91.5 61.3,91.5 71.5,87 79,79.8 l 11.3,0 C 81,92 66.5,100 50,100 l 0,0 C 22.4,100 0,77.6 0,50 l 0,0 C 0,42.9 1.5,36.2 4.2,30 l 5.9,0 z" />
        <path id="l" fill="#000000" d="m 93.4,70 -7,0 -24.2,0 0,-40 8.3,0 0,34.3 18.5,0 C 90.7,59.8 91.5,55 91.5,50 91.5,27.1 72.9,8.5 50,8.5 38.7,8.5 28.5,13 21,20.3 l -11.2,0 C 18.9,8 33.5,0 50,0 l 0,0 c 23.9,0 43.9,16.8 48.8,39.2 0.8,3.5 1.2,7 1.2,10.8 0,7.1 -1.5,13.9 -4.2,20 l -9.5,0 0,0 7.1,0 z" />
      </svg>

        <h1>Welcome Homes Demo</h1>
        <h2>Front End Developer Assignment</h2>
        <p>This page was built by <a href="https://donaldlivingston.com" target="_blank" rel='noreferrer noopener'>Donald Livingston</a></p>
        <p>The GitHub repo for this project is located <a href="https://github.com/dlivingston/welcome-homes-demo" target="_blank" rel='noreferrer noopener'>here</a></p>
      </main>
    </div>
  )
}
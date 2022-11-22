import Image from 'next/image'
import styles from './LocationCarousel.module.scss'
import IconArrowBack from '../IconArrowBack/IconArrowBack';
import IconArrowForward from '../IconArrowForward/IconArrowForward';

export default function LocationCarousel() {

  const locations = [
    {name: 'New York', image_path: '/images/locations/newyork.jpg', availability_count: '215'},
    {name: 'Connecticut', image_path: '/images/locations/connecticut.jpg', availability_count: '93'},
    {name: 'New Jersey', image_path: '/images/locations/newjersey.jpg', availability_count: '128'},
    {name: 'Pennsylvania', image_path: '/images/locations/pennsylvania.jpg', availability_count: '196'},
    {name: 'New York', image_path: '/images/locations/newyork.jpg', availability_count: '215'},
    {name: 'Connecticut', image_path: '/images/locations/connecticut.jpg', availability_count: '93'},
    {name: 'New Jersey', image_path: '/images/locations/newjersey.jpg', availability_count: '128'},
    {name: 'Pennsylvania', image_path: '/images/locations/pennsylvania.jpg', availability_count: '196'} 
  ]

  return (
    <>
      <div className={styles.viewport}>
        <div className={styles['slide-container']}>
          {locations.map((location, index) => {
            return (
              <a href="#" className={styles.slide} key={index}>
                <div>
                  <div className={styles["image-wrapper"]}>
                    <Image src={location.image_path} alt="" fill />
                  </div>
                  <h3>{location.name}</h3>
                  <p>{location.availability_count} towns available</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className={styles["nav-container"]}>
        <button 
          type="button" 
          className={styles.btnPrev}
          aria-label="Previous"
        >
          <IconArrowBack/>
        </button>
        <button 
          type="button" 
          className={styles.btnNext}
          aria-label="Next"
        >
          <IconArrowForward/>
        </button>
      </div>
    </>    
  )
}
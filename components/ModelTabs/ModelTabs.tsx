import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './ModelTabs.module.scss'

export default function ModelTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const modelData = [
    {
      name: 'Oasis 4', 
      description: 'Designed with versatility in mind, the Oasis 4 is a gorgeous, functional home that emphasizes open living, natural light, and connected spaces.',
      sq_feet: '2,970',
      bedrooms: '4',
      bathrooms: '3',
      powder_room: '',
      starting_price: '690,000',
      image_url: '/images/models/model-01.jpg'
    },
    {
      name: 'Oasis 3 Flex', 
      description: 'Designed for you, the Oasis 3 Flex is meant to be lived in. A beautiful transitional home that blends contemporary and traditional aesthetics into a classic, timeless design, it’s a true escape from city living. Our open floorplan is thoughtful and airy, seamlessly blending the outdoors and indoors to provide a peaceful, welcome retreat that maximizes liveable space.',
      sq_feet: '3,340',
      bedrooms: '3',
      bathrooms: '2',
      powder_room: '1',
      starting_price: '685,000',
      image_url: '/images/models/model-02.jpg'
    },
    {
      name: 'Oasis 4 Grand', 
      description: 'The Oasis 4 Grand is designed for those who want a beautiful, functional home with more space and room to grow. With a thoughtful, airy floor plan and seamless blending of the indoors and outdoors, this peaceful, welcome retreat maximizes livable space. Blending contemporary and traditional aesthetics, the Oasis 4 Grand features classic, timeless designs you will love.',
      sq_feet: '4,543',
      bedrooms: '4',
      bathrooms: '3',
      powder_room: '1',
      starting_price: '910,000',
      image_url: '/images/models/model-03.jpg'
    },
  ];

  return (
    <div className={styles["model-tabs-wrapper"]}>
      <div className={styles["tab-row"]}>
        {modelData.map((model, index) => {
          return (
            <button
              type="button"
              className={`${styles["tab-link"]} ${tabIndex === index ? `${styles.current}` : ''}`}
              key={index}
              onClick={() => setTabIndex(index)}
            >
              {model.name}
            </button>
          )
        })}
      </div>
      <div className={styles["tab-content-wrapper"]}>
        {modelData.map((model, index) => {
          return (
            <div className={`${styles["tab-content"]} ${tabIndex === index ? `${styles.current}` : ''}  ${tabIndex < index ? `${styles.prev}` : ''}  ${tabIndex > index ? `${styles.next}` : ''}`} key={index}>
              <div className={styles["image-wrapper"]}>
               <Image src={model.image_url} alt="" fill />
              </div>
              <div className={styles["info-col"]}>
                <div className={styles["info-title"]}>
                  <h3>{model.name}</h3>
                  <a href="#" className={styles["compare-link"]}>Compare</a>
                </div>
                <p>{model.description}</p>
                <p className={styles["total"]}>{model.sq_feet} total square feet</p>
                <div className={styles["info-row"]}>
                  <span>{model.bedrooms} bedrooms</span>
                  <span>{model.bathrooms} bathrooms</span>
                  <span>{model.powder_room} powder room</span>
                </div>
                <h4>Starting at ${model.starting_price}</h4>
                <div className={styles["link-row"]}>
                  <a href="#" className="btn-link">Design your own</a>
                  <a href="#" className="btn-outline-link">Learn more</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
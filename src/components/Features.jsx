import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Explore different styles</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>You can choose from a range of familiar art styles, from ornate baroque paintings to futuristic synthwave landscapes and everything in between</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.animation} iconText="Animation" />
          <FeatureCard iconUrl={assets.authentic} iconText="Authentic" />
          <FeatureCard iconUrl={assets.cinematic} iconText="Cinematic" />
          <FeatureCard iconUrl={assets.steamPunk} iconText="Steampunk" />
        </div>
      </div>
    </div>
  )
}

export default Features
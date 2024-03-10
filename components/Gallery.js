import React from "react";

import styles from "/styles/Gallery.module.css";

function Gallery() {
  return (
    <div className="container">
      <p className="section-heading">Sneak into our gallery</p>
      <div className={styles.gallery_sect}>
        <div className={styles.gallery_cards}>
          <div
            className={`${styles.gallery_card} ${styles.gallery_card1}`}
          ></div>
          <div
            className={`${styles.gallery_card} ${styles.gallery_card2}`}
          ></div>
          <div
            className={`${styles.gallery_card} ${styles.gallery_card3}`}
          ></div>
        </div>
        <div className={styles.gallery_cards}>
          <div
            className={`${styles.gallery_card} ${styles.gallery_card4}`}
          ></div>
          <div
            className={`${styles.gallery_card} ${styles.gallery_card5}`}
          ></div>
          <div
            className={`${styles.gallery_card} ${styles.gallery_card6}`}
          ></div>          
        </div>
        <div className={styles.gallery_cards}>
        <div
            className={`${styles.gallery_card} ${styles.gallery_card7}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

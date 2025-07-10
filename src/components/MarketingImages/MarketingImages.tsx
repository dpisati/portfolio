import { motion } from 'framer-motion';
import LightGallery from 'lightgallery/react';
import { ICareerHistory } from '../../lib/data';

import styles from './styles.module.css';
// import styles
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const MarketingImages = ({
  marketingImgs,
}: {
  marketingImgs: ICareerHistory['marketingImgs'];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 2.5 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        textAlign: 'center',
      }}
    >
      <h1 className={styles.h1}>Marketing Images</h1>
      <LightGallery
        speed={200}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        elementClassNames={styles.gallery}
        mobileSettings={{
          controls: true,
          showCloseIcon: true,
          download: false,
          rotate: false,
          zoom: true,
        }}
      >
        {marketingImgs.map((img, index) => (
          <a
            href={img}
            key={index}
            style={{
              boxSizing: 'border-box',
              padding: '12px',
            }}
          >
            <img src={img} alt={`Marketing Image ${index + 1}`} className={styles.galleryImage} />
          </a>
        ))}
      </LightGallery>
      {/* <motion.div initial="initial" variants={container} animate="animate" className={styles.grid}>
        {marketingImgs.map((img, index) => (
          <motion.div variants={fadeInUp} key={img}>
            <Image
              src={img}
              alt={`Marketing Image ${index + 1}`}
              width={500}
              height={350}
              layout="responsive"
            />
          </motion.div>
        ))}
      </motion.div> */}
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ICareerHistory } from '../../lib/data';
import { container, fadeInUp } from '../../utils/animations';
import styles from './styles.module.css';

export const MarketingImages = ({
  marketingImgs,
}: {
  marketingImgs: ICareerHistory['marketingImgs'];
}) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 2.5 }} animate={{ opacity: 1, scale: 1 }}>
      <h1 className={styles.h1}>Marketing Images</h1>
      <motion.div
        initial="initial"
        variants={container}
        animate="animate"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          gap: '32px',
          marginTop: '60px',
          marginBottom: '60px',
        }}
      >
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
      </motion.div>
    </motion.div>
  );
};

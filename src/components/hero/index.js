import styles from './hero.module.css';

const Hero = ({ title, subtitle }) => {
  return (
    <div className={styles['hero-wrapper']}>
      <div className={styles['hero-bg']}>
        <img src="/hero-image.jpg" alt="" />
      </div>

      <div className={styles['hero-content']}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <a href="/">Learn more</a>
      </div>
    </div>
  );
};

export default Hero;

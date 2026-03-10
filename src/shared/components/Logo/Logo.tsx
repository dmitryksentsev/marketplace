import { LogoIcon } from '../icons';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.logo}>
    <LogoIcon
      sx={{
        height: 34,
        width: 35,
      }}
    />
  </div>
);

export default Logo;

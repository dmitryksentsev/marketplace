import { Box, Link, Typography } from '@mui/material';
import { type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import LoginForm from '../../features/auth/forms/LoginForm';
import { Logo } from '../../shared/components/Logo';
import styles from './Login.module.css';

const Login = () => {
  return (
    <Box
      className={styles.root}
    >
      <Box
        className={styles.container}
        sx={{
          alignItems: 'center',
          background: 'linear-gradient(to bottom, #EDEDED 30%, white 100%)',
          borderRadius: '34px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          justifyContent: 'center',
          minWidth: '360px',
          padding: '48px',
        }}
      >
        <Logo />

        <Box display="flex" flexDirection="column" gap="12px">
          <Typography fontSize="40px" fontWeight={600} letterSpacing="-0.6px" lineHeight="110%">
            <FormattedMessage id="login.welcome" />
          </Typography>

          <Typography
            className={styles.innerShadow}
            fontSize="18px"
            fontWeight={500}
            lineHeight="150%"
          >
            <FormattedMessage id="login.authorize" />
          </Typography>
        </Box>

        <LoginForm />

        <div className={styles.signUp}>
          <Typography
            fontSize="12px"
            fontWeight={500}
            lineHeight="150%"
            sx={{
              color: '#6C6C6C',
            }}
          >
            <FormattedMessage
              id="login.dontHaveAccount"
              values={{
                link: (children: ReactNode) => <Link>{children}</Link>,
              }}
            />
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Login;

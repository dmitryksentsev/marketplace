import { Box, Button, Divider, InputAdornment, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import type { LoginArgs } from '../../../types';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Checkbox from '../../../shared/components/Checkbox';
import ClearableTextInput from '../../../shared/components/ClearableTextInput';
import { UserIcon } from '../../../shared/components/icons';
import LabeledInput from '../../../shared/components/LabeledInput';
import PasswordInput from '../../../shared/components/PasswordInput';
import { login, selectError, selectLoading } from '../../../store/authSlice';

const LoginForm = () => {
  const loginError = useAppSelector(selectError);
  const isLoading = useAppSelector(selectLoading);

  const dispatch = useAppDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginArgs>({
    defaultValues: {
      password: '',
      save: false,
      username: '',
    },
  });

  const onSubmit = (data: LoginArgs) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        alignItems="start"
        display="flex"
        flexDirection="column"
        gap="20px"
        justifyContent="center"
        minWidth={360}
        width={399}
      >
        {loginError && (
          <Typography color="error" textAlign="start">
            <FormattedMessage
              id="login.errorHappend"
              values={{
                error: loginError,
              }}
            />
          </Typography>
        )}

        <Box display="flex" flexDirection="column" gap="16px" width="100%">
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <LabeledInput label={<FormattedMessage id="login.login" />}>
                <ClearableTextInput
                  fullWidth
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <UserIcon height="24px" width="24px" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  {...field}
                  error={!!errors?.username}
                  helperText={
                    errors?.username ? (
                      <FormattedMessage id="login.validation.fieldIsRequired" />
                    ) : null
                  }
                />
              </LabeledInput>
            )}
            rules={{ required: true }}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <LabeledInput label={<FormattedMessage id="login.password" />}>
                <PasswordInput
                  fullWidth
                  {...field}
                  error={!!errors?.password}
                  helperText={
                    errors?.password ? (
                      <FormattedMessage id="login.validation.fieldIsRequired" />
                    ) : null
                  }
                />
              </LabeledInput>
            )}
            rules={{ required: true }}
          />
        </Box>

        <Box display="flex" gap="10px" height="24px">
          <Controller
            control={control}
            name="save"
            render={({ field }) => <Checkbox {...field} size="medium" />}
          />

          <Typography fontSize="16px" fontWeight={500} lineHeight="150%" sx={{ color: '#9C9C9C' }}>
            <FormattedMessage id="login.memorizeData" />
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="16px" width="100%">
          <Button
            color="primary"
            fullWidth
            loading={isLoading}
            size="large"
            type="submit"
            variant="contained"
          >
            <Typography fontSize="16px" fontWeight={500} lineHeight="150%">
              <FormattedMessage id="login.enter" />
            </Typography>
          </Button>

          <Box alignItems="center" display="flex" gap="10px" height="24px">
            <Divider />

            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="150%"
              sx={{ color: '#EBEBEB' }}
            >
              <FormattedMessage id="login.or" />
            </Typography>

            <Divider />
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;

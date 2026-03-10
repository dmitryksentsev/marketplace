import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        filledSuccess: {
          backgroundColor: 'rgba(46, 204, 113, 0.7)',
          border: '1px solid #2ECC71',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        sizeLarge: {
          height: 54,
        },
        sizeMedium: {
          borderRadius: '6px',
          height: 42,
        },
        sizeSmall: {
          borderRadius: '23px',
          height: 27,
          padding: '4px',
          width: 52,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        sizeSmall: {
          height: '22px',
          withd: '22px',
          padding: 0,
          fontSize: '22px',
        },
        sizeMedium: {
          height: '24px',
          width: '24px',
          padding: 0,
          fontSize: '24px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EDEDED',
          flex: '1',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            background: 'none',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionEnd: {
          marginLeft: 0,
        },
        positionStart: {
          marginRight: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textDecoration: 'underline',
          textDecorationThickness: '1px',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          flex: 1,
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          fontWeight: 500,
          letterSpacing: '-1.5%',
          lineHeight: '150%',
          padding: '0 14px',
        },
        inputAdornedEnd: {
          height: 24,
          width: 24,
        },
        inputAdornedStart: {
          height: 24,
          width: 24,
        },
        root: {
          padding: '14px 16px',
        },
        sizeSmall: {
          height: 48,
          input: {
            '::placeholder': {
              color: '#999999',
              opacity: 1,
            },
            fontSize: '14px',
            padding: '0 8px',
          },
          padding: '12px 20px',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        outlined: {},
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          '&.Mui-selected': {
            backgroundColor: '#797FEA',
            borderColor: '#797FEA',
            color: '#FFFFFF',
          },
          borderColor: '#ECECEB',
          borderRadius: '4px',
          boxSizing: 'border-box',
          color: '#B2B3B9',
          fontFamily: 'Cairo, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          height: 28,
          margin: '0 4px',
          minWidth: 'unset',
          width: 28,
        },

        previousNext: {
          border: 'none',
          boxSizing: 'border-box',
          margin: '0 8px',
          minWidth: 'unset',
          padding: 0,
          width: 28,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontFamily: 'Cairo, sans-serif',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '100%',
        },
        h4: {
          fontFamily: 'Cairo, sans-serif',
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '100%',
        },
        h6: {
          fontFamily: 'Cairo, sans-serif',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '100%',
        },
        paragraph: {
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '100%',
        },
        root: {
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#242EDB',
    },
    success: {
      main: '#2ECC71',
    },
    text: {
      primary: '#232323',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

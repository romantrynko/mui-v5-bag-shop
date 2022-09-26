import { createTheme } from '@mui/material';
import { lighten, borderColor } from 'polished';

export const DrawerWidth = 250;

export const Colors = {
  primary: '#5d739c',
  secondary: '#add1c6',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',

  // Grays
  dim_grey: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',

  // Solid Color
  white: '#fff',
  black: '#000'
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: Colors.white
        },

      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      }
    },

    MyShopButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
        secondary: {
          background: `${Colors.secondary}`,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.primary,
          color: Colors.secondary,
          borderRadius: '0 75px 0 0',
          borderRight: `4px solid ${Colors.secondary}`
        }
      }
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.15, Colors.primary)
        }
      }
    }
  }
});

export default theme;

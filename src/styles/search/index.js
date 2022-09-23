import theme, { Colors } from '../theme';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: Colors.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 5000,
  opacity: 0.9
}))

export const SearchField = styled(TextField)(() => ({

  '.MuiInputLabel-root': {
    color: Colors.secondary
  },

  '.MuiInput-root': {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    color: Colors.secondary
  },

  '.MuiInput-root::before': {
    borderBottom: `1px solid ${Colors.secondary}`
  },

  paddingLeft: '40px'
}))
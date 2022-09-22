import './App.css';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';

function App() {
  useEffect(() => {
    document.title = 'React MUI - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff'
        }}
      >
        {
          // Appbar
          // Banner
          // Promotions
          // Title
          // Products
          // Footer
          // Searchbox
          // Appdrawer
        }
        <Appbar />
        <Banner />
        <Promotions />
        <Box display={'flex'} justifyContent={'center'} p={4}>
          <Typography variant='h4'>
            Our Products
          </Typography>
        </Box>
        <Products />
      </Container>
    </ThemeProvider>
  );
}

export default App;

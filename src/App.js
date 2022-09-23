import './App.css';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';

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
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display={'flex'} justifyContent={'center'} p={4}>
            <Typography variant='h4'>
              Our Products
            </Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox/>
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

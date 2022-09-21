import './App.css';
import { Button, Container, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';

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
        <Button variant='contained'>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

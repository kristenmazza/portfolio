import { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: { fontFamily: 'Inter' },
});

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
}

function App() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Header />
        <Content />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;

import './App.css'
import { MantineProvider, createTheme, MantineThemeProvider } from '@mantine/core';
import RouteInfo from './components/RouteInfo';
import { Header } from './components/Header';
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouteInfo />
    </MantineProvider>
  )
}

export default App

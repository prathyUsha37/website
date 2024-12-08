import './App.css'
import { MantineProvider } from '@mantine/core';
import RouteInfo from './components/RouteInfo';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouteInfo />
    </MantineProvider>
  )
}

export default App

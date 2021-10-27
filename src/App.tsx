import { ChakraProvider, Button } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">Button</Button>
    </ChakraProvider>
  );
}

export default App;

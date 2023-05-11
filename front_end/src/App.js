import { useEffect, useState } from 'react';
import './App.css';
import Posts from "./components/posts/Posts"
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  const[posts, setPosts] = useState([]);
 
  const loadData = async () => {
      const data = await (await fetch("http://localhost:8082/posts/")).json();
      setPosts(data);
  }

  useEffect(() => {
    loadData();
  },[]);

  return (
    <ChakraProvider>
      <div>
        <Posts posts = {posts}/>
      </div>
    </ChakraProvider>
  );
}

export default App;

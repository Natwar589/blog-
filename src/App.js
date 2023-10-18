import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from "./components/Blogs"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import { Appcontext } from './context/Appcontext';
// import { useEffect } from 'react';
function App() {
  const {fetchBlogPosts} = useContext(Appcontext)

  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  return (
    <div> 
    
    <Header/>
   

    <Blogs/>
  
   
    <Pagination/>

    </div>
  );
}

export default App;

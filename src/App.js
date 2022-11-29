import React from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './Components/ThemeToggle';

function App() {
  //booklist and navbar are attached to props of parent component
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

//Context API
//Share state up and down a component tree
//Means you can pass data without needing to use props
//Alternative to redux, but similar when used with hooks
//Allows you to avoid needing to pass down props through lots of carrier components - components that don't use that state but just pass it down to child components

//Define shared state in other context file - providedto component tree 
//done with context provider
//can share data but don't have to if not needd

//Context used for "Global" data 
// Ask this question: is this data going to be used in multiple child components? 

//Can also used component composition if you're just tryign to avoid passing props through many levels
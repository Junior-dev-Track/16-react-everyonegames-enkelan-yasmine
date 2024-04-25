import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './Services/GlobalApi';
import './styles/Index.scss'
import { Header } from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" exact component={GameList} />
        </Routes>
      </Router>
      <Header />
        <Footer />
      </>
  );
}

export default App;



// RSC - Create a stateless component
// import React from 'react';
//
// const App = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default App;
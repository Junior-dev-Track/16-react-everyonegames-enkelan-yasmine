import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameList from './components/GameList';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={GameList} />
        </Switch>
      </Router>
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
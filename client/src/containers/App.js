import React, { Component } from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import {BrowswerRouter as Router} from "react-router-dom";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        Hello World
      </div>
    </Router>
  </Provider>
)

//  class App extends Component {
//   render() {
//     return (
//       <Provider>
//         <Router>
//           <div>
//             Hello World
//           </div>
//         </Router>
//       </Provider>
//     )
//   }
// }

export default App;

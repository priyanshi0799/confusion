import React, {Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render(){
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
}

export default App;

// import React, {Component} from 'react';
// import {Navbar, NavbarBrand} from 'reactstrap';
// import Menu from './components/MenuComponent';
// import {DISHES} from './shared/dishes';

// class App extends Component{
//   constructor(props){
//     super(props);

//     this.state={
//       dishes: DISHES
//     };
//   }

//   render(){
//     return(
//       <div>
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Resturant Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes}/>
//       </div>
//     )
//   }
// }
// export default App;















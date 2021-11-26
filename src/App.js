import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import AddData from './Pages/AddData/AddData';
import Explore from './Pages/Explore/Explore';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Reviews from './Pages/Home/Reviews/Reviews';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/adddata">
            <AddData></AddData>
          </Route>
          <PrivateRoute path="/reviews">
            <Header></Header>
            <Reviews></Reviews>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute path="/explore">
            <Header></Header>
            <Explore></Explore>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:purchaseId">
            <Header></Header>
            <Purchase></Purchase>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>


        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;

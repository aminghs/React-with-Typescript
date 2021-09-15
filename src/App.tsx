import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Mounted, Rolling, ballBearing, Users, generalBearing, rollerBearing, bearingAccessories } from './pages/Overview';
import {Header} from './pages/Header';


const App: FC = () => {
    return (
 
        <Router>
            <Header />
            <Sidebar />
            <Switch>
                <Route path="/" component={Main} exact></Route>
                <Route path="/rolling" component={Rolling} exact></Route>
                <Route path="/rolling/principles" component={Users} exact></Route>
                <Route path="/rolling/ball" component={ballBearing} exact></Route>
                <Route path="/rolling/roller" component={rollerBearing} exact></Route>
                <Route path="/mounted" component={Mounted} exact></Route> 
                <Route path="/rolling/principles/general" component={generalBearing} exact></Route>
                <Route path="/rolling/roller/general" component={generalBearing} exact></Route>
                <Route path="/rolling/bearing" component={bearingAccessories} exact></Route>
            </Switch>
        </Router>
    );
};

export default App;

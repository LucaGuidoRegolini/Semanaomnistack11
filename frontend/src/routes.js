import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon'; //O React sempre abre o index de uma pagina
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidente from './pages/NewIncidents';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />  {/*garante que a rota seja exatamente essa*/}
                <Route path='/register' component={Register} />

                <Route path='/profile' component={Profile} />
                <Route path='/incidents/new' component={NewIncidente} />
            </Switch>
        </BrowserRouter>
    )
}
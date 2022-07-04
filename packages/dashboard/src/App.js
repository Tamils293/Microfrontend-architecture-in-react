import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import CommandCenter from "./components/CommandCenter"

export default () => {
    return (
        <>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/dashboard" component={CommandCenter}></Route>
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </>
    );
};
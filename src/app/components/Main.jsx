import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import {history} from "../store/history";
import {ConnectedNavigation} from "./Navigation";
import {ConnectedSkillDetail} from "./SkillDetail";
import {Redirect} from "react-router";

const RouteGuard = Componnet => ({match}) => {
    console.info("Route Guard", match);
    if(!store.getState().session.authenticated){
        return <Redirect to="/" />;
    }else{
        return <Componnet match={match} />;
    }
}

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation/>
        <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
        <Route exact path="/skill/:id" render={RouteGuard(ConnectedSkillDetail)} />
      </div>
    </Provider>
  </Router>
);

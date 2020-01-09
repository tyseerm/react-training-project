import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
//import {skillAddationSaga}  from "./sagas";

import * as sagas from "./sagas";
import * as mutations from "./mutations";
import { TASK } from "redux-saga/utils";

export const store = createStore(
  combineReducers({
    session(userSession = defaultState.session || {}, action){
        let {type, authenticated, session} = action;
        
        switch(type){
            case mutations.SET_STATE:
                return {...userSession, id: action.state.session.id};
            case mutations.REQUEST_AUTHENTICATE_USER:
                return {...userSession, authenticated: mutations.AUTHENTICATING};
            case mutations.PROCESSING_AUTHENTICATE_USER:
                return {...userSession, authenticated};
            default:
                return userSession;
        }
    },
    skills(skills = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
            return action.state.skills;
        case mutations.ADD_SKILL:
          return [
            ...skills,
            {
              id: action.skillId,
              owner: action.engineerId,
              name: "new skill",
              years: 2
            }
          ];
        case mutations.SET_SKILL_NAME:
          return skills.map(skill => {
            return skill.id === action.skillId
              ? { ...skill, name: action.name }
              : skill;
          });
        case mutations.SET_SKILL_YEARS:
          return skills.map(skill => {
            return skill.id === action.skillId
              ? { ...skill, years: action.years }
              : skill;
          });
      }
      return skills;
    },
    users(users = [], action) {
      switch(action.type){
          case mutations.SET_STATE:
              return action.state.users;
      }  
      return users;
    },
    engineers(engineers = [], action) {
        switch(action.type){
            case mutations.SET_STATE:
                return action.state.engineers;
        }
      return engineers;
    },
    profiles(profiles = []) {
      return profiles;
    }
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

//sagaMiddleware.run(skillAddationSaga);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

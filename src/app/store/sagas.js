import {take, put, select} from "redux-saga/effects";
import uuid from "uuid";
import axios from "axios";
import {history} from "./history";

import * as mutations from "./mutations";

const url = "http://localhost:7777";

export function* skillAddationSaga(){
    while(true){
        const {engineerId} = yield take(mutations.REQUEST_SKILL_ADDATION);
        const skillId = uuid();
        yield put(mutations.addSkill(skillId, engineerId));
        const { res } = yield axios.post(url + "/skill/new", {
            skill: {
                id: skillId,
                name: "new skill",
                years: 8,
            }
        });
        console.info("got response: ", res);
    }   
}

export function* skillModificationSaga(){
    while(true){
        const skill = yield take([
            mutations.SET_SKILL_NAME,
            mutations.SET_SKILL_YEARS
        ]);
        axios.post(url + "/skill/update", {
            skill:{
                id: skill.skillId,
                name: skill.name,
                owner: skill.owner,
                years: skill.years

            }
        })
    }
}

export function* userAuthenticationSaga(){
    while(true){
        const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        console.log("authenticating:....",username, password);
        
        try{
            const {data} = yield axios.post(url + "/authenticate", {username, password});
            if(!data){
                throw new Error();
            }
            console.log("Authenticated!", data);
            yield put(mutations.setState(data.state));
            yield put(mutations.processingAuthenticateUser(mutations.AUTHENTICATED));
            history.push("/dashboard");
        }catch(error){
            console.log("can't authenticate");
            yield put(mutations.processingAuthenticateUser(mutations.NOT_AUTHENTICATED));
        }
        
        
    }
}
import {take, put, select} from "redux-saga/effects";
import uuid from "uuid";
import axios from "axios";

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
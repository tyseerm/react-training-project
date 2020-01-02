import {
    take,
    put,
    select
} from "redux-saga/effects";

import * as mutations from "./mutations";
import uuid from "uuid";


export function* skillAddationSaga(){
    while(true){
        const {engineerId} = yield take(mutations.REQUEST_SKILL_ADDATION);
        const skillId = uuid();
        yield put(mutations.addSkill(skillId, engineerId));
        console.log("got eng idddd", engineerId );
    }   
}
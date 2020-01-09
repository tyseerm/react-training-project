export const REQUEST_SKILL_ADDATION = "REQUEST_SKILL_ADDATION";
export const ADD_SKILL = "ADD_SKILL";
export const SET_SKILL_NAME = "SET_SKILL_NAME";
export const SET_SKILL_YEARS = "SET_SKILL_YEARS";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESSING_AUTHENTICATE_USER = "PROCESSING_AUTHENTICATE_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";


export const requestSkillAddation = (engineerId) => ({
    type: REQUEST_SKILL_ADDATION,
    engineerId
});

export const addSkill = (skillId, engineerId) => ({
    type: ADD_SKILL,
    skillId,
    engineerId
});

export const setSkillName = (id, name) => ({
    type: SET_SKILL_NAME,
    skillId: id,
    name
});

export const setSkillYears = (id, years) => ({
    type: SET_SKILL_YEARS,
    skillId: id,
    years
});

export const requestAuthenticateUser = (username, password) => ({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password,
});

export const processingAuthenticateUser = (status = AUTHENTICATING, session = null) => (
    {
        type: PROCESSING_AUTHENTICATE_USER,
        session,
        authenticated: status,
    }
);

export const setState = (state = {}) =>({
    type: SET_STATE,
    state
});
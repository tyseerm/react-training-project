export const REQUEST_SKILL_ADDATION = "REQUEST_SKILL_ADDATION";
export const ADD_SKILL = "ADD_SKILL";
export const SET_SKILL_NAME = "SET_SKILL_NAME";
export const SET_SKILL_YEARS = "SET_SKILL_YEARS";


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
import React from "react";
import {connect} from "react-redux";

export const SkillsList = ({skills, engineerName}) => (
    <div>
        <h1>{engineerName}</h1>
        <div>
            {skills.map(skill => (<div>{skill.name}</div>))}
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.id;
    return{
        id: userId,
        engineerName: ownProps.name,
        skills: state.skills.filter(skill => skill.owner === state.engineers.find(eng => eng.user === userId).id),
    }
}

export const ConnectedSkillsList = connect(mapStateToProps)(SkillsList);
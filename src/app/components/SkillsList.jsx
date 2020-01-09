import React from "react";
import { connect } from "react-redux";
import { requestSkillAddation } from "../store/mutations";
import { Link } from "react-router-dom";

export const SkillsList = ({ skills, engineerName, id, addNewSkill }) => (
  <div className="card m-2 p-2">
    <h1>{engineerName}</h1>
    <div>
      {skills.map(skill => (
        <Link  key={skill.id} to={`/skill/${skill.id}`}>
          <div className="card p-2 mt-2">{skill.name}</div>
        </Link>
      ))}
    </div>
    <button onClick={() => addNewSkill(id)} className="btn btn-primary btn-block mt-2">Add Skill</button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const engId = ownProps.id;
  return {
    id: engId,
    engineerName: ownProps.name,
    skills: state.skills.filter(skill => skill.owner === engId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNewSkill(id) {
      console.log("Creating new task...", id);
      dispatch(requestSkillAddation(id));
    }
  };
};

export const ConnectedSkillsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsList);

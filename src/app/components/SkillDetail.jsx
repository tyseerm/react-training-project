import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import * as mutations from "../store/mutations";

const SkillDetail = ({ id, skill, setSkillName, setSkillYears}) => (
  <div className="card p-3 col-6">
    <h1>{skill.name}</h1>
    <div className="form-group">
      <label htmlFor="skillName">Skill Name</label>
      <input id="skillName" onChange={setSkillName} type="text" value={skill.name} className="form-control form-control-lg"/>
    </div>
    <div className="form-group">
      <label htmlFor="years">Years of Experince</label>
      <input id="years" onChange={setSkillYears} type="text" value={skill.years} className="form-control form-control-lg"/>
    </div>
    <Link to="/Dashboard">
        <button className="btn btn-primary">Done</button>
    </Link>
  </div>
);

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const skill = state.skills.find((skill) => skill.id === id);
    return{
        id,
        skill,
    }

};

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return{
        setSkillName(e){
            dispatch(mutations.setSkillName(id, e.target.value));
        },
        setSkillYears(e){
            dispatch(mutations.setSkillYears(id, e.target.value));
        }
    }
}

export const ConnectedSkillDetail = connect(mapStateToProps, mapDispatchToProps)(SkillDetail);

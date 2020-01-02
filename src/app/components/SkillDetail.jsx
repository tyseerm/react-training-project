import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import * as mutations from "../store/mutations";

const SkillDetail = ({ id, skill, setSkillName, setSkillYears}) => (
  <div>
    <h1>{skill.name}</h1>
    <div>
      <label htmlFor="skillName">Skill Name</label>
      <input name="skillName" onChange={setSkillName} type="text" value={skill.name} />
    </div>
    <div>
      <label htmlFor="years">Years of Experince</label>
      <input name="years" onChange={setSkillYears} type="text" value={skill.years} />
    </div>
    <Link to="/Dashboard">
        <button>Done</button>
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

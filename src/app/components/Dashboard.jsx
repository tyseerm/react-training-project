import React from "react";
import { connect } from "react-redux";
import {ConnectedSkillsList} from "./SkillsList";

export const Dashboard = ({ engineers }) => (
    <div className="row">
        {engineers.map(engineer => (<ConnectedSkillsList key={engineer.id} id={engineer.id} name={engineer.name} className="col"/>))}
    </div>
)

function mapStateToProps(state){
    const engineers = state.engineers;
    return{
        engineers: engineers.map((eng) => {
            eng.name = state.users.find(user => user.id === eng.user).name;
            return eng;
            }),
    }
}

export const ConnectedDashboard  = connect(mapStateToProps) (Dashboard);
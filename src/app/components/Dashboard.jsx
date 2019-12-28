import React from "react";
import { connect } from "react-redux";
import {ConnectedSkillsList} from "./SkillsList";

export const Dashboard = ({ engineers }) => (
    <div>
        <h2>Dashboard</h2>
        {engineers.map(engineer => (<ConnectedSkillsList id={engineer.id} name={engineer.name}/>))}
    </div>
)

function mapStateToProps(state){
    return{
        engineers: state.users.filter(user => user.role === "engineer"),
    }
}

export const ConnectedDashboard  = connect(mapStateToProps) (Dashboard);
import React, { useState } from 'react';
import { connect } from 'react-redux';

import MaterialTable from "material-table";

export interface DashboardProps {
    counter: number;
    onIncrementClicked: () => void;
}

function Dashboard(props: DashboardProps) {
    return (
        <React.Fragment>
            <label>Counter: {props.counter}</label>
            <button onClick={() => props.onIncrementClicked()}>Increment</button>
        </React.Fragment>
    );
}

function mapStateToProps(globalState, props) {
    const dashboardState = globalState.dashboard;
    return {
        counter: dashboardState.counter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrementClicked: () => {
            dispatch({ type: 'INCREMENT', count: 20 });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
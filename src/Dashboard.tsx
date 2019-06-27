import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { red } from '@material-ui/core/colors';
import SearchIcon  from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NextPageIcon from '@material-ui/icons/NavigateNext';
import PreviousPageIcon from '@material-ui/icons/NavigateBefore';
import FilterPageIcon from '@material-ui/icons/FilterList';

import ReactTable from "react-table";


const COLUMN_FILED = [{ title: "User", field: "User" },
{ title: "vehiclecode", field: "vehiclecode" },
{ title: "Vehicle", field: "Vehicle" },
{ title: "IDvehicle", field: "IDvehicle"},
{ title: "Datadate", field: "Datadate" },
{ title: "charge", field: "charge" },
{ title: "Battery", field: "Battery" },
{ title: "inbat_sw", field: "inbat_sw" },
{ title: "LulG3blue", field: "LulG3blue" },
{ title: "Lul3Gred", field: "Lul3Gred" },
{ title: "LulRFIDblue", field: "LulRFIDblue" },
{ title: "LulRFIDred", field: "LulRFIDred" },
{ title: "Lulbluetoothblue", field: "Lulbluetoothblue" },
{ title: "Lulbluetoothred", field: "Lulbluetoothred" },
{ title: "engineon", field: "engineon" },
{ title: "engineoff", field: "engineoff" },
{ title: "disable", field: "disable" },
{ title: "finishstop", field: "finishstop" },
{ title: "remotestart", field: "remotestart" },
{ title: "statestart", field: "statestart" },
{ title: "remotestop", field: "remotestop" },
{ title: "statestop", field: "statestop" },
{ title: "ingpsratlong", field: "ingpsratlong" },
{ title: "ingpstime", field: "ingpstime" },
{ title: "ingpsspeed", field: "ingpsspeed" },
{ title: "notetext", field: "notetext" },];

const MOCK_ITEM = {
    "User" : "ratthathammanoon.p",
    "charge" : "on",
    "Battery" : "on",
    "IDvehicle" : 297,
    "LulG3blue" : "correct",
    "Lul3Gred" : "correct",
    "LulRFIDblue" : "correct",
    "LulRFIDred" : "correct",
    "Lulbluetoothblue" : "Unaudited",
    "Lulbluetoothred" : "Unaudited",
    "engineon" : "correct",
    "engineoff" : "correct",
    "disable" : "correct",
    "finishstop" : "incorrect",
    "remotestart" : "incorrect",
    "statestart" : "correct",
    "remotestop" : "incorrect",
    "statestop" : "correct",
    "ingpsratlong" : "correct",
    "ingpstime" : "correct",
    "ingpsspeed" : "correct",
    "notetext" : "รถdgp",
    "Datadate" : "2019-05-31T04:47:36.093Z",
    "Vehicle" : "2กค-2803",
    "vehiclecode" : "PHTR-ALTIS-42(DGP)",
    "status" : "MA"
};

const MOCK_ITEMS = (function() {
    const data: any[] = [];
    for (let i = 0; i < 1000; i++) {
        data.push(MOCK_ITEM);
    }
    return data;
})();

interface DashboardProps {

}

function Dashboard(props: DashboardProps) {
    const tableRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        console.log(tableRef.current);
    });

    return (
        <div ref={tableRef} style={{ maxWidth: "100%" }}>
            <MaterialTable
                title="Demo Dashboard"
                columns={COLUMN_FILED}
                data={MOCK_ITEMS}
                options={{
                    search: true,
                    filtering: true,
                    headerStyle: {fontSize: 20, fontWeight: "bold", backgroundColor: '#c9e3f8' },
                    pageSize: 9,
                    rowStyle:{}
                }}
                icons={{
                    Search: SearchIcon,
                    ResetSearch: ClearIcon,
                    FirstPage: FirstPageIcon,
                    LastPage: LastPageIcon,
                    NextPage: NextPageIcon,
                    PreviousPage: PreviousPageIcon,
                    Filter: FilterPageIcon,
                }}
            />
        </div>
    );
}

export default Dashboard;
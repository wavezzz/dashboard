import React, { useState, useEffect } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";
import { width } from '@material-ui/system';
import { VehicleQCData, DataService } from './services/data.service';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const getColumnWidth = (headerText) => {
   
    const maxWidth = 1000;
    const magicSpacing = 8;
    var cellLength = headerText.length;
    return Math.min(maxWidth, cellLength * magicSpacing);
  };

function filterFactory(topic: string, options: string[]) {
    return {
        filterMethod: (filter, row) => {
            if (filter.value === "all") {
                return true;
            }
            return row[filter.id] === filter.value;
        },
        Filter: ({ filter, onChange }) => (
            <select
                onChange={event => onChange(event.target.value)}
                style={{ width: "100%" }}
                value={filter ? filter.value : "all" }
            >
                <option value="all">All</option>
                {
                    options.map((op, index) => (
                        <option key={`${topic},${op}:${index}`} value={op}>{op}</option>
                    ))
                }
            </select>
        )
    };
}

const headerList = ["User","Percentage","vehiclecode","Vehicle","IDvehicle","Datadate","charge","Battery","inbat_sw","LulG3blue","Lul3Gred","LulRFIDblue","LulRFIDred","Lulbluetoothblue","Lulbluetoothred","engineon","engineoff","disable","finishstop","remotestart","statestart","remotestop","statestop","ingpsratlong","ingpstime","ingpsspeed","notetext"];
 
const COLUMN_FILED = [{ Header: "User", accessor: "User", width: 200 },
{ Header: "Percentage", accessor: "Percentage"},
{ Header: "vehiclecode", accessor: "vehiclecode", width: 200 },
{ Header: "Vehicle", accessor: "Vehicle" },
{ Header: "IDvehicle", accessor: "IDvehicle"},
{ Header: "Datadate", accessor: "Datadate", width: 250 },
{ Header: "charge", accessor: "charge", ...filterFactory("charge", [ "n/a", "on", "off" ]) },
{ Header: "Battery", accessor: "Battery" , ...filterFactory("Battery", [ "Unaudited", "correct", "incorrect","Open" ]) },
{ Header: "inbat_sw", accessor: "inbat_sw" },
{ Header: "LulG3blue", accessor: "LulG3blue", ...filterFactory("LulG3blue", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "Lul3Gred", accessor: "Lul3Gred", ...filterFactory("Lul3Gred", [ "Unaudited", "correct", "incorrect" ])  },
{ Header: "LulRFIDblue", accessor: "LulRFIDblue", width: getColumnWidth("LulRFIDblue"), ...filterFactory("LulG3blue", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "LulRFIDred", accessor: "LulRFIDred" , ...filterFactory("LulRFIDred", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "Lulbluetoothblue", accessor: "Lulbluetoothblue" ,width: getColumnWidth("Lulbluetoothblue"), ...filterFactory("Lulbluetoothblue", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "Lulbluetoothred", accessor: "Lulbluetoothred" ,width: getColumnWidth("Lulbluetoothred"), ...filterFactory("Lulbluetoothred", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "engineon", accessor: "engineon" , ...filterFactory("engineon", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "engineoff", accessor: "engineoff" , ...filterFactory("engineoff", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "disable", accessor: "disable", ...filterFactory("disable", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "finishstop", accessor: "finishstop" , ...filterFactory("finishstop", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "remotestart", accessor: "remotestart" , ...filterFactory("remotestart", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "statestart", accessor: "statestart" , ...filterFactory("statestart", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "remotestop", accessor: "remotestop" , ...filterFactory("remotestop", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "statestop", accessor: "statestop" , ...filterFactory("statestop", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "ingpsratlong", accessor: "ingpsratlong",width: getColumnWidth("ingpsratlong"), ...filterFactory("LulG3blue", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "ingpstime", accessor: "ingpstime" , ...filterFactory("ingpstime", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "ingpsspeed", accessor: "ingpsspeed" , ...filterFactory("ingpsspeed", [ "Unaudited", "correct", "incorrect" ]) },
{ Header: "notetext", accessor: "notetext" }];

interface DashboardProps {

}

let shoppingCart = [
    {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
    {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
    {id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
    ]

function Dashboard2(props: DashboardProps) {
    const [ vehicleQcData, setVehicleQCData ] = useState([] as VehicleQCData[]);
    const [ initialized, setInitialized ] = useState(false); 
    const [open, setOpen] = useState(false);
    const [rowData, setrowData] = useState([]);

    // same as ComponentDidMount and ComponentDidUpdate
    useEffect(() => {
        if (!!!initialized) {
            setInitialized(true);

            const ds = new DataService();
            ds.getVehicleQCData()
            .then(data => { console.log(data); setVehicleQCData(data); })
            .catch(() => setVehicleQCData([]))
        }
    });

    
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function clearData() {
        setrowData([]);
    }

    const getData = (d) => {
        const headerList = [{name: "User", value: d.User},{name: "Percentage", value: d.Percentage},{name: "vehiclecode", value: d.vehiclecode},{name: "Vehicle", value: d.Vehicle},{name: "IDvehicle", value: d.IDvehicle},{name: "Datadate", value: d.Datadate},{name: "charge", value: d.charge},{name: "Battery", value: d.Battery},{name: "inbat_sw", value: d.inbat_sw},{name: "LulG3blue", value: d.LulG3blue},{name: "Lul3Gred", value: d.Lul3Gred},{name: "LulRFIDblue", value: d.LulRFIDblue},{name: "LulRFIDred", value: d.LulRFIDred},{name: "Lulbluetoothblue", value: d.Lulbluetoothblue},{name: "Lulbluetoothred", value: d.Lulbluetoothred},{name: "engineon", value: d.engineon},{name: "engineoff", value: d.engineoff},{name: "disable", value: d.disable},{name: "finishstop", value: d.finishstop},{name: "remotestart", value: d.remotestart},{name: "statestart", value: d.statestart},{name: "remotestop", value: d.remotestop},{name: "statestop", value: d.statestop},{name: "ingpsratlong", value: d.ingpsratlong},{name: "ingpstime", value: d.ingpstime},{name: "ingpsspeed", value: d.ingpsspeed},{name: "notetext", value: d.notetext}];
        //console.log(d.id);
        headerList.map((list)=>{
            rowData.push(
            {
                id: rowData.length,
                header: list.name,
                value: list.value
            }
            )
        })


     //   data.push({value2: d.User})
        /*
        data.push({value: d.User});
        data.push({value: d.Percentage});
        data.push({value: d.Vehicle});
        data.push({value: d.vehiclecode});
        data.push({value: d.IDvehicle});
        data.push({value: d.Datadate});
        data.push({value: d.charge});
        data.push({value: d.Battery});
        data.push({value: d.inbat_sw});
        data.push({value: d.LulG3blue});
        data.push({value: d.Lul3Gred});
        data.push({value: d.LulRFIDblue});0
        data.push({value: d.LulRFIDred});
        data.push({value: d.Lulbluetoothblue});
        data.push({value: d.Lulbluetoothred});
        data.push({value: d.engineoff});
        data.push({value: d.disable});
        data.push({value: d.finishstop});
        data.push({value: d.remotestart});
        data.push({value: d.statestart});
        data.push({value: d.remotestop});
        data.push({value: d.statestop});
        data.push({value: d.ingpsratlong});
        data.push({value: d.ingpstime});
        data.push({value: d.ingpsspeed});
        data.push({value: d.notetext});*/
        //console.log(rowData);
    }

    return (
        <div >
            <h1>Demo Dashboard</h1>
            
            <ReactTable
                data={vehicleQcData}
                filterable
                pageSizeOptions={[5, 10, 15, 20, 25, 30, 50, 100]}
                defaultPageSize={20}
                className="-striped -highlight"
                columns={COLUMN_FILED}
                getTbodyProps={(columnInfo) => {
                    return {
                      style: {
                        textAlign: 'center',
                      },
                    }
                }}
                getTheadProps={(head) => {
                    return {
                      style: {
                        background: '#4eaffa',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      },
                    }
                }}
                getTrProps={(state, rowInfo) => {
                    return {
                        onClick: (e) => { handleClickOpen(); getData(rowInfo.row);}
                }}}
        />   
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onBackdropClick={clearData}
        PaperProps={{
            style: {
                height: 600,
                width: 500
            }
        }}
      >
        
        <DialogTitle id="alert-dialog-title" style={{backgroundColor: '#4eaffa', color: 'white'}}>data</DialogTitle>
            <DialogContent dividers>
                <DialogContentText id="alert-dialog-description">
                {rowData.map((row)=>{
                    return (<h3 key={row.id}> {row.header}:  {row.value} </h3>);
                })}
                </DialogContentText>
            </DialogContent>
        <DialogActions>
          <Button onClick = {handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>       
        </div>
    );
}

export default Dashboard2;
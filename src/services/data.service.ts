import data from './data.json';

const ROOT_API_URL = 'http://qc.haupcar.com:1880/statusQC';

export interface VehicleQCData {
    User: string,
    charge: string,
    Battery : string,
    IDvehicle : string,
    LulG3blue: string,
    Lul3Gred: string,
    LulRFIDblue: string,
    LulRFIDred: string,
    Lulbluetoothblue: string,
    Lulbluetoothred: string,
    engineon: string,
    engineoff: string,
    disable: string,
    finishstop: string,
    remotestart: string,
    statestart: string,
    remotestop: string,
    statestop: string,
    ingpsratlong: string,
    ingpstime: string,
    ingpsspeed: string,
    notetext: string,
    Datadate: string,
    Vehicle: string,
    vehiclecode: string,
    status: string,
}

export class DataService {
    getVehicleQCData(): Promise<VehicleQCData[]> {
        // return fetch(ROOT_API_URL, {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         Accept: 'application/json',
        //         Connection: 'keep-alive'
        //     }
        // })
        // .then(res => { console.log('res', res); return res.json(); })
        // .then(json => { console.log('json', json); return json; });
        return Promise.resolve((data as any) as VehicleQCData[]);
    }
}
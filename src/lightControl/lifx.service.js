import React from 'react';
import Request from 'react-http-request';
import axios from 'axios'

class LifxService extends React.Component {
    constructor () {
        super();
    }

    powerOff () {
        let headers = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer XXXXXXXXXXX',
            }
        };

        axios.put('https://api.lifx.com/v1/lights/all/state?power=off', headers)
            .then((response)=> console.log("hey"))
            .catch((error) => console.log("nop"));
    }

    render() {
        return (
            <div>{this.powerOff()}</div>
        );
    }
}

export default LifxService;

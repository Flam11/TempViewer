import React from 'react';
import PropTypes from "prop-types";

import "./Data.css";

const temp = "°C"
// const heater = () => {
//     return (
//         <div className = "label">
//             <label>Temperatures and status</label>
//             <div className = "heater">
//                 <label>Date | outdoor | Indoor | heater sets | heater | boiler | pomp status | blower status | boiler status</label>
//             </div>
//         </div>
//     );
// };
const Data = props => (
    <div className = "style">
        <div className = "label">
            <label>Temperatures and status</label>
            <div className = "heater">
                <label>Date | outdoor | Indoor | heater sets | heater | boiler | pomp status | blower status | boiler status</label>
            </div>
        </div>
        <div className = "data">
            <strong>
                {props.date} |  
                {props.outdoor}{temp} |
                {props.indoor}{temp} |
                {props.heaterSets}{temp} |
                {props.heater}{temp} |
                {props.boiler}{temp} |
                {props.pompStatus ? "run" : "stop"} |
                {props.blowerStatus ? "run" : "stop"} |
                {props.boilerStatus ? "run" : "stop"} |
            </strong>
        </div>
        <div className = "label">
            <div className = "heater">
                <label># | Date | outdoor | Indoor | heater sets | heater | boiler | pomp status | blower status | boiler status</label>
            </div>
        </div>
        <div className = "table">
            <strong>
                {props.id + 1} | 
                {props.date} |
                {props.outdoor}{temp} |
                {props.indoor}{temp} |
                {props.heaterSets}{temp} |
                {props.heater}{temp} |
                {props.boiler}{temp} |
                {props.pompStatus ? "run" : "stop"} |
                {props.blowerStatus ? "run" : "stop"} |
                {props.boilerStatus ? "run" : "stop"} |
            </strong>
        </div>
    </div>
);

Data.propTypes = {
    id: PropTypes.number,
    date: PropTypes.string,
    outdoor: PropTypes.string,
    indoor: PropTypes.string,
    heaterSets: PropTypes.string,
    heater: PropTypes.string,
    boiler: PropTypes.string,
    pompStatus: PropTypes.bool,
    blowerStatus: PropTypes.bool,
    boilerStatus: PropTypes.bool
};

export default Data;
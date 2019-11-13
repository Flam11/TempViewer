import React from "react";

import "./AddData.css";

const AddData = () => {
    return (
        <div className = "add-data">
            <div className = "add-data__input-group">
                <label htmlFor = "date">Date:</label>
                <input type = "date" id = "date" name = "date"/>
                <input type = "time" id = "time" name = "time"/>
            </div>
            <div className = "add-data__input-group">
                <label htmlFor = "outdoor">Temp outdoor:</label>
                <input type = "tel" id = "outdoor" name = "outdoor"/>
            </div>
            <div className = "add-data__input-group">
                <label htmlFor = "indoor">Temp indoor:</label>
                <input type = "tel" id = "indoor" name = "indoor"/>
            </div>
            <div className = "add-data__input-group">
                <label htmlFor = "heater_sets">Temp heater sets:</label>
                <input type = "tel" id = "heater_sets" name = "heater_sets"/>
            </div>
            <div className = "add-data__input-group">
                <label htmlFor = "heater">Temp heater:</label>
                <input type = "tel" id = "heater" name = "heater"/>
            </div>
            <div className = "add-data__input-group">
                <label htmlFor = "boiler">Temp boiler:</label>
                <input type = "tel" id = "boiler" name = "boiler"/>
            </div>
            <div className = "add-data__input-group">
                <label>Status pomp: </label>
                <select name = "pomp">
                    <option value = "off">OFF</option>
                    <option value = "on">ON</option>
                </select>
            </div>
            <div className = "add-data__input-group">
                <label>Status blower: </label>
                <select name = "blower">
                    <option value = "off">OFF</option>
                    <option value = "on">ON</option>
                </select>
            </div>
            <div className = "add-data__input-group">
                <label>Status boiler: </label>
                <select name = "boiler">
                    <option value = "off">OFF</option>
                    <option value = "on">ON</option>
                </select>
            </div>
            <button>Confirm</button>
            <button>Cancel</button>
        </div>
    );
};

export default AddData;
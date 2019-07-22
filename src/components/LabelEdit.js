import React, {useEffect, useState} from 'react';
import {getLabel} from "../services/labels";

const LabelEdit = ({ match: { params: { id } }, history }) => {
    const [currentLabel, setCurrentLabel] = useState([]);

    useEffect(() => {
        (async () => { setCurrentLabel(await getLabel(id)); })();
    }, [id]);

    const onPrintClick = () => {
        alert('Printing...');
    };

    const handleSelect = (key, { target: { value }}) => {
        const newLabel = {...currentLabel};
        newLabel[key] = value;
        setCurrentLabel(newLabel);
    };

    return (
        <div className="container">
            <form>
                <div className="row mt-5 mb-2">
                    <div className="col-3 offset-3">
                        <select name="template" className="form-control" value={currentLabel.template} onChange={(e) => handleSelect('template', e)}>
                            <option value="standard">Standard Bin/Pallet</option>
                            <option value="range">Bin Range</option>
                            <option value="tote-l">Large Tote</option>
                            <option value="tote-m">Medium Tote</option>
                            <option value="tote-s">Small Tote</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <select name="location" className="form-control" value={currentLabel.location} onChange={(e) => handleSelect('location', e)}>
                            <option value="standard">Standard Location</option>
                            <option value="high">High Level Location</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="form-group">
                            <label>Bin Number</label>
                            <input defaultValue={currentLabel.binNumber} className="form-control" placeholder="Enter bin number"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="form-group">
                            <label className="pr-3">Colour</label>
                            <select name="colour" value={currentLabel.colour} onChange={(e) => handleSelect('colour', e)}>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="red">Red</option>
                                <option value="yellow">Yellow</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="btn-group col-6 offset-3">
                    <button type="cancel" className="btn btn-secondary" onClick={() => history.push('/')}>Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={() => history.push('/')}>Save Label</button>
                </div>
                <div className="btn-group col-6 offset-3 mt-3">
                    <button onClick={onPrintClick} className="btn btn-secondary">Print</button>
                </div>
            </form>
        </div>
    );
};

export default LabelEdit;

import React, {useEffect, useState} from 'react';
import {getLabel} from "../services/labels";

const LabelEdit = ({match: {params: {id}}, history}) => {

    const [currentLabel, setCurrentLabel] = useState([]);

    useEffect(() => {
        (
            async () => {
                setCurrentLabel(await getLabel(id));
            }
        )();
    }, [id]);

    const onPrintClick = () => {

    };

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-3 offset-3">
                        <select name="template" class="form-control" value={currentLabel.template}>
                            <option value="standard">Standard Bin/Pallet</option>
                            <option value="range">Bin Range</option>
                            <option value="tote-l">Large Tote</option>
                            <option value="tote-m">Medium Tote</option>
                            <option value="tote-s">Small Tote</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <select name="location" class="form-control" value={currentLabel.location}>
                            <option value="standard">Standard Location</option>
                            <option value="high">High Level Location</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="form-group">
                            <label>Label Header</label>
                            <input defaultValue={currentLabel.header} className="form-control" placeholder="Enter label header"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="form-group">
                            <label>Bin</label>
                            <input defaultValue={currentLabel.bin} className="form-control" placeholder="Enter bin"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="form-group">
                            <label>Colour</label>
                            <select name="colour" value={currentLabel.colour}>
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
                    <button type="cancel" className="btn btn-secondary">Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Label</button>
                </div>
                <div className="btn-group col-6 offset-3 mt-3">
                    <button onClick={onPrintClick} className="btn btn-secondary">Print</button>
                </div>
            </form>
        </div>
    );
};

export default LabelEdit;

import React, {useEffect, useState} from 'react';
import {getLabels} from "../services/labels";
import Label from "./Label";

const LabelList = () => {

    const [labelListData, setLabelListData] = useState([]);

    useEffect(() => {
        (
            async () => {
                setLabelListData(await getLabels());
            }
        )();
    });

    if (labelListData.length === 0) {
        return null;
    }

    return (
        <div className="container">
        {labelListData.map(label => (
            <Label data={label}></Label>
        ))}
        </div>
    );
};

export default LabelList;

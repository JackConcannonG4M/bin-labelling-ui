import React from 'react';
import { withRouter } from 'react-router-dom';

const Label = ({ data, history }) => {

    const routeChange = () => {
        let path = `/edit/` + data.id;
        history.push(path);
    };

    return (
        <ul className="list-group my-1">
            <li className="list-group-item">
                {data.binNumber}
                <button onClick={routeChange} type="button" className="btn btn-info float-right">Edit</button>
            </li>
        </ul>
    );
};

export default withRouter(Label);

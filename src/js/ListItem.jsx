import React, { useState } from 'react';
import '../styles/community_center_checklist.css';

function ListItem({ item: { itemName, bundle, location, time, weather }}) {
    const [checked, setChecked] = useState(false);

    let containerClasses = checked ? "list-item-container item-checked" : "list-item-container";
    return (
        <div className="list-item">
            <div className={containerClasses}>
                <input className="list-item-check" type="checkbox" onClick={() => setChecked(!checked)}/>
                <div className="list-item-name">{itemName}</div>
                <div className="list-item-bundle">{bundle}</div>
                <div className="list-item-location">{location}</div>
                <div className="list-item-time">{time}</div>
                <div className="list-item-weather">{weather}</div>
            </div>
        </div>
    );
}

export default ListItem;
import React, { Component } from 'react';
import '../styles/community_center_checklist.css';

export default class ListItem extends Component {

    constructor (props){
        super(props);
        this.state = {
          checked: false
        };
        this.handleClick = this.handleClick.bind(this);    
      }

    handleClick = (e) => {
        this.setState({
            checked: !this.state.checked
        });
    };

    render() {
        let containerClasses = this.state.checked ? "list-item-container item-checked" : "list-item-container";
        return (
            <div className="list-item">
                <div className={containerClasses}>
                    <input className="list-item-check" type="checkbox" onClick={this.handleClick}/>
                    <div className="list-item-name">{this.props.item.itemName}</div>
                    <div className="list-item-bundle">{this.props.item.bundle}</div>
                    <div className="list-item-location">{this.props.item.location}</div>
                    <div className="list-item-time">{this.props.item.time}</div>
                    <div className="list-item-weather">{this.props.item.weather}</div>
                </div>
            </div>
        );
    }
}
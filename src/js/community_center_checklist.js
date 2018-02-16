import React, { Component } from 'react';
import handleChecklistItems from './handle_checklist_items';
import ListItem from './list_item';

export default class CommunityCenterChecklist extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: handleChecklistItems(this.props.season)
        };
    }

    gatherRenderedItems = (items) => {
        let renderedItems = [];
        items.forEach(i => {
            renderedItems.push(<ListItem item={i}></ListItem>);
        });

        return renderedItems;
    };

    render () {
        let items = this.gatherRenderedItems(this.state.items).map(i => i);
        return (
          <div>{items}</div>  
        );
    }
}
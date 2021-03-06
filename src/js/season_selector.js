import React, { Component } from 'react';
import '../styles/season_selector.css';
import springSrc from '../img/spring-season.png';
import summerSrc from '../img/summer-season.png';
import fallSrc from '../img/fall-season.png';
import winterSrc from '../img/winter-season.png';

class SeasonSelector extends Component {
    render () {
        return (
            <div id='season-selector' className={'fade-me-in'}>
                <p id='season-title'>Select Your Current Season</p>

                <div className={'season-selection-card'} onClick={() => this.props.handleSeasonSelect('spring')}>
                    <img src={springSrc} alt={'Spring'}/>
                    <p className={'season-selection-title'}>Spring</p>
                </div>

                <div className={'season-selection-card'} onClick={() => this.props.handleSeasonSelect('summer')}>
                    <img src={summerSrc} alt={'Summer'}/>
                    <p className={'season-selection-title'}>Summer</p>
                </div>

                <div className={'season-selection-card'} onClick={() => this.props.handleSeasonSelect('fall')}> 
                    <img src={fallSrc} alt={'Fall'}/>
                    <p className={'season-selection-title'}>Fall</p>
                </div>

                <div className={'season-selection-card'} onClick={() => this.props.handleSeasonSelect('winter')}>
                    <img src={winterSrc} alt={'Winter'}/>
                    <p className={'season-selection-title'}>Winter</p>
                </div>
            </div>
        );
    }
}

export default SeasonSelector;
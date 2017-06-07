import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import classNames from 'classnames';
import { fetchGeoData } from '../../utils/fetchUtils';
import countryCode from '../../json/countryCode.json';

const countryDropdown = (onChange) => {
    return <select className="countryDropdown-select" onChange={(e) => onChange(e)} name="country">
        <option value="" selected=""> All countries</option>
        {_.map(countryCode, (key, value) => {
            return <option className="countryDropdown-option" key={value} value={value}>{key}</option>
        })}
    </select>
};

class SearchPanel extends Component {
    constructor () {
        super();
        this.state =
        {
            postalCode : '',
            country : ''
        };
        this.fetchData = this.fetchData.bind(this);
        this.updatePostalCode = this.updatePostalCode.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.onCountrySelect = this.onCountrySelect.bind(this);
    }
    fetchData() {
        this.props.fetchGeoData(this.state.postalCode, this.state.country);
    }
    updatePostalCode(event){
        this.setState({'postalCode': event.currentTarget.value});
    }

    handleEnter(event) {
        if(event.keyCode === 13) {
            this.fetchData()
        }
    }
    onCountrySelect(e) {
        this.setState({'country': e.target.value});
    }

    render() {
        return(
        <div className='SearchBox-container'>
            <input name="searchBox" onInput={(event) => this.updatePostalCode(event)} onKeyDown={(event) => this.handleEnter(event)} id='searchBox-main' className="searchBox-main" placeholder="PostalCode"/>
            {countryDropdown((e) => this.onCountrySelect(e))}
            <button name='searchButton' value='search' onClick={this.fetchData} className='Button'>Search</button>
        </div>);
    };

}

SearchPanel.PropTypes = {
    fetchGeoData: PropTypes.func.isRequired,
    geoData: PropTypes.array.isRequired
};
const mapStateToProps = (state) => {
    return {geoData: state.postalCode.geoData}
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchGeoData: (postalCode, country) => {
            dispatch(fetchGeoData(postalCode, country))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)


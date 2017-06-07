import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SearchResult extends Component {
    constructor () {
        super();
        this.sortedGeoData = [];
        this.renderTableBody = this.renderTableBody.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        this.sortGeoData = this.sortGeoData.bind(this);
    }
    renderMessage() {
        return <div className="searchResult-message">
            {this.props.message}
        </div>
    }
    renderTableBody(geoData) {
        return <tbody>
        {geoData.map((data, index) =>
            <tr key={index}>
                <td key={`${index}1`}>{data.postalcode}</td>
                <td key={`${index}2`}>{data.placeName}</td>
                <td key={`${index}3`}>{data.lat}</td>
                <td key={`${index}4`}>{data.lng}</td>
            </tr>
        )}</tbody>
    }
    sortGeoData() {

    }

    render() {
        return(
            <div className="searchResult">
                {this.props.geoData.length
                    ?
                    <div className="searchResult-table">
                        <table>
                            <thead>
                                <tr>
                                    <td onClick={this.sortGeoData()} key={1}>Postal Code</td>
                                    <td key={2}>Place Name</td>
                                    <td key={3}>Latitude</td>
                                    <td key={4}>Longitude</td>
                                </tr>
                            </thead>
                            {this.renderTableBody(this.props.geoData)}
                        </table>
                    </div>
                    : this.renderMessage()
                }
            </div>
        );
    };

}

SearchResult.propTypes = {
    geoData: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired

};

const mapStateToProps = (state) => {
    return {
        geoData: state.postalCode.geoData,
        message: state.postalCode.message
    }
};

export default connect(mapStateToProps)(SearchResult)
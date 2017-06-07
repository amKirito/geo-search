import fetch from 'isomorphic-fetch';
import { updateListBasedOnPostalCode, updateMessage } from '../actions/Actions';
import config from '../../config/config';

export const fetchGeoData = (postalCode='', country='') => {
    return (dispatch) => {
        const postalURL = `${config.geonamesUrl.domain}/${config.geonamesUrl.postalCodeLookUp}?postalcode=${postalCode}&country=${country}&username=manikandan33`;
        return fetch(config.proxyUrl + postalURL)
            .then((response) => response.json())
            .then((json) => dispatch(updateListBasedOnPostalCode(json)))
            .catch((error) => dispatch(updateMessage('Search failed please try again after some time.')))
    }
};
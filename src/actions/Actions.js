// import { history, push } from 'react-router-redux';
import { UPDATE_BASED_ON_POSTAL_CODE, UPDATE_MESSAGE } from './ActionTypes';


export const updateListBasedOnPostalCode = (postalCode) => {
    return {
        type: UPDATE_BASED_ON_POSTAL_CODE,
        value: postalCode
    }
};
export const updateMessage = (error) => {
    return {
        type: UPDATE_MESSAGE,
        value: error
    }
};



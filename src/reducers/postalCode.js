import { UPDATE_BASED_ON_POSTAL_CODE, UPDATE_MESSAGE } from '../actions/ActionTypes';

const initialState = {
    postalCode:'',
    country:'',
    selectedCountry:'',
    geoData:[],
    message:'Enter the postal code and/or country that you want to search'
};

const postalCode = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BASED_ON_POSTAL_CODE:
            return Object.assign({}, state, {
                geoData: action.value.postalcodes || [],
                message: action.value.postalcodes.length  ? '' : 'No Results found'
            });
            break;
        case UPDATE_MESSAGE:
            return Object.assign({}, state, {
                geoData: [],
                message: action.value
            });
        default:
            return state
    }
};

export default postalCode;

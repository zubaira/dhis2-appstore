import * as actionTypes from '../constants/actionTypes';
import {appStatusToUI} from '../constants/apiConstants';

const emptySnackbar = {message: '', duration: 4000,};
const initialState = {
    ...emptySnackbar,
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_VERSION_ADD_SUCCESS: {
            return {
                ...state,
                message: 'New app version has been uploaded'
            }
        }
        case actionTypes.SET_APPROVAL_APP_SUCCESS: {
            return {
                ...state,
                message: 'Status for ' + action.payload.app.name + ' was updated to ' + appStatusToUI[action.payload.status],
            }
        }
        case actionTypes.APP_ADD_SUCCESS: {
            return {
                ...state,
                message: 'App has been uploaded'
            }
        }

        case actionTypes.APP_DELETE_SUCCESS: {
            return {
                ...state,
                message: action.payload.app.name + ' has been deleted',
            }
        }
        case actionTypes.SNACKBAR_EMPTY: {
            return {
                ...emptySnackbar,
            }
        }
        default:
            const { payload } = action;
            if (action.type.endsWith('_ERROR')) {
                let message = 'An error occured';
                if(payload.message && typeof payload.message === 'string') {
                    message += `: ${payload.message}`
                }
                return {
                    ...state,
                    message
                }

            } else {
                return {
                    ...state,
                };
            }
    }
};

export default snackbarReducer;

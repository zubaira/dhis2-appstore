import { reducer as formReducer} from 'redux-form';
import * as actions from '../constants/actionTypes';


const form = formReducer.plugin({
    imageUpload: (state, action) => {
        switch (action.type) {

            case actions.APP_IMAGE_ADD_SUCCESS: {
                return {
                    ...state,
                    values: undefined,
                    fields: undefined,
                };
            }

            default: {
                return state;
            }
        }
    }
});

export default form;
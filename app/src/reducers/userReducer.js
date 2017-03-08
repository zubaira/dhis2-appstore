import * as actionTypes from '../constants/actionTypes';

function userReducer(state = {appList: []}, action) {
    switch (action.type) {
        case actionTypes.APPS_APPROVED_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case actionTypes.APPS_ALL_LOADED:
        case actionTypes.USER_APPS_LOADED:
        {
            const appList = {}
            action.payload.map((app, i) => {
                appList[app.id] = app
            })
            return {
                ...state,
                appList
            }
        }
        case actionTypes.APP_LOADED: {
            const appId = action.payload.id;
            return {
                ...state,
                appList: {
                    ...state.appList,
                    [appId]: action.payload,
                }
            }
        }
        case actionTypes.USER_LOADED: {
            return {
                ...state,
                userInfo: action.payload,
            }
        }
        case actionTypes.SET_APPROVAL_APP_SUCCESS: {
            const appId = action.payload.app.id;
            const app = state.appList[appId];
            return {
                ...state,
                appList: {
                    ...state.appList,
                    [appId]: {
                        ...app,
                        status: action.payload.status
                    }
                }
            }

        }
        case actionTypes.APP_VERSION_ADD_SUCCESS: {
            const version = action.payload.version;
            const appId = action.payload.appId;
            const app = state.appList[appId];
            if(!app) {
                return state;
            }
            const newVer = [...app.versions, version];
            return {
                ...state,
                appList: {
                    ...state.appList,
                    [appId]: {
                        ...app,
                        versions: newVer,
                    }
                }
            }
        }

        case actionTypes.APP_VERSION_DELETE_SUCCESS: {
            const version = action.payload.version;
            const appId = action.payload.appId;
            const app = state.appList[appId];
            if(!app) {
                return state;
            }
            const newVer = app.versions.filter( v => v.id !== version.id);
            return {
                ...state,
                appList: {
                    ...state.appList,
                    [appId]: {
                        ...app,
                        versions: newVer,
                    }
                }
            }
        }

        case actionTypes.APP_DELETE_SUCCESS: {
            const app = action.payload.app;
            const list = {...state.appList};
            delete list[action.payload.app.id];
            return {
                ...state,
                appList: list,
            }
        }
        case actionTypes.APP_EDIT_SUCCESS: {
            const { app, data } = action.payload;
            console.log(action.payload)
            return {
                ...state,
                appList: {
                    ...state.appList,
                    [app.id]: {
                        ...app,
                        ...data
                    }
                }
            }
        }
    }
    return state;
}

export default userReducer;
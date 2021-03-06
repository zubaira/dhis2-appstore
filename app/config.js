
const isProd = (process.argv && process.argv.indexOf('-p') > -1) || process.env.NODE_ENV === 'production'
//used when NODE_ENV is 'development'

const dev = {
    BASE_APP_NAME: process.env.DHIS2_APPSTORE_BASE_APP_NAME ||  '',
    API_BASE_URL: process.env.DHIS2_APPSTORE_API_BASE_URL || 'http://localhost:3098/api/',
    API_REDIRECT_URL: process.env.DHIS2_APPSTORE_API_REDIRECT_URL || 'http://localhost:9000/user',
}

//used when NODE_ENV is not 'development'
const prod = {

    /* Basename for routes.
    If this app is hosted at http://hostname/appstore this should be '/appstore' */
    BASE_APP_NAME: '/appstore',

    /* Base URL for the API.
       Should be absolute path to the api endpoint.
       Note the trailing '/' */
    API_BASE_URL: 'https://play.dhis2.org/appstore/api/',

    /* Redirect URL to use by auth0, note that you need to allow this url
       on the auth0 side as well. */
    API_REDIRECT_URL: 'https://play.dhis2.org/appstore/user',
}

//Map to Translate API names to display-names
const appTypesToUI = {
    APP_STANDARD: 'Standard',
    APP_DASHBOARD: 'Dashboard',
    APP_TRACKER_DASHBOARD: 'Tracker Dashboard'
}

//Map to translate API status of apps to display-names
const appStatusToUI = {
    NOT_APPROVED: 'Rejected',
    PENDING: 'Pending',
    APPROVED: 'Approved',
}

const DHISVersions = ['2.27', '2.26', '2.25', '2.24', '2.23', '2.22', '2.21'];

const AUTH0ClientId = 'BTJ3iwPLO6hDC5w7JYWPlGd6461VNu81';
const AUTH0Domain = 'dhis2.eu.auth0.com';




module.exports = Object.assign({}, (isProd ? prod : dev), {
    DHISVersions,
    AUTH0ClientId,
    AUTH0Domain,
    appTypesToUI,
    appStatusToUI,
})

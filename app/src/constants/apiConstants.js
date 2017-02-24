
export const appTypesToUI = {
    APP_STANDARD: 'Standard',
    APP_DASHBOARD: 'Dashboard',
    APP_TRACKER_DASHBOARD: 'Tracker Dashboard'
}

export const appStatusToUI = {
    NOT_APPROVED: 'Rejected',
    PENDING: 'Pending',
    APPROVED: 'Approved',
}

export const appSchema = {
    appName: '',
    description: '',
    developer: {
        developerName: '',
        developerEmail: ''
    },
    versions: [{version: '',
        minDhisVersion: '',
        maxDhisVersion: ''
    }]

}

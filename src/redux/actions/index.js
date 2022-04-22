export const actionTypes = {
    REQUEST_USER_DATA: 'REQUEST_USER_DATA',
    REQUEST_USER_DATA_SUCCESSFUL: 'REQUEST_USER_DATA_SUCCESSFUL',
    REQUEST_USER_DATA_FAILED: 'REQUEST_USER_DATA_FAILED' 
};

export const requestUserDetails = () => ({type: actionTypes.REQUEST_USER_DATA});

export const requestUserDetailsSuccessful = (payload) => ({type: actionTypes.REQUEST_USER_DATA_SUCCESSFUL, payload});

export const requestUserDetailsFailed = (payload) => ({type: actionTypes.REQUEST_USER_DATA_FAILED, payload});
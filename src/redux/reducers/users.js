const initialState = {
    all: [],
    loadAll: false,
    errorAll: false,
    errorAllMessage: "Data Not Found",
    details: [],
    loadDetails: false,
    errorDetails: false,
    errorDetailsMessage: "Data Not Found",
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_USERS_PENDING":
            return {
                ...state,
                loadAll: true
            }

        case "GET_USERS_FULLFILLED":
            return {
                ...state,
                loadAll: false,
                all: action.payload,
                errorAllMessage: "Get User Success"
            }

        case "GET_USERS_REJECTED":
            return {
                ...state,
                loadAll: false,
                errorAllMessage: action.payload
            }

        case "GET_DETAILS_USERS_PENDING":
            return {
                ...state,
                loadDetails: true
            }

        case "GET_DETAILS_USER_FULLFILLED":
            return {
                ...state,
                details: action.payload,
                loadDetails: false,
                errorDetailsMessage: "Get User Success"
            }

        case "GET_DETAILS_USER_REJECTED":
            return {
                ...state,
                loadDetails: false,
                errorDetailsMessage: action.payload
            }
    
        default:
            return state
    }
}

export default usersReducer

const initialState = {
    all: [],
    loadAll: false,
    errorAll: false,
    errorAllMessage: "Data Not Found",
    details: [],
    loadDetails: false,
    errorDetails: false,
    errorDetailsMessage: "Data Not Found",
    details2: {},
    loadDetails2: false,
    errorDetails2: false,
    errorDetailsMessage2: "Data Not Found",
    mydetails: {},
    loadMyDetails: false,
    errorMyDetails: false,
    errorMyDetailsMessage: "Data Not Found",
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

        case "GET_DETAILS_USER_PENDING":
            return {
                ...state,
                loadDetails: true
            }

        case "GET_DETAILS_USER_FULLFILLED":
            return {
                ...state,
                loadDetails: false,
                details: action.payload,
                errorDetailsMessage: "Get User Success"
            }

        case "GET_DETAILS_USER_REJECTED":
            return {
                ...state,
                loadDetails: false,
                errorDetailsMessage: action.payload
            }
        case "GET_DETAILS2_USER_PENDING":
        return {
            ...state,
            loadDetails2: true
        }

      case "GET_DETAILS2_USER_FULLFILLED":
          return {
              ...state,
              loadDetails2: false,
              details2: action.payload,
              errorDetailsMessage2: "Get User Success"
          }

      case "GET_DETAILS2_USER_REJECTED":
          return {
              ...state,
              loadDetails2: false,
              errorDetailsMessage2: action.payload
          }
      case "GET_MYDETAILS_USER_PENDING":
        return {
            ...state,
            loadMyDetails: true
        }
  
        case "GET_MYDETAILS_USER_FULLFILLED":
            return {
                ...state,
                loadMyDetails: false,
                mydetails: action.payload,
                errorMyDetailsMessage: "Get User Success"
            }
  
        case "GET_MYDETAILS_USER_REJECTED":
            return {
                ...state,
                loadMyDetails: false,
                errorMyDetailsMessage: action.payload
            }
        default:
            return state
    }
}

export default usersReducer

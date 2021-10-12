import { getAllUser, getAllUserPending, getAllUserError, getDetailUser, getDetailUserPending, getDetailUserError, getMyDetailUser, getMyDetailUserPending, getMyDetailUserError } from "../../helpers/var";

const userState = {
  getAll: [],
  loadAll: false,
  errorAll: false,
  errorMessageAll: '',
  getDetail: {},
  loadDetail: false,
  errorDetail: false,
  errorMessageDetail: '',
  myDetail: {},
  loadMyDetail: false,
  errorMyDetail: false,
  errorMessageMyDetail: '',
}

const userReducer = (state=userState, action) => {
  switch (action.type) {
    case getAllUserPending:
      return {...state, loadAll: true}
    case getAllUser:
      return {...state, loadAll: false, getAll: action.payload}
    case getAllUserError:
      return {...state, loadAll: false, errorAll: true, errorMessageAll: action.payload}
    case getDetailUserPending:
      return {...state, loadDetail: true}
    case getDetailUser:
      return {...state, loadDetail: false, getDetail: action.payload}
    case getDetailUserError:
      return {...state, loadDetail: false, errorDetail: true, errorMessageDetail: action.payload}
    case getMyDetailUserPending:
      return {...state, loadMyDetail: true}
    case getMyDetailUser:
      return {...state, loadMyDetail: false, myDetail: action.payload}
    case getMyDetailUserError:
      return {...state, loadMyDetail: false, errorMyDetail: true, errorMessageMyDetail: action.payload}
    default:
      return state
  }
}

export default userReducer
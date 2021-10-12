import { getHistoryMsg, getHistoryMsgPending, getHistoryMsgError, getListMsg, getListMsgPending, getListMsgError } from "../../helpers/var";

const msgState = {
  historyMsg: [],
  loadHistory: false,
  errorHistory: false,
  errorMessageHistory: '',
  listMsg: [],
  loadListMsg: false,
  errorListMsg: false,
  errorMessageList: '',
}

const msgReducer = (state=msgState, action) => {
  switch (action.type) {
    case getHistoryMsgPending:
      return {...state, loadHistory: true}
    case getHistoryMsg:
      return {...state, loadHistory: false, historyMsg: action.payload}
    case getHistoryMsgError:
      return {...state, loadHistory: false, errorHistory: true, errorMessageHistory: action.payload}
    case getListMsgPending:
      return {...state, loadListMsg: true}
    case getListMsg:
      return {...state, loadListMsg: false, listMsg: action.payload}
    case getListMsgError:
      return {...state, loadListMsg: false, errorListMsg: true, errorMessageList: action.payload}
    default:
      return state
  }
}

export default msgReducer
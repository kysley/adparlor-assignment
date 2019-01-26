import ky from 'ky'
// eslint wants an empty line here, probably due to the way redux-saga handles their importing
import { call, put, takeEvery } from 'redux-saga/effects'

const API_URL = 'https://5c48812b4c918c001429ccd6.mockapi.io/v1/templates'

// Actions
const GET_BLUEPRINTS = 'GET_BLUEPRINTS'
const GET_BLUEPRINTS_SUCCESS = 'GET_BLUEPRINTS_SUCCESS'
const GET_BLUEPRINTS_FAILURE = 'GET_BLUEPRINTS_FAILURE'

const initialState = {
  loading: false,
  blueprints: [{}],
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BLUEPRINTS:
      return {
        ...state,
        loading: true,
      }
    case GET_BLUEPRINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        blueprints: action.blueprints,
      }
    case GET_BLUEPRINTS_FAILURE:
      return {
        ...state,
        loading: false,
        blueprints: [],
      }
    default: return state
  }
}

// Action Creators
export const loadBlueprints = () => ({ type: GET_BLUEPRINTS })

// Saga Helper
export const fetchBlueprintsApi = () => (
  ky(API_URL)
    .then(res => res.json())
    .then(data => data)
)

// Saga
export function* fetchBlueprints() {
  try {
    const blueprints = yield call(fetchBlueprintsApi)
    yield put({ type: GET_BLUEPRINTS_SUCCESS, blueprints })
  } catch (e) {
    yield put({ type: GET_BLUEPRINTS_FAILURE, message: e.message })
  }
}

// Root Saga
export function* rootSaga() {
  yield takeEvery('GET_BLUEPRINTS', fetchBlueprints)
}

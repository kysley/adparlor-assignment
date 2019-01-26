import ky from 'ky'

import { call, put } from 'redux-saga/effects'

const API_URL = 'https://5c48812b4c918c001429ccd6.mockapi.io/v1/templates'

const GET_BLUEPRINTS = 'GET_BLUEPRINTS'
const GET_BLUEPRINTS_SUCCESS = 'GET_BLUEPRINTS_SUCCESS'
const GET_BLUEPRINTS_FAILURE = 'GET_BLUEPRINTS_FAILURE'

export default (state = {}, action = {}) => {
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
        blueprints: action.payload.blueprints,
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

export const loadBlueprints = () => (
  { type: GET_BLUEPRINTS }
)

export function* fetchBlueprints() {
  try {
    const blueprints = yield call(ky(API_URL)
      .then(res => res.json())
      .then(data => data))
    yield put({ type: GET_BLUEPRINTS_SUCCESS, blueprints })
  } catch (e) {
    yield put({ type: GET_BLUEPRINTS_FAILURE, message: e.message })
  }
}

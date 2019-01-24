import { types, flow, applySnapshot } from 'mobx-state-tree'
import ky from 'ky'

/**
 * Typically this is something that I would split into a constants helper
 * but is this the only place we will need to use the URL..
 */
const API_URL = 'https://5c48812b4c918c001429ccd6.mockapi.io/v1/templates'

const BlueprintModel = types
  .model('BlueprintModel', {
    id: types.maybe(types.string),
    createdAt: types.maybe(types.string),
    name: types.maybe(types.string),
    imageUrl: types.maybe(types.string),
    type: types.maybe(types.string),
  })

const BlueprintStore = types
  .model('BlueprintStore', {
    loading: types.optional(types.boolean, false),
    blueprints: types.array(BlueprintModel),
  })
  .actions((self) => {
    /**
     * Blueprint store function to apply data to the state tree
     * @function setBlueprints
     */
    const setBlueprints = (blueprints) => {
      applySnapshot(self.blueprints, blueprints)
    }

    /**
     * Blueprint store function for logging in a user
     * @async
     * @function grabBlueprints
     * @returns {boolean} Success of the function
     */
    const grabBlueprints = flow(function* () {
      self.loading = true
      try {
        const blueprints = yield ky(API_URL)
          .then(res => res.json())
          .then(data => data)
        self.setBlueprints(blueprints)
        return true
      } catch (err) {
        console.log('something went wrong, but this is a mock api :thinking:', err)
        return false
      } finally {
        self.loading = false
      }
    })

    return {
      grabBlueprints,
      setBlueprints,
    }
  })

export default BlueprintStore

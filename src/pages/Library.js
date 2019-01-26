import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadBlueprints } from '../ducks'

import Card from 'Components/Card'
import { BlueprintGrid } from 'Styled/Grids'

/**
 * View page for the URL /library
 */

const mapState = state => ({ ...state })

const mapDispatch = dispatch => ({
  fetchBlueprints() {
    dispatch(loadBlueprints())
  },
})

class Library extends React.Component {
  state = { }

  componentDidMount() {
    const { fetchBlueprints } = this.props
    fetchBlueprints()
  }

  render() {
    const { loading, blueprints } = this.props
    return (
      <BlueprintGrid>
        {!loading && blueprints.length > 0
          ? (
            <>
              {blueprints.map(bp => (
                <Card key={bp.type} info={bp} />
              ))}
              <Card empty />
            </>
          )
          : (
            <span>Loading...</span>
          )
        }
      </BlueprintGrid>
    )
  }
}

export default connect(mapState, mapDispatch)(Library)

Library.propTypes = {
  loading: PropTypes.bool,
  blueprints: PropTypes.array,
  fetchBlueprints: PropTypes.shape({}),
}

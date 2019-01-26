import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Card from 'Components/Card'
import { BlueprintGrid } from 'Styled/Grids'

/**
 * View page for the URL /library
 */

@inject('blueprintStore')
@observer
class Library extends React.Component {
  state = { }

  componentDidMount() {
    const { blueprintStore } = this.props

    blueprintStore.grabBlueprints()
  }

  render() {
    const { blueprintStore } = this.props
    return (
      <BlueprintGrid>
        {!blueprintStore.isLoading
          ? (
            <>
              {blueprintStore.blueprints.map(bp => (
                <Card key={bp.id} info={bp} />
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

export default Library

Library.propTypes = {
  blueprintStore: PropTypes.shape({}),
}

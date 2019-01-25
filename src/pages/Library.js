import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Card from 'Components/Card'
import { BlueprintGrid } from 'Styled/Grids'

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

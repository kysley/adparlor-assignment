import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Card from 'Components/Card'

@inject('blueprintStore')
@observer
class Library extends React.Component {
  state = { }

  componentDidMount() {
    const { blueprintStore } = this.props

    blueprintStore.grabBlueprints()
    console.log(blueprintStore)
  }

  render() {
    const { blueprintStore } = this.props
    return (
      <div>
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
      </div>
    )
  }
}

export default Library

import React from 'react'
import ky from 'ky'

import Card from 'Components/Card'
import { BlueprintGrid } from 'Styled/Grids'

/**
 * Typically this is something that I would split into a constants helper
 * but is this the only place we will need to use the URL..
 */
const API_URL = 'https://5c48812b4c918c001429ccd6.mockapi.io/v1/templates'

/**
 * View page for the URL /library
 */

class Library extends React.Component {
  state = {
    loading: false,
    blueprints: [{}],
  }

  componentDidMount() {
    this.fetchBlueprints()
  }

  fetchBlueprints = async () => {
    this.setState({ loading: true })
    const blueprints = await ky(API_URL)
      .then(res => res.json())
      .then(data => data)

    this.setState({ loading: false, blueprints })
  }

  render() {
    const { loading, blueprints } = this.state
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

export default Library

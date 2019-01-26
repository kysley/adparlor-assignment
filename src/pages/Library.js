import React, { useState, useEffect } from 'react'
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

const Library = () => {
  const [data, setData] = useState([{}])

  const fetchBlueprints = async () => {
    const blueprints = await ky(API_URL)
      .then(res => res.json())
      .then(json => json)
    setData(blueprints)
  }

  useEffect(() => {
    fetchBlueprints()
  }, [])

  return (
    <BlueprintGrid>
      {data.length >= 2
        ? (
          <>
            {data.map(bp => (
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

export default Library

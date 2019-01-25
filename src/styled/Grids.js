import styled from '@emotion/styled'
import { css } from '@emotion/core'

/**
 * Basic Grids/Containers for the app that are aimed to be
 * potentially reusable
 */

const containerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 3em 10em;
  align-items: center;
`

const Container = styled.div`
  ${containerStyles};
`

const blueprintGridStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5em;
  width: 100%;
  padding: 0 1em;
`

const BlueprintGrid = styled.div`
  ${blueprintGridStyles};
`


export {
  BlueprintGrid,
  Container,
}

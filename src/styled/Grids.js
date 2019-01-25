import styled from '@emotion/styled'
import { css } from '@emotion/core'


const containerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0 10rem;
  align-items: center;
`

const Container = styled.div`
  ${containerStyles};
`

const blueprintGridStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;
`

const BlueprintGrid = styled.div`
  ${blueprintGridStyles}
`


export {
  BlueprintGrid,
  Container,
}

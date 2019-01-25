import styled from '@emotion/styled'
import { css } from '@emotion/core'

/**
 * This is where style composition would happen if you had many different
 * button styles or designs.
 * I chose to export this named because this wouldn't be the default button
 * in a real world scenario
 */

const outlineButtonStyles = css`
  border: 1px solid #FFF;
  color: white;
  padding: .25em 1em .25em 1em;
  background-color: transparent;
  border-radius: 35px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const OutlineButton = styled.button`
  ${outlineButtonStyles};
`

export {
  OutlineButton,
}

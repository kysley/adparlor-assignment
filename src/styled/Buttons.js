import styled from '@emotion/styled'
import { css } from '@emotion/core'


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

import styled from '@emotion/styled'

/**
 * Basic primitive that I took from my own design lib
 */

const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  border-radius: 50px;
  border: 2px solid #FFFFFF;
  color: #FFF;
  user-select: none;
  display: ${props => props.inline ? 'inline' : null};
  &:hover {
    cursor: pointer;
    background-color: rgb(129, 180, 196);
  }
`

AvatarBox.defaultProps = {
  size: 24,
  inline: false,
}

export default AvatarBox

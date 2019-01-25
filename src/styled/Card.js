import styled from '@emotion/styled'
import { css } from '@emotion/core'

/**
 * Basic card used for displaying picture & meta information.
 * Uses some style composition.
 */

const sharedCardStyles = css`
  height: 230px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #666666;
`

const defaultCardStyles = css`
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e9e9e9;
`

const emptyCardStyles = css`
  border: 1px dashed #c9c9c9;
  justify-content: center;
  align-items: center;
`

const EmptyCardText = styled.h3`
  font-family: Theinhardt-Bold;
  font-size: 1rem;
  margin: 0;
`

const CardWrapper = styled.div`
  ${sharedCardStyles};
  ${p => p.empty ? css`${emptyCardStyles}` : css`${defaultCardStyles}`};
`

const CardMetaWrapper = styled.div`
  padding: .5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const CardImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 6px 6px 0 0;
  background-repeat: no-repeat;
  background-size: contain;
`

const CardName = styled.h3`
  font-family: Theinhardt-Bold;
  font-size: 1rem;
  margin: 0;
`

const CardMeta = styled.span`
  font-size: 1rem;
`

export default CardWrapper

export {
  CardMetaWrapper,
  CardImage,
  CardName,
  CardMeta,
  EmptyCardText,
}

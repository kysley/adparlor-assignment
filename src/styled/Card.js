import styled from '@emotion/styled'
import { css } from '@emotion/core'

const defaultCardStyles = css`
  height: 230px;
  width: 352px;
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #666666;
`

const CardWrapper = styled.div`
  ${defaultCardStyles};
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
}

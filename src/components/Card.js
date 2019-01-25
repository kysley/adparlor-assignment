import React from 'react'

import CardWrapper, { CardImage, CardName, CardMeta, CardMetaWrapper } from 'Styled/Card'

const Card = ({ info }) => (
  <CardWrapper>
    <CardImage src={info.imageUrl} />
    <CardMetaWrapper>
      <CardName>{info.name}</CardName>
      <CardMeta>All Ad Sizes</CardMeta>
    </CardMetaWrapper>
  </CardWrapper>
)

export default Card

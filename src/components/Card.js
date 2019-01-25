import React from 'react'

import CardWrapper,
{
  CardImage,
  CardName,
  CardMeta,
  CardMetaWrapper,
  EmptyCardText,
} from 'Styled/Card'

const Card = ({ info, empty }) => (
  <>
    {empty
      ? (
        <CardWrapper empty>
          <EmptyCardText>+</EmptyCardText>
          <EmptyCardText>Custom Blueprint</EmptyCardText>
        </CardWrapper>
      ) : (
        <CardWrapper>
          <CardImage src={info.imageUrl} />
          <CardMetaWrapper>
            <CardName>{info.name}</CardName>
            <CardMeta>All Ad Sizes</CardMeta>
          </CardMetaWrapper>
        </CardWrapper>
      )
    }
  </>
)

export default Card

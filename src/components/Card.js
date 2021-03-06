import React from 'react'

/**
 * Card component that is composed of Styled/Card components
 * We use a ternary to conditionally render the empty card to try
 * to keep things as reusable as possible.
 * -- Another way to do this would be style composition
 */

import CardWrapper,
{
  CardImageContainer,
  CardImage,
  CardName,
  CardMeta,
  CardMetaWrapper,
  EmptyCardText,
  EmptyCardMeta,
} from 'Styled/Card'

const Card = ({ info, empty }) => (
  <>
    {empty
      ? (
        <CardWrapper empty>
          <EmptyCardMeta>+</EmptyCardMeta>
          <EmptyCardText>Custom Blueprint</EmptyCardText>
        </CardWrapper>
      ) : (
        <CardWrapper>
          <CardImageContainer>
            <CardImage src={info.imageUrl} />
          </CardImageContainer>
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

Card.propTypes = {
  info: PropTypes.shape({}),
  empty: PropTypes.bool,
}

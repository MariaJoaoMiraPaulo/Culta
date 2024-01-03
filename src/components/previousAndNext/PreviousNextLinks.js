import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import ArrowIcon from '../../icons/ArrowIcon';

const Link = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.main};
  cursor: pointer;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  width: 50%;

  @media ${devices.tablet} {
    &:first-child {
      align-items: flex-start;
    }

    &:last-child {
      align-items: flex-end;
    }
    margin-bottom: 0rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    padding: 10rem 3rem 3rem 3rem;
  }
`;

const ItemImage = styled.div`
  width: 200px;
  height: 150px;
`;

const ItemName = styled.div`
  margin-top: 1rem;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const Title = styled.div`
  margin-right: ${props => (props.left ? '0' : '15px')};
  margin-left: ${props => (props.left ? '15px' : '0')};
`;

const PreviousNextLinks = ({
  next,
  previous,
  data,
  currentDataItemId,
  jumpTo,
}) => {
  const currentDataLocation = data.findIndex(
    item => item.node.id === currentDataItemId,
  );
  const maxNumberDataItems = data.length;

  const previousItem =
    currentDataLocation !== 0 ? data[currentDataLocation - 1]?.node : undefined;

  const nextItem =
    currentDataItemId !== maxNumberDataItems
      ? data[currentDataLocation + 1]?.node
      : undefined;

  return (
    <LinksWrapper>
      {previousItem ? (
        <Link onClick={() => jumpTo(previousItem.linkTitle)}>
          <TitleWrapper>
            <ArrowIcon left color="red" style={{ width: '40px' }} />
            <Title left>{previous.toUpperCase()}</Title>
          </TitleWrapper>
          <ItemImage>
            <GatsbyImage
              style={{ height: '100%', width: '100%' }}
              image={previousItem.backgroundImage.gatsbyImageData}
              alt={previousItem.backgroundImage.description || ''}
              placeholder="blurred"
              layout="constrained"
            />
          </ItemImage>
          <ItemName>{previousItem.title}</ItemName>
        </Link>
      ) : (
        <Link></Link>
      )}
      {nextItem ? (
        <Link onClick={() => jumpTo(nextItem.linkTitle)}>
          <TitleWrapper>
            <Title>{next.toUpperCase()}</Title>
            <ArrowIcon color="red" style={{ width: '40px' }} />
          </TitleWrapper>
          <ItemImage>
            <GatsbyImage
              style={{ height: '100%', width: '100%' }}
              image={nextItem.backgroundImage.gatsbyImageData}
              alt={nextItem.backgroundImage.description || ''}
              placeholder="blurred"
              layout="constrained"
            />
          </ItemImage>
          <ItemName>{nextItem.title}</ItemName>
        </Link>
      ) : (
        <Link></Link>
      )}
    </LinksWrapper>
  );
};

export default PreviousNextLinks;

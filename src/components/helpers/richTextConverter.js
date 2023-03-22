import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Asset from './Asset';
import { Link } from 'gatsby';
import {
  Body,
  BodyBold,
  BodyHeading,
  BodyUnderlined,
} from '../../styles/typographyComponents';
import styled from 'styled-components';
import theme from '../../styles/theme';

const PaddingParagraph = styled.div`
  padding-bottom: 2rem;
`;

const ALink = styled(Link)`
  color: ${theme.colors.red};
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
`;

const getCustomOptions = assets => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <BodyBold>{text}</BodyBold>,
      [MARKS.UNDERLINE]: text => <BodyUnderlined>{text}</BodyUnderlined>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <PaddingParagraph>
          <BodyHeading>{children}</BodyHeading>
        </PaddingParagraph>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <PaddingParagraph>
          <Body>{children}</Body>
        </PaddingParagraph>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return <Asset id={node.data.target.sys.id} assets={assets} />;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <ALink to={node.data.uri}>{children}</ALink>;
      },
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [
          ...children,
          index > 0 && <br key={textSegment} /> && <PaddingParagraph />,
          textSegment,
        ];
      }, []);
    },
  };
  return options;
};

export const richTextToReactElements = (richText, assets) =>
  renderRichText(richText, getCustomOptions(assets));

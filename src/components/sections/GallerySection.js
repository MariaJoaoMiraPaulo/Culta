import React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { Body } from '../../styles/typographyComponents';
import { GatsbyImage } from 'gatsby-plugin-image';

const GallerySectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const GallerySection = ({ color, padding, projectGallery }) => {
  console.log('OIIIIII: ', projectGallery);
  return (
    <GallerySectionWrapper color={color} padding={padding}>
      {projectGallery.map(node => {
        return (
          <>
            <Description>
              <Body>{node?.description}</Body>
            </Description>
            {node?.gatsbyImageData && (
              <GatsbyImage
                style={{ height: '100%', width: '100%' }}
                image={projectGallery[0]?.gatsbyImageData}
                alt={projectGallery[0]?.description || 'project image'}
                placeholder="blurred"
                layout="constrained"
                {...(projectGallery[0]?.gatsbyImageData?.images?.fallback && {
                  fallback: {
                    ...projectGallery[0].gatsbyImageData.images.fallback,
                    srcSet:
                      projectGallery[0].gatsbyImageData.images.fallback.srcSet,
                  },
                })}
              />
            )}
          </>
        );
      })}
    </GallerySectionWrapper>
  );
};

export default GallerySection;

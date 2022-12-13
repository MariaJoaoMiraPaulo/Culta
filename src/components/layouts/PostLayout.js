import * as React from 'react';
import Post from '../blog/Post';
import styled from 'styled-components';

const PostPageLayout = styled.div`
  padding: 3rem 0;
`;

const PostLayout = ({ post, assets }) => {
  return (
    <PostPageLayout>
      <Post post={post} assets={assets} />
    </PostPageLayout>
  );
};

export default PostLayout;

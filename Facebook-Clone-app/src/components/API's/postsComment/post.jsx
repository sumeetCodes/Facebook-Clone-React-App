import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, Typography } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
        console.log(response.data.posts);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  



  return (
    <Box className="border p-1">
      <Card className='mb-5 p-1'>
        {posts.map((post) => (
          <Box key={post.id} className="mb-5">
            <span>Anonymous User no {post.userId}</span>
            <Typography variant="h6" className="my-2">
              {post.title}
            </Typography>
            <p>{post.body}</p>
            <hr />
            <Box className="mb-3">

<Typography variant="body1" className="my-2 mx-2">
  Likes: {post.reactions.likes}
</Typography>
            </Box>

<Box>

<Card>

<Box className="d-flex justify-content-around align-items-center">

  <Button className='text-black mb-3' variant="outlined">
    Like
  </Button>

<Button className='text-black mb-3' variant="outlined">
    comment
  </Button>

</Box>

</Card>

</Box>

          </Box>
        ))}
      </Card>
    </Box>
  );
};

export default Posts;







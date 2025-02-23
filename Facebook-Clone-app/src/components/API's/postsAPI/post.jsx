//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import { Box, Button, Card, Modal, Typography } from '@mui/material';
//import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
//import CommentIcon from '@mui/icons-material/Comment';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//
//
//const Posts = () => {
  //const [posts, setPosts] = useState([]);
//
//
 //
//
  //useEffect(() => {
    //const fetchPosts = async () => {
      //try {
        //const response = await axios.get('https://dummyjson.com/posts');
        //setPosts(response.data.posts);
        //console.log(response.data.posts);
        //
      //} catch (error) {
        //console.error('Error fetching posts:', error);
      //}
    //};
//
    //fetchPosts();
  //}, []);
//
//
  //return (
    //<Box className="border p-1">
      //<Card className='mb-5 p-1'>
        //{posts.map((post) => (
          //<Box key={post.id} className="mb-5">
//<AccountCircleIcon className="mx-2 text-secondary border rounded-circle" 
//style={{fontSize:40}}
///>
            //<span>Anonymous User no {post.userId}</span>
            //<Typography variant="h6" className="my-2">
              //{post.title}
            //</Typography>
            //<p>{post.body}</p>
            //<hr />
            //<Box className="mb-3">
//
//<Typography variant="body1" className="my-2 mx-2">
  //Likes: {post.reactions.likes}
//</Typography>
            //</Box>
//
//<Box>
//
//<Card>
//
//<Box className="d-flex justify-content-around align-items-center mb-3">
//
  //<Button variant="outline">
//<ThumbUpOffAltIcon className="mx-2" />  like
//</Button>
 //
//<Button variant="outline">
//<CommentIcon className="mx-2" />  Comment
//</Button>
//
//</Box>
//
//</Card>
//
//</Box>
//
          //</Box>
        //))}
      //</Card>
    //</Box>
  //);
//};
//
//export default Posts;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, Modal, Typography, TextField } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false); // State to manage modal open/close
  const [currentPostId, setCurrentPostId] = useState(null); // State to track the current post for comments
  const [newComment, setNewComment] = useState(''); // State to manage new comment input

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        const fetchedPosts = response.data.posts;

        // Load likes and comments from local storage
        const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
        const storedComments = JSON.parse(localStorage.getItem('comments')) || {};

        // Update posts with stored likes and comments
        const updatedPosts = fetchedPosts.map(post => ({
          ...post,
          likes: storedLikes[post.id] || 0, // Set likes from local storage or default to 0
          comments: storedComments[post.id] || [] // Set comments from local storage or default to empty array
        }));

        setPosts(updatedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);





// Function to handle like button click
const handleLike = (postId) => {
  setPosts(prevPosts => {
    return prevPosts.map(post => {
      if (post.id === postId) {
        // Determine if the post is currently liked
        const isLiked = post.likes % 2 === 1; // If likes are odd, it means it's currently liked
        const newLikes = isLiked ? post.likes - 1 : post.likes + 1; // Decrease if liked, increase if not liked

        // Update local storage
        const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
        storedLikes[postId] = newLikes; // Update the like count in local storage
        localStorage.setItem('likes', JSON.stringify(storedLikes));

        return { ...post, likes: newLikes }; // Return updated post
      }
      return post; // Return unchanged post
    });
  });
};



  // Function to open comment modal
  const handleCommentOpen = (postId) => {
    setCurrentPostId(postId);
    setOpen(true);
  };

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    if (newComment.trim() === '') return; // Prevent empty comments

    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === currentPostId) {
          const updatedComments = [...post.comments, newComment]; // Add new comment
          // Update local storage
          const storedComments = JSON.parse(localStorage.getItem('comments')) || {};
          storedComments[currentPostId] = updatedComments;
          localStorage.setItem('comments', JSON.stringify(storedComments));
          return { ...post, comments: updatedComments }; // Return updated post
        }
        return post; // Return unchanged post
      });
    });

    setNewComment(''); // Clear input field
  };

  // Function to close the comment modal
  const handleClose = () => {
    setOpen(false);
    setCurrentPostId(null); // Reset current post ID
  };

  return (
    <Box className="border p-1">
      <Card className='mb-5 p-1'>
        {posts.map((post) => (
          <Box key={post.id} className="mb-5">
            <AccountCircleIcon className="mx-2 text-secondary border rounded-circle" style={{ fontSize: 40 }} />
            <span>Anonymous User no {post.userId}</span>
            <Typography variant="h6" className="my-2">
              {post.title}
           
            </Typography>
            <p>{post.body}</p>
            <hr />
            <Box className="mb-3">
              <Typography variant="body1" className="my-2 mx-2">
                Likes: {post.likes} {/* Display the updated like count */}
              </Typography>
            </Box>

            <Box>
              <Card>
                <Box className="d-flex justify-content-around align-items-center mb-3">


<Button variant="outlined" onClick={() => handleLike(post.id)}>
  <ThumbUpOffAltIcon className="mx-2" /> Like
</Button>

                  <Button variant="outlined" onClick={() => handleCommentOpen(post.id)}>
                    <CommentIcon className="mx-2" /> Comment
                  </Button>
                </Box>
              </Card>
            </Box>


          </Box>
        ))}
      </Card>





{/* Modal for adding comments */}
<Modal open={open} onClose={handleClose}>
  <Box sx={{ width: 400, padding: 2, backgroundColor: 'white', margin: 'auto', marginTop: '20%' }}>
    <Typography variant="h6" className="mb-2">Comments</Typography>
    
    {/* Display existing comments for the current post */}
    {currentPostId && posts.find(post => post.id === currentPostId)?.comments.map((comment, index) => (
      <Typography key={index} variant="body2" className="my-1">
        {comment} {/* Display each comment */}
      </Typography>
    ))}

    <TextField
      label="Write a comment"
      variant="outlined"
className="mt-3 mb-2"
      fullWidth
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)} // Update new comment state
    />
    <Button variant="contained" onClick={handleCommentSubmit} className="mt-2 me-2">Submit</Button>
    <Button variant="outlined" onClick={handleClose} className="mt-2 ml-2">Close</Button>
  </Box>
</Modal>



    </Box>
  );
};

export default Posts;






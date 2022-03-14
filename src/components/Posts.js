import React, { useState } from 'react'
import { connect } from 'react-redux'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import Post from './Post'
import PostForm from './PostForm'

const Posts = ({ posts }) => {
  const [editPostMode, setEditPostMode] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <>
      <h1>posts ✏️</h1>
      <Button variant="contained" color="secondary" onClick={() => setEditPostMode(true)}>add post</Button>

      <Modal
        open={editPostMode}
        onClose={() => setEditPostMode(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>
            Edit Post
          </h1>
          <PostForm setEditPostMode={setEditPostMode} newPost />
        </Box>
      </Modal>

      <div
        className="blog-posts"
        style={
          {
            margin: '2% 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', width: '100%',
          }
        }
      >
        {
          posts.map(post => (
            <Box
              key={post.id}
              sx={{ boxShadow: 1 }}
              style={
                {
                  width: '30%', padding: '5%', margin: '1%', height: '400px',
                }
              }
            >
              <Post key={post.id} id={post.id} />
            </Box>
          ))
        }
      </div>
    </>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(Posts)

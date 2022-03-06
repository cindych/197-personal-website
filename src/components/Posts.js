import React, { useState } from 'react'
import { connect } from 'react-redux'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import { addPost } from '../actions'
import Post from './Post'

const Posts = ({ posts, dispatchAddPost }) => {
  const [editPostMode, setEditPostMode] = useState(false)
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [text, setText] = useState('')

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

  const resetValues = () => {
    setTitle('')
    setImg('')
    setText('')
  }

  return (
    <>
      <h1>Blog Posts</h1>
      <Button onClick={() => setEditPostMode(true)}>Add Post</Button>

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
          <div>
            <form onSubmit={e => {
              e.preventDefault()
              dispatchAddPost(title, img, text)
              setEditPostMode(false)
              resetValues()
            }}
            >
              <div>
                <label>
                  Title
                  <input type="text" value={title} placeholder="Enter the title of the post" onChange={e => setTitle(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Image
                  <input type="text" value={img} placeholder="Enter image url" onChange={e => setImg(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  Description
                  <input type="text" value={text} placeholder="Enter description" onChange={e => setText(e.target.value)} />
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  value="submit"
                />
                <input
                  type="button"
                  value="cancel"
                  onClick={e => {
                    setEditPostMode(false)
                    resetValues()
                  }}
                />
              </div>
            </form>
          </div>
        </Box>
      </Modal>

      {posts.map(post => <div><Post key={post.id} id={post.id} /></div>)}
    </>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, img, text) => dispatch(addPost(title, img, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { addPost, editPost, deletePost } from '../actions'

const PostForm = ({
  setEditPostMode, newPost, posts, id, dispatchAddPost, dispatchEditPost, dispatchDeletePost,
}) => {
  let currTitle = ''
  let currImg = ''
  let currText = ''

  if (!newPost) {
    posts.forEach(({ // find post associated with id
      title: postTitle, img: postImg, text: postText, id: postId,
    }) => {
      if (id === postId) {
        currTitle = postTitle
        currImg = postImg
        currText = postText
      }
    })
  }

  const [title, setTitle] = useState(currTitle)
  const [img, setImg] = useState(currImg)
  const [text, setText] = useState(currText)

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        if (newPost) {
          dispatchAddPost(title, img, text)
        } else {
          dispatchEditPost(title, img, text, id)
        }
        setEditPostMode(false)
      }}
      >
        <TextField id="outline-basic" color="secondary" value={title} label="Title" variant="outlined" size="small" fullWidth onChange={e => setTitle(e.target.value)} />
        <TextField id="outline-basic" color="secondary" value={img} label="Image" variant="outlined" size="small" fullWidth margin="normal" onChange={e => setImg(e.target.value)} />
        <TextField id="outline-basic" color="secondary" value={text} label="Description" variant="outlined" size="small" fullWidth multiline maxRows={5} margin="dense" onChange={e => setText(e.target.value)} />
        <div style={{ margin: '5% 0' }}>
          <Button
            color="secondary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            color="secondary"
            type="button"
            onClick={e => {
              setEditPostMode(false)
            }}
          >
            Cancel
          </Button>
        </div>
        {!newPost
        && (
          <div>
            <Button
              color="error"
              type="button"
              onClick={() => {
                dispatchDeletePost(id)
              }}
            >
              Delete
            </Button>
          </div>
        )}
      </form>
    </>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, img, text) => dispatch(addPost(title, img, text)),
  dispatchEditPost: (title, img, text, postId) => dispatch(editPost(title, img, text, postId)),
  dispatchDeletePost: postId => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

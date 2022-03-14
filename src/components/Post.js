import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button'

import { editPost } from '../actions'
import PostForm from './PostForm'

const Post = ({ id, posts, dispatchEditPost }) => {
  let currTitle
  let currImg
  let currText

  posts.forEach(({ // find post associated with id
    title: postTitle, img: postImg, text: postText, id: postId,
  }) => {
    if (id === postId) {
      currTitle = postTitle
      currImg = postImg
      currText = postText
    }
  })

  const [editPostMode, setEditPostMode] = useState(false)

  return (
    <>
      { !editPostMode
      && (
        <>
          <h1>{currTitle}</h1>
          <div style={{ maxHeight: '200px', maxWidth: '200px' }}>
            <img src={currImg} alt="post pic" height="100%" width="100%" />
          </div>
          <p>{currText}</p>

          <Button color="secondary" variant="outlined" type="button" onClick={() => setEditPostMode(true)}>Edit</Button>
        </>
      )}

      { editPostMode
      && (
      <div>
        <PostForm setEditPostMode={setEditPostMode} id={id} newPost={false} />
      </div>
      )}
    </>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (title, img, text, postId) => dispatch(editPost(title, img, text, postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)

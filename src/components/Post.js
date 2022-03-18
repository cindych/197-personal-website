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
    <div style={
      {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',
      }
    }
    >
      { !editPostMode
      && (
        <>
          <p style={{ margin: '0', textAlign: 'left' }}>{`Post #${id}`}</p>
          <h1>{currTitle}</h1>
          <div style={{ margin: '0 auto', maxHeight: '200px', maxWidth: '200px' }}>
            <img src={currImg} alt="post pic" height="100%" width="100%" />
          </div>
          <p style={{ overflowWrap: 'break-word' }}>{currText}</p>

          <Button color="secondary" variant="outlined" type="button" style={{ marginBottom: '5%' }} onClick={() => setEditPostMode(true)}>Edit</Button>
        </>
      )}

      { editPostMode
      && (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <PostForm setEditPostMode={setEditPostMode} id={id} newPost={false} />
      </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (title, img, text, postId) => dispatch(editPost(title, img, text, postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)

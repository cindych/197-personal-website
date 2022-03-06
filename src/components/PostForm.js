import React, { useState } from 'react'
import { connect } from 'react-redux'

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
    <div>
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
            }}
          />
        </div>
        {!newPost
        && (
          <div>
            <button
              type="button"
              onClick={() => {
                dispatchDeletePost(id)
              }}
            >
              delete
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, img, text) => dispatch(addPost(title, img, text)),
  dispatchEditPost: (title, img, text, postId) => dispatch(editPost(title, img, text, postId)),
  dispatchDeletePost: postId => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

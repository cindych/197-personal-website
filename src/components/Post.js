import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editPost } from '../actions'

const Post = ({ id, posts, dispatchEditPost }) => {
  let currTitle
  let currImg
  let currText
  console.log(posts)

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
  const [title, setTitle] = useState(currTitle)
  const [img, setImg] = useState(currImg)
  const [text, setText] = useState(currText)

  return (
    <>
      { !editPostMode
      && (
        <>
          <h1>{currTitle}</h1>
          <div style={{ maxHeight: '200px', maxWidth: '200px' }}>
            <img src={currImg} alt="intro pic" height="100%" width="100%" />
          </div>
          <p>{currText}</p>

          <button type="button" onClick={() => setEditPostMode(true)}>Edit</button>
        </>
      )}

      { editPostMode
      && (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          dispatchEditPost(title, img, text, id)
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
                // take out if moving form to another component, initial
                // state will persist
                setTitle(currTitle)
                setImg(currImg)
                setText(currText)
              }}
            />
          </div>
        </form>
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

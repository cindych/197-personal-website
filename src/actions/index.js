export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const editIntro = (img, text) => ({
  type: EDIT_INTRO,
  img,
  text,
})

let id = 1

export const addPost = (title, img, text) => ({
  type: ADD_POST,
  title,
  img,
  text,
  id: id++,
})

export const editPost = (title, img, text, postId) => ({
  type: EDIT_POST,
  title,
  img,
  text,
  id: postId,
})

export const deletePost = postId => ({
  type: DELETE_POST,
  id: postId,
})

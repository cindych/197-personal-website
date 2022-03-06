import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    type, title: newTitle, img: newImg, text: newText, id,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        title: newTitle, img: newImg, text: newText, id,
      }]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post, title: newTitle, img: newImg, text: newText,
          }
        }
        return { ...post }
      })
    case DELETE_POST:
      return (state.filter(post => post.id !== id))
    default:
      return state
  }
}

export default posts

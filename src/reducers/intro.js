import { EDIT_INTRO } from '../actions'

const default_state = { img: '', text: '' }

const intro = (state = default_state, action) => {
  const { type, img, text } = action

  switch (type) {
    case EDIT_INTRO:
      return { ...state, img, text }
    default:
      return state
  }
}

export default intro

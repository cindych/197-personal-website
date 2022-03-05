import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions'

const IntroForm = ({ intro, dispatchEditIntro, setEditIntroMode }) => {
  const { img: currImg, text: currText } = intro
  const [img, setImg] = useState(currImg)
  const [text, setText] = useState(currText)

  return (
    <>
      <form>
        <label>
          Image
          <input type="text" value={img} placeholder="Enter image url" onChange={e => setImg(e.target.value)} />
        </label>
        <label>
          Description
          <input type="text" value={text} placeholder="Enter description" onChange={e => setText(e.target.value)} />
        </label>
        <div>
          <input
            type="submit"
            value="submit"
            onClick={e => {
              e.preventDefault()
              dispatchEditIntro(img, text)
              setEditIntroMode(true)
            }}
          />
          <input
            type="button"
            value="cancel"
            onClick={e => {
              setEditIntroMode(true)
            }}
          />
        </div>
      </form>
    </>
  )
}

const mapStateToProps = state => ({ intro: state.intro })

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (img, text) => dispatch(editIntro(img, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroForm)

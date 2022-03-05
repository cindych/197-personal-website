import React, { useState } from 'react'
import { connect } from 'react-redux'

import IntroForm from './IntroForm'

const Intro = ({ intro }) => {
  const [editIntroMode, setEditIntroMode] = useState(true)
  const { img, text } = intro

  const introSect = () => {
    if (editIntroMode) {
      return (
        <>
          <button type="button" onClick={() => setEditIntroMode(false)}>Edit</button>
          <div style={{ maxHeight: '200px', maxWidth: '200px' }}>
            <img src={img} alt="intro pic" height="100%" width="100%" />
          </div>
          <p>{text}</p>
        </>
      )
    }
    return (
      <IntroForm setEditIntroMode={setEditIntroMode} />
    )
  }

  return (
    <>
      <h1>Hey y&apos;all this is me!</h1>
      { introSect() }
    </>
  )
}

const mapStateToProps = state => ({ intro: state.intro })

export default connect(mapStateToProps)(Intro)

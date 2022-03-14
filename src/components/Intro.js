import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'

import IntroForm from './IntroForm'

const Intro = ({ intro }) => {
  const [editIntroMode, setEditIntroMode] = useState(false)
  const { img, text } = intro

  const introSect = () => {
    if (!editIntroMode) {
      return (
        <>
          <Button variant="contained" color="secondary" onClick={() => setEditIntroMode(true)}>Edit</Button>
          <div style={{ marginTop: '2%', maxHeight: '200px', maxWidth: '200px' }}>
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
      <h1>your own ~personal~ space ✨</h1>
      { introSect() }
    </>
  )
}

const mapStateToProps = state => ({ intro: state.intro })

export default connect(mapStateToProps)(Intro)

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { editIntro } from '../actions'

const IntroForm = ({ intro, dispatchEditIntro, setEditIntroMode }) => {
  const { img: currImg, text: currText } = intro
  const [img, setImg] = useState(currImg)
  const [text, setText] = useState(currText)

  return (
    <>
      <form>
        <TextField id="outlined-basic" color="secondary" value={img} label="Image" variant="outlined" size="small" fullWidth onChange={e => setImg(e.target.value)} />
        <TextField id="outlined-basic" color="secondary" value={text} label="Description" variant="outlined" margin="normal" fullWidth multiline maxRows={5} size="small" onChange={e => setText(e.target.value)} />
        <div style={{ margin: '2% 0' }}>
          <Button
            color="secondary"
            onClick={e => {
              e.preventDefault()
              dispatchEditIntro(img, text)
              setEditIntroMode(false)
            }}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            type="button"
            onClick={e => {
              setEditIntroMode(false)
            }}
          >
            Cancel
          </Button>
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

// try to condense post form into this component?
// not rilly sure yet tho
import React from 'react'

const PostForm = () => {
  const [editPostMode, setEditPostMode] = useState(false)
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [text, setText] = useState('')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatchAddPost(title, img, text)
        setEditPostMode(false)
        resetValues()
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
              resetValues()
            }}
          />
        </div>
      </form>
    </div>
  )
}
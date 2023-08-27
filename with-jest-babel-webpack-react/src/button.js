import React, { useState } from 'react'

export default function Button() {
  const [text, setText] = useState('click me')
  return <button onClick={() => setText('clicked')}>{text}</button>
}

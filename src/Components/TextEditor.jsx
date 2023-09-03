import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor(props) {
  const [text, setText] = useState('');

  return <ReactQuill theme="snow" value={text} onChange={(e) => setText(e.target.value)} />;
}

export default TextEditor;
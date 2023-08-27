import React from 'react'
import { createRoot } from 'react-dom/client';
import Button from './button';

const root = createRoot(document.getElementById('app'));

root.render(
<div>
  <h1 id='myText' >Hello, world</h1>
  <Button />
</div>
);

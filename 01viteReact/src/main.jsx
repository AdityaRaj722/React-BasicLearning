import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// const custom=(
//   <a href="https://google.com" target='_blank'>visit google</a>
// )
// eslint-disable-next-line no-undef
// const reactElement=React.createElement(
//   'a',
//   {href:"https://google.com",target:"_blank"},
//   'click me to vist google'
// )
createRoot(document.getElementById('root')).render(
  
    <App />
    // custom
    // reactElement  
)

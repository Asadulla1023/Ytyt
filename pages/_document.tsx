import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {
  useEffect(()=> {
    document.addEventListener("contextmenu", e => {
      console.log(e);
    })
  })
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="//code.jivosite.com/widget/ss8KEh2KiZ" async defer/>
      </body>
    </Html>
  )
}

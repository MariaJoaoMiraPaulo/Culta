import React from "react"
export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      <link
        rel="preload"
        href="/fonts/SangBleuOGSerif-Light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
        key="SangBleuOGSerif"
      />,
    ])
  }
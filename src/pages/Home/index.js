import React from 'react'
import { ButtonBase } from "components";
import "./index.scss"

export default function Home() {
  return (
    <div className="home">
      <ButtonBase onClick={ () => alert("yaya") }>Click Me</ButtonBase>
    </div>
  )
}

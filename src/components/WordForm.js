import { useState } from "react"

function WordForm(props) {

  const updateValue = (event) => {
    props.updateMadLibWord(event.target.id, event.target.value)
  }

  const renderInputs = props.words.map((elem, index)  => {
    return (
        <input type="text" key={`${elem['key']}`} id={index} placeholder={elem['label']} onChange={(event) => updateValue(event)} />
    )
  })
  
  return (
    <div id="div-words">
      { renderInputs }
    </div>
  )
}

export default WordForm

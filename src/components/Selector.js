function Selector(props) {
  // render
  const renderChoices = props.data.map((elem, index) => {
    return (
      <option key={index} value={elem.title}>{elem.title}</option>
    )
  })

  const handleChange = (e) => {
    props.setSelectedMadLib(props.data[e.target.selectedIndex])
  }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange={(e) => handleChange(e)}>
        { renderChoices }
      </select>
    </div>
  )
}

export default Selector
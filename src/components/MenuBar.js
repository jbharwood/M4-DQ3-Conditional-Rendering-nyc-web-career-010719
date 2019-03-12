import React from 'react'
import Mainbox from '../components/MenuBar'

const MenuBar = (props) => {
  function changeStatus(event) {
    console.log('clicked', event.target.id)
    props.changedStatus(event.target.id)
  }

  return (
    <div className="ui four item menu">
      <a className={"item " + (props.active === 'profile' ? 'active' : null)} id="profile" onClick={changeStatus}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={"item " + (props.active === 'photo' ? 'active' : null)} id="photo" onClick={changeStatus}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item " + (props.active === 'cocktail' ? 'active' : null)} id="cocktail" onClick={changeStatus}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item " + (props.active === 'pokemon' ? 'active' : null)} id="pokemon" onClick={changeStatus}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar

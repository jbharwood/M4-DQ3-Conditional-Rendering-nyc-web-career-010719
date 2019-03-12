import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    active: "profile",
  }

  changeActiveStatus = (id) => {
    this.setState({
      active: id
    })
  }

  render() {
    let detailsToDisplay = null

    switch(this.state.active) {
      case "profile":
        detailsToDisplay = <Profile />
        break
      case "photo":
        detailsToDisplay = <Photos />
        break
      case "cocktail":
        detailsToDisplay = <Cocktails />
        break
      case "pokemon":
        detailsToDisplay = <Pokemon />
        break
    }

    return (
      <div>
        <MenuBar active={this.state.active} changedStatus={this.changeActiveStatus}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox

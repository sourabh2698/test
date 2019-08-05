import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      character: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://www.anapioficeandfire.com/api/characters?page=20&pageSize=1000000")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    var { loading, character } = this.state;
    
      return (
        <div>
          <ul>
            {character.map(character => (
              <li >
               {this.state.loading ? "loading..." : character.name}

              </li>
            ))}
        </ul>

        </div>
      );
    }
  }
 

export default App

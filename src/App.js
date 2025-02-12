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
    fetch("https://www.anapioficeandfire.com/api/characters?page=10&pageSize=1000")
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
              {this.state.loading ? "loading..." :<a href='https://www.anapioficeandfire.com/api/characters/823'>{ character.name}</a>}

            </li>
          ))}
        </ul>

      </div>
    );
  }
}


export default App

import React from 'react';
import axios from 'axios'
import Gallery from './compnents/Gallery'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      gallery: [ 
      ],

    }
  }
  componentDidMount() {
    // Using compoundDidMount to fetch data using axious and setting it in to state
    const url = 'https://jsonplaceholder.typicode.com/photos'
    axios.get(url).then(response => {
      this.setState({
        gallery: response.data.slice(0,50),
      })
    })
  }

  render() {
    //passing props to the child component to render.
    const { gallery } = this.state
      return(
        <div>
          <Gallery gallery={gallery} />
        </div>
    )
  }
}

export default App;

import React, { Component} from 'react';
import ScoreBox from "./Components/ScoreBox/index";
import ImageBox from "./Components/ImageBox/index";
import images from "./mage.json";

class App extends Component {
  initialState = {
      score: 0,
      tries: 0,
      images,
     
  };

  state = {
		...this.initialState
  }

  
  // handleScore = () => {

  //   // todo once img made
  // }
  
  // handleImageClick = (image) => {
  //   // todo
    
  //   this.setState({
        
  //       chosenImages: this.state[image]? this.state.images : this.state.chosenImages,

  //   })
  // }

  resetGame = () => {
		this.setState(this.initialState);
	}
  
  
  render(){

    return (
      <div className="App">
      {this.state.images.map(picture => (
    <ImageBox 
     key={picture.id} src={`/${picture.image}.jpg`} alt={picture.name}  
    />
    ))}
    <ScoreBox 
        tries={this.state.tries}
        score={this.state.score}
    />
    </div>
        
   )
}

}
        
        
        
        
        
        

export default App;

import './App.css';
import Navigation from "../Components/Navigation/Navigation.js";
import Logo from "../Components/Logo/Logo.js";
import FaceRecognition from "../Components/FaceRecognition/FaceRecognition.js";
import ImageLinkForum from "../Components/ImageLinkForum/ImageLinkForum.js";
import Rank from "../Components/Rank/Rank.js";
import Particles from 'react-particles-js';
import { Component } from 'react';
import Clarifai from 'clarifai';
import Signin from '../Components/Sign In/Signin.js';
import Register from '../Components/Register/Register.js';
import './App.css'
const ParticleOptions ={
  
    particles: {
      number: {
        value  :80,
        density: {
          enable : true,
          value_area : 800,
        
        }
      }
    },
   

    }
   
 
    const app = new Clarifai.App({
     apiKey: '7d3ffcd1d0624330b9579eaf726f30ea'
    });

class App extends Component {
  constructor(){
    super()
    this.state={
        input:'',
        imageUrl:'',
        box:{},
        route:'home',
        isSignedIn:false
    }
 

}
calcface =(data)=>{
  const clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('img1');
  const width=Number(image.width);
  const height=Number(image.height);
  return{
    leftcol : clarifaiface.left_col * width,
    topcol : clarifaiface.top_row *height,
    rightcol : width-(clarifaiface.right_col *width),
    bottomcol : height -(clarifaiface.bottom_row *height)
  }

}
displaybox = (box) =>{
  this.setState({box:box})
}
onInputChange=(event) => {
  this.setState({input:event.target.value})
}
onButtonSubmit =()=>{
  this.setState({imageUrl:this.state.input});
  app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
  .then(response => this.displaybox(this.calcface(response)))
  .catch(error => console.log(error));  
}
onRouteChange =(route)=>{
  this.setState({route:route})
  if(route==='home'){
  this.setState({isSignedIn:true})  
  }
  else if(route==='home not signed in'){
    this.setState({isSignedIn:false});
    this.setState({route:'home'})
    }
    
  else {
    this.setState({isSignedIn:false})  
    }
  
}
  render(){
  return (
    <div className="App" >
    <div className='particles'><Particles  params= {ParticleOptions} /></div>
         
      
      {this.state.route === 'home'
      ?   <div>
              <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
              <Logo />
              <Rank />
              <ImageLinkForum onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
          </div>
      : (
        this.state.route==='signin'
        ? <Signin onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange} />
      )
    
       
      }
    </div>
  );
}
}

export default App;

import React, { Component} from 'react';
import axios from 'axios'
import ShowMoreText from 'react-show-more-text';


export default class Test extends Component {
    state = {
      cakes: [],
      a:"iii"
    };
    componentDidMount() {
       axios.get('http://localhost:4000/all').then(response => {

       console.log(response.data)
       this.setState({
         cakes: response.data,
         a:"jjj"

       });
     });
   }


   
   render() {
    return (
        <div>
            <br></br>
            { this.state.cakes.map(cake => 
                
                
                <div className="card mb-4 ">
                  <div className="card-body">
                     
                  <img src={'http://localhost:4000/uploads/'+ cake.cakeImage   } style={{width:"30px",height:"30px"}} />
                    <h5 className="card-title">{cake.Name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cake.Price}</h6>
                    <p className="card-text">


                <ShowMoreText
                    
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={280}
                >
                    {cake.Description}
                </ShowMoreText>

                

                 </p>
    
        </div>
        
    </div>
              
                )}     
            


        </div>
      );
    } 
   }
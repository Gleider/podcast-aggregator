import React,{Component} from 'react'
import { Button, Input, Card, CardBody, CardTitle } from 'mdbreact';

class Search extends Component {

  constructor(){
    super();
    this.state = {
      podcasts: []
    }

  }

  componentDidMount(){
    this.callTop()
    const podcasts = this.state
    console.log(podcasts)
    // const filteredPodcasts = podcasts.filter( podcast =>{
    //   return podcast.title.toLowerCase().indexOf( podcasts.toLowerCase() ) !== -1
  // })
  }

  renderPodcast = podcast =>{
    const {search} = this.state;
    var code = podcast.code.toLowerCase()

    /*if( search !== "" && podcast.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return <div className="col-md-3" style={{ marginTop : '20px' }}>
        <Card>
            <CardBody>
                <p className=""></p>
                <CardTitle title={podcast.title}>{podcast.title.substring(0, 15)}{ podcast.title.length > 15 && "..."}</CardTitle>
            </CardBody>
        </Card>
    </div>
}

  callTop(){
    fetch('/oapi/top', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
   
    })
    .then((response) => response.json())
    .then((podcasts) => {
      //console.log(typeof(responseData))
      this.setState({podcasts})
      //return responseData
        //console.log("Response:",responseData);
    })
    .catch((error) => {
        console.log('problem while adding data', error);
    })
  }
  render() {
    
   
    
    return (
    <div>
      <Input label="Search Podcast" icon="search" onChange={this.onchange}/>
      {/* {filteredPodcasts.map(podcast => {
        return this.renderPodcast(podcast)
      })} */}
    </div>
    )
  }

}

export default Search
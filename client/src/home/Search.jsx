import React,{Component} from 'react'
import { Button, Input, Card, CardBody, CardTitle } from 'mdbreact';
import './Search.css'
class Search extends Component {

  constructor(props){
    super(props);

    this.state = {
      podcasts: null,
      isLoading: false,
      error: null
    }
    // this.callTop = this.callTop.bind(this);
    
  }

  componentDidMount(){
    this.setState({ isLoading: true })
    fetch('/oapi/top?n=50', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
   
    })
    .then((response) => response.json())
    .then(podcasts => {this.setState({podcasts, isLoading: false})})
    .catch((error) => {
        this.setState({ error, isLoading: false})
    })
  }
  
  render() {
    const {podcasts, isLoading, error} = this.state
    
    if(error)
      return <p>{error.message}</p>
    if(isLoading || podcasts === null)
      return <p>Loading..</p>
    return (
    <div>
      <Input label="Search Podcast" icon="search"/>
      <div className="row">
        <ul className="show-podcasts">
          {podcasts.map(pod => {
              return <li><img src={pod.logo_url} className="img-config"/><br/>{pod.title.substring(0, 15)}{ pod.title.length > 15 && "..."}</li>
  
          })}
        </ul>
      </div>
    </div>
    )
  }

}

export default Search
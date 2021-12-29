import React from 'react';
import './App.css';
import { Cards } from './components/cards/Card';
import { CountryPicker } from './components/countryPicker/countryPicker';
import { Charts } from './components/charts/Charts';
import { fetchData } from './components/api/api'
class App extends React.Component {
  state = {
    data: {},
    country : ''
  }
 async componentDidMount(){
const takeData = await fetchData();
this.setState({data : takeData})
  }
  handleCountryChange = async(country)=>{
    const takeData = await fetchData(country);
    this.setState({data : takeData , country:country})
  }
render(){
  const { data , country } = this.state;
  return (
<div className='container'>
  <img src = 'https://i.ibb.co/7QpKsCX/image.png' />
      <Cards data ={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Charts data = { data } country = { country} />
      </div>
  );
}
  }


export default App;

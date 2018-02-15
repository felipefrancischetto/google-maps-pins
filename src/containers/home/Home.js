import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import FormAddress from '../../components/forms/FormAddress'
import Map from '../../components/map/Map'
import MapLoading from '../../components/loadings/MapLoading'

export default class Home extends Component { 

  constructor(props){
    super(props)
    this.state = {
      isGettingPosition: false,
    }
  }

  showMap(state) {
    return this.state.isGettingPosition 
    ? <MapLoading/>
    : <Map
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDBRs3DJKdXUGFcRnGAUgKT2nLTsnjcTZQ'
        loadingElement={<div style={{height: '100%', width: '100%'}}/>}
        containerElement={<div style={{height: '100%', width: '100%'}}/>} 
        mapElement={<div style={{height: '400px', width: '100%'}}/>}
      />
  }

  componentDidMount(){
    this.setState({ isGettingPosition: true })
    navigator.geolocation.getCurrentPosition( position => {
      this.setState({
        isGettingPosition: false,
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Grid>

          <Grid.Row>
            <Grid.Column>
              <h1>Sistema de Pins do Google Maps</h1>
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column width={4}>
              <FormAddress/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column> 
              {this.showMap(this.state.isGettingPosition)}
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    )
  }
}
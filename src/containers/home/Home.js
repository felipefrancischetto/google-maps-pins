import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import FormAddress from '../../components/forms/FormAddress'
import Map from '../../components/map/Map'
import MapLoading from '../../components/loadings/MapLoading'

export default class Home extends Component { 

  constructor(props){
    super(props)
    this.state = {
      isGettingPosition: true
    }
  }

  showMap(state) {
    return this.state.isGettingPosition ?
      <MapLoading/> : <Map/>
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
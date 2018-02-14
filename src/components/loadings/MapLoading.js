import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const MapLoading = (props) => (
  <Dimmer active inverted>
    <Loader inverted content='Pegando localização do usuário.' />
  </Dimmer>
)

export default MapLoading
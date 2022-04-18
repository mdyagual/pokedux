import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const PokeLoader = () => {
  return <Dimmer active>
      <Loader/>
  </Dimmer>
}

export default PokeLoader;
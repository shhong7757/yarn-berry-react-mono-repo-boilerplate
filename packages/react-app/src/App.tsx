import React from 'react';

import {Button} from '@shared/react-ui-kit'

import { hot } from 'react-hot-loader/root';

function App() {
  const [a, setA] = React.useState('')

  React.useEffect(() => console.log(a), [])
  
  return (
    <Button>
      <p>Hello! world</p>
    </Button>
  );
}

export default hot(App);


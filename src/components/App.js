import React from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import Input from './Input';

const title = 'React Movie Cards';

const App = () => (
  <div>
    <Header title={title} />
    {/* <Input /> */}
    <div className="mt-5">
      <Movies />
    </div>
  </div>
);

export default App;

import React, { useState } from 'react';

import { InputField } from './components/InputField';

const App: React.FC = () => {
  
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;

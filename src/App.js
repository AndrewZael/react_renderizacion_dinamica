import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { useState } from 'react';
import { baseCollaborators } from './data/baseCollaborators.js';
import Collaborators from './components/Collaborators.jsx';
import FormAdd from './components/FormAdd.jsx';
import Header from './components/Header.jsx';

function App() {

  const [listCollaborators, setListCollaborators] = useState(baseCollaborators);
  const [listFiltered, setListFiltered] = useState(listCollaborators);

  return (
    <main className="App">
      <Header title="Administrador de colaboradores" />
      <div className="container p-4">
        <FormAdd 
          listCollaborators={listCollaborators} 
          listFiltered={listFiltered}
          setListCollaborators={setListCollaborators}
          setListFiltered={setListFiltered} />

        <Collaborators 
          list={listCollaborators} 
          listFiltered={listFiltered} 
          setListFiltered={setListFiltered} 
          setListCollaborators={setListCollaborators} />
      </div>
    </main>
  );
}

export default App;

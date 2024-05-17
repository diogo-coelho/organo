import { useState } from 'react'
import Banner from './components/Banner/Banner';
import FormGroup from './components/FormGroup/FormGroup';

function App() {
  const [collaborators, setCollaborators] = useState([])

  const handleAddCollaborator = (collaborator) => {
	console.log('collaborator', collaborator)
	setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
	  <FormGroup handleAddCollaborator={collaborator => handleAddCollaborator(collaborator) } />
    </div>
  );
}

export default App;

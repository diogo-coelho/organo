import { useState } from 'react'
import Banner from './components/Banner/Banner';
import FormGroup from './components/FormGroup/FormGroup';
import Team from './components/Team/Team';

function App() {
  const teams = [
	{ name: 'Programação', primaryColor: '#57C278', secondaryColor: '#D9f7E9' },
	{ name: 'Front-End', primaryColor: '#82CFFA', secondaryColor: '#E8F8FF' },
	{ name: 'Data Science', primaryColor: '#A6D157', secondaryColor: '#F0F8E2' },
	{ name: 'Devops', primaryColor: '#E06B69', secondaryColor: '#FDE7E8' },
	{ name: 'UX e Design', primaryColor: '#DB6EBF', secondaryColor: '#FAE9F5' },
	{ name: 'Mobile', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9' },
	{ name: 'Inovação e Gestão', primaryColor: '#FF8C2A', secondaryColor: '#FFEEDF' },
  ]

  const [collaborators, setCollaborators] = useState([])

  const handleAddCollaborator = (collaborator) => {
	setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
	  <FormGroup
	  	teams={teams.map(team => team.name)} 
	  	handleAddCollaborator={collaborator => handleAddCollaborator(collaborator) } 
	  />
	  { teams.map(team => {
	  		return <Team key={team.name} 
						 nome={team.name} 
						 colaboradores={collaborators}
						 primaryColor={team.primaryColor} 
						 secondaryColor={team.secondaryColor} />
		}) 
	  }
    </div>
  );
}

export default App;

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Banner from './components/Banner/Banner';
import FormGroup from './components/FormGroup/FormGroup';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const [teams, setTeams] = useState([
    {
	  id: uuidv4(),
      name: 'Programação',
      primaryColor: '#57C278'
    },
    {
	  id: uuidv4(),
      name: 'Front-End',
      primaryColor: '#82CFFA'
    },
    {
	  id: uuidv4(),
      name: 'Data Science',
      primaryColor: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      primaryColor: '#E06B69'
    },
    {
	  id: uuidv4(),
      name: 'UX e Design',
      primaryColor: '#DB6EBF'
    },
    {
	  id: uuidv4(),
      name: 'Mobile',
      primaryColor: '#FFBA05'
    },
    {
	  id: uuidv4(),
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29'
    },
  ])

  const initial = [
    {
	  id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
	  id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
	  id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
	  id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
	  id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
	  id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
	  id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
	  id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
	  id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
	  id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
	  id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
	  id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
	  id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
	  id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
	  id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
	  id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
	  id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
	  id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
	  id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
	  id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
	  id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
	  id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
	  id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [collaborators, setCollaborators] = useState(initial)

  const handleAddCollaborator = (collaborator) => {
	setCollaborators([...collaborators, collaborator])
  }

  const onCollaboratorDelete = (id) => {
	setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const changeTeamColor = (color, id) => {
	setTeams(teams.map(team => {
		if (team.id === id) {
			team.primaryColor = color
		}
		return team
	}))
  }

  const registerTeam = (newTeam) => {
	setTeams([
		...teams, 
		{ ...newTeam, id: uuidv4() }
	])
  }

  return (
    <div className="App">
      <Banner />
	  <FormGroup
	  	teams={teams.map(team => team.name)} 
		registerTeam={registerTeam}
	  	handleAddCollaborator={collaborator => handleAddCollaborator(collaborator) } 
	  />
	  <section className="times">
		<h1>Minha organização</h1>
		{ teams.map(team => {
				return <Team key={team.name} 
							id={team.id}
							name={team.name} 
							colaboradores={collaborators.filter(collaborator => collaborator.team === team.name)}
							primaryColor={team.primaryColor} 
							secondaryColor={team.secondaryColor} 
							onDelete={onCollaboratorDelete}
							changeColor={changeTeamColor}
						/>
			}) 
		}
	  </section>
	  <Footer />
    </div>
  );
}

export default App;

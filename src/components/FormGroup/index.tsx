import { useState } from 'react'
import './FormGroup.css'
import InputField from '../InputField'
import Combobox from '../Combobox'
import MyButton from '../MyButton'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'
import { ITeam } from '../../shared/interfaces/ITeam'

interface FormGroupProps {
	handleAddCollaborator: (collaborator: ICollaborator) => void
	registerTeam: (team: ITeam) => void
	teams: string[]
}

const FormGroup = ({
	handleAddCollaborator,
	registerTeam,
	teams
}: FormGroupProps) => {	
	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [image, setImage] = useState('')
	const [team, setTeam] = useState('')
	const [teamName, setTeamName] = useState('')
	const [teamColor, setTeamColor] = useState('#000000')
	
	const onSave = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		handleAddCollaborator({
			name, role, image, team
		})
		setName('')
		setRole('')
		setImage('')
		setTeam('')
	}

	const onRegisterNewTeam = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		registerTeam({ name: teamName, primaryColor: teamColor })
		setTeamName('')
		setTeamColor('#000000')
	}

	return (
		<section className="formulario">
			<form onSubmit={onSave} >
				<h2>Preencha os dados para criar o card do colaborador</h2>

				<InputField 
					required={true} 
					label="Nome" 
					placeholder="Digite seu nome"
					value={name}
					handleKeyup={value => setName(value)} 
				/>
				<InputField 
					required={true} 
					label="Cargo" 
					placeholder="Digite seu cargo" 
					value={role}
					handleKeyup={value => setRole(value)} 
				/>
				<InputField 
					label="Imagem" 
					placeholder="Informe o endereço da imagem" 
					value={image}
					handleKeyup={value => setImage(value)} 
				/>
				<Combobox 
					required={true} 
					label="Time" 
					itens={teams} 
					value={team}
					handleKeyup={value => setTeam(value)} 
				/>
				<MyButton>Criar card</MyButton>
			</form>

			<form onSubmit={onRegisterNewTeam} >
				<h2>Preencha os dados para criar um novo time</h2>

				<InputField 
					required 
					label="Nome do time" 
					placeholder="Digite o nome do time"
					value={teamName}
					handleKeyup={value => setTeamName(value)} 
				/>
				<InputField 
					required
					label="Cor" 
					type="color"
					placeholder="Digite a cor do time" 
					value={teamColor}
					handleKeyup={value => setTeamColor(value)} 
				/>
				<MyButton>Criar um novo time</MyButton>
			</form>
		</section>
	)
}

export default FormGroup
import { useState } from 'react'
import './FormGroup.css'
import InputField from '../InputField/InputField'
import Combobox from '../Combobox/Combobox'
import MyButton from '../MyButton/MyButton'

const FormGroup = (props) => {	
	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [image, setImage] = useState('')
	const [team, setTeam] = useState('')
	const [teamName, setTeamName] = useState('')
	const [teamColor, setTeamColor] = useState('')
	
	const onSave = (event) => {
		event.preventDefault()
		props.handleAddCollaborator({
			name, role, image, team
		})
		setName('')
		setRole('')
		setImage('')
		setTeam('')
	}

	const onRegisterNewTeam = (event) => {
		event.preventDefault()
		props.registerTeam({ name: teamName, primaryColor: teamColor })
		setTeamName('')
		setTeamColor('')
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
					itens={props.teams} 
					value={team}
					handleKeyup={value => setTeam(value)} 
				/>
				<MyButton>Criar botão</MyButton>
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
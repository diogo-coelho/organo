import './Team.css'
import Collaborator from '../Collaborator/Collaborator'

const Team = (props) => {
	const css = { 
		backgroundColor: props.secondaryColor, 
	}

	return (
		<section className="time" style={css}>
			<h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
			{props.colaboradores.map(collaborator => {
				return <Collaborator 
							name={collaborator.name}
							team={collaborator.role}
							image={collaborator.image}
						/>
			})}
		</section>
	)
}

export default Team
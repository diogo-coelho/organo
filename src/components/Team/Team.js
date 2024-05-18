import './Team.css'
import Collaborator from '../Collaborator/Collaborator'

const Team = (props) => {
	const css = { 
		backgroundColor: props.secondaryColor, 
	}

	return (
		props.colaboradores.length > 0 ?
			<section className="time" style={css}>
				<h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
				<div className='colaboradores'>
					{props.colaboradores.map((collaborator, index) => {
						return <Collaborator 
									key={`${collaborator.name}-${index}`}
									name={collaborator.name}
									team={collaborator.role}
									image={collaborator.image}
									backgroundColor={props.primaryColor}
								/>
					})}
				</div>
			</section> : ''

	)
}

export default Team
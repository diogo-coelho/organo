import './Team.css'
import Collaborator from '../Collaborator/Collaborator'

const Team = (props) => {
	const css = { 
		backgroundColor: props.secondaryColor, 
		backgroundImage: 'url(/images/fundo.png)', 
	}

	return (
		props.colaboradores.length > 0 ?
			<section className="time" style={css}>
				<h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
				<div className='colaboradores'>
					{props.colaboradores.map((collaborator, index) => {

						return <Collaborator 
									key={`${collaborator.name}-${index}`}
									name={collaborator.name}
									role={collaborator.role}
									image={collaborator.image}
									backgroundColor={props.primaryColor}
									onDelete={props.onDelete}
								/>
					})}
				</div>
			</section> : ''

	)
}

export default Team
import './Team.css'
import hexToRgba from 'hex-to-rgba'
import Collaborator from '../Collaborator/Collaborator'

const Team = (props) => {
	const css = { 
		backgroundColor: hexToRgba(props.primaryColor, '0.3'), 
		backgroundImage: 'url(/images/fundo.png)', 
	}

	return (
		props.colaboradores.length > 0 ?
			<section className="time" style={css}>
				<input 
					value={props.primaryColor} 
					onChange={(event) => props.changeColor(event.target.value, props.id)} 
					type="color" 
					className="input-color" 
				/>
				
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
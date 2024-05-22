import './Team.css'
import hexToRgba from 'hex-to-rgba'
import { ICollaborator } from '../../shared/interfaces/ICollaborator'
import Collaborator from '../Collaborator'

interface TeamProps {
	id: string
	name: string
	collaborators: ICollaborator[]
	primaryColor: string
	changeColor: (color: string, id: string) => void
	onDelete: (id: string) => void
	toggleFavorite: (id: string) => void
}

const Team = ({ 
	id, 
	name, 
	collaborators, 
	primaryColor, 
	changeColor, 
	onDelete,
	toggleFavorite 
}: TeamProps) => {
	const css = { 
		backgroundColor: hexToRgba(primaryColor, '0.3'), 
		backgroundImage: 'url(/images/fundo.png)', 
	}

	return (
		collaborators.length > 0 ?
			<section className="time" style={css}>
				<input 
					value={primaryColor} 
					onChange={(event) => changeColor(event.target.value, id)} 
					type="color" 
					className="input-color" 
				/>
				
				<h3 style={{ borderColor: primaryColor }}>{name}</h3>
				<div className='colaboradores'>
					{collaborators.map((collaborator, index) => {
						return (
							<Collaborator 
								key={`${collaborator.name}-${index}`}
								collaborator={collaborator}
								backgroundColor={primaryColor}
								onDelete={onDelete}
								toggleFavorite={toggleFavorite}
							/>
						)
					})}
				</div>
			</section> : ''

	)
}

export default Team
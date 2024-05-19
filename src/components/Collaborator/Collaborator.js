import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Collaborator.css'

const Collaborator = ({collaborator, backgroundColor, onDelete, toggleFavorite }) => {
	const handleFavorite = () => {
		toggleFavorite(collaborator.id)
	}

	const propsFavorite = {
		size: 25,
		onClick: handleFavorite
	}

	return (
		<div className='colaborador'>
			<AiFillCloseCircle 
				size={25} 
				className="deletar" 
				onClick={() => onDelete(collaborator.id)} 
			/>
			<div className='cabecalho' style={{backgroundColor: backgroundColor}}>
				<img src={collaborator.image} alt={collaborator.name} />
			</div>
			<div className='rodape'>
				<h4>{collaborator.name}</h4>
				<h5>{collaborator.role}</h5>
				<div className='favoritar'>
					{ collaborator.isFavorite ? 
						<AiFillHeart {...propsFavorite} color="#FF0000" /> : 
						<AiOutlineHeart {...propsFavorite} /> 
					}
				</div>
			</div>
		</div>
	)
}

export default Collaborator
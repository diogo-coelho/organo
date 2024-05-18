import { AiFillCloseCircle } from 'react-icons/ai'
import './Collaborator.css'

const Collaborator = ({name, image, role, backgroundColor, onDelete }) => {
	return (
		<div className='colaborador'>
			<AiFillCloseCircle size={25} className="deletar" onClick={onDelete} />
			<div className='cabecalho' style={{backgroundColor: backgroundColor}}>
				<img src={image} alt={name} />
			</div>
			<div className='rodape'>
				<h4>{name}</h4>
				<h5>{role}</h5>
			</div>
		</div>
	)
}

export default Collaborator
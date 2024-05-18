import './Collaborator.css'

const Collaborator = ({name, image, role}) => {
	return (
		<div className='colaborador'>
			<div className='cabecalho'>
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
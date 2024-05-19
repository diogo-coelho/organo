import './InputField.css'

const InputField = (props) => {
	const handleKeyup = (event) => {
		props.handleKeyup(event.target.value)
	}

	return (
		<div className={`campo campo-${props.type}`}>
			<label>{ props.label }</label>
			<input 
				type={props.type || 'text'}
				value={props.value} 
				onChange={handleKeyup} 
				required={props.required} 
				placeholder={ props.placeholder } 
			/>
		</div>
	)
}

export default InputField
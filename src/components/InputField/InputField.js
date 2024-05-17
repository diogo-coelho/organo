import './InputField.css'



const InputField = (props) => {
	const handleKeyup = (event) => {
		props.handleKeyup(event.target.value)
	}

	return (
		<div className="campo-texto">
			<label>{ props.label }</label>
			<input 
				value={props.value} 
				onChange={handleKeyup} 
				required={props.required} 
				placeholder={ props.placeholder } 
			/>
		</div>
	)
}

export default InputField
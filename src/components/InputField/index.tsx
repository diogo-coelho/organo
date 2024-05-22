import './InputField.css'

interface InputFieldProps {
	label: string, 
	type?: string, 
	value: string, 
	placeholder: string, 
	required?: boolean, 
	handleKeyup: (value: string) => void, 
}

const InputField = ({
	label, 
	type = "text", 
	value, 
	placeholder,
	required = false,  
	handleKeyup,
}: InputFieldProps) => {

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleKeyup(event.target.value)
	}

	return (
		<div className={`campo campo-${type}`}>
			<label>{ label }</label>
			<input 
				type={type || 'text'}
				value={value} 
				onChange={onChange} 
				required={required} 
				placeholder={ placeholder } 
			/>
		</div>
	)
}

export default InputField
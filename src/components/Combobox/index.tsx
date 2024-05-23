import './Combobox.css'

interface ComboboxProps {
	label: string
	required?: boolean
	value: string,
	itens: string[]
	handleKeyup: (value: string) => void
}

const Combobox = ({ 
	label, 
	value, 
	itens,
	handleKeyup,
	required = false, 
}: ComboboxProps) => {
	return (
		<div className="lista-suspensa">
			<label>{ label }</label>
			<select 
				required={required} 
				value={value} 
				onChange={event => handleKeyup(event.target.value) }>
					<option></option>
					{itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default Combobox
import './Combobox.css'

const Combobox = (props) => {
	return (
		<div className="lista-suspensa">
			<label>{ props.label }</label>
			<select 
				required={props.required} 
				value={props.value} 
				onChange={event => props.handleKeyup(event.target.value) }>
					<option></option>
					{props.itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default Combobox
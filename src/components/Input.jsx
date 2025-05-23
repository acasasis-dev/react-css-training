export default function CustomInput({label, $invalid, ...props}) {
	const labelClassColor = $invalid? 'text-red-400': 'text-stone-300'
	const labelClass = `block mb-2 text-xs font-bold tracking-wide uppercase ${labelClassColor}`

	const inputClassColor = $invalid? 'text-red-500 bg-red-100 border-red-300': 'text-gray-700 bg-stone-300'
	const inputClass = `w-full px-3 py-2 leading-tight border rounded shadow ${inputClassColor}`
	
	return (
		<p>
			<label className={ labelClass }>{label}</label>
			<input className={ inputClass } { ...props } />
    </p>
	)
}
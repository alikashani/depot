import obey from 'obey'

const user = obey.model({
	id: { type: 'uuid', required: true },
	email: { type: 'email', required: true },
	password: { type: 'string', required: true }
})

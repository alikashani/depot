var journal = []

function addEntry(events, didITurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didITurnIntoASquirrel
	})
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'tv'], false)
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'op'], false)
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true)

console.log(journal)

// Callback method
function isUserTooYoung(id, callback) {
  openDatabase((db) => {
    getCollection(db, 'users', (col) => {
      find(col, {'id': id}, (result) => {
        result.filter((user) => {
          callback(user.age < cutoffAge)
        })
      })
    })
  })
}

// Promise form
function isUserTooYoung(id) {
  return openDatabase(db)
    .then(getCollection)
    .then(find.bind(null, {'id': id}))
    .then(user => user.age < cutoffAge)
}

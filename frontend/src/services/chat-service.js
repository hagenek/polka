const removeUserFromArray = (id, members) => members.filter(user => user._id !== id)

export {
  removeUserFromArray
}

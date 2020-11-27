const removeSelfFromMembers = (userId, chat) => chat.members.filter(member => member._id !== userId)

export {
  removeSelfFromMembers
}

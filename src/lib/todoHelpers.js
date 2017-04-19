
export const addTodo = (list, item) =>
  [ ...list, item ]

export const generateId = () =>
  Math.floor(Math.random()*100000)

export const findById = (id, items) =>
  items.find((item) => item.id === id)

export const toggleTodo = (item) =>
  ({...item, isComplete: !item.isComplete})

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1),
  ]
}

export interface Data {
  id: number;
  name: string;
  _delete?: boolean;
}

const data: Data[] = [
  {
    id: 1,
    name: 'a'
  }
]

function getAll() {
  return data.filter(item => !item._delete)
}

function createOne({ name }) {
  const item = {
    id: data.length + 1,
    name
  }
  data.push(item)
  return item
}

function getOne(id) {
  return data.filter(item => item.id === id)[0]
}

function updateOne(id, person) {
  let result
  data.forEach(item => {
    if (item.id === id) {
      item.name = person.name
      result = item
    }
  })
  return result
}

function deleteOne(id) {
  let result
  data.forEach(item => {
    if (item.id === id) {
      result = { ...item }
      item._delete = true
    }
  })
  return result
}

export {
  getAll,
  createOne,
  updateOne,
  getOne,
  deleteOne
}
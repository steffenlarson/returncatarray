class FakeDB {
  create(collection, body) {
    this[collection].push(body)
  }
  cats = []
}

export const fakeDb = new FakeDB()
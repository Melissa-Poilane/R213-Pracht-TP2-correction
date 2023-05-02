migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sidpkt9hmbfwoeb")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sidpkt9hmbfwoeb")

  collection.listRule = null

  return dao.saveCollection(collection)
})

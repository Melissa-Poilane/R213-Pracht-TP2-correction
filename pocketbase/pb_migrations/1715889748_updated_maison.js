/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s45u5tlo28basdz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stswswnh",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gab0gml53aq4ya2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s45u5tlo28basdz")

  // remove
  collection.schema.removeField("stswswnh")

  return dao.saveCollection(collection)
})

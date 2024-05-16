/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab0gml53aq4ya2")

  // remove
  collection.schema.removeField("gdoajnal")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ueoipqwq",
    "name": "Email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gab0gml53aq4ya2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdoajnal",
    "name": "email",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ueoipqwq")

  return dao.saveCollection(collection)
})

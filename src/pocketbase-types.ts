/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Maison = "maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type MaisonRecord = {
	nomMaison?: string
	prix?: number
	images?: string[]
	nbChambres?: number
	nbSdb?: number
	adresse?: string
	surface?: number
	favori?: boolean
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type MaisonResponse = Required<MaisonRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	maison: MaisonResponse
	users: UsersResponse
}
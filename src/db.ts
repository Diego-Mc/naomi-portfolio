import {
  collection,
  FirestoreDataConverter,
  DocumentData,
} from 'firebase/firestore'
import { firestore } from '../firebase'
import { ArtworksSchema } from './schemas/firestore/artworks.schema'

const convert = <T extends DocumentData>(): FirestoreDataConverter<
  T,
  DocumentData
> => ({
  toFirestore: (data: T): DocumentData => data,
  fromFirestore: (snap): T => snap.data() as T,
})

const dataPoint = <T extends DocumentData>(collectionPath: string) =>
  collection(firestore, collectionPath).withConverter(convert<T>())

const db = {
  artworks: dataPoint<ArtworksSchema>('artworks'),
}

export { db }
export default db

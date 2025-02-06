import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { review } from './reviews'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, review],
}
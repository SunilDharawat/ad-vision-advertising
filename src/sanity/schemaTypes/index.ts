import { type SchemaTypeDefinition } from 'sanity'
import { schemaTypes } from '@/src/app/studio/schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}

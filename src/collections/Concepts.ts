import type { CollectionConfig } from 'payload'

export const Concepts: CollectionConfig = {
  slug: 'concepts',
  fields: [
    {
      name: 'conceptName',
      type: 'text',
    },
    {
      name: 'storiesConnections',
      type: 'join',
      collection: 'story-concept-connections',
      on: 'concept',
      label: 'Stories referring to this concept',
    },
  ],
}
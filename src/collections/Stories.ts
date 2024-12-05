import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',
  fields: [
    { 
      name: 'storyName',
      type: 'text'
    },
    {
      name: 'connections',
      type: 'join',
      collection: 'story-concept-connections',
      on: 'story',
      label: 'Concepts referring to this story',
    },
  ],
}
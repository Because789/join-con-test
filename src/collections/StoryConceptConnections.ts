import type { CollectionConfig } from 'payload'

// Replacement of conceptsArray. This has both references to the concept and story.
export const StoryConceptConnections: CollectionConfig = {
    slug: 'story-concept-connections',
    fields: [
      {
        name: 'story',
        type: 'relationship',
        relationTo: 'stories',
        required: true,
      },
      {
        name: 'concept',
        type: 'relationship',
        relationTo: 'concepts',
        required: true,
      },
    ],
  }
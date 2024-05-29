// schemas/people.js

export default {
    name: 'person',
    type: 'document',
    title: 'Person',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true // Enables the ability to select a crop area
        },
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required().error('Name is required')
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
        validation: Rule => Rule.required().error('Role is required')
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: Rule => Rule.required().min(10).error('Description is required and should be at least 10 characters')
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image'
          },
        ],
      }, 
      {
        title: 'On Homepage',
        name: 'featured',
        type: 'boolean',
        description: 'Show this person on the homepage',
      },
    ]
  }
  
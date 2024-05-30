const insight = {
    title: 'Insight',
    name: 'insight',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(), // Mark title as required
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',     
        options: {
          hotspot: true,
          layout: 'grid',
        },
        validation: Rule => Rule.required(), // Mark image as required
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        },
        validation: Rule => Rule.required(), // Mark slug as required
      },
      {
        name:'summary',
        title:'Summary',
        type:'array',
        of: [
          {
            type: 'block',
          },
        ],
        validation: Rule => Rule.required(), // Mark summary as required
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
          {
            type: 'file',
          }
        ],
        validation: Rule => Rule.required(), // Mark body as required
      },    
      {
        title:'Document',
        name:'document',
        type:'file',
      },
      {
        title: 'Featured',
        name: 'featured',
        type: 'boolean',
        description: 'Mark as featured insight',
      },
    ],
    preview: {
      select: {
        title: 'title',
        
      },
    },
  }
  
  export default insight
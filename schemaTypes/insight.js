const insight = {
    title: 'Insight',
    name: 'insight',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',     
        options: {
          hotspot: true,
          layout: 'grid',
        }
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        }
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
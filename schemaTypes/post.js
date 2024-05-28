const post = {
    title: 'Post',
    name: 'post',
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
        ],
      },    
    ],
    preview: {
      select: {
        title: 'title',
        
      },
    },
  }
  
  export default post
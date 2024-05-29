// schemas/contact.js
export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Your Name',
        type: 'string',
        validation: Rule => Rule.required().error('Your Name is required.')
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'email',
        validation: Rule => Rule.required().error('Email Address is required.')
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string'
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
        validation: Rule => Rule.required().error('Position is required.')
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: Rule => Rule.required().error('Message is required.')
      },
      {
        name: 'street',
        title: 'Street Address',
        type: 'string'
      },
      {
        name: 'city',
        title: 'City and State/Region',
        type: 'string'
      },
      {
        name: 'postal',
        title: 'Postal Code',
        type: 'string'
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string'
      }
    ]
  }
  
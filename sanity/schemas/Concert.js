const Concert = {
  type: 'document',
  name: 'concert',
  title: 'Concerts',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      options: {
        dateFormat: 'dddd MMMM D, YYYY',
      },
    },
    {
      name: 'headliner',
      title: 'Headliner',
      type: 'string',
    },
    {
      name: 'openers',
      title: 'Openers',
      type: 'string',
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
  ],
};

export default Concert;

export const getUsers = {
  tags: ['Users'],
  descripti0on: 'Returns all users from the system',
  operationId: 'getUsers',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'A list of users.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              id: {
                type: 'number',
                description: 'User ID',
              },
              name: {
                type: 'string',
                description: 'User Name',
              },
              email: {
                type: 'string',
                description: 'User Email',
              },
              password: {
                type: 'string',
                description: 'User Password',
              },
            },
          },
        },
      },
    },
  },
};

import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyBpaStorage',
  access: (allow) => ({
    'profile-pictures/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'public/*': [
      allow.authenticated.to(['read', 'write'])
    ]
  })
});

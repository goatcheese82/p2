import swaggerAutogen from 'swagger-autogen';

const options = {
   info: {
      title: "Routine",
      description: "Routines API"
   },
   host: process.env.BASE_URL,
   securityDefinitions: {
      google_oauth: {
        type: 'oauth2',
        authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
        tokenUrl: 'https://oauth2.googleapis.com/token',
        flow: 'authorizationCode',
        scopes: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
      },
    },
   schemes: ["https", "http"]
};



const outputFile = '../swagger.json';
const endpointsFiles = ['../server.mjs'];


swaggerAutogen()(outputFile, endpointsFiles, options).then(async () => {
   await import('../server.mjs');
});
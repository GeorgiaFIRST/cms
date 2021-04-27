module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.zmn8z.mongodb.net'),
        // host: env('DATABASE_HOST', 'mongodb+srv://cluster0.zmn8z.mongodb.net/StrapiTesting?retryWrites=true&w=majority'),
				// uri: env('DATABASE_URI'),
				srv: env.bool('DATABASE_SRV', true),
				port: env.int('DATABASE_PORT', 27017),
				database: env('DATABASE_NAME', 'StrapiTesting'),
				username: env('DATABASE_USERNAME', 'dbAdmin'),
				password: env('DATABASE_PASSWORD', '4JXTaQqmZAVSak7I'),
      },
      options: {
        // authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        // ssl: env.bool('DATABASE_SSL', true),
        ssl: true,
      },
    },
  },
});

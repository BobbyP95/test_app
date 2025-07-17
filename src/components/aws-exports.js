// aws-exports.js (or just paste in your config)
const awsConfig = {
    Auth: {
      identityPoolId: 'eu-west-1:de13ac60-e142-4ec9-8b06-063cfbaa4baa', 
      region: 'eu-west-1',
    },
    Storage: {
      bucket: 'gbdresumes', 
      region: 'eu-west-1',
      level: 'public',
    },
  };
  
  export default awsConfig;
  
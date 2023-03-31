import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAWBVLZSHJ6GFE54C4',
  secretAccessKey: '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',
});

const invokeLambdaFunction = (functionName, payload) => {
    const lambda = new AWS.Lambda();
    const params = {
      FunctionName: functionName,
      Payload: JSON.stringify(payload),
    };
    return lambda.invoke(params).promise();
  };
export {invokeLambdaFunction};


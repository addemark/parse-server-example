Parse.Cloud.define('hello', (req, response) => {
  Parse.Cloud.useMasterKey();
  req.log.info(req);
  return response.success('success');
});

Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

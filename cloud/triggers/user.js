Parse.Cloud.beforeSave('_User', (request, response) => {
  if (!request.object.get('password')) {
    response.error('must contain password');
  }
  response.success();
});

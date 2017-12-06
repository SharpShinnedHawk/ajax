$(document).ready(function () {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'GET',
    dataType: 'JSON'
  }).done(function (users) {
    users.forEach(function (user) {
      var list = $('.user-list')
      var li = '<a><li data-user-id="' + user.id + '">' + user.first_name + '-' + user.last_name + ': ' + user.phone_number +'</li></a>'
      list.append(li)
    });
  });
});

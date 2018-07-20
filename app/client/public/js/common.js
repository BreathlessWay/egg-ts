const csrftoken = Cookies.get('csrfToken');

const csrfSafeMethod = method => {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
};

$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader('x-csrf-token', csrftoken);
    }
  }
});

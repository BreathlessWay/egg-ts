const csrftoken = Cookies.get('csrfToken');

const csrfSafeMethod = method => {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/i.test(method));
};

$.ajaxSetup({
  beforeSend (xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader('x-csrf-token', csrftoken);
    }
  }
});

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

$(function () {
  $(window).on('scroll', () => {
    const $top = $(window).scrollTop();
    if ($top > 50) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
  });

  $('.back-top').on('click', () => {
    $('html,body').animate({'scrollTop': 0}, 600);
  });

  $('.login-btn').on('click', () => {
    const $feed = $('#login .invalid-feedback');
    $feed.hide();
    const $val = $('#user').val();
    if (!$val.trim()) {
      $feed.show();
      return;
    }
    $('.login-btn').prop('disabled', true);
    $.ajax({
      url: '/login',
      method: 'POST',
      dataType: 'json',
      data: {
        accesstoken: $val
      }
    })
      .done(res => {
        if (res.success) {
          location.reload();
        }
      })
      .fail(err => {
        console.log(err);
      })
      .always(() => {
        $('.login-btn').prop('disabled', false);
      });
  });

  $('.logout-btn').on('click', () => {
    $('.logout-btn').prop('disabled', true);
    $.ajax({
      url: '/logout',
      method: 'GET'
    })
      .done(res => {
        if (res.success) {
          location.reload();
        }
      })
      .fail(err => {
        console.log(err);
      })
      .always(() => {
        $('.login-btn').prop('disabled', false);
      });
  });
});

$(document).ready(function () {
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    $("#open-button").click(function () {
        var mob_num = $('#mob-num').val();
        var country_code = $('#country-code').val();
        var url = "https://wa.me/" + country_code + mob_num + "?text="
        openInNewTab(url)
    });
    $('#bookmarkme').click(function() {
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = document.title;
      return true;
    } else { // webkit - safari/chrome
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    }
  });
});
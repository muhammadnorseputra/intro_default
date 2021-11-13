$(window).on('load', function() {
	let apiIkmUrl = 'https://ikm.bkppd-balangankab.info/api/ikm';
	let $container = $("#ikm");
	$.ajax({
          url: apiIkmUrl, 
          dataType: 'jsonp',
          jsonpCallback: 'resultIkm',
          success: function(obj) {
            $container.html(`
        	<div class="fs8 white-text">${obj.data.nilai_ikm.toFixed(2)} / ${obj.data.nilai_konversi.x}</div>
        	<b class="fs4 white-text">${obj.data.nilai_konversi.y}</b>
        	`);
          },
           error: function(xhr, status, msg) {
            console.log('Status: ' + status + "\n" + msg);
          }
        });
});
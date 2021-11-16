$(function() {
	let apiIkmUrl = 'https://ikm.bkppd-balangankab.info/api/ikm';
	let $container = $("#ikm");
	$.ajax({
          url: apiIkmUrl, 
          dataType: 'jsonp',
          jsonpCallback: 'resultIkm',
          beforeSend: function() {
            $container.html(`
                <div class="container">
                  <div class="row">
                    <div class="col offset-s5"> 
                        <div class="preloader-wrapper big active">
                          <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                              <div class="circle"></div>
                            </div><div class="gap-patch">
                              <div class="circle"></div>
                            </div><div class="circle-clipper right">
                              <div class="circle"></div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              `);
          },
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
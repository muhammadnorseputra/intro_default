$(function() {
	var $form = $("form.fsearch");
	var $url = `https://web.bkppd-balangankab.info/frontend/v1/pegawai/detail?filter[query]=`;
	var $nip = $form.find('input#autocomplete-input');
	var $btn = $form.find('button[type="submit"]');
	$btn.html(`Submit <i class="material-icons right">search</i>`);
	$form.on("submit", function(e) {
		e.preventDefault();
		if($nip.val() == '') {
			alert('Silahkan Masukan NIP');
			$nip.focus();
			return false;
		}
		$btn.html(`
			  <div class="preloader-wrapper small active">
			    <div class="spinner-layer spinner-white-only">
			      <div class="circle-clipper left">
			        <div class="circle"></div>
			      </div><div class="gap-patch">
			        <div class="circle"></div>
			      </div><div class="circle-clipper right">
			        <div class="circle"></div>
			      </div>
			    </div>
			  </div>
		`);
		setTimeout(function() {  
			$btn.html(`Submit <i class="material-icons right">search</i>`);
		}, 3000);
		window.location.href = $url +''+ $nip.val();
	})
});
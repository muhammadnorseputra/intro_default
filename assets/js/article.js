    function templateArticle(data) {
        let judul = data.jdl_article;
        let slug = data.slug_article;
        let img = data.img_article;
        let url = data.url_article;
        let tgl = data.tgl_posting_article;
        let comments = data.jml_comments_article;
        let content = data.isi_article;
        let by = data.user_posting.user_nama;
        let by_link = data.user_posting.user_link;
        return `
        <div class="col s12 m4">
            <div class="card scale-transition hoverable">
              <div class="card-image">
                <a href="${url}" title="${slug}"><img class="materialboxed" data-caption="${judul}" src="${img}" alt="${judul}" style="object-fit:cover; height:180px;"></a>
              </div>
              <div class="card-content">
                <span class="grey-text text-lighten-1 truncate">${tgl} by ${by}</span>
                <h6><a class="teal-text text-lighten-1" href="${url}" title="${slug}">${judul}</a></h6>
                <p class="grey-text text-darken-2">${content}</p>
              </div>
              <div class="card-action">
                <a class="teal-text text-lighten-1" href="${url}" title="${slug}">Read More</a>
              </div>
            </div>
          </div>
        `;
    }

    function loadingCircle() {
        return `
        <div class="container">
            <div class="row">
                <div class="col offset-s5">        
                    
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green">
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
        `;
    }

    $(window).on('load', function() {
        let urlOnline = 'https://web.bkppd-balangankab.info';
        let urlOffline = 'http://localhost/smartsite';
        $("#preload").html(loadingCircle);
        // fetch(`${urlOffline}/frontend/v1/apiPublic/article`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         data.forEach((d) => {
        //             var r = templateArticle(d);
        //             $("#article").append(r);
        //             $("#preload").html('');
        //             $(".btn-more").removeClass('hide');
        //         })
        //     });
        $.ajax({
          url: `${urlOnline}/frontend/v1/apiPublic/article`, 
          dataType: 'jsonp',
          jsonpCallback: 'jsondata',
          success: function(obj) {
            obj.forEach((d) => {
                var r = templateArticle(d);
                $("#article").append(r);
                $("#preload").html('');
                $(".btn-more").removeClass('hide');
            })
          },
           error: function(xhr, status, msg) {
            console.log('Status: ' + status + "\n" + msg);
          }
        })
    });
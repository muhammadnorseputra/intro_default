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
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="post mb-20">
              <div class="post-thumbnail"><a href="${url}" title="${slug}"><img src="${img}" alt="${judul}"/></a></div>
              <div class="post-header font-alt">
                <h2 class="post-title"><a title="${slug}" href="${url}">${judul}</a></h2>
                <div class="post-meta">By&nbsp;<a title="${slug}" href="${by_link}">${by}</a>&nbsp;| ${tgl} | ${comments} Comments
                </div>
              </div>
              <div class="post-entry">
                <p>${content}</p>
              </div>
              <div class="post-more"><a class="more-link" href="${url}">Read more</a></div>
            </div>
          </div>
        `;
    }
    $(window).on('load', function() {
        let urlOnline = 'https://web.bkppd-balangankab.info';
        let urlOffline = 'http://localhost/smartsite';
        fetch(`${urlOffline}/frontend/v1/apiPublic/article`)
            .then(response => response.json())
            .then((data) => {
                data.forEach((d) => {
                    $("#article").append(templateArticle(d));
                })
            });
    });
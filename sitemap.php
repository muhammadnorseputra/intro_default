    <?php
        // header('Content-type: application/xml');
      
        include_once("public/curl.php");
        echo "<?xml version='1.0' encoding='UTF-8'?>"."\n";
        echo "<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>"."\n";

        echo "
            <url>
              <loc>https://web.bkppd-balangankab.info/beranda</loc>
              <changefreq>always</changefreq>
              <priority>0.1</priority>
            </url>
            <url>
              <loc>https://ekinerja.bkppd-balangankab.info/</loc>
              <changefreq>always</changefreq>
               <priority>0.1</priority>
            </url>
            <url>
              <loc>http://silka.bkppd-balangankab.info/</loc>
              <changefreq>always</changefreq>
              <priority>0.1</priority>
            </url>
            <url>
              <loc>https://eprilaku.bkppd-balangankab.info/</loc>
              <changefreq>yearly</changefreq>
              <priority>0.1</priority>
            </url>
            <url>
              <loc>https://ikm.bkppd-balangankab.info</loc>
              <changefreq>always</changefreq>
              <priority>0.1</priority>
            </url>
        ";
        $post = 'https://web.bkppd-balangankab.info/frontend/v1/apiPublic/article';
        $data = http_request($post);
        var_dump($data);
        // while($data    =mysqli_fetch_array($query)){
        //     echo "<url>";
        //     echo "<loc>".$data['post_link']."</loc>";
        //     echo "<lastmod>".$data['post_date']."</lastmod>";
        //     echo "<priority>1.00</priority>";
        //     echo "</url>";
        // }
        echo "</urlset>";
    ?>

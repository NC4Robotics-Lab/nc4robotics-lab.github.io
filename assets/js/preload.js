// This function will find all divs with class "replace" and id like "load-<filename>"
// and replace their contents with the content of the corresponding <filename>.html file

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('div.replace[id^="load-"]').forEach(div => {
        const id = div.id;
        const fileName = "./content/" +id.replace(/^load-/, '') + ".html";
        fetch(fileName)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${fileName}`);
                return response.text();
            })
            .then(htmlContent => {
                div.outerHTML = htmlContent;
            })
            .catch(err => {
                div.outerHTML = `<span style="color:red;">Error: ${err.message}</span>`;
            });
    });


  setTimeout(function() {
    document.querySelectorAll('.swiper-container').forEach(function(container) {
      var slides = container.querySelectorAll('.swiper-slide-active');
      if (slides.length <= 1) {
        container.swiper.autoplay.stop();
        container.swiper.navigation.destroy();
        container.swiper.pagination.destroy();
      }
    });
  }, 2000); // 2000ms is usually enough for Swiper to be initialized
});

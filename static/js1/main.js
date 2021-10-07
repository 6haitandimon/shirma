
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.header_text');
  let elements1 = document.querySelectorAll('.header_quote_text');
  let elements2 = document.querySelectorAll('.found');

  for (let elm of elements) {
    observer.observe(elm);
  }
  for(let elm of elements1){
      observer.observe(elm);
  }

 // for(let elm of elements2){
  //    observer.observe(elm);
// }



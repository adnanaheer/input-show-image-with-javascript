// const actualBtn = document.getElementById('actualBtn');

// const fileChosen = document.getElementById('fileChosen');


// actualBtn.addEventListener('change', function(){
//   fileChosen.textContent = this.files[0].name
// })

// function show(){
//   const file = document.getElementById('file').files[0];
//   const reader  = new FileReader();
//   reader.onload = function(e)  {
//     var image = document.createElement("img");
//     // the result image data
//     image.src = e.target.result;
//     document.body.appendChild(image);
//  }
//  // you have to declare the file loading
//  reader.readAsDataURL(file);
// }

function test() {
  const file = document.getElementById('file').files[0];
    const reader  = new FileReader()
    reader.onload = function (e) {
      const image = document.createElement("img")
      image.src = e.target.result;
      document.body.appendChild(image);
      image.height = 200;
      image.width = 200;
    }
    reader.readAsDataURL(file)
}

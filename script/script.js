const imageSets = [
    {
      id:1,
      name: 'Mark Dale',
      title: 'Wild Animals',  
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80'
      ],
    },
    {
      id:2,
      name: 'Lily Phan',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1542015354406-36ae110009fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1595887543484-e4a94a97abf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1591260565565-8bd6c8b6a438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZhY2VzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1594470643046-8255fe0a2911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1633058851505-6376593aa34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
      ],
    },
    {
      id:3,
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      ]
    },
    {
      id:4,
      name: 'Celine Vipiana ',
      title: 'Nature',
      images: [
        'https://images.unsplash.com/photo-1557750255-c76072a7aad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1553521306-9387d3795516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
      ],
    }
  ]; 
  
  // themeBtn.addEventListener("click", (e)=>{
  //   c(e.target)
  // })
  // Theme toggle h1, h2, p
  // <!-- &#x263E = moon ; &#9788 = sun-->
  let $ = document;
  let c = console.log;

 const themeBtn = $.getElementById("darkMode");

 const toggleTheme = () => {
    const body = $.querySelector("body");
    const heading = $.querySelectorAll("h1, h2");
    const para = $.querySelectorAll("p");
    const tealBtn = $.querySelectorAll(".teal-border");
    // dark mode 
    if(body.style.backgroundColor === "white") {
      body.style.backgroundColor = "#2A3B49";
      themeBtn.innerHTML = "&#x263E";
      for(let i = 0; i < heading.length; i++){
        heading[i].style.color = "white";
        for(let i = 0; i < para.length; i++){
          para[i].style.color = "white";
        } 
        for(let i = 0; i < tealBtn.length; i++){
          tealBtn[i].style.borderColor = "#7BFFE9";
        }
      }
    } else { // light mode 
      body.style.backgroundColor = "white";
      themeBtn.innerHTML = "&#9788";
      for(let i = 0; i < heading.length; i++){
        heading[i].style.color = "black";
        for(let i = 0; i < para.length; i++){
          para[i].style.color = "black";
        } 
        for(let i = 0; i < tealBtn.length; i++){
          tealBtn[i].style.borderColor = "transparent";
        }
      }
    }
  }
  themeBtn.addEventListener("click", toggleTheme);

window.onload = function () {
  gallery(imageSets);
};

// creates div and adds images dynamically on submissions page
const gallery = (imageSet) => {
  const submitBox = $.querySelector(".submit-container");
  const allImages = imageSet.map(image => {
    return `<a href="/html/detail.html?id=${image.id}">
    <div class="submit-card">
    <img src="${image.images[4]}">
    <div>
    <p>${image.title} - ${image.name}</p>
    <p class="see-more">see more</p>
    </div>
    </div>
    </a>`;
  })
  submitBox.innerHTML = allImages.join("");
}

// takes submission from user and adds it to the gallery 
const submitButton = $.querySelector("#submit-btn"); 
// preventdedault stops page from adding value when nothing is inputted
// e.preventDefault();
const addingUserImg = (e) => {
  const user = $.querySelector("#input-name").value;
  const title = $.querySelector("#input-title").value;
  const img1 = $.querySelector("#input-img1").value;
  // const img2 = $.querySelector("#input-img2").value;
  // const img3 = $.querySelector("#input-img3").value;
  const submitBox = $.querySelector(".submit-container");

  if (user === "" || title === "" || img1 === "") {
    // Handle the case when required fields are empty (e.g., show an error message)
    return;
  }
  // creating image to add to the gallery 
  const userImg = $.createElement("div");
  userImg.innerHTML = `<div class="submit-card">
  <img src="${img1}">
  <div>
  <p>${title} - ${user}</p>
  <p class="see-more">see more</p>
  </div>
  </div>`;
  submitBox.insertBefore(userImg, submitBox.firstChild);

  $.querySelector("#input-name").value = "";
  $.querySelector("#input-title").value = "";
  $.querySelector("#input-img1").value = "";
  $.querySelector("#input-img2").value = "";
  $.querySelector("#input-img3").value = "";
}
submitButton.addEventListener("click", addingUserImg);

// slider function 
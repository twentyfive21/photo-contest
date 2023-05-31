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

//   console.log(imageSets[3].images[4])
// making details page display image clicked on submissions page and previous and next button work
let $ = document;
let c = console.log;

let currentId;
let currentMatching;
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    currentId = urlParams.get("id");
  
    const matchingIds = imageSets.filter(item => item.id == currentId);
    currentMatching = matchingIds[0].images;
  
    let currentIndex = 0;
  
    const displayImg = () => {
      const detailContainer = document.querySelector(".detail-container");
      detailContainer.innerHTML = `
        <h1>${matchingIds[0].title}</h1>
        <h2>${matchingIds[0].name}</h2>
        <img src="${currentMatching[currentIndex]}">
        <p>${currentIndex + 1} of ${currentMatching.length}</p>
        <div>
          <button id="previous-btn" class="teal-border">Previous</button>
          <button id="next-btn" class="teal-border">Next</button>
        </div>
      `;
      const prevBtn = document.getElementById("previous-btn");
      const nextBtn = document.querySelector("#next-btn");
    
      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          displayImg();
        }
      });
    
      nextBtn.addEventListener("click", () => {
        if (currentIndex < currentMatching.length - 1) {
          currentIndex++;
          displayImg();
        }
      });
    };
    displayImg();
  }
  


  // dark mode theme 
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
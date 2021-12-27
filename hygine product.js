let url = "http://localhost:3000/api/hygiene"
           let main = document.querySelector(".insert");
           let module = document.querySelector(".moduls");
           let rate = document.querySelector(".rate");
           
           let star = "";
           let cardData = "";
           let detailsData = "";
           var current_page = 1;
           var records_per_page = 4;
           
           /*get request*/
           fetch(url)
                .then(res => res.json())
                .then(data => {
                      // start pagination
                      function prevPage(){
                        if (current_page > 1) {
                          current_page--;
                          changePage(current_page);
                        }
                      }
                      
                      function nextPage(){
                        if (current_page < numPages()) {
                          current_page++;
                          changePage(current_page);
                        }
                      }
                      
                      function changePage(page){
                        var btn_next = document.getElementById("btn_next");
                        var btn_prev = document.getElementById("btn_prev");
                        var page_span = document.getElementById("page");
                      
                        // Validate page
                        if (page < 1) page = 1;
                        if (page > numPages()) page = numPages();
                      
                        main.innerHTML = "";
                        page_span.innerHTML = page;
                        for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
                            main.innerHTML += `
                               <div class="card my-2 mx-2 product_card" style="width: 18rem;">
                                   <img src="http://localhost:3000/product/${data[i].image[0].filename}" class="card-img-top" alt="...">
                                   <div class="card-body">
                                        <h5 class="card-title">${data[i].title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${data[i].category}</h6>
                                        ${stars()}
                                        <p class="card-text">${data[i].sortDescription}</p>
                                   </div>
                                   <div class="card-body d-flex">
                                        <div class="price">
                                            <span class="before">₹${data[i].before}</span>
                                            <span class="current">₹${data[i].after}</span>
                                        </div>
                                        <a href="#${"product"+data[i]._id}" data-bs-toggle="modal" class="btn btn-secondary">more</a>
                                   </div>
                             </div>`;
                        }
                        
                        if (page == 1) {
                           btn_prev.style.visibility = "hidden";
                        } else {
                           btn_prev.style.visibility = "visible";
                        }
                        
                        if (page == numPages()) {
                           btn_next.style.visibility = "hidden";
                        } else {
                           btn_next.style.visibility = "visible";
                        }
                      }
                      
                      function numPages(){
                        return Math.ceil(data.length / records_per_page);
                      }
                      
                      window.onload = function() {
                        changePage(1);
                      };
                      
                      //end pagination
                      
                      data.forEach(function(item,index){
                      let noStar = Number(item.star)
                     
                    /*  cardData += `
                               <div class="card my-2 mx-2 product_card" style="width: 18rem;">
                                    <img src="http://localhost:3000/product/${item.image[0].filename}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                         <h5 class="card-title">${item.title}</h5>
                                         <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
                                         ${stars()}
                                         <p class="card-text">${item.sortDescription}</p>
                                    </div>
                                    <div class="card-body d-flex">
                                         <div class="price">
                                              <span class="before">₹${item.before}</span>
                                              <span class="current">₹${item.after}</span>
                                         </div>
                                         <a href="#${"product"+item._id}" data-bs-toggle="modal" class="btn btn-secondary">more</a>
                                    </div>
                               </div>`;*/
                       
                       
                     detailsData += 
                                `<div class="portfolio-modal modal fade" id="${"product"+item._id}" tabindex="-1" role="dialog" aria-hidden="true">
                                       <div class="modal-dialog">
                                            <div class="modal-content">
                                                 <div class="main">
                                                      <div class="close-modal" data-bs-dismiss="modal"><i class="fas fa-times me-1"></i></div>
                                  
                                                 <div class="detailscontainer">
                                                      <div class="product-image">
                                                           <img src="http://localhost:3000/product/${item.image[1].filename}" alt="" class="product-pic">
                                                      </div>
                                  
                                                      <div class="product-details">
                                                           <header>
                                                                 <h1 class="title">${item.title}</h1>
                                                                 <span class="colorCat">${item.category}</span>
                                                                 <div class="price">
                                                                      <span class="before">₹${item.before}</span>
                                                                      <span class="current">₹${item.after}</span>
                                                                 </div>
                                                                 ${stars()}
                                                         </header>
                                                         <article>
                                                                 <h5>Description</h5>
                                                                 <p>${item.description}</p>
                                                         </article>
                                                         <div class="controls">
                                                              <div class="size">
                                                                   <h5>Dimension</h5>
                                                                   <a href="#!" class="option">${item.dimension}</a>
                                                              </div>
                                                         </div>
                                                         <div class="footer">
                                                              <button type="button">
                                                                      <span>Contact Us</span>
                                                              </button>
                                                         </div>
                                                   </div>
                                              </div>
                                         </div>
                                     </div>
                                </div>
                           </div>`
                           
                           
                           
                           function stars(){
                               function starArr(){
                                    let starsArr = [];
                                    for (let i = 1; i <= 5; i++) {
                                        starsArr.push(
                                              `<a  href="#!" class="${i <= noStar ? 'star' : ''}">★ </a>`
                                        );
                                    }
                                    return starsArr.join("")
                               }
                                return `<div class="rate ">${starArr()}</div>`;
                           }
                           
           })
         //  main.innerHTML = cardData;
           module.innerHTML = detailsData;
           
           })
           .catch((e)=>{
               console.log(e)
           })
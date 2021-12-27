let url1 = "http://localhost:3000/api/hshowcase"
           let main2 = document.querySelector(".carousel-inner");
           let showcaseData = "";
           let element = document.querySelector('.carousel-item')
           
           fetch(url1)
                .then(res => res.json())
                .then(data => {
                            let showcaseData1= 
                                `<div class="carousel-item active">
                                      <div class="item center" style="background-color:${data[0].bg_color}; color:black;">
                                           <div class="info">
                                                <span class="new">New</span>
                                                <h1 class="mt-2"><b>${data[0].title}</b></h1>
                                                <p>${data[0].discreption}</p>
                                                <a href="#${"product"+data[0].product_id}" data-bs-toggle="modal" class="more">more</a>
                                           </div>
                                           <div class="img">
                                                <img src="http://localhost:3000/product/${data[0].image.filename}" />
                                           </div>
                                      </div>
                                 </div>`;
        
                             for(let i=1; i<data.length; i++){
                                 showcaseData += 
                                             `<div class="carousel-item ">
                                                   <div class="item center" style="background-color:${data[i].bg_color}; color:black;">
                                                        <div class="info">
                                                             <span class="new">New</span>
                                                             <h1 class="mt-2"><b>${data[i].title}</b></h1>
                                                             <p>${data[i].discreption}</p>
                                                             <a href="#${"product"+data[i].product_id}" data-bs-toggle="modal" class="more">more</a>
                                                        </div>
                                                        <div class="img">
                                                             <img src="http://localhost:3000/product/${data[i].image.filename}" />
                                                        </div>
                                                   </div>
                                              </div>`;
                             }


  


                             main2.innerHTML =showcaseData1 + showcaseData;
           })
           .catch((e)=>{
               console.log(e)
           })
           
           
let search = document.getElementById("search")
     
     search.addEventListener("input" , function(){
       
       let searchVal = search.value.toLowerCase();
       console.log(searchVal)
       
       let card = document.getElementsByClassName("product_card")
       
       Array.from(card).forEach(function(element){
         //let cardTxt = element.getElementsByTagName("h6")[0].innerText
              let cardH5 = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
              let cardH6 = element.getElementsByTagName("h6")[0].innerText.toLowerCase();
              let cardP = element.getElementsByTagName("p")[0].innerText.toLowerCase();
       //  console.log(cardTxt)
         if(cardH5.includes(searchVal) || cardH6.includes(searchVal) || cardP.includes(searchVal)){
           element.classList.remove("hide");
           element.classList.add("show");
         }
         else{
         element.classList.add("hide");
         element.classList.remove("show");
         }
       
       })
     })
     
     //filter
     function filter(id){
       let filterVal = document.getElementById(id).children[1].innerText.toLowerCase();
      // console.log(filterVal)
       
       let card = document.getElementsByClassName("product_card")
       
       Array.from(card).forEach(function(element){
       let cardTxt = element.getElementsByTagName("h6")[0].innerText.toLowerCase();
       
       if(cardTxt.includes(filterVal) ){
      // element.style.display = "block";
      element.classList.remove("hide");
      element.classList.add("show");
       }
       else{
       //element.style.display = "none";
       element.classList.add("hide");
       element.classList.remove("show");
       }
       
       })
     }
     
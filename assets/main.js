let suggestionBox=document.querySelector(".SuggestBox")
let input=document.getElementById("input")


input.addEventListener("keyup",()=>{
    let input_value=input.value.toLowerCase().trim()
    console.log(input_value);
  
    
    
//Function for suggestion
async function filterSuggestion() {
   

  const response = await fetch("./assets/main.json");
  const keyWordList = await response.json();
console.log(keyWordList);

  suggestionBox.style.display="block"


  let suggest = []; 
  
  if (input_value.length) {
    suggest = keyWordList.filter((key)=>{
      return key.search.toLowerCase().includes(input_value.toLowerCase());

    });
  }
console.log(suggest);

  function suggestBox(suggest){
    const suggestions=suggest.map((value) => {
 
   return `<li onclick="selectInput(this)">${value.search}</li>`
    });
       suggestionBox.innerHTML=`<ul>
     ${suggestions.join(" ")}
     </ul>`;
console.log(suggestions);


}


  
 

  suggestBox(suggest)

}

filterSuggestion()


    
})





function selectInput(list)  {

  input.value=list.innerHTML
  suggestionBox.innerHTML=""
} 

input.addEventListener("click",()=>{
  input.select()
})

const heart = document.querySelectorAll('.transparent')
const boxes = document.querySelector('.boxes')
const pricetotal = document.querySelectorAll('.pricetotal')

heart.forEach((ne)=>{
  ne.addEventListener('click',()=>{
    ne.classList.toggle('red')
  })

  
})

boxes.addEventListener('click',e=>{
 
  if(e.target.classList.contains('plus')){


    let quantity=Math.floor(e.target.nextElementSibling.textContent++)
    let price= Math.floor(e.target.parentElement.previousElementSibling.textContent)
    total = price*(quantity+1)

    let output = `${total}`

    e.target.parentElement.nextElementSibling.nextElementSibling.textContent=output
}
if(e.target.classList.contains('minus')){

  if(e.target.previousElementSibling.textContent>1){

 
  let quantity=Math.floor(e.target.previousElementSibling.textContent--)
  let price= Math.floor(e.target.parentElement.previousElementSibling.textContent)
  total = price*(quantity-1)

  let output = `${total}`

  e.target.parentElement.nextElementSibling.nextElementSibling.textContent=output
}
}


if(e.target.classList.contains('b')){
  e.target.parentElement.parentElement.style.display = 'none'
  e.target.parentElement.previousElementSibling.style.display='none'
  let total =0
  pricetotal.forEach(p=>{
    if(p.style.display!='none'){
      total+= Math.floor(p.textContent)
      console.log(total)
    }
  
 })  

  e.target.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.textContent=total
}

if(e.target.classList.contains('btntotal')){
  let total =0
  pricetotal.forEach(p=>{
    
    total+= Math.floor(p.textContent)
    console.log(total)
  })  

  e.target.nextElementSibling.nextElementSibling.textContent=total

}

})




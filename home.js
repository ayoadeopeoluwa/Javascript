// let welcome = "Welcome";

// showMessage(welcome);


//let i = 10;
/*
if (price > 20){
    showMessage('greater than 10')
}
else{
    showMessage('less than or equal 10')
}
*/
//(price > 20) ? showMessage('greater than 10'):showMessage('less than or equal 10')

/*
for (let i = 0; i < 5; i++){
    console.log(i)
}
*/

/*let i = 1;
while (i < 6){
    console.log(i);
    i++;
}
*/

/*function getSecretCode(value){
    let code = 2 * value;
    return code; 
}

showMessage(getSecretCode(7))
let secretCode = getSecretCode(7)
console.log(secretCode)


changePercentOff(87);
*/

/*
let person = {
    name : "Opeoluwa",
    ambition :"software developer",
    gross : "$ " + 30000,
    address : "7 saka jojo vi",
    showInfo: function test(){
        showMessage(this.name  + " is a " + this.ambition);
    }
    

};

person.showInfo();
*/

/*
let now = new Date();
console.log(now.getSeconds());

showMessage(now.toDateString());
*/

/*
const header = document.getElementById("message");

header.style.color = "red";
*/

/*
const button = document.getElementById("see-review");

button.addEventListener('click', function(){
    console.log('click');
})
*/

const button = document.getElementById('see-review');

button.addEventListener('click', function(){


   const review = document.getElementById('review');

   if (review.classList.contains('d-none')){

        review.classList.remove('d-none');
        document.getElementById('see-review').textContent = 'hide review';
        button.style.backgroundColor = "red";

   }else{
        
        review.classList.add('d-none');
        button.textContent = 'see review';
        button.style.backgroundColor = defaultStatus;
   }

   
})
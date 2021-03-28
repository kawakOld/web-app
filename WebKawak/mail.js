var mail;


function setup() {
  
   mail = createInput();
   mail.changed(newText);
   mail.input(newTyping);

}
function newTyping() {
  createP(mail.value());
} 

function newText() {
  createP(mail.value());
  console.log(mail.value());
} 



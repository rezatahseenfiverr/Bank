function SB(){
    const User = document.getElementById("InputUser").value;
    const Pass = document.getElementById("InputPassword").value;

    if (User === "Admin" && Pass === "admin"){
    document.getElementById("toast-success").style.display ="flex"
    document.getElementById("toast-danger").style.display ="none"
        setTimeout(function redirect() {
           window.location = "/account.html";
        }  , 3000);
    }
    else{
      if (User === "Reza" && Pass === "potolkumer"){
    document.getElementById("toast-success").style.display ="flex"
    document.getElementById("toast-danger").style.display ="none"
        setTimeout(function redirect() {
           window.location = "/account.html";
        }  , 3000);
      }
      else{
        if (User === "WebDev" && Pass === "webdev"){
    document.getElementById("toast-success").style.display ="flex"
    document.getElementById("toast-danger").style.display ="none"
        setTimeout(function redirect() {
           window.location = "/account.html";
        }  , 3000);
      }
         else{
          document.getElementById("toast-danger").style.display ="flex"
          document.getElementById("toast-success").style.display ="none"
          setTimeout(function(){
            location.reload();
          }, 3000);
      }
    }
}
}

function myFunction() {
  const ShowPass = document.getElementById("InputPassword");
  if (ShowPass.type === "password") {
    ShowPass.type = "text";
  } else {
    ShowPass.type = "password";
  }
}


function DP(){
     const DepositAmount = parseFloat(document.getElementById("InputDeposit").value);
   const Money = parseFloat(document.getElementById("Money").innerText);
    if(DepositAmount>0){
      const Deposit = (DepositAmount + Money) ;
document.getElementById("Money").innerHTML = Deposit;
document.getElementById("Message").innerHTML = `Successfully Added ৳ ${DepositAmount} `
document.getElementById("toast-success-acc").style.display ="flex"
setTimeout(function(){
          document.getElementById("toast-success-acc").style.display ="none"  
          }, 2500);
    }
    else{
      document.getElementById("Message1").innerHTML = "Deposit More Than ৳1"
      document.getElementById("toast-danger-acc").style.display ="flex"
setTimeout(function(){
          document.getElementById("toast-danger-acc").style.display ="none"  
          }, 2500);
    }

}
function WT(){
   const WithdrawAmount = parseFloat(document.getElementById("InputWithdraw").value);
    const Money = parseFloat(document.getElementById("Money").innerText);
  if(Money>0 && WithdrawAmount>0){
       const Withdraw = (Money-WithdrawAmount) ;
    console.log(Withdraw)
document.getElementById("Money").innerHTML = Withdraw;
document.getElementById("Message").innerHTML = `Successfully Withdrawn ৳ ${WithdrawAmount} `
document.getElementById("toast-success-acc").style.display ="flex"
setTimeout(function(){
          document.getElementById("toast-success-acc").style.display ="none"  
          }, 2500);
  }
  else{
   document.getElementById("Message1").innerHTML = "Error"
      document.getElementById("toast-danger-acc").style.display ="flex"
setTimeout(function(){
          document.getElementById("toast-danger-acc").style.display ="none"  
          }, 2500);
  }
}





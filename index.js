var customerName = "bob";
const leastFavoriteCustomer = 'Mburu';
 
function  getCustomerName(){
    return customerName;
}


function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();

}

function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Daniel'; 
}


console.log(leastFavoriteCustomer); 
changeLeastFavoriteCustomer(); 

   
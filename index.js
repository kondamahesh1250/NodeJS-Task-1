function add(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}


function mul(a,b){
    return a*b;
}


function div(a,b){
    return a/b;
}


function module(a,b){
    return a%b;
}


function otp(n){
    var otp="";
    for(let i=0;i<n;i++){
       var  num=Math.floor(Math.random()*10);
        otp=otp+num;
    }
    return otp;
}

export {add,sub,mul,div,module,otp};
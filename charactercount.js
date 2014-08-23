$(document).ready(function(){
    var total = 0;var spaces = 0;var alphabets = 0;var numbers = 0;var vowels = 0;
    var str = new Array();
    
    $(".textinput").keyup(function(e){
      if((e.keyCode>=32 && e.keyCode<=127) || e.keyCode === 8){  
        str = $(".textinput").val().split("");
        total = str.length;
        spaces = findSpaces(str);
        alphabets = findAlphabets(str);
        numbers = findNumbers(str);
        $("ul.outputbox li").eq(0).find("span").html(total);
        $("ul.outputbox li").eq(1).find("span").html(spaces);
        $("ul.outputbox li").eq(2).find("span").html(numbers);
        $("ul.outputbox li").eq(3).find("span").html(alphabets);
        if(total>50){
            $("ul.outputbox li").find("span").css('color','#ce0f1d');
        }
        else{
            $("ul.outputbox li").find("span").css('color','#70b60b');
        }
      }
    });
});

function findSpaces(str){
    var s=0;
    for(var i=0;i<str.length;i++){
        if(str[i] === ' '){
             s++; 
        }
    }
    return s;
}

function findAlphabets(str){
    var a=0;
    for(var i=0;i<str.length;i++){
        if((str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90) || (str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122)){
             a++; 
        }
    }
    return a;
}

function findNumbers(str){
    var n=0;
    for(var i=0;i<str.length;i++){
        if(str[i].charCodeAt(0)>=48 && str[i].charCodeAt(0)<=57){
             n++; 
        }
    }
    return n;
}


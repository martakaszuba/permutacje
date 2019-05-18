
//permutacje liczby

function permutationNum(number){

    var arr = [];
    number = number.toString();
    var num = number.split("");
    num = num.map(function(val){
        return Number(val);
    })
    var min = Math.min(...num);
    var max = Math.max(...num);
    var nummin = new Array(number.length).fill(min);
    var nummax = new Array(number.length).fill(max);
    nummin = Number(nummin.join(""));
    nummax = Number(nummax.join(""));

    for (var i=nummin; i<=nummax; i++){
        if ((Checknum(i))){
            arr.push(i);
        }
    }

    function Checknum(number){
        number = number.toString();
        number = number.split("");
        number = number.map(function(val){
        return Number(val);
    })

    var bool = number.every(function(val){
        return num.includes(val)
    })

    if (bool){
        return true;
    }
    return false;
    }

    return arr;
}


//permutacje litery

function permutationLetters(letters){

    var arr = [];
    var num = [];
    for (var i=1; i<=letters.length; i++){
        num.push(i);
    }

var min = Number(new Array(letters.length).fill(1).join(""));
var max = Number(new Array(letters.length).fill(letters.length).join(""));

for (var j=min; j<=max; j++){
        if ((Checknum(j))){
            arr.push(j);
        }
    }

    function Checknum(number){
        number = number.toString();
        number = number.split("");
        number = number.map(function(val){
        return Number(val);
    })

    var bool = number.every(function(val){
        return num.includes(val)
    })

    if (bool){
        return true;
    }
    return false;
    }

    var newarr = arr.map(function(val){
        var str = "";
        val = val.toString();
        for (var i=0; i<val.length; i++){
           str += letters[Number(val[i])-1];
        }
        return str;
    })
    return newarr;
}
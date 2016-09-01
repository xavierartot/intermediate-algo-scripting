////////////////////////////////////////////////////////////////////////
//  nonce:
//  sum all numbers in a range
//  we'll pass you an array of two numbers. return the sum of those two numbers and all 
//  numbers between them.
//
//  the lowest number will not always come first.
//
//  remember to use read-search-ask if you get stuck. try to pair program. 
//  write your own code.
//
//  here are some helpful links:
//          
////////////////////////////////////////////////////////////////////////
  
////////////////////////////////////////////////////////////////////////
//    Math.max()
//    Math.min()
//    Array.prototype.reduce()
////////////////////////////////////////////////////////////////////////

//pseudo code
//var minNumber, maxNumber, add, total, i, tempAdd, arr;
//
//add        = 0
//total      = 0
//i          = 0
//tempAdd    = 0
//
//loop the array
//minNumber  = Math.min(arr[i])
//maxNumber  = Math.max(arr[i])
//end loop
//
//add = maxNumber - minNumber;
//
//on additionne le minNumber x fois add
//
//
//tant que minNumber <= maxNumber 
//add = minNumber + 1
//tempAdd = add + minNumber 
//end
//afficheTotal(tempAdd)

//on prend le plus petit nombre du tableau on incremente se nombre puis on 
//addtionne se nombre incremente avec sont precedent, jusqu'au plus grand nombre.

(function() {


  //loop the array
  //Math.min(a)
  //Math.max(b)
  //minNumber  = Math.min(arr[i]);
  //maxNumber  = Math.max(arr[i]);
  //end loop

  //add = maxNumber - minNumber;

  //on additionne le minNumber x fois add
  //loop
  function sumAll(arr) {
    var minNumber  = 0;
    var maxNumber  = 0;
    var firstN = 0;
    var secondN = 0;
    var resultat= 0;
    for (var i = 0, a = arr.length; i < a; i++) {
      //n += ' '+arr[i];
      if (i === 0) {
        firstN = arr[i];
      } else if(i === 1){
        secondN =arr[i];
      }
    }
    minNumber = Math.min(firstN,secondN);
    maxNumber = Math.max(firstN,secondN);

    
    resultat = minNumber;
    //console.log(minNumber, maxNumber  );
    while (minNumber < maxNumber ) {
      //console.log(1,minNumber, maxNumber );
      minNumber++;
      resultat = resultat + minNumber;
    }
    //console.log(resultat);
    return resultat;
    //1+2+3+4 =10
  }
  sumAll([1, 4]);

}());

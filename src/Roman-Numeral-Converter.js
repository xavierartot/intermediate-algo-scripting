
//class Polygon {
  //constructor(height, width) {
    //this.height = height;
    //this.width = width;
  //}

  //get area() {
    //return this.calcArea();
  //}

  //calcArea() {
    //return this.height * this.width;
  //}
//}


(function(window) {
  function convertToRoman(num) {
    //transforme en chaine puis compte le combre de caractere.
    //console.log(num.toString().length );
    let cast, castLen, arr, arrRoman, count=0, alphaRoman, obj={}, add='';

    //console.log(oave );
    //alphaRoman = {
      //{
        //val :'1', 
        //numRoman : 'I'
      //}
      //{
        //val :5,    
        //numRoman : V
      //},
      //{
        //val :10,    
        //numRoman : x
      //},
      //{
        //val :50    
        //numRoman : L
      //},
      //{
        //val :100    
        //numRoman : C
      //},
      //{
        //val :500    
        //numRoman : D
      //},
      //{
        //val :1000    
        //numRoman : M
      //}
    //};
    //alphaRoman.10;
    //console.log(alphaRoman.V);

    //var aobj = {here: {is: "an"}, object: 2};
    arrRoman = {
        val :{
          1: 'I',
          5: 'V',
          10: 'X',
          50: 'L',
          100: 'C',
          500: 'D',
          1000: 'M'
        }
    };


    cast= num.toString();
    console.log(cast.length );// chiffre dans le nombre

    //console.log(add += arrRoman.valRoman.I + cast[0] + ' : ');
    //
    if (cast[0] <='3') {
      for (var i = 0, len = cast[0]; i < len; i++) {
        console.log(arrRoman.val['1'] );
      }
    }else if(cast[0] === '4'){// ignore jhint
      console.log(arrRoman.val['1'] + arrRoman.val['5'] );
    }else{
      console.log(arrRoman.val['5']);
    }
    return num;
  }

  convertToRoman(46);


  //convertToRoman(2) should return "II".
  //convertToRoman(3) should return "III".
  //convertToRoman(4) should return "IV".
  //convertToRoman(5) should return "V".
  //convertToRoman(9) should return "IX".
  //convertToRoman(12) should return "XII".
  //convertToRoman(16) should return "XVI".
  //convertToRoman(29) should return "XXIX".
  //convertToRoman(44) should return "XLIV".
  //convertToRoman(45) should return "XLV"
  //convertToRoman(68) should return "LXVIII"
  //convertToRoman(83) should return "LXXXIII"
  //convertToRoman(97) should return "XCVII"
  //convertToRoman(99) should return "XCIX"
  //convertToRoman(500) should return "D"
  //convertToRoman(501) should return "DI"
  //convertToRoman(649) should return "DCXLIX"
  //convertToRoman(798) should return "DCCXCVIII"
  //convertToRoman(891) should return "DCCCXCI"
  //convertToRoman(1000) should return "M"
  //convertToRoman(1004) should return "MIV"
  //convertToRoman(1006) should return "MVI"
  //convertToRoman(1023) should return "MXXIII"
  //convertToRoman(2014) should return "MMXIV"
  //convertToRoman(3999) should return "MMMCMXCIX"
}(window));


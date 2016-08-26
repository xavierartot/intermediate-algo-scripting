(function(window) {


  //function convertToRoman(num) {
  //return num;
  //}

  //convertToRoman(36);

  //var arr =['xav', 'tab', 'text', 'fou'];
  //console.log(arr.length);//4
  //console.log(arr.length - 1);//3

    //var o = {
      //ca : 2,
      //xx : 5
    //};
    //o.ca = 2;
    //console.log(o.ca);



  function convertToRoman(num) {

    //transforme en chaine puis compte le combre de caractere.
    //console.log(num.toString().length );
    var cast, castLen, arr, arrRoman, count=0, alphaRoman, obj={}, add='';

    alphaRoman = {
      //{
        val :'1', 
        numRoman : 'I'
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
    };
    //alphaRoman.10;
    //console.log(alphaRoman.V);

    cast= num.toString();
    console.log(cast);
    for (var i = 0, len = cast.length; i < len; i++) {
      console.log(cast[i]);
      if (cast[i] <=3) {
        for (var j = 0, l= cast[i]; j < l; j++) {
          console.log(add += alphaRoman.I + ' : '+ l);
        }
      }
      console.log(add);
      //console.log(count);
      return 0;
    }
    

    return num;
  }

  convertToRoman(36);


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


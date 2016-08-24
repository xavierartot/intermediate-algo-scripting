
//CONCAT
//var alpha = ["a", "b", "c"];
//var numérique = [1, 2, 3];

//var alphanumérique = alpha.concat(numérique);

//console.log(alphanumérique); 
// donne : ["a", "b", "c", 1, 2, 3]
//
//SLICE
//var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
//var agrumes = fruits.slice(1, 3);

// fruits vaut --> ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
// agrumes vaut --> ["Orange", "Citron"]
//
//var indices = [];
//var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
//var element = 'c';
//var idx = tableau.indexOf(element);
//while (idx !== -1) {
  //indices.push(idx);
  //idx = tableau.indexOf(element, idx + 1);
//}
//console.log(indices, idx);
// [0, 2, 4]/
(function() {
  function diffArray(arr1, arr2) {
    //replace
    //var str = "Visit, Microsoft!";
    //var res = str.replace("Microsoft", "");
    //console.log(res);

    //second idea, I join the array to a string then use a regex to test 
    //the string in a loop.
    var ele,indices, idx, arr, rgx, arr4, textJoin;
    var newArr = [];
    //console.log(string.indexOf(substring) !== -1);
    //couper la chaine
    //rgx = text.replace('dead', "");
    //console.log(rgx);
    //
    function compareNombres(a, b) {
      return a - b;
    }

    arr = arr1.concat(arr2);
    console.log(arr);
    var arrayString = arr.sort(compareNombres );
    console.log(arrayString );

    arrayString =  textJoin.sort();
    var string = "foo",
    substring = "a";
    console.log("Triées : " +  textJoin.sort() +"\n\n");

    for (var i = 0, len = arr.length; i < len; i++) {
      //console.log(text.indexOf(arr[i]) !== -1);
      //si arr[i] match the chaine, arrayString 
      if (text.indexOf(arr[i]) !== -1) {
        //couper la chaine
      }
      ele = text.replace(arr[i], "xxxxxxxxxxxxxx");
      //console.log(ele);
      //si arr[i] match the chaine, arrayString 
        //couper la chaine
        //rgx = text.replace(arr[i], "");
        //si arr[i] mathe the chaine, arrayString 
          //couper encore
          //rgx = text.replace(arr[i], "");
    }
    //console.log(text );

    //split() arrayString in an array with the comma
    
    //console.log(newArr);

    //return newArr;
  }

  //diffArray(
  //[1, 2, 3, 5], 
  //[1, 2, 3, 4, 5] 
  //);
  //should return [4]. 
  //diffArray(
  //["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  //["diorite", "andesite", "grass", "dirt", "dead shrub"] 
  //); //should return ["pink wool"].
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  ); //should return ["diorite", "pink wool"]
  //diffArray(
  //["andesite", "grass", "dirt", "dead shrub"], 
  //["andesite", "grass", "dirt", "dead shrub"]
  //); // should return []
  //diffArray(
  //[1, "calf", 3, "piglet"], 
  //[1, "calf", 3, 4]
  //);// should return ["piglet", 4].
  //diffArray(
  //[], ["snuffleupagus", "cookie monster", "elmo"]
  //);//  should return ["snuffleupagus", "cookie monster", "elmo"].
  //diffArray(
  //[1, "calf", 3, "piglet"], [7, "filly"]
  //);//  should return [1, "calf", 3, "piglet", 7, "filly"].



}());

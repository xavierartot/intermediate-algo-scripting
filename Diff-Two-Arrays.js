
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
var indices = [];
var tableau = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'c';
var idx = tableau.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = tableau.indexOf(element, idx + 1);
}
console.log(indices, idx);
// [0, 2, 4]/
(function() {
  function diffArray(arr1, arr2) {
    var ele,indices, idx, arr;
    var newArr = [];
    if (arr1.length <= arr2.length) {
      console.log("arr2 est plus grand ou ==");
      for (var i = 0, len = arr1.length; i < len; i++) {
        idx = arr2.indexOf(arr1[i]);
        if (idx ===  -1) {// ne trouve pas dans la le tableau
          newArr.push(arr1[i]);
        } else {
        }
      }
    } else {
      console.log("arr1 est plus grand");
    }

    console.log(newArr);

    // Same, same; but different.
    return newArr;
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

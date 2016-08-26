//avec underscore.js l'exercice prend une ligne
//http://underscorejs.org/#uniq
//https://www.freecodecamp.com/challenges/diff-two-arrays
//find a big help here
//http://stackoverflow.com/questions/840781/easiest-way-to-find-duplicate-values-in-a-javascript-array
(function() {
  function diffArray(arr1,arr2) {
    var arr=[],
      out=[],
      counts={};

    //concat the two array
    arr = arr1.concat(arr2);
    //boucle le nouveau tableau
    for (var i=0, len=arr.length;i<len;i++) {
      var item = arr[i];
      //insert each item in the properties object counts
      counts[item] = (counts[item] >= 1) ? counts[item] + 1 : 1;
    }

    for (var key in counts) {
      //loop in the object
      if (counts[key] === 1) {
        //create an array with all the value with 1
        out.push(key);
      }
    }

    console.log(out);
    // loop the final tab to cast the number in the string to a number
    var num=[],newArray=[];
    for (var j = 0, lon = out.length; j < lon; j++) {
      num = out[j];
      if (!isNaN(num)) {
        console.log(num);
        parseInt(num);
        newArray.push(parseInt(num));
        //console.log(parseInt(counts[key]) + ': ' +key);
      }else{
        newArray.push(num);
      }

    }
    console.log(out);
    console.log(newArray );
    return newArray;
  }

  diffArray(
    [1, "calf", 3, "piglet"], 
    [1, "calf", 3, 4]
  );
  //diffArray(
  //["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  //["diorite", "andesite", "grass", "dirt", "dead shrub"] 
  //); 
  //should return ["pink wool"].
  //diffArray(
  //[1, 2, 3, 5], 
  //[1, 2, 3, 4, 5] 
  //);
  //diffArray(
    //[1, 2, 3, 5], 
    //[1, 2, 3, 4, 5] 
  //);
  //should return [4]. 
  //diffArray(
  //["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  //["diorite", "andesite", "grass", "dirt", "dead shrub"] 
  //);
  ////should return ["pink wool"].
  //diffArray(
  //  ["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  //  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  //);
  ////should return ["diorite", "pink wool"]
  //diffArray(
  //["andesite", "grass", "dirt", "dead shrub"], 
  //["andesite", "grass", "dirt", "dead shrub"]
  //); 
  //// should return []
  //// should return ["piglet", 4].
  //diffArray(
  //[], ["snuffleupagus", "cookie monster", "elmo"]
  //);
  ////  should return ["snuffleupagus", "cookie monster", "elmo"].
  //diffArray(
  //[1, "calf", 3, "piglet"], [7, "filly"]
  //);
  ////  should return [1, "calf", 3, "piglet", 7, "filly"].



}());

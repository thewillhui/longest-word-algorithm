function findLongestWord (sentence){

  var sentenceArray = sentence.split(" ").sort(function(a,b){
    return b.length > a.length;
  });

return sentenceArray[0];

};
sentence = "this is a sentence"
console.log(findLongestWord(sentence)); // => "sentence"
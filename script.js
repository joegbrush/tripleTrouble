function tripleTrouble(one, two, three) {
      var result = "";
      for (var i = 0; i < one.length; i++) {
            result += one[i];
            result += two[i];
            result += three[i]
      }
      return result;
}
console.log(tripleTrouble("aaa","bbb","ccc"))
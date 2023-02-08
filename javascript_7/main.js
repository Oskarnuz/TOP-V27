/*
Escribir una función que tome un objeto como argumento. El objeto contiene dos propiedades, upvotes y downvotes. Devuelve el número de votos a favor menos el número de votos en contra.
*/
 // Opcion 1
function getVoteCount({upvotes = 0, downvotes = 0}) { 
    return upvotes - downvotes
  }


console.log(getVoteCount({upvotes:13, downvotes:0}))	//   13
console.log(getVoteCount({upvotes:2, downvotes:33})) //	-31
console.log(getVoteCount({upvotes:132, downvotes:132})) //	0
console.log(getVoteCount({ downvotes: 132 })); // -132
console.log(getVoteCount({ upvotes: 132 })); // 132  

// OPCIÓN 2
function getVoteCount(obj = {}) {
    obj.upvotes = obj.upvotes || 0;
    obj.downvotes = obj.downvotes || 0;
    return obj.upvotes - obj.downvotes;
  }
  
  console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); //13
  console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //-31
  console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //0
  console.log(getVoteCount({ downvotes: 132 })); // -132
  console.log(getVoteCount({ upvotes: 132 })); // 132
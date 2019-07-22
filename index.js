function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list'); //Find all ranks under class ranked-list. Would be like <li>1<li>, <li>2<li>, etc...
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }  //Iterate through node list of <li>, take their innerhtml and add n to it.
}

function deepestChild(){
  var grandlist = document.getElementById('grand-node'); //Get list of nodes under id grand-node
  var nextnode = grandlist.children[0]; //The next node to go through. Currently the first node in grand-node
  var deepestchild; //PLace holder for deepest child of grand-node
  while(nextnode) { //While there is another child of the node, make the current node the deepest child and make the next node the child of current node.
    deepestchild = nextnode;
    nextnode = nextnode.children[0];
  }
  return deepestchild //return deepest child
}

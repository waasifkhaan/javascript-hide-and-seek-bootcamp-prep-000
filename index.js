function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(nested,target){

  const n = document.getElementById('nested')
  const c = n.getElementsByClassName('target')
  return c[0]
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i =0 ; i<rankedLists.length; i++){
    var x = rankedLists[i].children
    for ( let z=0; z<x.length ; z++){
    var q =parseInt(x[z].innerHTML)
    x[z].innerHTML = q + n;
  }
  }
}
function deepestChild(){
  const div = document.querySelectorAll('div#grand-node')
  x = div.length;
  z = div[div.length].innerHTML
  return z
}

    
  
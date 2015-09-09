function counterCreator(startingCount) {
  return function(){
    return ++startingCount;
  }
}

function countAnnouncer(name, counter){
  var msg = 'Now serving ' + name + ' number ' + counter() + '!'
  return function(){
    return msg;
  }
}

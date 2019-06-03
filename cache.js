function cache(func){
  const cache = {};
  return function(...args){
    if (cache[args]) {
      return cache[args];
    }
    const res = func(...args);
    cache[args] = res;
    return res;
  }
}

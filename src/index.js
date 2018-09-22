class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.algoritm = function(a,b){
      return a-b;
    }
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var partOfArr = [];
    for (var i=0; i<indices.length; i++){
      partOfArr[i]=this.arr[indices[i]];
    }
    partOfArr.sort(this.algoritm);
    // строка 36 для того, чтобы при входящих индексах не по возрастанию, после
    // сортировки части массива вставить их на правильные места (по порядку) 
    indices.sort();
    for (var i=0; i<indices.length; i++){
    this.arr[indices[i]]=partOfArr[i]; 
    }
    return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
    this.algoritm=compareFunction;
  }
}

module.exports = Sorter;
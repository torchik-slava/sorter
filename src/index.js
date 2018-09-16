class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
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
    return Array.from(this.arr);
  }

  sort(indices) {
    // your implementation
    var partOfArr = [];
    for (var i=0; i<indices.length; i++){
      partOfArr[i]=this.arr[indices[i]];
    }
    partOfArr.sort(function(a,b){return a-b;});
    // строка 36 для того, чтобы при входящих индексах не по возрастанию, после
    // сортировки части массивва вставить их на правильные места (по порядку) 
    indices.sort();
    for (var i=0; i<indices.length; i++){
    this.arr[indices[i]]=partOfArr[i]; 
    }
    return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
"use strict";

class CustomSet {
  constructor(arr = []) {
    this.arr = arr;
  };
  getLength() {
    return this.getSet().length;
  }
  getSet(){
    return this.arr;
  }
  isEmpty() {
    return this.getLength() === 0;
  };
  contains(item) {
    return this.getSet().includes(item);
  };
  isSubSet(otherCustomSet) {
    if (this.isEmpty()) {
      return true;
    };
    if (otherCustomSet.isEmpty()) {
      return false;
    }
    return otherCustomSet.getSet().every(item => this.contains(item)) ||
    this.getSet().every(item => otherCustomSet.contains(item));
  };
  isDisjoint(otherCustomSet) {
    if (this.isEmpty() || otherCustomSet.isEmpty()) {
      return true;
    };
    return !otherCustomSet.getSet().some(item => this.contains(item));
  };
  isSame(otherCustomSet) {
    return otherCustomSet.isSubSet(this) && this.isSubSet(otherCustomSet);
  };
  add(item) {
    if (!this.contains(item)) {
      this.getSet().push(item);
    };
    return this;
  };
  intersection(otherCustomSet) {
    let interSet = new CustomSet();
    if (this.isDisjoint(otherCustomSet)) {
      return interSet;
    };
    otherCustomSet.getSet().forEach(item => {
      if (this.contains(item)) {
        interSet.add(item)
      };
    });
    return interSet;
  };
  difference(otherCustomSet) {
    return new CustomSet(this.getSet().filter(item => !otherCustomSet.contains(item)));
  };
  union(otherCustomSet) {
    let unionizedSet = new CustomSet();
    otherCustomSet.getSet().forEach(item => unionizedSet.add(item));
    this.getSet().forEach(item => unionizedSet.add(item));
    return unionizedSet;
  }
}

module.exports = CustomSet;

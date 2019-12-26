class LinkedList{

  constructor(){
    
    this.head = null;
  }
  getTail(){
    let tail = this.head;
    while(tail.next != null){
      tail = tail.next;
    }
    return tail;
  };

  add(value){
    if(this.head === null){
      this.head = new Node(value,null);
    } else{
      this.getTail().next = new Node(value,null);;
    }
  };

  get(){
    let arr = [];
    let tail = this.head;
    if(tail === null){
      return arr;
    }
    while(tail.next!=null){
      arr.push(tail.value);
      tail = tail.next;
    }
    if(tail.next===null){
      arr.push(tail.value);
    }
    return arr;

  }

  size(){
    let tail = this.head;
    if(tail === null){
      return 0;
    };

    let count = 1;
    while(tail.next!=null){
      count++;
      tail = tail.next;
    }
    return count;
  }
  remove(){

  }

}

class Node{

  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

let a = new LinkedList();
console.log(a);
console.log(a.size());
console.log(a.get());

a.add('first');
console.log(a);
console.log(a.size());
console.log(a.get());

a.add('second');
console.log(a);
console.log(a.size());
console.log(a.get());

a.add('trird');
console.log(a);
console.log(a.size());
console.log(a.get());

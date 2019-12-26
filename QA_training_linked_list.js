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

  remove(val){

    let node = this.head;
    if(node === null){ // if there's no nodes, just a head (which equals null)
      return;
    }
    let prevNode = null;
    while(node && node.next != null){
      if(node.value === val){ // if we need to remove a node
        if(prevNode === null){ // if it's the first node in a row
          this.head = node.next; 
          node = node.next;
        }else{ // if it has a previous one
          prevNode.next = node.next;
          node = node.next;
        }
        
      }else{
        prevNode = node;
        node = node.next; // move one node further
      }
   
    }

    if(node && node.value === val){ // if node.next is the tail, the last node
      if(prevNode != null){
        prevNode.next = null;
      }else{
        this.head = null
      }
    }

  }

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
}

class Node{

  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

// console.log(a);
// console.log(a.size());
// console.log(a.get());

// a.add('first');
// console.log(a);
// console.log(a.size());
// console.log(a.get());

// a.add('second');
// console.log(a);
// console.log(a.size());
// console.log(a.get());

// a.add('third');
// console.log(a);
// console.log(a.size());
// console.log(a.get());
let a = new LinkedList();

a.add('first');
a.add('second');
a.add('third');
console.log(a.get());
a.remove('second')
console.log(a.get());

a = new LinkedList();
a.add('first');
a.add('second');
a.add('third');
a.add('first');
console.log(a.get());
a.remove('first')
console.log(a.get());

a = new LinkedList();
a.add('first');
console.log(a.get());
a.remove('first')
console.log(a.get());

a = new LinkedList();
a.add('first');
a.add('first');
a.add('first');
a.add('first');
console.log(a.get());
a.remove('first')

console.log(a.get());

a = new LinkedList();
console.log(a.get());
a.remove('first')
console.log(a.get());

a = new LinkedList();
a.add('first');
a.add('second');

console.log(a.get());
a.remove('first')
console.log(a.get());

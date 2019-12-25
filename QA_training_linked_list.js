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
}

class Node{

  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

let a = new LinkedList();
console.log(a);
a.add('first');
console.log(a);
a.add('second');
console.log(a);
a.add('trird');
console.log(a);

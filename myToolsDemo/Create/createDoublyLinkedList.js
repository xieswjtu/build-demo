//手写双向链表
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null; // 头节点
      this.tail = null; // 尾节点
      this.length = 0;
    }
  
    // 添加节点到链表末尾
    append(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
  
    // 在链表头部添加节点
    prepend(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
    }
  
    // 删除指定位置的节点
    removeAt(index) {
      if (index < 0 || index >= this.length) return null;
  
      let removedNode;
      if (index === 0) {
        // 删除头部
        removedNode = this.head;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null; // 如果删除后链表为空
        }
      } else if (index === this.length - 1) {
        // 删除尾部
        removedNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        // 删除中间的节点
        let currentNode = this.head;
        let count = 0;
  
        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }
  
        removedNode = currentNode;
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }
  
      this.length--;
      return removedNode.value;
    }
  
    // 插入节点到指定位置
    insertAt(value, index) {
      if (index < 0 || index > this.length) return null;
  
      if (index === 0) {
        this.prepend(value);
      } else if (index === this.length) {
        this.append(value);
      } else {
        const newNode = new Node(value);
        let currentNode = this.head;
        let count = 0;
  
        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }
  
        newNode.prev = currentNode.prev;
        newNode.next = currentNode;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
        this.length++;
      }
    }
  
    // 打印链表
    print() {
      let currentNode = this.head;
      let result = [];
      while (currentNode) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(result.join(" <=> "));
    }
  
    // 反向打印链表
    printReverse() {
      let currentNode = this.tail;
      let result = [];
      while (currentNode) {
        result.push(currentNode.value);
        currentNode = currentNode.prev;
      }
      console.log(result.join(" <=> "));
    }
  }
  const list = new DoublyLinkedList();
  
  // 追加元素
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // 输出: 1 <=> 2 <=> 3
  
  // 在头部插入元素
  list.prepend(0);
  list.print(); // 输出: 0 <=> 1 <=> 2 <=> 3
  
  // 插入元素到指定位置
  list.insertAt(1.5, 2);
  list.print(); // 输出: 0 <=> 1 <=> 1.5 <=> 2 <=> 3
  
  // 删除指定位置的元素
  list.removeAt(2);
  list.print(); // 输出: 0 <=> 1 <=> 2 <=> 3
  
  // 反向打印
  list.printReverse(); // 输出: 3 <=> 2 <=> 1 <=> 0
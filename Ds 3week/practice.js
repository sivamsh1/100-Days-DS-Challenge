
// let findingSum = (arr,target)=>{
//       for(i=0;i<arr.length;i++){
//            for(j=i+1;j<arr.length;j++){
//          if(arr[i]+ arr[j]== target){
//             return ` The numbers are ${arr[i]}, ${arr[j]}`

// const nodemon = require("nodemon");

                    
//            }

//       }
// }
// }







// let findingSum = (arr,target)=>{
   
//    console.log(arr);
      
// }

// let a = [4,2,3,"hellow",true,6,4,5];
// console.log( findingSum(a,4));




// var twoSum = function (nums, target) {
//     let disct = [];
//     for (let i = 0; i < nums.length; i++) {
//         let rest = target - nums[i];
//         if (disct[rest] || disct[rest] === 0) {
//             return [disct[rest], i];
//         }
//         disct[nums[i]] = i;

//     }
// };

// let nums = [2,7,11,15];


// console.log(twoSum(nums,9));


// let hashTable= {};

// hashTable[1]=3;
// hashTable[2]=5;
// hashTable[7]=1;

// if(hashTable[2] != null ){
// console.log(hashTable[2]);
// }else{
//    console.log("okkkkk");
// }













// problem two find the meadian of two two soarted arrays




//  let findMeadian = (arr1,arr2)=>{

//  arr1 = arr1.concat(arr2)

// arr1.sort((a,b)=> a-b )
// if(arr1.length % 2 != 0){
//  return   arr1[ Math.round((arr1.length/2)) -1]
// }else{
//    return (arr1[(arr1.length/2)-1] + arr1[(arr1.length/2)])/2
// }

//  }


//  let arr1 = [1,3]   
//  let arr2 = [2]


//  console.log(findMeadian(arr1,arr2));



// let deleteDuplicateElement = (nums)=>{
//    let   arr2=[]

//    for(i=0;i<nums.length;i++){


//       if(nums[i] == nums[i+1]){
//           arr2.push(nums[i])
//          nums[i+1] = null
//       }else if (nums[i]!=null){
//          arr2.push(nums[i])
//       }
//    }
//    return arr2
// }

// let nums  = [1,1,2]

// console.log(deleteDuplicateElement(nums));





//





// Linked List

// let n1= {
//    data:"nodeOneData"
// }

// let n2 = {
//    data:"nodeTwoData"
// }

// let n3 = {
//    data:"nodeThreeData"
// }

// n2.next = n3
// n1.next = n2

// console.log(n1);
// console.log(n2);
// console.log(n3);



// let arr = [1,0,0]

// let arr1= parseInt((arr.join(""))) +1
// arr1 = Array.from(String(arr1),Number)                    // Very Important Formula

//  console.log(arr1);




// let arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

// arr= parseInt(arr.join(" ")) ;

// console.log(arr);
// arr =  Array.from(String(arr),Number)



// Binary Search In an array





//Memory Leak


// let a = [];
// for(i=0;i<1024*1024*108;i++){
// a.push(1)
// }
// console.log(a);



 //----------------Linked List------------------// 

// class Node {
//     constructor(value){
// this.value = value;
// this.next = null
//     }
// }


// class Linkedlist {
//     constructor(){
// this.head = null
// this.size = 0
//     }


// isEmpty() {
//     return this.size === 0 ;
// }

// getSize() {
//     return this.size
// }

// prepend(value){

//     let node  = new Node(value);
//     if(this.isEmpty()){
//         this.head = node
//     }else {
//         node.next = this.head;
//         this.head = node
//     }
//     this.size++
// }

// print(){
//     if(this.isEmpty()){
//         console.log("LL is Empty");
//     }
//    let curr = this.head;
//    let val = " "
//   while(curr){

//     val += `${curr.value} ` 
//     curr = curr.next
//   }
// if (val){
// console.log(val);
// }
// }

// }   


// const list  = new Linkedlist()



// console.log(list);

// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print()
// list.prepend(21);
// list.prepend(21);
// list.prepend(21);
// list.prepend(6);
// list.print()








// class Node {
//     constructor(value){
//         this.value = value;
//         this.next=null;

//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }


//     isEmpty(){
//         return this.size===0;
//     }

//     getSize(){
//         return this.size;
//     }



//  prepend(value){

//   let node  = new Node(value);
//   if(this.isEmpty()){
//       this.head = node
//   }else {
//       node.next = this.head;
//       this.head = node
//   }
//   this.size++
// }

// print (){

//     if(this.isEmpty()){

//         console.log("Linked list is Empty");
//     }else{
//       let curr = this.head
//       let val  =  " "
  

//        while(curr){
//            val += `${curr.value} `
//            curr = curr.next;   
//         }
//     console.log(val);   

//     }       
// }

// }

// let A = new LinkedList()


// A.prepend(10);
// A.prepend(10);
// A.prepend(10);
// A.prepend(19);

// A.print();




class Node{
    constructor(value) {
this.value = value;
this.next = null
    }
}


class LinkedList {
    constructor(){
     this.head = null
     this.tail = null
     this.size = 0;
    }



    isEmpty () {
        return this.size==0;
    }
    getSize(){
        return this.size;
    }


   
prepand(value){
    let node  = new Node(value);
    if(this.isEmpty()){
        this.head = node;
    }else{
     node.next = this.head
     this.head = node;
    }
    this.size++;

}

print(){

    if(this.isEmpty()){
        console.log("There is no elements in linked list");
    }else{
        let currentNode = this. head
        let val = " "
    
        while(currentNode){
            val += `${currentNode.value} `
            currentNode = currentNode.next

        }
        console.log(val);   
         
    }
    
}

appent(value){

    let node = new Node(value);
    if(this.isEmpty()){
        this.head = node;
    }else{
      let  currentNode = this.head 
    while(currentNode.next){
        currentNode = currentNode.next

    }
    currentNode.next = node;

    }
}

insert(value,position) {
    let node = new Node(value);
if(position<0 || position>this.size){
    console.log("Enter Valid Position");
}else{
  let  currentNode = this.head
    for( let i=0;i<position-1;i++){
     currentNode = currentNode.next
    }
    node.next = currentNode.next
    currentNode.next = node;
}
}

insert2(value,position){

let node = new Node()
    if(position<0 || position>this.size){
        console.log("Enter Valid Position");
    }else{
   
 let  currentNode = this.head

 for(i=0;i<position - 1;i++){
    currentNode = currentNode.next
 }
 node.next = currentNode.next
currentNode.next  = node;
    }
}

remove(position){
    if(position<0 || position>this.size ){
        return ` Unavailable Position `
    }else if(position ===0){
        this.head  = this.head.next;
    }
    else{

        let currentNode = this.head;

        for( let i=0;i<position - 1;i++){
            
            currentNode = currentNode.next
        }

        let removeNode = currentNode.next
        currentNode.next = removeNode.next 

    }

}

removeValue(value){
    if(value == this.head.value){
        this.head.next = this.head;
        return "success"

        
    }else{
   
      let  currentNode  = this.head

while(currentNode.value != value){
currentNode = currentNode.next
}  
 let  removeNode = currentNode;
      currentNode.next = removeNode.next
    }
    return "success"

}



reverse(){


    let prev = null
    let curr  = this.head;

    while(curr){

     curr.next = prev;
     prev = curr;
     curr = curr.next;    
 
    }

    prev = this.head;
    
}


arryaToLinkedlist(val){

    let node =new Node(val)

    if(this.size == 0 ){
        this.head = node;
        this.tail = node;      
    }else{
        this.tail.next = node;
         this.tail = node; 
    }
    this.size ++



}

AtoL(Arr)  {
     Arr.forEach((arr)=>{

this.arryaToLinkedlist(arr)
   
   })
}









}












 let ll = new LinkedList()

// console.log(ll.isEmpty());
// ll.prepand(10)
// ll.prepand(15)
// ll.prepand(12)
// ll.prepand(13)
// // ll.removeValue(13) 
// ll.print();




// converting array into linkedList 


let Arr = [9,8,7,6,3,2,1]


ll.AtoL(Arr);
ll.print();


class Node{
    constructor(Data){
        this.data = Data;
        this.next = null;
    }
}

class LinkedList{
        constructor(){
            this.head = null;
            this.size = 0;
        }

        Push(data){
            var node = new Node(data)
            var current;
            if(this.head == null){
                this.head = node;
            }else{
                current = this.head;
                while(current.next){
                        current = current.next;
                }

                current.next = node;
            
            }

            this.size++;

        }


        printList(){
            var temp = this.head;
            var count = 0;
            while(temp){
                let ln = temp.data
               
                setTimeout(()=>{
                    const k =document.createElement("li")
                    const ssa = document.createTextNode(ln)
                     k.appendChild(ssa)
                    const ss= document.getElementById("Node")
                    ss.appendChild(k)
                }, count * 200)
                 
                temp = temp.next;
                count++
            }
           
        }


}


var Ll = new LinkedList();
Ll.Push(1)
Ll.Push(1)
Ll.Push(1)

Ll.printList();



// const arr = [1,4,10,20,19,"N"]

// function Node(key){
//     
   
// }
// Node("H")
// for(let i = 0;i<arr.length;i++){
    
//     setTimeout(function(){
//         Node(arr[i]);
//     },i*190)
// }

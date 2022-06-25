
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


        printList(size){
            var temp = this.head;
            var count = 0;

            for(var i=0;i<size-1;i++){
                temp = temp.next;
            }
                // console.log(temp.data)
                let ln = temp.data
        
                    setTimeout(()=>{
                        const k =document.createElement("li")
                        const ssa = document.createTextNode(ln)
                        k.appendChild(ssa)
                        const ss= document.getElementById("Node")
                        ss.appendChild(k)
                    }, count * 200)
                // }
                    // temp = temp.next;
                count++
       
        //    console.log(count)
        }

        findElemnet(){
            
        }

}




var Ll = new LinkedList();

const createNode = (prop)=>{
    if(prop){
        Ll.Push(prop)

        console.log(Ll.size)
        Ll.printList(Ll.size); 
    }
   
}








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

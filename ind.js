class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.comparator = null;
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    insert(str){
        let newNode = new Node(str);
        if(this.comparator === null){
            this.comparator = newNode;
        }else{
            this.insertNode(this.comparator, newNode);
        }
    }

    remove(str){
        this.comparator = this.removeNode(this.comparator, str);
    }

    removeNode(node, key){
        if(node === null){
            return null;
        }else if(key < node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(key > node.data){
            node.right = this.removeNode(node.right, key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    toArray(node){
        if(node !== null){
            this.toArray(node.left);
            this.toArray(node.right);
            console.log(node.data);
        }
    }

    getRootNode(){
        return this.comparator;
    }


}

var Binary = new BinaryTree();
Binary.insert('f');
Binary.insert('b');
Binary.insert('c');
Binary.insert('a');
Binary.remove('f');
let roots = Binary.getRootNode();
Binary.toArray(roots);
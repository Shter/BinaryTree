class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(comparator){
        this.comparator = comparator;
        console.log(this.comparator);
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
        console.log(this.comparator);
        if(this.comparator === null){
            this.comparator = newNode;
        }else{
            this.insertNode(this.comparator, newNode);
        }
    }
}

var Binary = new BinaryTree();
Binary.insert('f');
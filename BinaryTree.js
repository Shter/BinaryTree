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
        if(node.data === newNode.data){
            throw new Error('This tree already contains ' + node.data);
        }
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
        this.search(this.comparator, str);
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

    search(node, str){
        if(node === null){
            throw new Error('This tree does not contain ' + str);
        }else if(str < node.data){
            return this.search(node.left, str);
        }else if(str > node.data){
            return this.search(node.right, str);
        }else{
            return node;
        }
    }

    findMinNode(node) {    
        if(node.left === null) 
            return node; 
        else
            return this.findMinNode(node.left);
        }

    toArrayInternal(node, array){
        if(node !== null){
            this.toArrayInternal(node.left, array);
            array.push(node.data);            
            this.toArrayInternal(node.right, array);
        }

    }

    toArray(){
        let fullArray = [];
        this.toArrayInternal(this.getRootNode(), fullArray);
        return fullArray;        
    }

    getRootNode(){
        return this.comparator;
    }

    heightInternal(node){
        if (!node){
            return 0;
        }
        return 1 + Math.max(this.heightInternal(node.left), this.heightInternal(node.right));
    }

    height(){        
        return this.heightInternal(this.getRootNode());                
    }
}

module.exports = BinaryTree;
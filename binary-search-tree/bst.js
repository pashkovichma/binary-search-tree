// WARNING: replace ... with your code
function Node(key, value, left, right) {
    this.key = key||null;
    this.value = value||null;

    //please don't rename left, right and root properties
    this._left = left||null;
    this._right = right||null;
};

function BinarySearchTree() {
    this._root = null;
};

BinarySearchTree.prototype.insert = function(key, value) {
	var currentNode;

		if (this._root == null) {
			this._root = new Node(key, value);
		} else {
			currentNode = this._root;
		}
			
		while (currentNode) {
			if (currentNode.key > key) {
				if (currentNode._left != null) 
					currentNode = currentNode._left;
				else {
					currentNode._left = new Node(key, value);
					break;	
				}
			} else if (currentNode.key < key) {
				if (currentNode._right != null) 
					currentNode = currentNode._right;
				else {
					currentNode._right = new Node(key, value);
					break;
				}
			} else break;	
		}
		return this;
};

BinarySearchTree.prototype.root = function () {
	return this._root.value;
};

BinarySearchTree.prototype.search = function (key) {
	var currentNode = this._root;
		var searchFor = null; 

		  while (currentNode != null){
			   if (currentNode.key > key) 
			        currentNode = currentNode.left; 
			   else if (currentNode.key < key) 
			        currentNode = currentNode._right;
			   else if (currentNode.key == key ){ 
				    searchFor = currentNode.value;
				    break;
			   }
		  }
		  
		return searchFor;
};

BinarySearchTree.prototype.delete = function (key) {
	this._root = this.removeNote(this._root, key);
	return this;
}

BinarySearchTree.prototype.removeNote = function(node, key) {
	if (node == null){ 
        return null; 
    } 
        if (key == node.key) { 
            if (node._left == null && node._right == null){ 
            	return null; 
            } 
              
              if (node._left == null){ 
                  return node._right; 
              } 
               
              if (node._right == null){ 
                  return node._left; 
              } 
              
              var tempNode = this.getSmallest(node._right); 
              node.key = tempNode.key; 
              node._right = this.removeNode(node._right, tempNode.key); 
              return node; 
          
          } else if (key < node.key) { 
              node._left = this.removeNode(node._left, key); 
              return node; 
          } 

          else { 
              node._right = this.removeNode(node._right, key); 
              return node; 
          } 
};

BinarySearchTree.prototype.getSmallest = function (node) {
	if(node._left == null){
      return node;
    }
    else {
      return this.getSmallest(node._left);
    }
};



// You can comment this block for testing in the browser but final solution MUST contains this module.exports code
module.exports = {
  BinarySearchTree,
  student: 'pashkovichma'
};



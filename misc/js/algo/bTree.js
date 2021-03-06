// BINARY TREE //

function Node(data) {
	this.data = data;
	this.right = null;
	this.left = null;
}

/**
 * @class BinaryTree
 */

/**
 * @method lookup
 * @param node Node
 * @param target Mixed
 * @return Node|false
 */

BinaryTree.prototype.lookup = (node, target) => {
	// Base case == empty treeOne
	// if the target is not found return a false value
	if (!node) {
		return false;
	}
	else {
		// check if found here
		if (target == node.data) {
			return node;
		}
		else {
			// otherwise recur down to the correct subtree
			// choose the side to base on the less-than operator
			if (target < node.data) {
				return this.lookup(node.left, target);
			} else {
				return this.lookup(node.right, target);
			}
		}
	}
};

/**
 * @method insert
 * @param node Node
 * @param data Mixed
 * @return node Node
 */

 BinaryTree.prototype.insert = (node, data) => {
	// if the node is null return a new node
	if (node === null) {
		return new Node(data);
	} else {
		// otherwise recur down the treeOne
		if (data <= node.data)
			node.left = this.insert(node.left, data);
		else
			node.right = this.insert(node.right, data);

		return node;
	}
};

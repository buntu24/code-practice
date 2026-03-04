class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let previousNode: TreeNode | null = null;

function inOrderValidate(node: TreeNode | null): boolean {
  if (!node) {
    return true;
  }
  if (!inOrderValidate(node.left)) {
    return false;
  }
  if (previousNode && previousNode.val >= node.val) {
    return false;
  }
  previousNode = node;
  return inOrderValidate(node.right);
}

function isValidBST(root: TreeNode | null): boolean {
  previousNode = null;
  return inOrderValidate(root);
}

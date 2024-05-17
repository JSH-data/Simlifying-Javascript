/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function evaluateTree(root: TreeNode | null): boolean {
    const DFS = (node) => {
        if(node.left && node.right) {
            DFS(node.left);

            DFS(node.right);

            if(node.val === 3) {
                node.val = (node.left.val && node.right.val);

                return 
            }

            node.val = (node.left.val || node.right.val);
        }
    }

    DFS(root);
    
    return !!root.val
};
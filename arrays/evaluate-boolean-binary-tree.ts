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
    const dfs = (node) => {
        if(node.left && node.right) {
            dfs(node.left);

            dfs(node.right);

            if(node.val === 3) {
                node.val = (node.left.val && node.right.val);

                return 
            }

            node.val = (node.left.val || node.right.val);
        }
    }

    dfs(root);
    
    return !!root.val
};
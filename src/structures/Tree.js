class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }

    addChild(node) {
        this.children.push(node)
    }

    print(prefix = '') {
        console.log(prefix + this.value);
        this.children.forEach(node => {
            node.print('  ' + prefix);
        })
    }
}

class BinaryTreeNode extends TreeNode {
    setLeft(node) {
        this.children[0] = node;
    }

    setRight(node) {
        this.children[1] = node;
    }
}

const getBinaryTree = arr => {
    if (!arr.length) return null;
    const copy = [...arr];
    const root = new BinaryTreeNode(copy.shift());
    let lastLine = [root];
    let level = 1;
    while (copy.length){
        const newLine = [];
        const levelSize = 2 ** level;
        for (let i = 0; i < levelSize; i++){
            const child = new BinaryTreeNode(copy.shift());
            if (!!child && !!child.value){
                const parentInLine = Math.floor(i / 2);
                if (0 === i % 2){
                    lastLine[parentInLine].setLeft(child);
                } else {
                    lastLine[parentInLine].setRight(child);
                }
                newLine.push(child);
            }
        }
        lastLine = newLine;
        level++;
    }
    return root;
}
export {getBinaryTree};

// const tree = new TreeNode(24);
// const child1 = new TreeNode(8),
//     child2 = new TreeNode(3),
//     child3 = new TreeNode(4),
//     child4 = new TreeNode(2),
//     child5 = new TreeNode(2),
//     child6 = new TreeNode(2);
// tree.addChild(child1);
// tree.addChild(child2);
// child1.addChild(child3);
// child1.addChild(child4);
// child3.addChild(child5);
// child3.addChild(child6);
// tree.print();
// const binaryTree = getBinaryTree([240, 60, 4, 6, 10, 2, 2, 2, 3, 2, 5]);
// binaryTree.print();

export default TreeNode;
import {getBinaryTree} from "../structures/Tree";

const depthFirstPreOrder = (rootNode, callback) => {
    callback(rootNode.value);
    rootNode.children.forEach(child => {
        depthFirstPreOrder(child, callback);
    })
}

const depthFirstPostOrder = (rootNode, callback) => {
    rootNode.children.forEach(child => {
        depthFirstPostOrder(child, callback);
    });
    callback(rootNode.value);
}

const depthFirstInOrder = (rootNode, callback) => {
    if ('undefined' !== typeof rootNode.children[0])
        depthFirstInOrder(rootNode.children[0], callback);
    callback(rootNode.value);
    if ('undefined' !== typeof rootNode.children[1])
        depthFirstInOrder(rootNode.children[1], callback);
}

const breadthFirst = (rootNode, callback) => {
    const queue = [rootNode];
    while (queue.length){
        const node = queue.shift();
        callback(node.value);
        queue.push(...node.children);
    }
};

let tree = [240, 60, 4, 6, 10, 2, 2, 2, 3, 2, 5];
const rootNode = getBinaryTree(tree);
rootNode.print();

// console.log('Pre-order (DLR): ');
// depthFirstPreOrder(rootNode, item => console.log(item));
// console.log('Post-order (LRD): ');
// depthFirstPostOrder(rootNode, item => console.log(item));
// console.log('In-order (LDR): ');
// depthFirstInOrder(rootNode, item => console.log(item));
// console.log('Breadth First: ');
// breadthFirst(rootNode, item => console.log(item));

export {depthFirstPreOrder, depthFirstPostOrder, depthFirstInOrder, breadthFirst};
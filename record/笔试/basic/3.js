// 3. dom节点查找
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述:
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点
function commomParentNode (oNode1, oNode2) {
    if (oNode1.contain(oNode2)) {
        return oNode1
    } else {
        commomParentNode(oNode1.parentNode, oNode2)
    }
}

// Node.contains()
// Node 接口的 contains() 方法返回一个布尔值，表示一个节点是否是给定节点的后代，即该节点本身、其直接子节点（childNodes）、子节点的直接子节点等。
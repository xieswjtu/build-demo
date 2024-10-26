const data = [
    { id: 1, parentId: null, name: 'A' },
    { id: 2, parentId: 1, name: 'B' },
    { id: 3, parentId: 1, name: 'C' },
    { id: 4, parentId: 2, name: 'D' },
    { id: 5, parentId: 2, name: 'E' },
  ];

// 方法1
// const toTree = function(arr,id){
//     return arr.filter((item=>item.parentId === id)).map((item)=>({...item,children:[toTree(data,item.id)]}))
// }

// 方法二
const toTree = function(arr,id){
    const tree = []
    const map = {}
    for (let i of arr){
        map[i.id] = {...i,children:[]}
    }
    for (let i in map){
        if (map[i].parentId !==null){
            map[map[i].parentId].children.push(map[i])
        } else {
            tree.push(map[i])
        }
    }
    return tree
}

console.log(toTree(data, null))


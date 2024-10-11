function matrixTraverseTarget(matrix) {
    let lenx = matrix[0].length-1
    let leny = matrix.length-1
    const lenmin = Math.min(leny, lenx)
    const c = lenmin/2 + lenmin%2===0?0:1
    let m=0,n=0
    let starty=0
    let startx=0
    for (let i=0; i<=c; i++){
        m = starty
        n = startx
        while (m <= leny){
            m++
        }
        while (n <= lenx ){
            n++
        }
        while (m >= startx){
            m--
        }
        startx++
        lenx--
        while (n <= startx) {
            n--
        }
        starty++
        leny--
    }
    console.log(m,n)
    return matrix[m][n]
}
console.log(matrixTraverseTarget([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]))
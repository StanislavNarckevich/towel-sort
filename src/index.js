
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = []
    if (matrix == undefined) return array
    else if (matrix.length !== 0) {
        matrix.map((item, index) => {
            if (index % 2 !== 0) {
                item = item.reverse()
            }
        })
        for (const items of matrix) {
            array.push(...items)
        }
        return array
    }
    else return array
}


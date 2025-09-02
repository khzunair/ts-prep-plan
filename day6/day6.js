// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

function mergeIntervals(arr){
        if (arr.length === 0) return [];
        arr.sort((a, b) => a[0] - b[0]);
    
    let mergedArray    = []
    let second_element = -Infinity;

    for(let i=0; i<arr.length ; i++){
        
        if((arr[i][0]) < second_element){
            let tempElement = mergedArray[mergedArray.length - 1]
                tempElement = [tempElement[0], arr[i][1]]
                mergedArray[mergedArray.length - 1] =  tempElement
                second_element = arr[i][1]
                
        } else{
        mergedArray.push(arr[i])
        second_element = arr[i][1]
        }
    }
    return mergedArray
}


console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))
console.log(mergeIntervals([[8,10],[1,3],[2,6],[15,18]]));
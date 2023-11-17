var majorityElement = function(nums) {
    let obj = {}
    let array = []
    for (let i = 0; i < nums.length; i++){
        let elem = nums[i]
        if (obj[elem] in obj){
            obj[elem]++
        }
        else{   
            obj[elem] = 1
        }
    }
    console.log(obj)
    for (let i = 0; i < Object.values(obj).length; i++){
        console.log(Object.values(obj)[i])
        if (Object.values(obj)[i] > nums.length/3){
            array.push(Object.keys(obj)[i])
        }
    }
    return array
};g

console.log(majorityElement([2,3,3]))
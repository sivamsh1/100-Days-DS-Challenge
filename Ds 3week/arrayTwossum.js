

var twoSum = function (nums, target) {
    let d = {}
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if (d[rest] ) {
            return [d[rest], i];
        }
        d[nums[i]] = nums[i];
  
    }
  }



let A = [1,2,3,4,7]
let target = 6;

let  b= twoSum(A,target)
console.log(b);


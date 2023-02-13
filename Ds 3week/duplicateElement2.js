
let deleteDuplicateElement = (nums)=>{
   let   arr2=[]

   for(i=0;i<nums.length;i++){


      if(nums[i] == nums[i+1]){
          arr2.push(nums[i])
         nums[i+1] = null
      }
      else if (nums[i]!=null){
         arr2.push(nums[i])
      }
   }
   return arr2
}

let nums  = [1,1,2]

console.log(deleteDuplicateElement(nums));
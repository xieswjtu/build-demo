var longestConsecutive = function(nums) {
    const map = new Map()
    let res = 0
    for (let i=0; i<nums.length; i++){
        if (!map.get(nums[i])){
            let cur = nums[i]
            let prelen = map.get(nums[i]-1)?map.get(nums[i]-1):0
            let nextlen = map.get(nums[i]+1)?map.get(nums[i]+1):0
            const curlen = 1+prelen+nextlen
            res = Math.max(res,curlen )
            map.set (cur, curlen)
            map.set (cur-prelen, curlen)
            map.set (nextlen+cur, curlen)
        }
    }
    return res;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
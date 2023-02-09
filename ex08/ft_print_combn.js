function ft_print_combn(n){
    var nums = [];
    for (var i = 0; i < n; i++){
        nums[i] = i;
    }
    function nextCombination(nums){
        var index = n - 1;
        while (index >= 0 && nums[index] == 9 - n + 1 + index){
            index--;
        }
        if (index < 0){
            return null;
        }
        nums[index]++;
        for (var j = index + 1; j < n; j++){
            nums[j] = nums[j - 1] + 1;
        }
        return nums;
    }
    console.log(nums.join(''));
    while (nextCombination(nums) != null){
        console.log(nums.join(''));
    }
}

ft_print_combn(2);

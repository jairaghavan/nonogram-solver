function Clue({isLeft, nums}: {isLeft: boolean, nums: number[]}) {
    
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }

    return (
        <div>
            <h1>Clue</h1>
        </div>
    );
}

export default Clue;
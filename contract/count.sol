// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Counter {
    uint256 private _count = 0;

    // Event to log changes to the count
    event CountChanged(uint256 newCount);

    function viewCount() public view returns (uint256) {
        return _count;
    }

    // Function to increment the count
    function increment(uint256 number) public {
        _count += number;
        emit CountChanged(_count);
    }

    // Function to decrement the count
    function decrement(uint256 number) public {
        require(_count >= number, "Count is not enough to decrement");
        _count -= number;
        emit CountChanged(_count);
    }
}

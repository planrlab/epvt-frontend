const contracts = [
    {
        name: 'Storage',
        code: `pragma solidity ^0.4.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}`
    },
    {
        name: 'Storage2',
        code: `pragma solidity ^0.4.0;

contract SimpleStorage2 {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}`
    }
];

export default contracts;

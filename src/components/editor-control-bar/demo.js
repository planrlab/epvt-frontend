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
        name: 'SSA Sample',
        code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.5.2;
contract Sample{
    function fun(int32 a, int32 b) payable public returns(int32){
        int32 mul;
        require (a >= 0);
        require (b >= 0);  
        if(a == 0){
            b = 100;
            // tmp [a] = b;
        }
        else if (a == 1){
            b = 1000;
            // tmp [a] = b;
        }
        else{
            b = 10000;  
            // tmp [a] = b;
        }      
        
        while (b > 500){
            // require (b <100000 && mul > 0);
            mul = mul + a * b ;
            b = b/2;
            // mul += tmp[b];
        }

        assert (b < 11000);

        return mul;
    }
}`
    },
    {
        name: 'Optimization Sample 1',
        code: `pragma solidity >=0.4.22 <0.6.0;
contract Sample{
   struct Student { 
      uint age;
   }
    Student student = Student(32);
    mapping(uint => uint) public prices;
    uint[10] balance;
    uint[][][] temp = [[[2,4],[3,6]],[[2,4],[3,6]]];
    int result;

function  fun2(uint a, uint b, uint c)
    pure  public  returns(uint){
        uint d; uint e; uint f; uint g; uint h;
        d = c +  b * a +  a * b;
        e = a * b + c;
        f = a * b + b * a;
        g = b * a;
        h = e + f + g;
        return d + h;
    }
    
function  fun1(uint a, uint b, uint c)
    public  returns(uint){
	   uint a1 = b + c;
	   balance[c] = b + a + c + balance[c + b];
        uint e = c + balance[b]+ temp[b][c][c];
	   uint d = student.age;
	   d = b + student.age;
	   e = prices[2] + prices[balance[b]+d + c+temp[b][c][c]];
	   a = fun2(b, c, e);
	   uint b1 = b + fun2(b, c, e) + c;
	   uint c1 = uint(a);
	   uint d1 = uint(fun2(b, c, e)) + c1;	
        return b1 + e + d1;
    }
}`
    },
    {
        name: 'Optimization Sample 2',
        code: `pragma solidity >=0.4.22 <0.6.0;
contract Sample{
function  cse_example(uint a, uint b, uint c)
    pure  public  returns(uint){
        uint d; uint e; uint f; uint g; uint h;
        d = c +  b * a +  a * b;
        e = a * b + c;
        f = a * b + b * a;
        g = b * a;
        h = e + f + g;
	  do{
		a = g ;
		d = h +  b * a +  a * b;
	      e = a * b + c;
     	  	 f = a * b + b * a;
     		 g = b * a;
        	h = e + f + g;
	  }while(f>g);

        return d + h;
    }

}`
    },
    {
        name: 'Voting',
        code: `pragma solidity 0.5.16;

/// @title Voting with delegation.
contract Ballot {
    // This declares a new complex type which will
    // be used for variables later.
    // It will represent a single voter.
    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint vote;   // index of the voted proposal
    }

    // This is a type for a single proposal.
    struct Proposal {
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    address public chairperson;

    // This declares a state variable that
    // stores a \`Voter\` struct for each possible address.
    mapping(address => Voter) public voters;

    // A dynamically-sized array of \`Proposal\` structs.
    Proposal[] public proposals;

    /// Create a new ballot to choose one of \`proposalNames\`.
    constructor(bytes32[] memory proposalNames) public {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint i = 0; i < proposalNames.length; i++) {
            // \`Proposal({...})\` creates a temporary
            // Proposal object and \`proposals.push(...)\`
            // appends it to the end of \`proposals\`.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    // Give \`voter\` the right to vote on this ballot.
    // May only be called by \`chairperson\`.
    function giveRightToVote(address voter) public {
        // If the first argument of \`require\` evaluates
        // to \`false\`, execution terminates and all
        // changes to the state and to Ether balances
        // are reverted.
        // This used to consume all gas in old EVM versions, but
        // not anymore.
        // It is often a good idea to use \`require\` to check if
        // functions are called correctly.
        // As a second argument, you can also provide an
        // explanation about what went wrong.
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(
            !voters[voter].voted,
            "The voter already voted."
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    /// Delegate your vote to the voter \`to\`.
    function delegate(address to) public {
        // assigns reference
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You already voted.");

        require(to != msg.sender, "Self-delegation is disallowed.");

        // Forward the delegation as long as
        // \`to\` also delegated.
        // In general, such loops are very dangerous,
        // because if they run too long, they might
        // need more gas than is available in a block.
        // In this case, the delegation will not be executed,
        // but in other situations, such loops might
        // cause a contract to get "stuck" completely.
        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender, "Found loop in delegation.");
        }

        // Since \`sender\` is a reference, this
        // modifies \`voters[msg.sender].voted\`
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegate_ = voters[to];
        if (delegate_.voted) {
            // If the delegate already voted,
            // directly add to the number of votes
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            // If the delegate did not vote yet,
            // add to her weight.
            delegate_.weight += sender.weight;
        }
    }

    /// Give your vote (including votes delegated to you)
    /// to proposal \`proposals[proposal].name\`.
    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal;

        // If \`proposal\` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += sender.weight;
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}`
    }
];

export default contracts;

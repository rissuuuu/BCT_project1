import web3 from './web3';

const address = '0x9f17915eC867b76a88002F0e6de7BAd4B0B6C61B';

const abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "studIdList",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "countStudents",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_studId",
				"type": "uint256"
			},
			{
				"name": "_age",
				"type": "uint256"
			},
			{
				"name": "_fName",
				"type": "bytes16"
			},
			{
				"name": "_lName",
				"type": "bytes16"
			}
		],
		"name": "createStudent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_studId",
				"type": "uint256"
			}
		],
		"name": "getParticularStudent",
		"outputs": [
			{
				"name": "",
				"type": "bytes16"
			},
			{
				"name": "",
				"type": "bytes16"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "teacher",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStudents",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_studId",
				"type": "uint256"
			}
		],
		"name": "incrementAttendance",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "fName",
				"type": "bytes16"
			},
			{
				"indexed": false,
				"name": "lName",
				"type": "bytes16"
			},
			{
				"indexed": false,
				"name": "age",
				"type": "uint256"
			}
		],
		"name": "studentCreation",
		"type": "event"
	}
];

export default new web3.eth.Contract(abi, address);

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2CustomGateway } from '../L2CustomGateway'

export class L2CustomGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2CustomGateway> {
    return super.deploy(overrides || {}) as Promise<L2CustomGateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGateway {
    return super.attach(address) as L2CustomGateway
  }
  connect(signer: Signer): L2CustomGateway__factory {
    return super.connect(signer) as L2CustomGateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGateway {
    return new Contract(address, _abi, signerOrProvider) as L2CustomGateway
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IArbToken',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'mintAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506115d2806100206000396000f3fe60806040526004361061009c5760003560e01c80638a2dc014116100645780638a2dc014146102dc578063a0c76a961461030f578063a7e28d48146103e8578063d2ce7d651461041b578063db70cf6e146104b5578063f887ea401461058c5761009c565b8063015234ab146100a15780632db09c1c146100c85780632e567b36146100f9578063485cc955146102115780637b3a3c8b1461024e575b600080fd5b3480156100ad57600080fd5b506100b66105a1565b60408051918252519081900360200190f35b3480156100d457600080fd5b506100dd6105a7565b604080516001600160a01b039092168252519081900360200190f35b34801561010557600080fd5b5061019c600480360360a081101561011c57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561015e57600080fd5b82018360208201111561017057600080fd5b803590602001918460018302840111600160201b8311171561019157600080fd5b5090925090506105b6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d65781810151838201526020016101be565b50505050905090810190601f1680156102035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021d57600080fd5b5061024c6004803603604081101561023457600080fd5b506001600160a01b0381358116916020013516610b25565b005b61019c6004803603608081101561026457600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561029e57600080fd5b8201836020820111156102b057600080fd5b803590602001918460018302840111600160201b831117156102d157600080fd5b509092509050610b33565b3480156102e857600080fd5b506100dd600480360360208110156102ff57600080fd5b50356001600160a01b0316610b45565b34801561031b57600080fd5b5061019c600480360360a081101561033257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561037457600080fd5b82018360208201111561038657600080fd5b803590602001918460018302840111600160201b831117156103a757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b60945050505050565b3480156103f457600080fd5b506100dd6004803603602081101561040b57600080fd5b50356001600160a01b0316610cd7565b61019c600480360360c081101561043157600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561047757600080fd5b82018360208201111561048957600080fd5b803590602001918460018302840111600160201b831117156104aa57600080fd5b509092509050610d2f565b3480156104c157600080fd5b5061024c600480360360a08110156104d857600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561051857600080fd5b82018360208201111561052a57600080fd5b803590602001918460018302840111600160201b8311171561054b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fbd945050505050565b34801561059857600080fd5b506100dd611224565b60025481565b6000546001600160a01b031681565b60606105c0611233565b61060c576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060808484604081101561061f57600080fd5b810190602081018135600160201b81111561063957600080fd5b82018360208201111561064b57600080fd5b803590602001918460018302840111600160201b8311171561066c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156106be57600080fd5b8201836020820111156106d057600080fd5b803590602001918460018302840111600160201b831117156106f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525097995092975061073b95508f94506112449350505050565b905061074f816001600160a01b0316611262565b6107855760006107608b8386611268565b905080156107835760405180602001604052806000815250945050505050610b1b565b505b81518190156109eb576000306001600160a01b031663db70cf6e838b8e8e896040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561083e578181015183820152602001610826565b50505050905090810190601f16801561086b5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561088e57600080fd5b505af192505050801561089f575060015b61092057816001600160a01b0316638c2a993e8c8b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561090357600080fd5b505af1158015610917573d6000803e3d6000fd5b50505050610924565b5060015b896001600160a01b03168b6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838c88604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109a9578181015183820152602001610991565b50505050905090810190601f1680156109d65780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610a64565b806001600160a01b0316638c2a993e8a8a6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610a4b57600080fd5b505af1158015610a5f573d6000803e3d6000fd5b505050505b816001600160a01b0316896001600160a01b03168b6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8e8c8c8c60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a4604051806020016040528060008152509450505050505b9695505050505050565b610b2f82826112a9565b5050565b6060610b1b8686866000808888610d2f565b6003602052600090815260409020546001600160a01b031681565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bb8578181015183820152602001610ba0565b50505050905090810190601f168015610be55780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b83811015610c64578181015183820152602001610c4c565b50505050905090810190601f168015610c915780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6000610ce16112b3565b610d20576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b610d2982611244565b92915050565b60603415610d6f576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610db285858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112c492505050565b91509150600080610dc28c611244565b9050610dd6816001600160a01b0316611262565b610e1c576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b806001600160a01b03166374f4f547858c6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610e7c57600080fd5b505af1158015610e90573d6000803e3d6000fd5b505050506060610ea38d868e8e88610b60565b9050610eae816113b6565b92505050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f58578181015183820152602001610f40565b50505050905090810190601f168015610f855780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b333014611011576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b611023826001600160a01b0316611262565b611074576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b846001600160a01b0316638c2a993e83866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156110d457600080fd5b505af11580156110e8573d6000803e3d6000fd5b5050505060006110f661149f565b5a039050805a116111385760405162461bcd60e51b815260040180806020018281038252602b815260200180611572602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111b557818101518382015260200161119d565b50505050905090810190601f1680156111e25780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801561120357600080fd5b5087f1158015611217573d6000803e3d6000fd5b5050505050505050505050565b6001546001600160a01b031681565b6000546001600160a01b0316331490565b6001600160a01b039081166000908152600360205260409020541690565b3b151590565b6040805162461bcd60e51b815260206004820152600f60248201526e2727afa1aaa9aa27a6afaa27a5a2a760891b6044820152905160009181900360640190fd5b610b2f82826114a5565b6001546001600160a01b0316331490565b600060606112d06112b3565b156113ab578280602001905160408110156112ea57600080fd5b815160208301805160405192949293830192919084600160201b82111561131057600080fd5b90830190602082018581111561132557600080fd5b8251600160201b81118282018810171561133e57600080fd5b82525081516020918201929091019080838360005b8381101561136b578181015183820152602001611353565b50505050905090810190601f1680156113985780820380516001836020036101000a031916815260200191505b50604052509294509092506113b1915050565b50339050815b915091565b60008054604080516349460b4d60e11b81526001600160a01b039092166004830181815260248401928352855160448501528551859460649463928c169a94938993909287019060208501908083838c5b8381101561141f578181015183820152602001611407565b50505050905090810190601f16801561144c5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561146c57600080fd5b505af1158015611480573d6000803e3d6000fd5b505050506040513d602081101561149657600080fd5b50519392505050565b6109c490565b6001600160a01b0382166114f6576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611543576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905556fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a26469706673582212205bd23df4d2f0390801c5a4d521aebde60a5fb57a82b33c14160ee649bd17063264736f6c634300060b0033'

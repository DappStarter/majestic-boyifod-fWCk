require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain evil just enroll orange siege'; 
let testAccounts = [
"0x174ad9009902b0a09cb4fdb245dd5ca0bebd344b1b312b8b211c6f03c3dae0f2",
"0x37213b2ae9ae152e33382ea138aa9daa9e333bebb39475aa0d6528e20fdaa12c",
"0x0e26354eeaf32cbbb4611defe7bf1e99edd11253c6701f70268179403a88c8c7",
"0xcece2845914df689d0353902ee352dfa437bdf05260da00490c0d0918cee3579",
"0x1bba4b96baefb2369aa6245f766ff9979160ccbf5b26ce68115da28c91412e8e",
"0x5fa35b1dabba0902594a986cb79279085668d6989f7ea2b5ba5d31175be4ef4c",
"0x070e470e2c7f4526eb0e711c861703d0ffc3d9eec88335b7ed29e9ab6a6c9b66",
"0x4171490a548a212913310d8641b3e450eec5d422116549141f3eee3807b2a050",
"0x5ff3cd31715b308864d4c6ae366dc2c8117db19129a04912bdeb9233cbee25b3",
"0xe39867818dea5a577a4993cfc92bdecf751b36d37598cda2dc61b681f4a7ea37"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


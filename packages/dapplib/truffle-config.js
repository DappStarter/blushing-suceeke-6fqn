require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind huge gloom clinic food slide'; 
let testAccounts = [
"0x8a30ce5e6fa737f63c85a773e77d83f4c88cab0cfed6045ca8d2f14d4adda958",
"0x7ebfa63026b3e52c24246f74bc93b817e1cda73b3db542028fd0718bb7294cf5",
"0xd60ad502da89d96e95637f1296768ed5a06abc87b54f5315bada99b95cf8c2d1",
"0x1f1378d84348384d31f806059539af6dd6f29abc8e0af79b371b76c699c4ca8a",
"0x73021df7ac01898f5c2eeaf2c77491f2f5f2f0ec00a805670fc6a1cb973166ff",
"0xd55f025b32d5e72731f4fb443cd544301c720e25ea3b036061e7c015739a73f0",
"0x96f67dc62c1058d9bf5de88dcca2d3d644ae9280fa832ef1bbbf71e6f1fd9e51",
"0xcf67bb7fc3153f2c7c5349547e2e3f4efe988c4b8d2be94013ad5a1b7e98a45c",
"0xe5be22cff78a57b35acac43fb745ac3aeec9b37d57ae950ff09ff5d87798c666",
"0xc7a3d8b0df3f1c6e38f5867097a89b354b27bfed76ba8bf4cf4b0ca98a957f60"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

const chains = `[
  {
    "slug": "polkadot",
    "name": "Polkadot",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 1,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polkadot_63b5dd41ef.png",
    "providers": {
      "Dwellir": "wss://polkadot-rpc.dwellir.com",
      "RadiumBlock": "wss://polkadot.public.curie.radiumblock.co/ws",
      "1RPC": "wss://1rpc.io/dot",
      "Stakeworld": "wss://dot-rpc.stakeworld.io",
      "LuckyFriday": "wss://rpc-polkadot.luckyfriday.io",
      "Dwellir Tunisia": "wss://polkadot-rpc-tn.dwellir.com",
      "IBP-GeoDNS1": "wss://rpc.ibp.network/polkadot",
      "IBP-GeoDNS2": "wss://rpc.dotters.network/polkadot",
      "Parity": "wss://rpc.polkadot.io",
      "Light Client": "light://substrate-connect/polkadot"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
      "addressPrefix": 0,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://polkadot.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "DOT",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "polkadot"
    }
  },
  {
    "slug": "kusama",
    "name": "Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 2,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kusama_3a65d79366.png",
    "providers": {
      "Dwellir": "wss://kusama-rpc.dwellir.com",
      "RadiumBlock": "wss://polkadot.public.curie.radiumblock.co/ws",
      "1RPC": "wss://1rpc.io/ksm",
      "Dwellir Tunisia": "wss://kusama-rpc-tn.dwellir.com",
      "LuckyFriday": "wss://rpc-kusama.luckyfriday.io",
      "Stakeworld": "wss://ksm-rpc.stakeworld.io",
      "IBP-GeoDNS1": "wss://rpc.ibp.network/kusama",
      "IBP-GeoDNS2": "wss://rpc.dotters.network/kusama",
      "Parity": "wss://kusama-rpc.polkadot.io",
      "Light Client": "light://substrate-connect/kusama"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
      "addressPrefix": 2,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://kusama.subscan.io/",
      "existentialDeposit": "333333333",
      "symbol": "KSM",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "kusama"
    }
  },
  {
    "slug": "ethereum",
    "name": "Ethereum",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 3,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ethereum_39914b7817.png",
    "providers": {
      "Llamarpc": "https://eth.llamarpc.com",
      "PublicNode": "https://ethereum.publicnode.com",
      "Cloudflare": "https://cloudflare-eth.com",
      "BlastApi": "https://eth-mainnet.public.blastapi.io",
      "Infura": "https://mainnet.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8"
    },
    "evmInfo": {
      "evmChainId": 1,
      "blockExplorer": "https://etherscan.io",
      "existentialDeposit": "0",
      "symbol": "ETH",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://etherscan.io"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "binance",
    "name": "Binance Smart Chain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 4,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bnb_d6b4677e85.png",
    "providers": {
      "Binance": "https://bsc-dataseed.binance.org/",
      "Defibit": "https://bsc-dataseed1.defibit.io/",
      "Ninicoin": "https://bsc-dataseed1.ninicoin.io/",
      "Nodereal": "https://bsc.nodereal.io/"
    },
    "evmInfo": {
      "evmChainId": 56,
      "blockExplorer": "https://bscscan.com",
      "existentialDeposit": "0",
      "symbol": "BNB",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "moonbeam",
    "name": "Moonbeam",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 5,
    "icon": "https://static-data.subwallet.app/chains/images/icon/moonbeam_4f6ef924fe.png",
    "providers": {
      "Moonbeam Foundation": "wss://wss.api.moonbeam.network",
      "Dwellir": "wss://moonbeam-rpc.dwellir.com",
      "1rpc": "wss://1rpc.io/glmr",
      "Blast": "wss://moonbeam.public.blastapi.io",
      "OnFinality": "wss://moonbeam.api.onfinality.io/public-ws"
    },
    "evmInfo": {
      "evmChainId": 1284,
      "blockExplorer": "https://moonbeam.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "GLMR",
      "decimals": 18,
      "supportSmartContract": [
        "ERC721",
        "ERC20"
      ],
      "abiExplorer": "https://api-moonbeam.moonscan.io/api?module=contract&action=getabi"
    },
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2004,
      "genesisHash": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
      "addressPrefix": 1284,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://moonbeam.foundation/moonbeam-crowdloan/",
      "blockExplorer": "https://moonbeam.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "GLMR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": 3342,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2004-2",
          "paraId": 2004,
          "status": "won",
          "startTime": "2021-12-21T01:48:00.000Z",
          "endTime": "2023-10-24T01:48:00.000Z",
          "auctionIndex": 2,
          "firstPeriod": 6,
          "lastPeriod": 13
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "moonbeam"
    }
  },
  {
    "slug": "pioneer",
    "name": "Pioneer Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 6,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bit_country_pioneer_03e26dad1d.png",
    "providers": {
      "Pioneer": "wss://pioneer-rpc-3.bit.country/wss"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2096,
      "genesisHash": "0xf22b7850cdd5a7657bbfd90ac86441275bbc57ace3d2698a740c7b0ec4de5ec3",
      "addressPrefix": 268,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://ksmcrowdloan.bit.country/",
      "blockExplorer": "https://pioneer.subscan.io/",
      "existentialDeposit": "100000000000000000",
      "symbol": "NEER",
      "decimals": 18,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2096-39",
          "paraId": 2096,
          "status": "won",
          "startTime": "2021-12-01T04:27:00.000Z",
          "endTime": "2022-11-02T04:27:00.000Z",
          "auctionIndex": 13,
          "firstPeriod": 17,
          "lastPeriod": 24
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "pioneer"
    }
  },
  {
    "slug": "aleph",
    "name": "Aleph Zero",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 7,
    "icon": "https://static-data.subwallet.app/chains/images/icon/aleph_zero_5b98dbe0ae.png",
    "providers": {
      "Aleph Zero Foundation": "wss://ws.azero.dev"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": "https://contribute.alephzero.org/",
      "blockExplorer": "https://alephzero.subscan.io/",
      "existentialDeposit": "500",
      "symbol": "AZERO",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "alephzero"
    }
  },
  {
    "slug": "astar",
    "name": "Astar",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 8,
    "icon": "https://static-data.subwallet.app/chains/images/icon/astar_network_8038e86b95.png",
    "providers": {
      "Astar": "wss://rpc.astar.network",
      "OnFinality": "wss://astar.api.onfinality.io/public-ws",
      "Dwellir": "wss://astar-rpc.dwellir.com",
      "Blast": "wss://astar.public.blastapi.io",
      "1RPC": "wss://1rpc.io/astr",
      "Light Client": "light://substrate-connect/polkadot/astar"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2006,
      "genesisHash": "0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6",
      "addressPrefix": 5,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.astar.network/#/",
      "blockExplorer": "https://astar.subscan.io/",
      "existentialDeposit": "1000000",
      "symbol": "ASTR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2006-3",
          "paraId": 2006,
          "status": "won",
          "startTime": "2021-12-21T01:48:00.000Z",
          "endTime": "2023-10-24T01:48:00.000Z",
          "auctionIndex": 3,
          "firstPeriod": 6,
          "lastPeriod": 13
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "astar"
    }
  },
  {
    "slug": "astarEvm",
    "name": "Astar - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9,
    "icon": "https://static-data.subwallet.app/chains/images/icon/astar_network_8038e86b95.png",
    "providers": {
      "Astar": "https://evm.astar.network",
      "OnFinality": "https://astar.api.onfinality.io/public",
      "Dwellir": "https://astar-rpc.dwellir.com",
      "Blast": "https://astar.public.blastapi.io"
    },
    "evmInfo": {
      "evmChainId": 592,
      "blockExplorer": "https://blockscout.com/astar/",
      "existentialDeposit": "0",
      "symbol": "ASTR",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "statemint",
    "name": "Polkadot Asset Hub (Statemint)",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 10,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polkadot_asset_hub_218e73fad2.png",
    "providers": {
      "Dwellir": "wss://statemint-rpc.dwellir.com",
      "RadiumBlock": "wss://statemint.public.curie.radiumblock.co/ws",
      "Dwellir Tunisia": "wss://statemint-rpc-tn.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 1000,
      "genesisHash": "0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f",
      "addressPrefix": 0,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://assethub-polkadot.subscan.io/",
      "existentialDeposit": "1000000000",
      "symbol": "DOT",
      "decimals": 10,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "assethub-polkadot"
    }
  },
  {
    "slug": "acala",
    "name": "Acala",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 11,
    "icon": "https://static-data.subwallet.app/chains/images/icon/acala_10b077e14b.png",
    "providers": {
      "Acala Foundation 0": "wss://acala-rpc-0.aca-api.network",
      "Acala Foundation 1": "wss://acala-rpc-1.aca-api.network",
      "Acala Foundation 2": "wss://acala-rpc-2.aca-api.network/ws",
      "Acala Foundation 3": "wss://acala-rpc-3.aca-api.network/ws",
      "OnFinality": "wss://acala-polkadot.api.onfinality.io/public-ws",
      "Dwellir": "wss://acala-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2000,
      "genesisHash": "0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c",
      "addressPrefix": 10,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://distribution.acala.network/",
      "blockExplorer": "https://acala.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "ACA",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2000-0",
          "paraId": 2000,
          "status": "won",
          "startTime": "2021-12-21T01:48:00.000Z",
          "endTime": "2023-10-24T01:48:00.000Z",
          "auctionIndex": 1,
          "firstPeriod": 6,
          "lastPeriod": 13
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "acala"
    }
  },
  {
    "slug": "polygon",
    "name": "Polygon",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 12,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polygon_e12f7d1924.png",
    "providers": {
      "Llamarpc": "https://polygon.llamarpc.com",
      "BlastApi": "https://polygon-mainnet.public.blastapi.io",
      "BorPublicNode": "https://polygon-bor.publicnode.com"
    },
    "evmInfo": {
      "evmChainId": 137,
      "blockExplorer": "https://polygonscan.com",
      "existentialDeposit": "0",
      "symbol": "MATIC",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://polygonscan.com"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "arbitrum_one",
    "name": "Arbitrum One",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 13,
    "icon": "https://static-data.subwallet.app/chains/images/icon/arbitrum_cb1f0d45ad.png",
    "providers": {
      "Omniatech": "https://endpoints.omniatech.io/v1/arbitrum/one/public",
      "BlastApi": "https://arbitrum-one.public.blastapi.io"
    },
    "evmInfo": {
      "evmChainId": 42161,
      "blockExplorer": "https://arbiscan.io",
      "existentialDeposit": "0",
      "symbol": "ETH",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://arbiscan.io"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "optimism",
    "name": "Optimism",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 14,
    "icon": "https://static-data.subwallet.app/chains/images/icon/optimism_a6ed6c25a9.png",
    "providers": {
      "BlastApi": "https://optimism-mainnet.public.blastapi.io"
    },
    "evmInfo": {
      "evmChainId": 10,
      "blockExplorer": "https://optimistic.etherscan.io",
      "existentialDeposit": "0",
      "symbol": "ETH",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://optimistic.etherscan.io"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "tomochain",
    "name": "TomoChain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 15,
    "icon": "https://static-data.subwallet.app/chains/images/icon/tomochain_549225abda.png",
    "providers": {
      "TomoChain": "https://rpc.tomochain.com"
    },
    "evmInfo": {
      "evmChainId": 88,
      "blockExplorer": "https://tomoscan.io",
      "existentialDeposit": "0",
      "symbol": "TOMO",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://tomoscan.i"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "alephTest",
    "name": "Aleph Zero Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 16,
    "icon": "https://static-data.subwallet.app/chains/images/icon/aleph_zero_5b98dbe0ae.png",
    "providers": {
      "Aleph Zero Foundation": "wss://ws.test.azero.dev"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x05d5279c52c484cc80396535a316add7d47b1c5b9e0398dd1f584149341460c5",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "500",
      "symbol": "TZERO",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "shiden",
    "name": "Shiden",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 17,
    "icon": "https://static-data.subwallet.app/chains/images/icon/shiden_080092bcde.png",
    "providers": {
      "Astar": "wss://rpc.shiden.astar.network",
      "OnFinality": "wss://shiden.api.onfinality.io/public-ws",
      "Dwellir": "wss://shiden-rpc.dwellir.com",
      "Blast": "wss://shiden.public.blastapi.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2007,
      "genesisHash": "0xf1cf9022c7ebb34b162d5b5e34e705a5a740b2d0ecc1009fb89023e62a488108",
      "addressPrefix": 5,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://shiden.subscan.io/",
      "existentialDeposit": "1000000",
      "symbol": "SDN",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "crowdloanParaId": 3335,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2258-92",
          "paraId": 2258,
          "status": "won",
          "startTime": "2023-01-25T04:27:00.000Z",
          "endTime": "2023-12-27T04:27:00.000Z",
          "auctionIndex": 70,
          "firstPeriod": 27,
          "lastPeriod": 34
        },
        {
          "relayChain": "kusama",
          "fundId": "2120-75",
          "paraId": 2120,
          "status": "won",
          "startTime": "2022-05-18T04:27:00.000Z",
          "endTime": "2023-04-19T04:27:00.000Z",
          "auctionIndex": 35,
          "firstPeriod": 21,
          "lastPeriod": 28
        },
        {
          "relayChain": "kusama",
          "fundId": "2007-0",
          "paraId": 2007,
          "status": "won",
          "startTime": "2021-06-16T04:27:00.000Z",
          "endTime": "2022-05-18T04:27:00.000Z",
          "auctionIndex": 3,
          "firstPeriod": 13,
          "lastPeriod": 20
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "shiden"
    }
  },
  {
    "slug": "shidenEvm",
    "name": "Shiden - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 18,
    "icon": "https://static-data.subwallet.app/chains/images/icon/shiden_080092bcde.png",
    "providers": {
      "Astar": "https://evm.shiden.astar.network",
      "OnFinality": "https://shiden.api.onfinality.io/public",
      "Dwellir": "https://shiden-rpc.dwellir.com",
      "Blast": "https://shiden.public.blastapi.io"
    },
    "evmInfo": {
      "evmChainId": 336,
      "blockExplorer": "https://blockscout.com/shiden/",
      "existentialDeposit": "0",
      "symbol": "SDN",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "shibuya",
    "name": "Shibuya Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 19,
    "icon": "https://static-data.subwallet.app/chains/images/icon/astar_network_8038e86b95.png",
    "providers": {
      "Shibuya": "wss://rpc.shibuya.astar.network",
      "Dwellir": "wss://shibuya-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": 1000,
      "genesisHash": "0xddb89973361a170839f80f152d2e9e38a376a5a7eccefcade763f46a8e567019",
      "addressPrefix": 5,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://shibuya.subscan.io/",
      "existentialDeposit": "1000000",
      "symbol": "SBY",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "shibuya"
    }
  },
  {
    "slug": "shibuyaEvm",
    "name": "Shibuya Testnet - EVM",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 20,
    "icon": "https://static-data.subwallet.app/chains/images/icon/astar_network_8038e86b95.png",
    "providers": {
      "Shibuya": "https://evm.shibuya.astar.network ",
      "Dwellir": "https://shibuya-rpc.dwellir.com",
      "BlastAPI": "https://shibuya.public.blastapi.io"
    },
    "evmInfo": {
      "evmChainId": 81,
      "blockExplorer": "https://blockscout.com/shibuya/",
      "existentialDeposit": "0",
      "symbol": "SBY",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "aventus",
    "name": "Aventus Polkadot",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 21,
    "icon": "https://static-data.subwallet.app/chains/images/icon/aventus_5342678346.png",
    "providers": {
      "Aventus": "wss://public-rpc.mainnet.aventus.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2056,
      "genesisHash": "0x8b5c955b5c8fd7112562327e3859473df4e3dff49bd72a113dbb668d2cfa20d7",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.mainnet.aventus.io/",
      "existentialDeposit": "0",
      "symbol": "AVT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2056-45",
          "paraId": 2056,
          "status": "won",
          "startTime": "2022-08-30T01:48:00.000Z",
          "endTime": "2024-07-02T01:48:00.000Z",
          "auctionIndex": 26,
          "firstPeriod": 9,
          "lastPeriod": 16
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "westend",
    "name": "Westend",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 22,
    "icon": "https://static-data.subwallet.app/chains/images/icon/westend_cd23291966.png",
    "providers": {
      "Parity": "wss://westend-rpc.polkadot.io",
      "Dwellir": "wss://westend-rpc.dwellir.com",
      "Light Client": "light://substrate-connect/westend",
      "DottersNet": "wss://rpc.dotters.network/westend",
      "Dwellir Tunisia": "wss://westend-rpc-tn.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://westend.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "WND",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "westend"
    }
  },
  {
    "slug": "rococo",
    "name": "Rococo",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 23,
    "icon": "https://static-data.subwallet.app/chains/images/icon/rococo_2354ee585c.png",
    "providers": {
      "Parity": "wss://rococo-rpc.polkadot.io",
      "Light Client": "light://substrate-connect/rococo"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://rococo.subscan.io/",
      "existentialDeposit": "33333333",
      "symbol": "ROC",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "rococo"
    }
  },
  {
    "slug": "bitcountry",
    "name": "Bit.Country - Alpha Net",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 24,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bit_country_continuum_d0a92a8433.png",
    "providers": {
      "Metaverse Foundation": "wss://alphanet-rpc-gcp.bit.country"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x8ffa3204b182fbda4676f75ea2d6a9bbdbbaf0d78470c62952e918c60e0583b4",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1",
      "symbol": "NUUM",
      "decimals": 18,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "equilibrium_parachain",
    "name": "Equilibrium",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 25,
    "icon": "https://static-data.subwallet.app/chains/images/icon/equilibrium_8c9f18b502.png",
    "providers": {
      "Equilibrium": "wss://node.pol.equilibrium.io",
      "Dwellir": "wss://equilibrium-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2011,
      "genesisHash": "0x89d3ec46d2fb43ef5a9713833373d5ea666b092fa8fd68fbc34596036571b907",
      "addressPrefix": 68,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://equilibrium.io/en/crowdloan#bid",
      "blockExplorer": "https://equilibrium.subscan.io",
      "existentialDeposit": null,
      "symbol": "EQ",
      "decimals": 9,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2011-29",
          "paraId": 2011,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 12,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "moonbase",
    "name": "Moonbase Alpha",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 26,
    "icon": "https://static-data.subwallet.app/chains/images/icon/moonbase_e42c8ad3dc.png",
    "providers": {
      "Moonbeam Foundation": "wss://wss.api.moonbase.moonbeam.network",
      "Blast": "wss://moonbase-alpha.public.blastapi.io",
      "OnFinality": "wss://moonbeam-alpha.api.onfinality.io/public-ws"
    },
    "evmInfo": {
      "evmChainId": 1287,
      "blockExplorer": "https://moonbase.moonscan.io/",
      "existentialDeposit": "0",
      "symbol": "DEV",
      "decimals": 18,
      "supportSmartContract": [
        "ERC721",
        "ERC20"
      ],
      "abiExplorer": "https://api-moonbase.moonscan.io/api?module=contract&action=getabi"
    },
    "substrateInfo": {
      "relaySlug": null,
      "paraId": 1000,
      "genesisHash": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
      "addressPrefix": 1287,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://moonbase.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "DEV",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "moonbase"
    }
  },
  {
    "slug": "moonriver",
    "name": "Moonriver",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 27,
    "icon": "https://static-data.subwallet.app/chains/images/icon/moonriver_06142a1b4a.png",
    "providers": {
      "Moonbeam Foundation": "wss://wss.api.moonriver.moonbeam.network",
      "Blast": "wss://moonriver.public.blastapi.io",
      "Dwellir": "wss://moonriver-rpc.dwellir.com",
      "UnitedBloc": "wss://moonriver.unitedbloc.com:2001"
    },
    "evmInfo": {
      "evmChainId": 1285,
      "blockExplorer": "https://moonriver.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "MOVR",
      "decimals": 18,
      "supportSmartContract": [
        "ERC721",
        "ERC20"
      ],
      "abiExplorer": "https://api-moonriver.moonscan.io/api?module=contract&action=getabi"
    },
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2023,
      "genesisHash": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
      "addressPrefix": 1285,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://moonriver.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "MOVR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2023-2",
          "paraId": 2023,
          "status": "won",
          "startTime": "2021-06-16T04:27:00.000Z",
          "endTime": "2022-05-18T04:27:00.000Z",
          "auctionIndex": 2,
          "firstPeriod": 13,
          "lastPeriod": 20
        },
        {
          "relayChain": "kusama",
          "fundId": "2000-1",
          "paraId": 2000,
          "status": "won",
          "startTime": "2021-06-16T04:27:00.000Z",
          "endTime": "2022-05-18T04:27:00.000Z",
          "auctionIndex": 2,
          "firstPeriod": 13,
          "lastPeriod": 20
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "moonriver"
    }
  },
  {
    "slug": "turingStaging",
    "name": "Turing Staging",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 28,
    "icon": "https://static-data.subwallet.app/chains/images/icon/turing_network_c8ce22709f.png",
    "providers": {
      "Turing": "wss://rpc.turing-staging.oak.tech"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": 2114,
      "genesisHash": "0xd54f0988402deb4548538626ce37e4a318441ea0529ca369400ebec4e04dfe4b",
      "addressPrefix": 51,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000000",
      "symbol": "TUR",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "turing",
    "name": "Turing",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 29,
    "icon": "https://static-data.subwallet.app/chains/images/icon/turing_network_c8ce22709f.png",
    "providers": {
      "Turing": "wss://rpc.turing.oak.tech",
      "Dwellir": "wss://turing-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2114,
      "genesisHash": "0x0f62b701fb12d02237a33b84818c11f621653d2b1614c777973babf4652b535d",
      "addressPrefix": 51,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://turing.subscan.io/",
      "existentialDeposit": "100000000",
      "symbol": "TUR",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2114-68",
          "paraId": 2114,
          "status": "won",
          "startTime": "2022-04-06T04:27:00.000Z",
          "endTime": "2023-03-08T04:27:00.000Z",
          "auctionIndex": 30,
          "firstPeriod": 20,
          "lastPeriod": 27
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "turing"
    }
  },
  {
    "slug": "bifrost",
    "name": "Bifrost Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 30,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bifrost_kusama_cc2473707c.png",
    "providers": {
      "Liebi 0": "wss://bifrost-rpc.liebi.com/ws",
      "Dwellir": "wss://bifrost-rpc.dwellir.com",
      "OnFinality": "wss://bifrost-parachain.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2001,
      "genesisHash": "0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed",
      "addressPrefix": 6,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://bifrost.app/vcrowdloan",
      "blockExplorer": "https://bifrost-kusama.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "BNC",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2262-95",
          "paraId": 2262,
          "status": "won",
          "startTime": "2023-03-08T04:27:00.000Z",
          "endTime": "2024-02-07T04:27:00.000Z",
          "auctionIndex": 71,
          "firstPeriod": 28,
          "lastPeriod": 35
        },
        {
          "relayChain": "kusama",
          "fundId": "2001-9",
          "paraId": 2001,
          "status": "won",
          "startTime": "2021-06-16T04:27:00.000Z",
          "endTime": "2022-05-18T04:27:00.000Z",
          "auctionIndex": 5,
          "firstPeriod": 13,
          "lastPeriod": 20
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "bifrost-kusama"
    }
  },
  {
    "slug": "bifrost_dot",
    "name": "Bifrost Polkadot",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 31,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bifrost_44b3c3fd65.png",
    "providers": {
      "Liebi": "wss://hk.p.bifrost-rpc.liebi.com/ws",
      "OnFinality": "wss://bifrost-polkadot.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2030,
      "genesisHash": "0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b",
      "addressPrefix": 6,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://bifrost.app/vcrowdloan",
      "blockExplorer": "https://bifrost.subscan.io",
      "existentialDeposit": "10000000000",
      "symbol": "BNC",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2030-37",
          "paraId": 2030,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 18,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "bifrost"
    }
  },
  {
    "slug": "bifrost_testnet",
    "name": "Bifrost Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 32,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bifrost_44b3c3fd65.png",
    "providers": {
      "Liebi": "wss://bifrost-rpc.rococo.liebi.com/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "rococo",
      "paraId": 2030,
      "genesisHash": "0x8b290fa39a8808f29d7309ea99442c95bf964838aef14be5a6449ae48f8a5f1f",
      "addressPrefix": 6,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://bifrost-testnet.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "BNC",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "calamari",
    "name": "Calamari",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 33,
    "icon": "https://static-data.subwallet.app/chains/images/icon/calamarinetwork_ad869dd66b.png",
    "providers": {
      "Manta Network": "wss://calamari.systems"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2084,
      "genesisHash": "0x4ac80c99289841dd946ef92765bf659a307d39189b3ce374a92b5f0415ee17a1",
      "addressPrefix": 78,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://calamari.network/",
      "blockExplorer": "https://calamari.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "KMA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2084-27",
          "paraId": 2084,
          "status": "won",
          "startTime": "2021-09-08T04:27:00.000Z",
          "endTime": "2022-08-10T04:27:00.000Z",
          "auctionIndex": 7,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "calamari"
    }
  },
  {
    "slug": "amplitude",
    "name": "Amplitude",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 34,
    "icon": "https://static-data.subwallet.app/chains/images/icon/amplitude_7704334d11.png",
    "providers": {
      "Amplitude": "wss://rpc-amplitude.pendulumchain.tech"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2124,
      "genesisHash": "0xcceae7f3b9947cdb67369c026ef78efa5f34a08fe5808d373c04421ecf4f1aaf",
      "addressPrefix": 57,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "AMPE",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2124-81",
          "paraId": 2124,
          "status": "won",
          "startTime": "2022-08-10T04:27:00.000Z",
          "endTime": "2023-07-12T04:27:00.000Z",
          "auctionIndex": 42,
          "firstPeriod": 23,
          "lastPeriod": 30
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "amplitude_test",
    "name": "Amplitude Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 35,
    "icon": "https://static-data.subwallet.app/chains/images/icon/amplitude_7704334d11.png",
    "providers": {
      "Amplitude": "wss://rpc-foucoco.pendulumchain.tech"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "rococo",
      "paraId": 2124,
      "genesisHash": "0x67221cd96c1551b72d55f65164d6a39f31b570c77a05c90e31931b0e2f379e13",
      "addressPrefix": 57,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "AMPE",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "bobabase",
    "name": "Bobabase Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 36,
    "icon": "https://static-data.subwallet.app/chains/images/icon/boba_network_78cd37f0d6.png",
    "providers": {},
    "evmInfo": {
      "evmChainId": 1297,
      "blockExplorer": "https://blockexplorer.bobabase.boba.network/",
      "existentialDeposit": "0",
      "symbol": "BOBA",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://blockexplorer.bobabase.boba.network/"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "ethereum_goerli",
    "name": "Ethereum Testnet (Goerli)",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 37,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ethereum_39914b7817.png",
    "providers": {
      "Infura": "https://goerli.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8"
    },
    "evmInfo": {
      "evmChainId": 5,
      "blockExplorer": "https://goerli.etherscan.io",
      "existentialDeposit": "0",
      "symbol": "GoerliETH",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "binance_test",
    "name": "Binance Smart Chain (Testnet)",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 38,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bnb_d6b4677e85.png",
    "providers": {
      "Binance": "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "Binance2": "https://data-seed-prebsc-2-s1.binance.org:8545/"
    },
    "evmInfo": {
      "evmChainId": 97,
      "blockExplorer": "https://testnet.bscscan.com",
      "existentialDeposit": "0",
      "symbol": "BNB",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "parallel",
    "name": "Parallel",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 39,
    "icon": "https://static-data.subwallet.app/chains/images/icon/parallel_208725684a.png",
    "providers": {
      "Parallel": "wss://rpc.parallel.fi"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2012,
      "genesisHash": "0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97",
      "addressPrefix": 172,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2012",
      "blockExplorer": "https://parallel.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "PARA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": 3350,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2012-6",
          "paraId": 2012,
          "status": "won",
          "startTime": "2021-12-21T01:48:00.000Z",
          "endTime": "2023-10-24T01:48:00.000Z",
          "auctionIndex": 4,
          "firstPeriod": 6,
          "lastPeriod": 13
        },
        {
          "relayChain": "polkadot",
          "fundId": "3350-72",
          "paraId": 3350,
          "status": "failed",
          "startTime": "2023-10-24T01:48:00.000Z",
          "endTime": "2025-08-26T01:48:00.000Z",
          "auctionIndex": 0,
          "firstPeriod": 14,
          "lastPeriod": 21
        },
        {
          "relayChain": "polkadot",
          "fundId": "3350-78",
          "paraId": 3350,
          "status": "won",
          "startTime": "2024-01-16T01:48:00.000Z",
          "endTime": "2025-11-18T01:48:00.000Z",
          "auctionIndex": 54,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "parallel"
    }
  },
  {
    "slug": "clover",
    "name": "Clover",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 40,
    "icon": "https://static-data.subwallet.app/chains/images/icon/clover_3dd183f2ca.png",
    "providers": {
      "Clover": "wss://rpc-para.clover.finance"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2002,
      "genesisHash": "0x5c7bd13edf349b33eb175ffae85210299e324d852916336027391536e686f267",
      "addressPrefix": 128,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://lucky.clover.finance/?type=support",
      "blockExplorer": "https://clv.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "CLV",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2002-5",
          "paraId": 2002,
          "status": "won",
          "startTime": "2021-12-21T01:48:00.000Z",
          "endTime": "2023-10-24T01:48:00.000Z",
          "auctionIndex": 5,
          "firstPeriod": 6,
          "lastPeriod": 13
        },
        {
          "relayChain": "polkadot",
          "fundId": "2002-76",
          "paraId": 2002,
          "status": "won",
          "startTime": "2024-01-16T01:48:00.000Z",
          "endTime": "2025-11-18T01:48:00.000Z",
          "auctionIndex": 53,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "clv"
    }
  },
  {
    "slug": "cloverEvm",
    "name": "Clover - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 41,
    "icon": "https://static-data.subwallet.app/chains/images/icon/clover_3dd183f2ca.png",
    "providers": {
      "Clover": "wss://rpc-para.clover.finance"
    },
    "evmInfo": {
      "evmChainId": 1024,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "CLV",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "hydradx_main",
    "name": "HydraDX",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 42,
    "icon": "https://static-data.subwallet.app/chains/images/icon/hydradx_721c03c934.png",
    "providers": {
      "Galactic Council": "wss://rpc.hydradx.cloud",
      "Dwellir": "wss://hydradx-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2034,
      "genesisHash": "0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d",
      "addressPrefix": 63,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://loan.hydradx.io/",
      "blockExplorer": "https://hydradx.subscan.io/",
      "existentialDeposit": "1000000000000",
      "symbol": "HDX",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2034-25",
          "paraId": 2034,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 9,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "hydradx"
    }
  },
  {
    "slug": "edgeware",
    "name": "Edgeware",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 43,
    "icon": "https://static-data.subwallet.app/chains/images/icon/edgeware_6a0057274c.png",
    "providers": {
      "JelliedOwl": "wss://edgeware.jelliedowl.net",
      "Commonwealth Labs": "wss://mainnet2.edgewa.re"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b",
      "addressPrefix": 7,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://edgeware.subscan.io/",
      "existentialDeposit": "10000000000000",
      "symbol": "EDG",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "centrifuge",
    "name": "Centrifuge",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 44,
    "icon": "https://static-data.subwallet.app/chains/images/icon/centrifuge_1210a93e56.png",
    "providers": {
      "Centrifuge": "wss://fullnode.parachain.centrifuge.io",
      "OnFinality": "wss://centrifuge-parachain.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2031,
      "genesisHash": "0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82",
      "addressPrefix": 36,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://centrifuge.io/parachain/crowdloan/",
      "blockExplorer": "https://centrifuge.subscan.io/",
      "existentialDeposit": "1000000000000",
      "symbol": "CFG",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": 3353,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2031-18",
          "paraId": 2031,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 8,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "centrifuge"
    }
  },
  {
    "slug": "interlay",
    "name": "Interlay",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 45,
    "icon": "https://static-data.subwallet.app/chains/images/icon/interlay_53b0045be1.png",
    "providers": {
      "Kintsugi Labs": "wss://api.interlay.io/parachain"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2032,
      "genesisHash": "0xed86d448b84db333cdbe07362ddc79530343b907bd88712557c024d7a94296bb",
      "addressPrefix": 2032,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.interlay.io/",
      "blockExplorer": "https://interlay.subscan.io/",
      "existentialDeposit": null,
      "symbol": "INTR",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2032-15",
          "paraId": 2032,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 10,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "interlay"
    }
  },
  {
    "slug": "nodle",
    "name": "Nodle",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 46,
    "icon": "https://static-data.subwallet.app/chains/images/icon/nodle_fba7fd5ae5.png",
    "providers": {
      "OnFinality": "wss://nodle-parachain.api.onfinality.io/public-ws",
      "Dwellir": "wss://eden-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2026,
      "genesisHash": "0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23",
      "addressPrefix": 37,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://parachain.nodle.com/",
      "blockExplorer": "https://nodle.subscan.io/",
      "existentialDeposit": "10000",
      "symbol": "NODL",
      "decimals": 11,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": 2012,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2026-14",
          "paraId": 2026,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 11,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "nodle"
    }
  },
  {
    "slug": "darwinia2",
    "name": "Darwinia 2",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 47,
    "icon": "https://static-data.subwallet.app/chains/images/icon/darwinia_8a711cb162.png",
    "providers": {
      "Darwinia Network": "wss://rpc.darwinia.network",
      "Darwinia Community": "wss://darwinia-rpc.darwiniacommunitydao.xyz",
      "Dwellir": "wss://darwinia-rpc.dwellir.com"
    },
    "evmInfo": {
      "evmChainId": 46,
      "blockExplorer": "https://darwinia.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "RING",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2046,
      "genesisHash": "0xf0b8924b12e8108550d28870bc03f7b45a947e1b2b9abf81bfb0b89ecb60570e",
      "addressPrefix": 18,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://darwinia.network/plo_contribute",
      "blockExplorer": "https://darwinia.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "RING",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "darwinia"
    }
  },
  {
    "slug": "sora_ksm",
    "name": "SORA Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 48,
    "icon": "https://static-data.subwallet.app/chains/images/icon/sora_cd4fcddf6e.png",
    "providers": {
      "Soramitsu": "wss://ws.parachain-collator-1.c1.sora2.soramitsu.co.jp"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2011,
      "genesisHash": "0x6d8d9f145c2177fa83512492cdd80a71e29f22473f4a8943a6292149ac319fb9",
      "addressPrefix": 420,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "XOR",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2011-96",
          "paraId": 2011,
          "status": "won",
          "startTime": "2023-03-08T04:27:00.000Z",
          "endTime": "2024-02-07T04:27:00.000Z",
          "auctionIndex": 73,
          "firstPeriod": 28,
          "lastPeriod": 35
        },
        {
          "relayChain": "kusama",
          "fundId": "2011-62",
          "paraId": 2011,
          "status": "won",
          "startTime": "2022-02-23T04:27:00.000Z",
          "endTime": "2023-01-25T04:27:00.000Z",
          "auctionIndex": 24,
          "firstPeriod": 19,
          "lastPeriod": 26
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "odyssey",
    "name": "Ares Odyssey",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 49,
    "icon": "https://static-data.subwallet.app/chains/images/icon/odyssey_98d1b94f53.png",
    "providers": {
      "AresProtocol": "wss://odyssey.aresprotocol.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x0f3665e2e57fb38fd638145b69e567fb05bbadfd457624f90f15e5dbb31320bb",
      "addressPrefix": 34,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": null,
      "existentialDeposit": "500",
      "symbol": "ARES",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "polkadex",
    "name": "Polkadex",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 50,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polkadex_dc0b44d234.png",
    "providers": {
      "Polkadex Team": "wss://mainnet.polkadex.trade/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2040,
      "genesisHash": "0x72f3bba34b1ecd532bccbed46701ad37c4ef329bfe86b7cf014ac06cb92ed47d",
      "addressPrefix": 89,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://www.polkadex.trade/crowdloans",
      "blockExplorer": "https://polkadex-parachain.subscan.io/",
      "existentialDeposit": "1000000000000",
      "symbol": "PDEX",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2040-36",
          "paraId": 2040,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 16,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "polkadex-parachain"
    }
  },
  {
    "slug": "polkadexTest",
    "name": "Polkadex - Testnet",
    "isTestnet": true,
    "chainStatus": "STOPPED",
    "ordinal": 51,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polkadex_dc0b44d234.png",
    "providers": {
      "Polkadex Team": "wss://blockchain.polkadex.trade"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xd0024e7110db2a8b35d6599e64e82d3eb30070200a423398319efb6b4d596427",
      "addressPrefix": 88,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": "https://www.polkadex.trade/crowdloans",
      "blockExplorer": null,
      "existentialDeposit": "1000000000000",
      "symbol": "Unit",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "rmrk",
    "name": "RMRK Devnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 52,
    "icon": "https://static-data.subwallet.app/chains/images/icon/rmrk_bc2bc4db3a.png",
    "providers": {
      "rmrk": "wss://staging.node.rmrk.app"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6c7ae90ef70a31fe9f0f2329007ff4b4c4fe62fe71cd2b753ee37c1aa1070fef",
      "addressPrefix": 0,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000",
      "symbol": "UNIT",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "dolphin",
    "name": "Dolphin Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 53,
    "icon": "https://static-data.subwallet.app/chains/images/icon/dolphin_6730ef6a9e.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x79372c8ed25b51c0d3c1f085becb264c93f1ecbc71dcf387fdb5c294fd823a08",
      "addressPrefix": 78,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://dolphin.subscan.io/",
      "existentialDeposit": null,
      "symbol": "DOL",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "opal",
    "name": "Opal",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 54,
    "icon": "https://static-data.subwallet.app/chains/images/icon/opal_df48cbfb79.png",
    "providers": {
      "Unique": "wss://ws-opal.unique.network",
      "Europe": "wss://eu-ws-opal.unique.network",
      "NA": "wss://us-ws-opal.unique.network",
      "Asia": "wss://asia-ws-opal.unique.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x3fa374fbc8d0a9077356aefe327c88f447ce7f1fda905b1d4b4a2680a7b5cefa",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "OPL",
      "decimals": 18,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "efinity",
    "name": "Efinity",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 55,
    "icon": "https://static-data.subwallet.app/chains/images/icon/efinity_89a5f65985.png",
    "providers": {
      "Efinity": "wss://rpc.efinity.io",
      "Dwellir": "wss://efinity -rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2021,
      "genesisHash": "0x335369975fced3fc22e23498da306a712f4fd964c957364d53c49cea9db8bc2f",
      "addressPrefix": 1110,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://enjin.io/efinity-crowdloan",
      "blockExplorer": "https://efinity.subscan.io/",
      "existentialDeposit": "1000000000000000000",
      "symbol": "EFI",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2021-20",
          "paraId": 2021,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 6,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "composableFinance",
    "name": "Composable Finance",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 56,
    "icon": "https://static-data.subwallet.app/chains/images/icon/composable_finance_3f20ca49fb.png",
    "providers": {
      "Composable": "wss://rpc.composable.finance"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2019,
      "genesisHash": "0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d",
      "addressPrefix": 50,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.composable.finance/",
      "blockExplorer": "https://composable.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "LAYR",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2019-17",
          "paraId": 2019,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 7,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "composable"
    }
  },
  {
    "slug": "phala",
    "name": "Phala",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 57,
    "icon": "https://static-data.subwallet.app/chains/images/icon/phala_network_47928dadfd.png",
    "providers": {
      "Phala": "wss://api.phala.network/ws",
      "OnFinality": "wss://phala.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2035,
      "genesisHash": "0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736",
      "addressPrefix": 30,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://phala.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "PHA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2035-32",
          "paraId": 2035,
          "status": "won",
          "startTime": "2022-03-15T01:48:00.000Z",
          "endTime": "2024-01-16T01:48:00.000Z",
          "auctionIndex": 13,
          "firstPeriod": 7,
          "lastPeriod": 14
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "phala"
    }
  },
  {
    "slug": "crust",
    "name": "Crust",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 58,
    "icon": "https://static-data.subwallet.app/chains/images/icon/crust_6ae326cd51.png",
    "providers": {
      "Crust": "wss://crust-parachain.crustapps.net"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2008,
      "genesisHash": "0x4319cc49ee79495b57a1fec4d2bd43f59052dcc690276de566c2691d6df4f7b8",
      "addressPrefix": 88,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://crust-parachain.subscan.io/",
      "existentialDeposit": "100000000",
      "symbol": "CRU",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2008-44",
          "paraId": 2008,
          "status": "won",
          "startTime": "2022-11-22T01:48:00.000Z",
          "endTime": "2024-09-24T01:48:00.000Z",
          "auctionIndex": 30,
          "firstPeriod": 10,
          "lastPeriod": 17
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "crust-parachain"
    }
  },
  {
    "slug": "statemine",
    "name": "Kusama Asset Hub (Statemine)",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 59,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kusama_asset_hub_9ae4528303.png",
    "providers": {
      "Dwellir": "wss://statemine-rpc.dwellir.com",
      "RadiumBlock": "wss://statemine.public.curie.radiumblock.co/ws",
      "Dwellir Tunisia": "wss://statemine-rpc-tn.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 1000,
      "genesisHash": "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a",
      "addressPrefix": 2,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://assethub-kusama.subscan.io/",
      "existentialDeposit": "33333333",
      "symbol": "KSM",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "assethub-kusama"
    }
  },
  {
    "slug": "karura",
    "name": "Karura",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 60,
    "icon": "https://static-data.subwallet.app/chains/images/icon/karura_6fcd919064.png",
    "providers": {
      "Acala Foundation 0": "wss://karura-rpc-0.aca-api.network",
      "Acala Foundation 1": "wss://karura-rpc-1.aca-api.network",
      "Acala Foundation 2": "wss://karura-rpc-2.aca-api.network/ws",
      "Acala Foundation 3": "wss://karura-rpc-3.aca-api.network/ws",
      "OnFinality": "wss://karura.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2000,
      "genesisHash": "0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b",
      "addressPrefix": 8,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://karura.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "KAR",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "karura"
    }
  },
  {
    "slug": "khala",
    "name": "Khala",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 61,
    "icon": "https://static-data.subwallet.app/chains/images/icon/khala_network_543481c0c1.png",
    "providers": {
      "Phala": "wss://khala-api.phala.network/ws",
      "OnFinality": "wss://khala.api.onfinality.io/public-ws",
      "Dwellir": "wss://khala-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2004,
      "genesisHash": "0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d",
      "addressPrefix": 30,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://khala.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "PHA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2004-6",
          "paraId": 2004,
          "status": "won",
          "startTime": "2021-06-16T04:27:00.000Z",
          "endTime": "2022-05-18T04:27:00.000Z",
          "auctionIndex": 4,
          "firstPeriod": 13,
          "lastPeriod": 20
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "khala"
    }
  },
  {
    "slug": "kilt",
    "name": "KILT Spiritnet",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 62,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kilt_35ce98e3b5.png",
    "providers": {
      "KILT Protocol": "wss://spiritnet.kilt.io/",
      "OnFinality": "wss://spiritnet.api.onfinality.io/public-ws",
      "Dwellir": "wss://kilt-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2086,
      "genesisHash": "0x411f057b9107718c9624d6aa4a3f23c1653898297f3d4d529d9bb6511a39dd21",
      "addressPrefix": 38,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://spiritnet.subscan.io/",
      "existentialDeposit": "10000000000000",
      "symbol": "KILT",
      "decimals": 15,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "spiritnet"
    }
  },
  {
    "slug": "basilisk",
    "name": "Basilisk",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 63,
    "icon": "https://static-data.subwallet.app/chains/images/icon/basilisk_bebf244e67.png",
    "providers": {
      "Basilisk ": "wss://rpc.basilisk.cloud",
      "Dwellir": "wss://basilisk-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2090,
      "genesisHash": "0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755",
      "addressPrefix": 10041,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://loan.bsx.fi/",
      "blockExplorer": "https://basilisk.subscan.io/",
      "existentialDeposit": "1000000000000",
      "symbol": "BSX",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2090-35",
          "paraId": 2090,
          "status": "won",
          "startTime": "2021-09-08T04:27:00.000Z",
          "endTime": "2022-08-10T04:27:00.000Z",
          "auctionIndex": 8,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "basilisk"
    }
  },
  {
    "slug": "altair",
    "name": "Altair",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 64,
    "icon": "https://static-data.subwallet.app/chains/images/icon/altair_6e0a2d6139.png",
    "providers": {
      "Centrifuge": "wss://fullnode.altair.centrifuge.io",
      "OnFinality": "wss://altair.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2088,
      "genesisHash": "0xaa3876c1dc8a1afcc2e9a685a49ff7704cfd36ad8c90bf2702b9d1b00cc40011",
      "addressPrefix": 136,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://centrifuge.io/altair/crowdloan/",
      "blockExplorer": "https://altair.subscan.io/",
      "existentialDeposit": "1000000000000",
      "symbol": "AIR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2088-31",
          "paraId": 2088,
          "status": "won",
          "startTime": "2021-09-08T04:27:00.000Z",
          "endTime": "2022-08-10T04:27:00.000Z",
          "auctionIndex": 9,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "altair"
    }
  },
  {
    "slug": "heiko",
    "name": "Heiko",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 65,
    "icon": "https://static-data.subwallet.app/chains/images/icon/heiko_b06aba4586.png",
    "providers": {
      "Parallel": "wss://heiko-rpc.parallel.fi"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2085,
      "genesisHash": "0x64a1c658a48b2e70a7fb1ad4c39eea35022568c20fc44a6e2e3d0a57aee6053b",
      "addressPrefix": 110,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.parallel.fi/#/auction/contribute/kusama/2085",
      "blockExplorer": "https://parallel-heiko.subscan.io/",
      "existentialDeposit": "10000000000",
      "symbol": "HKO",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2126-82",
          "paraId": 2126,
          "status": "won",
          "startTime": "2022-08-10T04:27:00.000Z",
          "endTime": "2023-07-12T04:27:00.000Z",
          "auctionIndex": 45,
          "firstPeriod": 23,
          "lastPeriod": 30
        },
        {
          "relayChain": "kusama",
          "fundId": "2085-28",
          "paraId": 2085,
          "status": "won",
          "startTime": "2021-09-08T04:27:00.000Z",
          "endTime": "2022-08-10T04:27:00.000Z",
          "auctionIndex": 10,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "parallel-heiko"
    }
  },
  {
    "slug": "kintsugi",
    "name": "Kintsugi",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 66,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kintsugi_dfa1bdb733.png",
    "providers": {
      "Kintsugi Labs": "wss://api-kusama.interlay.io/parachain",
      "OnFinality": "wss://kintsugi.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2092,
      "genesisHash": "0x9af9a64e6e4da8e3073901c3ff0cc4c3aad9563786d89daf6ad820b6e14a0b8b",
      "addressPrefix": 2092,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://kintsugi.interlay.io/",
      "blockExplorer": "https://kintsugi.subscan.io/",
      "existentialDeposit": null,
      "symbol": "KINT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2092-34",
          "paraId": 2092,
          "status": "won",
          "startTime": "2021-09-08T04:27:00.000Z",
          "endTime": "2022-08-10T04:27:00.000Z",
          "auctionIndex": 11,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "kintsugi"
    }
  },
  {
    "slug": "kintsugi_test",
    "name": "Kintsugi Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 67,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kintsugi_dfa1bdb733.png",
    "providers": {
      "testnet": "wss://api-dev-kintsugi.interlay.io/parachain"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x3a5a5cd27eb15fd26c37315a0f0b938733bb798c897428448efac5e6150cad06",
      "addressPrefix": 2092,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "KINT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "picasso",
    "name": "Picasso",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 68,
    "icon": "https://static-data.subwallet.app/chains/images/icon/picasso_b491f37486.png",
    "providers": {
      "Composable": "wss://rpc.composablenodes.tech"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2087,
      "genesisHash": "0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc",
      "addressPrefix": 49,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.composable.finance/",
      "blockExplorer": "https://picasso.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "PICA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2270-100",
          "paraId": 2270,
          "status": "won",
          "startTime": "2023-05-31T04:27:00.000Z",
          "endTime": "2024-05-01T04:27:00.000Z",
          "auctionIndex": 84,
          "firstPeriod": 30,
          "lastPeriod": 37
        },
        {
          "relayChain": "kusama",
          "fundId": "2130-85",
          "paraId": 2130,
          "status": "won",
          "startTime": "2022-08-10T04:27:00.000Z",
          "endTime": "2023-07-12T04:27:00.000Z",
          "auctionIndex": 49,
          "firstPeriod": 23,
          "lastPeriod": 30
        },
        {
          "relayChain": "kusama",
          "fundId": "2087-37",
          "paraId": 2087,
          "status": "won",
          "startTime": "2021-12-01T04:27:00.000Z",
          "endTime": "2022-11-02T04:27:00.000Z",
          "auctionIndex": 12,
          "firstPeriod": 17,
          "lastPeriod": 24
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "picasso"
    }
  },
  {
    "slug": "quartz",
    "name": "Quartz",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 69,
    "icon": "https://static-data.subwallet.app/chains/images/icon/quartz_4b192e0de5.png",
    "providers": {
      "Unique Europe": "wss://eu-ws-quartz.unique.network",
      "Unique US": "wss://us-ws-quartz.unique.network",
      "Unique Asia": "wss://asia-ws-quartz.unique.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2095,
      "genesisHash": "0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554",
      "addressPrefix": 255,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://unique.network/quartz/crowdloan/",
      "blockExplorer": "https://quartz.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "QTZ",
      "decimals": 18,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2095-45",
          "paraId": 2095,
          "status": "won",
          "startTime": "2021-12-01T04:27:00.000Z",
          "endTime": "2022-11-02T04:27:00.000Z",
          "auctionIndex": 14,
          "firstPeriod": 17,
          "lastPeriod": 24
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "unique_network",
    "name": "Unique",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 70,
    "icon": "https://static-data.subwallet.app/chains/images/icon/unique_network_2e3617d2d1.png",
    "providers": {
      "unique": "wss://us-ws.unique.network/",
      "UniqueEu": "wss://eu-ws.unique.network/",
      "UniqueAsia": "wss://asia-ws.unique.network/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2037,
      "genesisHash": "0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31",
      "addressPrefix": 7391,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://unique.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "UNQ",
      "decimals": 18,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2037-31",
          "paraId": 2037,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 14,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "unique"
    }
  },
  {
    "slug": "genshiro",
    "name": "Genshiro",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 71,
    "icon": "https://static-data.subwallet.app/chains/images/icon/genshiro_1734447125.png",
    "providers": {
      "Equilibrium": "wss://node.genshiro.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2024,
      "genesisHash": "0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243",
      "addressPrefix": 67,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://genshiro.equilibrium.io/en",
      "blockExplorer": "https://genshiro.subscan.io/",
      "existentialDeposit": null,
      "symbol": "GENS",
      "decimals": 9,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2226-88",
          "paraId": 2226,
          "status": "won",
          "startTime": "2022-11-02T04:27:00.000Z",
          "endTime": "2023-10-04T04:27:00.000Z",
          "auctionIndex": 56,
          "firstPeriod": 25,
          "lastPeriod": 32
        },
        {
          "relayChain": "kusama",
          "fundId": "2024-43",
          "paraId": 2024,
          "status": "won",
          "startTime": "2021-12-01T04:27:00.000Z",
          "endTime": "2022-11-02T04:27:00.000Z",
          "auctionIndex": 15,
          "firstPeriod": 17,
          "lastPeriod": 24
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "genshiro_testnet",
    "name": "Genshiro Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 72,
    "icon": "https://static-data.subwallet.app/chains/images/icon/genshiro_1734447125.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xdec164ef73b27c5b7e404114305102018a2b5a4ddda665bb510ce896ad5ba78d",
      "addressPrefix": 68,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "TOKEN",
      "decimals": 9,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": [],
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subsocial_x",
    "name": "Subsocial",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 73,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subsocial_3e001a3b15.png",
    "providers": {
      "subsocialx": "wss://para.f3joule.space"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2101,
      "genesisHash": "0x4a12be580bb959937a1c7a61d5cf24428ed67fa571974b4007645d1886e7c89f",
      "addressPrefix": 28,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://app.subsocial.network/crowdloan",
      "blockExplorer": null,
      "existentialDeposit": "100000000",
      "symbol": "SUB",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "zeitgeist",
    "name": "Zeitgeist",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 74,
    "icon": "https://static-data.subwallet.app/chains/images/icon/zeitgeist_c8bd3e2ac5.png",
    "providers": {
      "OnFinality": "wss://zeitgeist.api.onfinality.io/public-ws",
      "Dwellir": "wss://zeitgeist-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2092,
      "genesisHash": "0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060",
      "addressPrefix": 73,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.zeitgeist.pm/",
      "blockExplorer": "https://zeitgeist.subscan.io/",
      "existentialDeposit": "50000000",
      "symbol": "ZTG",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2092-53",
          "paraId": 2092,
          "status": "won",
          "startTime": "2022-11-22T01:48:00.000Z",
          "endTime": "2024-09-24T01:48:00.000Z",
          "auctionIndex": 32,
          "firstPeriod": 10,
          "lastPeriod": 17
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "zeitgeist"
    }
  },
  {
    "slug": "sakura",
    "name": "Sakura",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 75,
    "icon": "https://static-data.subwallet.app/chains/images/icon/sakura_81c2a3fc75.png",
    "providers": {
      "Clover": "wss://rpc.sakura.clover.finance"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2016,
      "genesisHash": "0x7b0f142a9299b0886595992f8cac58814c8956de6a31c77caca95db01370fc2c",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://sakura.subscan.io/",
      "existentialDeposit": "500",
      "symbol": "SKU",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2016-49",
          "paraId": 2016,
          "status": "won",
          "startTime": "2022-01-12T04:27:00.000Z",
          "endTime": "2022-12-14T04:27:00.000Z",
          "auctionIndex": 18,
          "firstPeriod": 18,
          "lastPeriod": 25
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "sakura"
    }
  },
  {
    "slug": "shadow",
    "name": "Crust Shadow",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 76,
    "icon": "https://static-data.subwallet.app/chains/images/icon/crust_shadow_e58a33c95d.png",
    "providers": {
      "Crust": "wss://rpc-shadow.crust.network/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2012,
      "genesisHash": "0xd4c0c08ca49dc7c680c3dac71a7c0703e5b222f4b6c03fe4c5219bb8f22c18dc",
      "addressPrefix": 66,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "blockExplorer": "https://shadow.subscan.io/",
      "existentialDeposit": "100000000000",
      "symbol": "CSM",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2225-87",
          "paraId": 2225,
          "status": "won",
          "startTime": "2022-11-02T04:27:00.000Z",
          "endTime": "2023-10-04T04:27:00.000Z",
          "auctionIndex": 57,
          "firstPeriod": 25,
          "lastPeriod": 32
        },
        {
          "relayChain": "kusama",
          "fundId": "2012-53",
          "paraId": 2012,
          "status": "won",
          "startTime": "2022-01-12T04:27:00.000Z",
          "endTime": "2022-12-14T04:27:00.000Z",
          "auctionIndex": 19,
          "firstPeriod": 18,
          "lastPeriod": 25
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "shadow"
    }
  },
  {
    "slug": "uniqueNft",
    "name": "Unique TestNet 2.0",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 77,
    "icon": "https://static-data.subwallet.app/chains/images/icon/unique_network_2e3617d2d1.png",
    "providers": {
      "Unique": "wss://testnet2.unique.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x7cb0b5ec1431e348b7f531f02e5e6ba6d5983e26ba77b58335957f3d00585cbd",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "UNQ",
      "decimals": 15,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "robonomics",
    "name": "Robonomics",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 78,
    "icon": "https://static-data.subwallet.app/chains/images/icon/robonomics_cd3454b4d5.png",
    "providers": {
      "Airalab": "wss://kusama.rpc.robonomics.network/",
      "Samsara": "wss://robonomics.0xsamsara.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2048,
      "genesisHash": "0x631ccc82a078481584041656af292834e1ae6daab61d2875b4dd0c14bb9b17bc",
      "addressPrefix": 32,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://robonomics.network/kusama-slot/",
      "blockExplorer": "https://robonomics.subscan.io/",
      "existentialDeposit": "1000",
      "symbol": "XRT",
      "decimals": 9,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2240-90",
          "paraId": 2240,
          "status": "won",
          "startTime": "2022-12-14T04:27:00.000Z",
          "endTime": "2023-11-15T04:27:00.000Z",
          "auctionIndex": 63,
          "firstPeriod": 26,
          "lastPeriod": 33
        },
        {
          "relayChain": "kusama",
          "fundId": "2048-57",
          "paraId": 2048,
          "status": "won",
          "startTime": "2022-01-12T04:27:00.000Z",
          "endTime": "2022-12-14T04:27:00.000Z",
          "auctionIndex": 20,
          "firstPeriod": 18,
          "lastPeriod": 25
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "robonomics"
    }
  },
  {
    "slug": "integritee",
    "name": "Integritee Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 79,
    "icon": "https://static-data.subwallet.app/chains/images/icon/integritee_kusama_70fdf54661.png",
    "providers": {
      "Integritee": "wss://kusama.api.integritee.network",
      "OnFinality": "wss://integritee-kusama.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2015,
      "genesisHash": "0xf195ef30c646663a24a3164b307521174a86f437c586397a43183c736a8383c1",
      "addressPrefix": 13,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.integritee.network/",
      "blockExplorer": "https://integritee.subscan.io/",
      "existentialDeposit": "1000000000",
      "symbol": "TEER",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2015-59",
          "paraId": 2015,
          "status": "won",
          "startTime": "2022-02-23T04:27:00.000Z",
          "endTime": "2023-01-25T04:27:00.000Z",
          "auctionIndex": 21,
          "firstPeriod": 19,
          "lastPeriod": 26
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "integritee"
    }
  },
  {
    "slug": "integriteePolkadot",
    "name": "Integritee Shell",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 80,
    "icon": "https://static-data.subwallet.app/chains/images/icon/integritee_kusama_70fdf54661.png",
    "providers": {
      "Integritee": "wss://polkadot.api.integritee.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2039,
      "genesisHash": "0xe13e7af377c64e83f95e0d70d5e5c3c01d697a84538776c5b9bbe0e7d7b6034c",
      "addressPrefix": 13,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.integritee.network/",
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "TEER",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2039-40",
          "paraId": 2039,
          "status": "won",
          "startTime": "2022-08-30T01:48:00.000Z",
          "endTime": "2024-07-02T01:48:00.000Z",
          "auctionIndex": 23,
          "firstPeriod": 9,
          "lastPeriod": 16
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "crabParachain",
    "name": "Crab2 Parachain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 81,
    "icon": "https://static-data.subwallet.app/chains/images/icon/crab_network_289d65c62b.png",
    "providers": {
      "Crab": "wss://crab-rpc.darwinia.network/",
      "Dwellir": "wss://darwiniacrab-rpc.dwellir.com"
    },
    "evmInfo": {
      "evmChainId": 44,
      "blockExplorer": "https://crab.subscan.io",
      "existentialDeposit": "0",
      "symbol": "CRAB",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2105,
      "genesisHash": "0x86e49c195aeae7c5c4a86ced251f1a28c67b3c35d8289c387ede1776cdd88b24",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crab.network/plo",
      "blockExplorer": "https://crab.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "CRAB",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2105-60",
          "paraId": 2105,
          "status": "won",
          "startTime": "2022-02-23T04:27:00.000Z",
          "endTime": "2023-01-25T04:27:00.000Z",
          "auctionIndex": 22,
          "firstPeriod": 19,
          "lastPeriod": 26
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "crab"
    }
  },
  {
    "slug": "pangolin",
    "name": "Pangolin",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 82,
    "icon": "https://static-data.subwallet.app/chains/images/icon/pangolin_e8b77c84bc.png",
    "providers": {
      "Pangolin_Network": "wss://pangolin-rpc.darwinia.network"
    },
    "evmInfo": {
      "evmChainId": 43,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "PRING",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": {
      "relaySlug": "rococo",
      "paraId": 2105,
      "genesisHash": "0xb067215e6232ffeed7cede2f92ac6b65f2121523fa221fc76f2e4430086c6b70",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "PRING",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "chainx",
    "name": "Chain X",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 83,
    "icon": "https://static-data.subwallet.app/chains/images/icon/chainx_0d1d5c4700.png",
    "providers": {
      "chainx ": "wss://mainnet.chainx.org/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6ac13efb5b368b97b4934cef6edfdd99c2af51ba5109bfb8dacc116f9c584c10",
      "addressPrefix": 44,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "PCX",
      "decimals": 8,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "acala_testnet",
    "name": "Acala Mandala TC7",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 84,
    "icon": "https://static-data.subwallet.app/chains/images/icon/acala_10b077e14b.png",
    "providers": {
      "Mandala": "wss://mandala-tc9-rpc.aca-staging.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x5c562e6300954998233c9a40b6b86f3028977e6d32d0da1af207738d19f98c1b",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://acala-testnet.subscan.io/",
      "existentialDeposit": null,
      "symbol": "ACA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "acala-testnet"
    }
  },
  {
    "slug": "mangatax",
    "name": "MangataX Public Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 85,
    "icon": "https://static-data.subwallet.app/chains/images/icon/mangata_x_37c066f37a.png",
    "providers": {
      "mangatax": "wss://collator-01-ws-rococo.mangata.online"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x797fe0d6ea6917b5a36707961d819dca1826628123510730425c3bafc65ccf59",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "MGAT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "mangatax_para",
    "name": "Mangata X",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 86,
    "icon": "https://static-data.subwallet.app/chains/images/icon/mangata_x_37c066f37a.png",
    "providers": {
      "mangata": "wss://kusama-rpc.mangata.online",
      "Mangata Archive": "wss://kusama-archive.mangata.online"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2110,
      "genesisHash": "0xd611f22d291c5b7b69f1e105cca03352984c344c4421977efaa4cbdd1834e2aa",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://mangatax.subscan.io/",
      "existentialDeposit": null,
      "symbol": "MGX",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2256-91",
          "paraId": 2256,
          "status": "won",
          "startTime": "2023-01-25T04:27:00.000Z",
          "endTime": "2023-12-27T04:27:00.000Z",
          "auctionIndex": 68,
          "firstPeriod": 27,
          "lastPeriod": 34
        },
        {
          "relayChain": "kusama",
          "fundId": "2110-66",
          "paraId": 2110,
          "status": "won",
          "startTime": "2022-04-06T04:27:00.000Z",
          "endTime": "2023-03-08T04:27:00.000Z",
          "auctionIndex": 26,
          "firstPeriod": 20,
          "lastPeriod": 27
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "mangatax"
    }
  },
  {
    "slug": "encointer",
    "name": "Encointer",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 87,
    "icon": "https://static-data.subwallet.app/chains/images/icon/encointer_3ba587ebc9.png",
    "providers": {
      "Encointer Association": "wss://kusama.api.encointer.org"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 1001,
      "genesisHash": "0x7dd99936c1e9e6d1ce7d90eb6f33bea8393b4bf87677d675aa63c9cb3e8c5b5b",
      "addressPrefix": 2,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://encointer.subscan.io/",
      "existentialDeposit": "3333333",
      "symbol": "KSM",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "litmus",
    "name": "Litmus",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 88,
    "icon": "https://static-data.subwallet.app/chains/images/icon/litmus_2e86f51933.png",
    "providers": {
      "litmus": "wss://rpc.litmus-parachain.litentry.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2106,
      "genesisHash": "0xda5831fbc8570e3c6336d0d72b8c08f8738beefec812df21ef2afc2982ede09c",
      "addressPrefix": 131,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://kusama-crowdloan.litentry.com/",
      "blockExplorer": null,
      "existentialDeposit": "100000000000",
      "symbol": "LIT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2106-63",
          "paraId": 2106,
          "status": "won",
          "startTime": "2022-02-23T04:27:00.000Z",
          "endTime": "2023-01-25T04:27:00.000Z",
          "auctionIndex": 23,
          "firstPeriod": 19,
          "lastPeriod": 26
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "litentry",
    "name": "Litentry",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 89,
    "icon": "https://static-data.subwallet.app/chains/images/icon/litentry_66fd883eb2.png",
    "providers": {
      "Litentry": "wss://rpc.litentry-parachain.litentry.io",
      "Dwellir": "wss://litentry-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2013,
      "genesisHash": "0x2fc8bb6ed7c0051bdcf4866c322ed32b6276572713607e3297ccf411b8f14aa9",
      "addressPrefix": 31,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://crowdloan.litentry.com/",
      "blockExplorer": null,
      "existentialDeposit": "100000000000",
      "symbol": "LIT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2013-35",
          "paraId": 2013,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 15,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "tinkernet",
    "name": "Tinkernet",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 90,
    "icon": "https://static-data.subwallet.app/chains/images/icon/tinkernet_parachain_f670b63d3b.png",
    "providers": {
      "Dwellir": "wss://tinkernet-rpc.dwellir.com",
      "Light Client": "light://substrate-connect/kusama/tinkernet"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2125,
      "genesisHash": "0xd42e9606a995dfe433dc7955dc2a70f495f350f373daa200098ae84437816ad2",
      "addressPrefix": 117,
      "chainType": "PARACHAIN",
      "crowdloanUrl": "https://invarch.network/tinkernet",
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "TNKR",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2125-80",
          "paraId": 2125,
          "status": "won",
          "startTime": "2022-08-10T04:27:00.000Z",
          "endTime": "2023-07-12T04:27:00.000Z",
          "auctionIndex": 43,
          "firstPeriod": 23,
          "lastPeriod": 30
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "imbue_network",
    "name": "Imbue Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 91,
    "icon": "https://static-data.subwallet.app/chains/images/icon/imbue_network_d609852532.png",
    "providers": {
      "Imbue": "wss://kusama.imbuenetwork.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2121,
      "genesisHash": "0xca93a37c913a25fa8fdb33c7f738afc39379cb71d37874a16d4c091a5aef9f89",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000000000",
      "symbol": "IMBU",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2121-79",
          "paraId": 2121,
          "status": "won",
          "startTime": "2022-06-29T04:27:00.000Z",
          "endTime": "2023-05-31T04:27:00.000Z",
          "auctionIndex": 40,
          "firstPeriod": 22,
          "lastPeriod": 29
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "subspace_test",
    "name": "Subspace Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 92,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_d693cf5ecd.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x332ef6e751e25426e38996c51299dfc53bcd56f40b53dce2b2fc8442ae9c4a74",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subspace_gemini_2a",
    "name": "Subspace Gemini 2a",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 93,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_d693cf5ecd.png",
    "providers": {
      "Europe 0": "wss://eu-0.gemini-2a.subspace.network/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x43d10ffd50990380ffe6c9392145431d630ae67e89dbc9c014cac2a417759101",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.subspace.network/#/gemini-2a",
      "existentialDeposit": "500",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subspace_gemini_3c",
    "name": "Subspace Gemini 3c",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 94,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_d693cf5ecd.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xab946a15b37f59c5f4f27c5de93acde9fe67a28e0b724a43a30e4fe0e87246b7",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.subspace.network/#/gemini-3c",
      "existentialDeposit": "500",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subspace_gemini_3d",
    "name": "Subspace Gemini 3d",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 95,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_d693cf5ecd.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x7f489750cfe91e17fc19b42a5acaba41d1975cedd3440075d4a4b4171ad0ac20",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.subspace.network/#/gemini-3d",
      "existentialDeposit": "500",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subspace_gemini_3e",
    "name": "Subspace Gemini 3e",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 96,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_d693cf5ecd.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xa3cd4b592d93f79943fbc58fc90ca8f516106699c9cf4d7ada98ca22877bc1ae",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.subspace.network/#/gemini-3e",
      "existentialDeposit": "500",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subspace_gemini_3f",
    "name": "Subspace Gemini 3f",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 97,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_d693cf5ecd.png",
    "providers": {
      "Gemini 3f": "wss://rpc-0.gemini-3f.subspace.network/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x92e91e657747c41eeabed5129ff51689d2e935b9f6abfbd5dfcb2e1d0d035095",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.subspace.network/#/gemini-3f",
      "existentialDeposit": "500",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "origintrail",
    "name": "OriginTrail",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 98,
    "icon": "https://static-data.subwallet.app/chains/images/icon/origintrail_cda66dc997.png",
    "providers": {
      "TraceLabs": "wss://parachain-rpc.origin-trail.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2043,
      "genesisHash": "0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174",
      "addressPrefix": 101,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://origintrail.subscan.io/",
      "existentialDeposit": "1000000000000",
      "symbol": "OTP",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2043-38",
          "paraId": 2043,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 17,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "origintrail"
    }
  },
  {
    "slug": "subspace_gemini_3g",
    "name": "Subspace Gemini 3g",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 98,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subspace_ba6bca778d.png",
    "providers": {
      "Gemini 3g": "wss://rpc-0.gemini-3g.subspace.network/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x418040fc282f5e5ddd432c46d05297636f6f75ce68d66499ff4cbda69ccd180b",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://subspace.subscan.io/",
      "existentialDeposit": "500",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "subspace"
    }
  },
  {
    "slug": "dorafactory",
    "name": "Dorafactory",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 99,
    "icon": "https://static-data.subwallet.app/chains/images/icon/dora_factory_f4c4f5b340.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2115,
      "genesisHash": "0x577d331ca43646f547cdaa07ad0aa387a383a93416764480665103081f3eaf14",
      "addressPrefix": 128,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "DORA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2115-74",
          "paraId": 2115,
          "status": "won",
          "startTime": "2022-05-18T04:27:00.000Z",
          "endTime": "2023-04-19T04:27:00.000Z",
          "auctionIndex": 33,
          "firstPeriod": 21,
          "lastPeriod": 28
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "bajun",
    "name": "Bajun Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 100,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bajun_network_fa6d5efe53.png",
    "providers": {
      "AjunaNetwork": "wss://rpc-parachain.bajun.network",
      "OnFinality": "wss://bajun.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2119,
      "genesisHash": "0x35a06bfec2edf0ff4be89a6428ccd9ff5bd0167d618c5a0d4341f9600a458d14",
      "addressPrefix": 1337,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://bajun.subscan.io/",
      "existentialDeposit": "1000000000",
      "symbol": "BAJU",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2119-76",
          "paraId": 2119,
          "status": "won",
          "startTime": "2022-06-29T04:27:00.000Z",
          "endTime": "2023-05-31T04:27:00.000Z",
          "auctionIndex": 37,
          "firstPeriod": 22,
          "lastPeriod": 29
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "bajun"
    }
  },
  {
    "slug": "dancebox",
    "name": "Dancebox",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 100,
    "icon": "https://static-data.subwallet.app/chains/images/icon/tanssi_2e13dc9c66.png",
    "providers": {
      "Dancebox": "wss://fraa-dancebox-rpc.a.dancebox.tanssi.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": 3000,
      "genesisHash": "0x27aafd88e5921f5d5c6aebcd728dacbbf5c2a37f63e2eda301f8e0def01c43ea",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "DANCE",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "listen",
    "name": "Listen Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 101,
    "icon": "https://static-data.subwallet.app/chains/images/icon/listen_198a76f476.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2118,
      "genesisHash": "0x48eb7f3fff34e702aa2b504674df8f8afbf9889f804e3088c0cb662e433552a0",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "LT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "kabocha",
    "name": "Kabocha",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 102,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kabocha_94a09c6441.png",
    "providers": {
      "JelliedOwl": "wss://kabocha.jelliedowl.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2113,
      "genesisHash": "0xfeb426ca713f0f46c96465b8f039890370cf6bfd687c9076ea2843f58a6ae8a7",
      "addressPrefix": 27,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "KAB",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2113-73",
          "paraId": 2113,
          "status": "won",
          "startTime": "2022-06-29T04:27:00.000Z",
          "endTime": "2023-05-31T04:27:00.000Z",
          "auctionIndex": 38,
          "firstPeriod": 22,
          "lastPeriod": 29
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "gmdie",
    "name": "GM Parachain",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 103,
    "icon": "https://static-data.subwallet.app/chains/images/icon/gmdie_71aba354c9.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2123,
      "genesisHash": "0x19a3733beb9cb8a970a308d835599e9005e02dc007a35440e461a451466776f8",
      "addressPrefix": 7013,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "FREN",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2123-83",
          "paraId": 2123,
          "status": "won",
          "startTime": "2022-08-10T04:27:00.000Z",
          "endTime": "2023-07-12T04:27:00.000Z",
          "auctionIndex": 48,
          "firstPeriod": 23,
          "lastPeriod": 30
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "ternoa",
    "name": "Ternoa",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 104,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ternoa_3ede8eb2b7.png",
    "providers": {
      "ternoa": "wss://mainnet.ternoa.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "150000000000000000",
      "symbol": "CAPS",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "tanganika",
    "name": "DataHighway Tanganika",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 105,
    "icon": "https://static-data.subwallet.app/chains/images/icon/tanganika_22fc543ea4.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2116,
      "genesisHash": null,
      "addressPrefix": 33,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://datahighway.subscan.io/",
      "existentialDeposit": null,
      "symbol": "DHX",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2116-78",
          "paraId": 2116,
          "status": "won",
          "startTime": "2022-06-29T04:27:00.000Z",
          "endTime": "2023-05-31T04:27:00.000Z",
          "auctionIndex": 39,
          "firstPeriod": 22,
          "lastPeriod": 29
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "datahighway"
    }
  },
  {
    "slug": "pendulum",
    "name": "Pendulum",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 106,
    "icon": "https://static-data.subwallet.app/chains/images/icon/pendulum_8b61e1436b.png",
    "providers": {
      "Pendulum": "wss://rpc-pendulum.prd.pendulumchain.tech"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2094,
      "genesisHash": "0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86",
      "addressPrefix": 56,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "PEN",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2094-55",
          "paraId": 2094,
          "status": "won",
          "startTime": "2023-02-14T01:48:00.000Z",
          "endTime": "2024-12-17T01:48:00.000Z",
          "auctionIndex": 35,
          "firstPeriod": 11,
          "lastPeriod": 18
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "gear_testnet",
    "name": "Gear Staging Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 107,
    "icon": "https://static-data.subwallet.app/chains/images/icon/gear_6af254c62e.png",
    "providers": {
      "gear": "wss://rpc-node.gear-tech.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6f022bd353c56b3e441507e1173601fd9dc0fb7547e6a95bbaf9b21f311bcab6",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "500",
      "symbol": "Unit",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "ternoa_alphanet",
    "name": "Ternoa Alphanet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 108,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ternoa_3ede8eb2b7.png",
    "providers": {
      "ternoa": "wss://alphanet.ternoa.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x18bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6ace",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "150000000000000000",
      "symbol": "CAPS",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "calamari_test",
    "name": "Calamari Staging",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 109,
    "icon": "https://static-data.subwallet.app/chains/images/icon/calamarinetwork_ad869dd66b.png",
    "providers": {
      "calamari_test": "wss://c1.calamari.seabird.systems"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x2ae061f08422b6503b8aa5f401242a209999669c3b8945f814dc096fb1a977bd",
      "addressPrefix": 78,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000000000",
      "symbol": "KMA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "boba",
    "name": "Boba Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 110,
    "icon": "https://static-data.subwallet.app/chains/images/icon/boba_network_78cd37f0d6.png",
    "providers": {
      "Read RPC": "https://lightning-replica.boba.network",
      "Write RPC": "https://mainnet.boba.network"
    },
    "evmInfo": {
      "evmChainId": 288,
      "blockExplorer": "https://bobascan.com/",
      "existentialDeposit": "0",
      "symbol": "ETH",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "bobabeam",
    "name": "Bobabeam",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 111,
    "icon": "https://static-data.subwallet.app/chains/images/icon/boba_network_78cd37f0d6.png",
    "providers": {
      "RPC": "https://bobabeam.boba.network",
      "Replica RPC": "https://replica.bobabeam.boba.network"
    },
    "evmInfo": {
      "evmChainId": 1294,
      "blockExplorer": "https://blockexplorer.bobabeam.boba.network",
      "existentialDeposit": "0",
      "symbol": "BOBA",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "kilt_peregrine",
    "name": "KILT Peregrine",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 112,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kilt_35ce98e3b5.png",
    "providers": {
      "kilt": "wss://peregrine.kilt.io/parachain-public-ws/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xa0c6e3bac382b316a68bca7141af1fba507207594c761076847ce358aeedcc21",
      "addressPrefix": 38,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://kilt-testnet.subscan.io/",
      "existentialDeposit": "10000000000000",
      "symbol": "PILT",
      "decimals": 15,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "kilt-testnet"
    }
  },
  {
    "slug": "xx_network",
    "name": "XX Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 113,
    "icon": "https://static-data.subwallet.app/chains/images/icon/xxnetwork_328e821418.png",
    "providers": {
      "XX Foundation": "wss://rpc.xx.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa",
      "addressPrefix": 55,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "xx",
      "decimals": 9,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "watr_network",
    "name": "Watr Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 114,
    "icon": "https://static-data.subwallet.app/chains/images/icon/watr_protocol_a0cd47353a.png",
    "providers": {
      "watr": "wss://rpc.dev.watr.org"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2058,
      "genesisHash": "0xb53c620c41860278fa3068a5367c8eedceefce8a7c29237d830bc09a71737b5d",
      "addressPrefix": 19,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000000",
      "symbol": "WATRD",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "watr_network_evm",
    "name": "Watr Testnet - EVM",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 115,
    "icon": "https://static-data.subwallet.app/chains/images/icon/watr_protocol_a0cd47353a.png",
    "providers": {
      "watr": "https://rpc.dev.watr.org"
    },
    "evmInfo": {
      "evmChainId": 688,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "WATRD",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "fusotao",
    "name": "Fusotao",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 116,
    "icon": "https://static-data.subwallet.app/chains/images/icon/fusotao_0e41642ad0.png",
    "providers": {
      "fusotao": "wss://gateway.mainnet.octopus.network/fusotao/0efwa9v0crdx4dg3uj8jdmc5y7dj4ir2"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xa7113159e275582ee71ee499b24378a2416f34dc5aaf714443f0d11c6c3d99d3",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1",
      "symbol": "TAO",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "discovol",
    "name": "Discovol",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 117,
    "icon": "https://static-data.subwallet.app/chains/images/icon/discovol_09aef428e0.png",
    "providers": {
      "discovol": "wss://gateway.mainnet.octopus.network/discovol/afpft46l1egfhrv8at5pfyrld03zseo1"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x2dfbcf7700297bd8ce07a4665ab39e2ed1a3790df783b936988c85eb87e38bee",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000",
      "symbol": "DISC",
      "decimals": 14,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "discovol_testnet",
    "name": "Discovol Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 118,
    "icon": "https://static-data.subwallet.app/chains/images/icon/discovol_09aef428e0.png",
    "providers": {
      "discovol_testnet": "wss://gateway.testnet.octopus.network/discovol/o4urcey87y4n1qimhfrad92gzs315z9h"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xdc1922b7f60b4925091bbfdd912684c449de7a7cdc5592e9eab11fee55fa53ec",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000",
      "symbol": "DISC",
      "decimals": 14,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "atocha",
    "name": "Atocha",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 119,
    "icon": "https://static-data.subwallet.app/chains/images/icon/atocha_bef71b71eb.png",
    "providers": {
      "atocha": "wss://gateway.mainnet.octopus.network/atocha/jungxomf4hdcfocwcalgoiz64g9avjim"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x1f11f745be512a17f39b571a9391b5ee6747b900c1db98176828e4a1346dbe9b",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000000000",
      "symbol": "ATO",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "myriad",
    "name": "Myriad",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 120,
    "icon": "https://static-data.subwallet.app/chains/images/icon/myriad_d289b632e2.png",
    "providers": {
      "myriad": "wss://gateway.mainnet.octopus.network/myriad/a4cb0a6e30ff5233a3567eb4e8cb71e0"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x74ed91fbc18497f011290f9119a2217908649170337b6414a2d44923ade07063",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000000000",
      "symbol": "MYRIA",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "deBio",
    "name": "DeBio",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 121,
    "icon": "https://static-data.subwallet.app/chains/images/icon/dbio_a7296e7986.png",
    "providers": {
      "deBio": "wss://gateway.mainnet.octopus.network/debionetwork/ae48005a0c7ecb4053394559a7f4069e"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x996800af345b3109acdada9913e36d1efa98b89e7dcd0b61b70fdbfc13b2fa50",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000000",
      "symbol": "DBIO",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "collectives",
    "name": "Polkadot Collectives",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 124,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polkadot_collectives_0d4f158ac1.png",
    "providers": {
      "viaParity": "wss://polkadot-collectives-rpc.polkadot.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 1001,
      "genesisHash": "0x46ee89aa2eedd13e988962630ec9fb7565964cf5023bb351f2b6b25c1b68b0b2",
      "addressPrefix": 0,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "DOT",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "ajunaPolkadot",
    "name": "Ajuna Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 125,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ajuna_network_98e7999ad4.png",
    "providers": {
      "viaAjunaNetwork": "wss://rpc-parachain.ajuna.network",
      "OnFinality": "wss://ajuna.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2051,
      "genesisHash": "0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee",
      "addressPrefix": 1328,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "AJUN",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2051-52",
          "paraId": 2051,
          "status": "won",
          "startTime": "2022-11-22T01:48:00.000Z",
          "endTime": "2024-09-24T01:48:00.000Z",
          "auctionIndex": 31,
          "firstPeriod": 10,
          "lastPeriod": 17
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "bitgreen",
    "name": "Bitgreen",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 126,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bitgreen_cc38478fa6.png",
    "providers": {
      "viaBitgreen": "wss://mainnet.bitgreen.org"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2048,
      "genesisHash": "0xc14597baeccb232d662770d2d50ae832ca8c3192693d2b0814e6433f2888ddd6",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "BBB",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "frequency",
    "name": "Frequency",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 127,
    "icon": "https://static-data.subwallet.app/chains/images/icon/frequency_87c25c3315.png",
    "providers": {
      "Frequency 0": "wss://0.rpc.frequency.xyz",
      "Frequency 1": "wss://1.rpc.frequency.xyz"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2091,
      "genesisHash": "0x4a587bf17a404e3572747add7aab7bbe56e805a5479c6c436f07f36fcc8d3ae1",
      "addressPrefix": 90,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000",
      "symbol": "FRQCY",
      "decimals": 8,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "hashedNetwork",
    "name": "Hashed Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 128,
    "icon": "https://static-data.subwallet.app/chains/images/icon/hashed_78ed238d01.png",
    "providers": {
      "Hashed Systems": "wss://c1.hashed.live",
      "Hashed Systems 2": "wss://c2.hashed.network",
      "Hashed Systems 3": "wss://c3.hashed.live"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2093,
      "genesisHash": "0x331645ae3db556c7754a82f79cece12cce3420975d5b0219d51b1cb4f6ddc21c",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "HASH",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2093-58",
          "paraId": 2093,
          "status": "won",
          "startTime": "2023-02-14T01:48:00.000Z",
          "endTime": "2024-12-17T01:48:00.000Z",
          "auctionIndex": 40,
          "firstPeriod": 11,
          "lastPeriod": 18
        },
        {
          "relayChain": "polkadot",
          "fundId": "2093-54",
          "paraId": 2093,
          "status": "failed",
          "startTime": "2022-11-22T01:48:00.000Z",
          "endTime": "2024-09-24T01:48:00.000Z",
          "auctionIndex": 34,
          "firstPeriod": 10,
          "lastPeriod": 17
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "kapex",
    "name": "Kapex",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 129,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kapex_6b5bc7b8eb.png",
    "providers": {
      "viaTotem": "wss://kapex-rpc.dwellir.com"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2007,
      "genesisHash": "0x7838c3c774e887c0a53bcba9e64f702361a1a852d5550b86b58cd73827fa1e1e",
      "addressPrefix": 2007,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1",
      "symbol": "KPX",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2007-39",
          "paraId": 2007,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 20,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "kylinNetwork",
    "name": "Kylin Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 130,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kylin_7a84f69f18.png",
    "providers": {
      "Kylin Network": "wss://polkadot.kylin-node.co.uk"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2052,
      "genesisHash": "0xf2584690455deda322214e97edfffaf4c1233b6e4625e39478496b3e2f5a44c5",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "KYL",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2052-43",
          "paraId": 2052,
          "status": "won",
          "startTime": "2022-08-30T01:48:00.000Z",
          "endTime": "2024-07-02T01:48:00.000Z",
          "auctionIndex": 25,
          "firstPeriod": 9,
          "lastPeriod": 16
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "ipci",
    "name": "DAO IPCI",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 131,
    "icon": "https://static-data.subwallet.app/chains/images/icon/dao_ipci_93612c0315.png",
    "providers": {
      "viaAiralab": "wss://kusama.rpc.ipci.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2222,
      "genesisHash": "0x6f0f071506de39058fe9a95bbca983ac0e9c5da3443909574e95d52eb078d348",
      "addressPrefix": 32,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000",
      "symbol": "MITO",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "kico",
    "name": "KICO",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 132,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kico_d1b01fe5e0.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2107,
      "genesisHash": "0x52149c30c1eb11460dce6c08b73df8d53bb93b4a15d0a2e7fd5dafe86a73c0da",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000000000000",
      "symbol": "KICO",
      "decimals": 14,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2107-64",
          "paraId": 2107,
          "status": "won",
          "startTime": "2022-02-23T04:27:00.000Z",
          "endTime": "2023-01-25T04:27:00.000Z",
          "auctionIndex": 25,
          "firstPeriod": 19,
          "lastPeriod": 26
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "luhnNetwork",
    "name": "Luhn Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 133,
    "icon": "https://static-data.subwallet.app/chains/images/icon/luhn_91af946734.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2232,
      "genesisHash": "0xba713fdbf674083c5541c1439b83d8e593e1105f35f11954bcc50d0bf9607873",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": "LUHN",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "pichiu",
    "name": "Pichiu Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 134,
    "icon": "https://static-data.subwallet.app/chains/images/icon/pichiu_9291f572fd.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2102,
      "genesisHash": "0x0e06260459b4f9034aba0a75108c08ed73ea51d2763562749b1d3600986c4ea5",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000",
      "symbol": "PCHU",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2102-69",
          "paraId": 2102,
          "status": "won",
          "startTime": "2022-05-18T04:27:00.000Z",
          "endTime": "2023-04-19T04:27:00.000Z",
          "auctionIndex": 31,
          "firstPeriod": 21,
          "lastPeriod": 28
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "riodefi",
    "name": "RioDeFi",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 135,
    "icon": "https://static-data.subwallet.app/chains/images/icon/riodefi_b59a3a5e1d.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2227,
      "genesisHash": "0x70310f31bdb878e9920121807ee46236bda2e00c10eb105a40b386bd7ad16906",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "UNIT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "automata",
    "name": "Automata",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 136,
    "icon": "https://static-data.subwallet.app/chains/images/icon/automata_network_21b619c323.png",
    "providers": {
      "Automata Network": "wss://api.ata.network",
      "OnFinality": "wss://automata.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xc8eda34601b5a48c73f47ee39a3a86a858c34f044185b17dc7d5ad155813dc63",
      "addressPrefix": 2349,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000000000",
      "symbol": "ATA",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "creditcoin",
    "name": "Creditcoin",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 137,
    "icon": "https://static-data.subwallet.app/chains/images/icon/creditcoin_96595e8993.png",
    "providers": {
      "Creditcoin Foundation": "wss://mainnet.creditcoin.network/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xdd954cbf4000542ef1a15bca509cd89684330bee5e23766c527cdb0d7275e9c2",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://creditcoin.subscan.io/",
      "existentialDeposit": "500",
      "symbol": "CTC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "creditcoin"
    }
  },
  {
    "slug": "crownSterling",
    "name": "Crown Sterling",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 138,
    "icon": "https://static-data.subwallet.app/chains/images/icon/crownsterling_17121da1f7.png",
    "providers": {
      "Crown Sterling": "wss://blockchain.crownsterling.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xce24ecf534daea9cd46e425659ef4950a57dd29d07272b423220129c323a64b7",
      "addressPrefix": 0,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1",
      "symbol": "CSOV",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "dockPosMainnet",
    "name": "Dock",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 139,
    "icon": "https://static-data.subwallet.app/chains/images/icon/dockmainnet_571734a814.png",
    "providers": {
      "Dock Association": "wss://mainnet-node.dock.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae",
      "addressPrefix": 22,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://dock.subscan.io/",
      "existentialDeposit": "500",
      "symbol": "DOCK",
      "decimals": 6,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "dock"
    }
  },
  {
    "slug": "kusari",
    "name": "Kusari",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 140,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kusari_1e6865b53c.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x4959f8d87d40d9ef516459ff177111bb03d875e5a7ed69282f6b689a707b69f5",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "KSI",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "logion",
    "name": "logion Standalone",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 141,
    "icon": "https://static-data.subwallet.app/chains/images/icon/logion_950fffea89.png",
    "providers": {
      "Logion": "wss://rpc01.logion.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": null,
      "genesisHash": "0xe9d7420a5f73edef005ccb8e043500aa5b2458f173912184ea93c14dc035a203",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "500",
      "symbol": "LGNT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": 3354,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "3341-73",
          "paraId": 3341,
          "status": "failed",
          "startTime": "2023-10-24T01:48:00.000Z",
          "endTime": "2025-08-26T01:48:00.000Z",
          "auctionIndex": 52,
          "firstPeriod": 14,
          "lastPeriod": 21
        },
        {
          "relayChain": "polkadot",
          "fundId": "3354-77",
          "paraId": 3354,
          "status": "won",
          "startTime": "2024-01-16T01:48:00.000Z",
          "endTime": "2025-11-18T01:48:00.000Z",
          "auctionIndex": 55,
          "firstPeriod": 15,
          "lastPeriod": 22
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "neatcoin",
    "name": "Neatcoin",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 142,
    "icon": "https://static-data.subwallet.app/chains/images/icon/default_b9919fc772.png",
    "providers": {
      "Neatcoin": "wss://rpc.neatcoin.org/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xfbb541421d30423c9a753ffa844b64fd44d823f513bf49e3b73b3a656309a595",
      "addressPrefix": 48,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000",
      "symbol": "NEAT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "nftmart",
    "name": "NFTMart",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 143,
    "icon": "https://static-data.subwallet.app/chains/images/icon/nftmart_0353c61648.png",
    "providers": {
      "NFTMart": "wss://mainnet.nftmart.io/rpc/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xfcf9074303d8f319ad1bf0195b145871977e7c375883b834247cb01ff22f51f9",
      "addressPrefix": 12191,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000000",
      "symbol": "NMT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "polymesh",
    "name": "Polymesh Mainnet",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 144,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polymesh_c842245ac2.png",
    "providers": {
      "Polymath": "wss://mainnet-rpc.polymesh.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063",
      "addressPrefix": 12,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://polymesh.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "POLYX",
      "decimals": 6,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "polymesh"
    }
  },
  {
    "slug": "riochain",
    "name": "RioChain",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 145,
    "icon": "https://static-data.subwallet.app/chains/images/icon/riochain_409ac35c68.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xd8c6dc2e057b94d05c870a7b39bfb30ae10202ed9cf7731d28dafcfe9458e307",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "RFUEL",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "sherpax",
    "name": "SherpaX",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 146,
    "icon": "https://static-data.subwallet.app/chains/images/icon/sherpax_3ab3244b98.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xe195ef16d0c628b5cab1486a233865def6e71f8b7814dd058a6b93a85118b796",
      "addressPrefix": 44,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000",
      "symbol": "KSX",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "sora_substrate",
    "name": "SORA",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 147,
    "icon": "https://static-data.subwallet.app/chains/images/icon/sora_cd4fcddf6e.png",
    "providers": {
      "SORA Parliament Ministry of Finance #2": "wss://mof2.sora.org",
      "SORA Parliament Ministry of Finance": "wss://ws.mof.sora.org",
      "SORA Parliament Ministry of Finance #3": "wss://mof3.sora.org",
      "OnFinality": "wss://sora.api.onfinality.io/public-ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": null,
      "genesisHash": "0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5",
      "addressPrefix": 69,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://sora.subscan.io/",
      "existentialDeposit": "0",
      "symbol": "XOR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": 2025,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2025-75",
          "paraId": 2025,
          "status": "in_auction",
          "startTime": "2024-01-16T01:48:00.000Z",
          "endTime": "2025-11-18T01:48:00.000Z",
          "auctionIndex": 0,
          "firstPeriod": 15,
          "lastPeriod": 22
        },
        {
          "relayChain": "polkadot",
          "fundId": "2025-69",
          "paraId": 2025,
          "status": "failed",
          "startTime": "2023-10-24T01:48:00.000Z",
          "endTime": "2025-08-26T01:48:00.000Z",
          "auctionIndex": 51,
          "firstPeriod": 14,
          "lastPeriod": 21
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "sora"
    }
  },
  {
    "slug": "swapdex",
    "name": "Swapdex",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 148,
    "icon": "https://static-data.subwallet.app/chains/images/icon/swapdex_6b2a38d123.png",
    "providers": {
      "Swapdex": "wss://ws.swapdex.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x15bac4f0a9aad3f46c5fc067fdb59b3ff29738dcd491fe5e37b4b76121163471",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "SDX",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "3dpass",
    "name": "3DPass",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 149,
    "icon": "https://static-data.subwallet.app/chains/images/icon/3dpass_4c12535d4e.png",
    "providers": {
      "3dpass": "wss://rpc.3dpass.org",
      "3dpscan": "wss://rpc.3dpscan.io",
      "3dpass2": "wss://rpc2.3dpass.org"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66",
      "addressPrefix": 71,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://3dpscan.io/",
      "existentialDeposit": "1",
      "symbol": "P3D",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "alephSmartNet",
    "name": "Aleph Zero Smartnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 150,
    "icon": "https://static-data.subwallet.app/chains/images/icon/aleph_zero_5b98dbe0ae.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6153e2745a56d188365372b5cce283dfddbb96b17e9bb396cceb4630103ff92b",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "500",
      "symbol": "SZERO",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "kulupu",
    "name": "Kulupu",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 151,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kulupu_network_2f214b0894.png",
    "providers": {
      "Kulupu": "wss://rpc.kulupu.corepaper.org/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba",
      "addressPrefix": 16,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000",
      "symbol": "KLP",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "joystream",
    "name": "Joystream",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 152,
    "icon": "https://static-data.subwallet.app/chains/images/icon/joystream_fe4b9f5208.png",
    "providers": {
      "Jsgenesis": "wss://rpc.joystream.org"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6b5e488e0fa8f9821110d5c13f4c468abcd43ce5e297e62b34c53c3346465956",
      "addressPrefix": 126,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://joystream.subscan.io/",
      "existentialDeposit": "266666560",
      "symbol": "JOY",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "joystream"
    }
  },
  {
    "slug": "aventus_testnet",
    "name": "Aventus Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 153,
    "icon": "https://static-data.subwallet.app/chains/images/icon/aventus_5342678346.png",
    "providers": {
      "Aventus": "wss://public-rpc.public-testnet.aventus.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xa6ffcef7fb8caadf7f6c5ad8ada65e3eaa90d1604f3eabda546ff1d486865a0c",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://explorer.testnet.aventus.io/",
      "existentialDeposit": "0",
      "symbol": "AVT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "vara_network",
    "name": "Vara Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 154,
    "icon": "https://static-data.subwallet.app/chains/images/icon/vara_be88d00224.png",
    "providers": {
      "Vara": "wss://rpc.vara-network.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xfe1b4c55fd4d668101126434206571a7838a8b6b93a6d1b95d607e78e6c53763",
      "addressPrefix": 137,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://vara.subscan.io/",
      "existentialDeposit": "10000000000000",
      "symbol": "VARA",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "vara"
    }
  },
  {
    "slug": "kate",
    "name": "Avail Kate Testnet",
    "isTestnet": true,
    "chainStatus": "INACTIVE",
    "ordinal": 155,
    "icon": "https://static-data.subwallet.app/chains/images/icon/avail_16bb040742.png",
    "providers": {
      "AVAIL": "wss://kate.avail.tools/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xd12003ac837853b062aaccca5ce87ac4838c48447e41db4a3dcfb5bf312350c6",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000",
      "symbol": "AVL",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "bridgeHubPolkadot",
    "name": "Polkadot Bridge Hub",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 156,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polkadot_bridge_hub_c3ab010f45.png",
    "providers": {
      "Parity": "wss://polkadot-bridge-hub-rpc.polkadot.io",
      "Stakeworld": "wss://dot-rpc.stakeworld.io/bridgehub"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 1002,
      "genesisHash": "0xdcf691b5a3fbe24adc99ddc959c0561b973e329b1aef4c4b22e7bb2ddecb4464",
      "addressPrefix": 0,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "DOT",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "bridgeHubKusama",
    "name": "Kusama Bridge Hub",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 157,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kusama_bridge_hub_e6daccf32b.png",
    "providers": {
      "Parity": "wss://kusama-bridge-hub-rpc.polkadot.io",
      "Stakeworld": "wss://ksm-rpc.stakeworld.io/bridgehub",
      "IBP-GeoDNS1": "wss://sys.ibp.network/bridgehub-kusama",
      "IBP-GeoDNS2": "wss://sys.dotters.network/bridgehub-kusama"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 1002,
      "genesisHash": "0x00dcb981df86429de8bbacf9803401f09485366c44efbf53af9ecfab03adc7e5",
      "addressPrefix": 2,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "33333333",
      "symbol": "KSM",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "fantom_testnet",
    "name": "Fantom Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 158,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ftm_8ccdce4e96.png",
    "providers": {
      "Ankr": "https://rpc.ankr.com/fantom_testnet",
      "X_API": "https://xapi.testnet.fantom.network/lachesis/",
      "FantomNetwork": "https://rpc.testnet.fantom.network/",
      "BlastApi": "https://fantom-testnet.public.blastapi.io/"
    },
    "evmInfo": {
      "evmChainId": 4002,
      "blockExplorer": "https://testnet.ftmscan.com",
      "existentialDeposit": "0",
      "symbol": "FTM",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://testnet.ftmscan.com"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "fantom",
    "name": "Fantom",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 159,
    "icon": "https://static-data.subwallet.app/chains/images/icon/ftm_8ccdce4e96.png",
    "providers": {
      "Ankr": "https://rpc.ankr.com/fantom",
      "RPC_API": "https://rpcapi.fantom.network",
      "BlastApi": "https://fantom-mainnet.public.blastapi.io",
      "FTM_TOOLS": "https://rpc.ftm.tools",
      "PoktNetwork": "https://fantom-pokt.nodies.app/"
    },
    "evmInfo": {
      "evmChainId": 250,
      "blockExplorer": "https://ftmscan.com",
      "existentialDeposit": "0",
      "symbol": "FTM",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://ftmscan.com"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "krest_network",
    "name": "Krest Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 160,
    "icon": "https://static-data.subwallet.app/chains/images/icon/krest_6217afc787.png",
    "providers": {
      "Peaq": "wss://wss-krest.peaq.network/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2241,
      "genesisHash": "0xb3dd5ad6a82872b30aabaede8f41dfd4ff6c32ff82f8757d034a45be63cf104c",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://krest.subscan.io/",
      "existentialDeposit": "500",
      "symbol": "KREST",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2241-97",
          "paraId": 2241,
          "status": "won",
          "startTime": "2023-03-08T04:27:00.000Z",
          "endTime": "2024-02-07T04:27:00.000Z",
          "auctionIndex": 72,
          "firstPeriod": 28,
          "lastPeriod": 35
        }
      ]
    },
    "extraInfo": {
      "subscanSlug": "krest"
    }
  },
  {
    "slug": "deeper_network",
    "name": "Deeper Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 161,
    "icon": "https://static-data.subwallet.app/chains/images/icon/deeper_network_a6407a1aec.png",
    "providers": {
      "DeeperNetwork": "wss://mainnet-full.deeper.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x4466b9e982ab141d4115ed226ff4153b1d20e5b64f5401f732e60dec8326149f",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://deeperscan.io/deeper/",
      "existentialDeposit": "200000000000000000",
      "symbol": "DPR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "jur_network",
    "name": "Jur Network",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 162,
    "icon": "https://static-data.subwallet.app/chains/images/icon/jur_network_6aff4974ed.png",
    "providers": {
      "DeeperNetwork": "wss://jur-archive-mainnet-1.simplystaking.xyz/VX68C07AR4K2/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x58d1393b47b11707978fbc07e77d7b6f7d9aa88d207dc008a52385f7dba6156a",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "500",
      "symbol": "JUR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "base_mainnet",
    "name": "Base Mainnet",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 163,
    "icon": "https://static-data.subwallet.app/chains/images/icon/base_mainnet_29f463514e.png",
    "providers": {
      "PublicNode": "https://base.publicnode.com"
    },
    "evmInfo": {
      "evmChainId": 8453,
      "blockExplorer": "https://basescan.org",
      "existentialDeposit": "0",
      "symbol": "ETH",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "avalanche_c",
    "name": "Avalanche C-Chain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 164,
    "icon": "https://static-data.subwallet.app/chains/images/icon/avalanche_24d7d14bc2.png",
    "providers": {
      "PublicNode": "https://avalanche-c-chain.publicnode.com"
    },
    "evmInfo": {
      "evmChainId": 43114,
      "blockExplorer": "https://subnets.avax.network/c-chain/",
      "existentialDeposit": "0",
      "symbol": "AVAX",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "crust_mainnet",
    "name": "Crust Mainnet",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 165,
    "icon": "https://static-data.subwallet.app/chains/images/icon/crust_6ae326cd51.png",
    "providers": {
      "OnFinality": "wss://crust.api.onfinality.io/public-ws",
      "Crust Network": "wss://rpc.crust.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x8b404e7ed8789d813982b9cb4c8b664c05b3fbf433309f603af014ec9ce56a8c",
      "addressPrefix": 66,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://crust.subscan.io/",
      "existentialDeposit": "100000000",
      "symbol": "CRU",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "crust"
    }
  },
  {
    "slug": "acala_evm",
    "name": "Acala - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 166,
    "icon": "https://static-data.subwallet.app/chains/images/icon/acala_10b077e14b.png",
    "providers": {
      "Acala": "https://eth-rpc-acala.aca-api.network"
    },
    "evmInfo": {
      "evmChainId": 787,
      "blockExplorer": "https://blockscout.acala.network/",
      "existentialDeposit": "100000000000000000",
      "symbol": "ACA",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://blockscout.acala.network/"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "karura_evm",
    "name": "Karura - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 167,
    "icon": "https://static-data.subwallet.app/chains/images/icon/karura_6fcd919064.png",
    "providers": {
      "Acala": "https://eth-rpc-karura.aca-api.network"
    },
    "evmInfo": {
      "evmChainId": 686,
      "blockExplorer": "https://blockscout.karura.network/",
      "existentialDeposit": "100000000000000000",
      "symbol": "KAR",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://blockscout.karura.network/"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "bittensor",
    "name": "Bittensor",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 168,
    "icon": "https://static-data.subwallet.app/chains/images/icon/bittensor_f643972064.png",
    "providers": {
      "Opentensor": "wss://entrypoint-finney.opentensor.ai:443"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2097,
      "genesisHash": "0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://scan.bittensor.com/",
      "existentialDeposit": "500",
      "symbol": "TAO",
      "decimals": 9,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2097-57",
          "paraId": 2097,
          "status": "won",
          "startTime": "2023-02-14T01:48:00.000Z",
          "endTime": "2024-12-17T01:48:00.000Z",
          "auctionIndex": 36,
          "firstPeriod": 11,
          "lastPeriod": 18
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "xcavate",
    "name": "Xcavate",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 9998,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Xcavate_f708d5eb64.png",
    "providers": {
      "Tanssi": "wss://fraa-dancebox-3031-rpc.a.dancebox.tanssi.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x8472759fe1cf8ce507282ddea8af43dd08e598c9da2faed66f3e18f51f93080f",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "1000000000",
      "symbol": "XCAV",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "unorthodox",
    "name": "Unorthodox",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Unorthodox_0e8269ae1d.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2094,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "coinversation",
    "name": "Coinversation",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/coinversation_f2ece72f77.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2027,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2027-33",
          "paraId": 2027,
          "status": "won",
          "startTime": "2022-06-07T01:48:00.000Z",
          "endTime": "2024-04-09T01:48:00.000Z",
          "auctionIndex": 19,
          "firstPeriod": 8,
          "lastPeriod": 15
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "layerx_network",
    "name": "LayerX Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/layerx_a34cb73b9d.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2275,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "moonsama",
    "name": "Moonsama",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Moonsama_network_07fdb265d8.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 3334,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "3334-64",
          "paraId": 3334,
          "status": "won",
          "startTime": "2023-05-09T01:48:00.000Z",
          "endTime": "2025-03-11T01:48:00.000Z",
          "auctionIndex": 42,
          "firstPeriod": 12,
          "lastPeriod": 19
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "oak_network",
    "name": "OAK Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/oak_network_9fd08adbbf.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2090,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2090-51",
          "paraId": 2090,
          "status": "won",
          "startTime": "2022-11-22T01:48:00.000Z",
          "endTime": "2024-09-24T01:48:00.000Z",
          "auctionIndex": 28,
          "firstPeriod": 10,
          "lastPeriod": 17
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "omnibtc",
    "name": "OmniBTC",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/omnibtc_b480074463.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2053,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "2053-46",
          "paraId": 2053,
          "status": "won",
          "startTime": "2022-11-22T01:48:00.000Z",
          "endTime": "2024-09-24T01:48:00.000Z",
          "auctionIndex": 34,
          "firstPeriod": 10,
          "lastPeriod": 17
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "peaq",
    "name": "peaq",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/peaq_31a6e2dff3.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 3338,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "3338-66",
          "paraId": 3338,
          "status": "won",
          "startTime": "2023-08-01T01:48:00.000Z",
          "endTime": "2025-06-03T01:48:00.000Z",
          "auctionIndex": 45,
          "firstPeriod": 13,
          "lastPeriod": 20
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "quantum_portal",
    "name": "Quantum Portal",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Quantum_Portal_6c3b1feb1d.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2274,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "virto_network",
    "name": "Virto Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Virto_network_dfe70c92e9.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2281,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "energy_web_x",
    "name": "Energy Web X",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/energy_web_50a9ff6147.png",
    "providers": {
      "EWX": "wss://public-rpc.mainnet.energywebx.com/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 3345,
      "genesisHash": "0x5a51e04b88a4784d205091aa7bada002f3e5da3045e5b05655ee4db2589c33b5",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "EWT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "3345-70",
          "paraId": 3345,
          "status": "won",
          "startTime": "2023-10-24T01:48:00.000Z",
          "endTime": "2025-08-26T01:48:00.000Z",
          "auctionIndex": 49,
          "firstPeriod": 14,
          "lastPeriod": 21
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "invarch",
    "name": "InvArch",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/invarch_d95283c9f7.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 3340,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "3340-68",
          "paraId": 3340,
          "status": "won",
          "startTime": "2023-10-24T01:48:00.000Z",
          "endTime": "2025-08-26T01:48:00.000Z",
          "auctionIndex": 47,
          "firstPeriod": 14,
          "lastPeriod": 21
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "zero",
    "name": "Zero",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/zero_83695a50d8.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2236,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "kpron_network",
    "name": " Kpron Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/kpron_8a5d333b45.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2019,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "mars",
    "name": "Mars",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/mars_network_41ad3c0b06.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2008,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "snow",
    "name": "Snow",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/snow_network_4c5db612d4.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2129,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2129-86",
          "paraId": 2129,
          "status": "won",
          "startTime": "2022-09-21T04:27:00.000Z",
          "endTime": "2023-08-23T04:27:00.000Z",
          "auctionIndex": 51,
          "firstPeriod": 24,
          "lastPeriod": 31
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "aband",
    "name": "Aband",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/aband_network_57fa8f599e.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2257,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "kusama",
          "fundId": "2257-98",
          "paraId": 2257,
          "status": "won",
          "startTime": "2023-03-08T04:27:00.000Z",
          "endTime": "2024-02-07T04:27:00.000Z",
          "auctionIndex": 75,
          "firstPeriod": 28,
          "lastPeriod": 35
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "acurast_canary",
    "name": "Acurast Canary",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/acurast_3dd2fdd1f0.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2239,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "alpha_network",
    "name": "Alpha Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Alpha_Network_9c41747363.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2261,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "loom_network",
    "name": "Loom Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/loom_network_a3bc58dae4.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2080,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subgame_gamma",
    "name": "SubGame Gamma",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subgame_gamma_59554de87c.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2018,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "trustbase",
    "name": "TrustBase",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/trustbase_d127f74282.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "kusama",
      "paraId": 2078,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "manta_network",
    "name": "Manta Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/Property_1_Light_214e514a42.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2104,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": "https://manta.subscan.io/",
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": {
      "subscanSlug": "manta"
    }
  },
  {
    "slug": "t3rn",
    "name": "t3rn",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/t3rn_9b1f2eefc8.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 3333,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "geminis_network",
    "name": "Geminis Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/geminis_network_d57d20f3cb.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2038,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "polimec",
    "name": "Polimec Polkadot",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/polimec_ddd1a7c51d.png",
    "providers": {
      "Polimec": "wss://rpc.polimec.org"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 3344,
      "genesisHash": "0x7eb9354488318e7549c722669dcbdcdc526f1fef1420e7944667212f3601fdbd",
      "addressPrefix": 41,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000",
      "symbol": "PLMC",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": [
        {
          "relayChain": "polkadot",
          "fundId": "3344-71",
          "paraId": 3344,
          "status": "won",
          "startTime": "2023-10-24T01:48:00.000Z",
          "endTime": "2025-08-26T01:48:00.000Z",
          "auctionIndex": 51,
          "firstPeriod": 14,
          "lastPeriod": 21
        }
      ]
    },
    "extraInfo": null
  },
  {
    "slug": "subdao",
    "name": "SubDAO",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subdao_aa4297d130.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2018,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "subgame_network",
    "name": "SubGame Network",
    "isTestnet": false,
    "chainStatus": "INACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/subgame_gamma_a3bd39fb0c.png",
    "providers": {},
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "polkadot",
      "paraId": 2017,
      "genesisHash": null,
      "addressPrefix": null,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": null,
      "symbol": null,
      "decimals": null,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "zeta_test",
    "name": "ZetaChain Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/zetachain_b69b02c2cb.png",
    "providers": {
      "Athens": "https://zetachain-athens-evm.blockpi.network/v1/rpc/public"
    },
    "evmInfo": {
      "evmChainId": 7001,
      "blockExplorer": "https://zetachain-athens-3.blockscout.com/",
      "existentialDeposit": "0",
      "symbol": "aZETA",
      "decimals": 18,
      "supportSmartContract": null,
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "watr_mainnet",
    "name": "Watr Mainnet",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/watr_protocol_c78ecafcd3.png",
    "providers": {
      "Watr": "wss://watr-rpc.watr-api.network"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x161db6cdc5896fe55ef12b4778fe78dd65d7af43f65c601786b88d7a93ebc58a",
      "addressPrefix": 19,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000000",
      "symbol": "WATR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "watr_mainnet_evm",
    "name": "Watr Mainnet - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/watr_protocol_c78ecafcd3.png",
    "providers": {
      "Watr": "wss://watr-rpc.watr-api.network"
    },
    "evmInfo": {
      "evmChainId": 688,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000000",
      "symbol": "WATR",
      "decimals": 18,
      "supportSmartContract": null,
      "abiExplorer": null
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "enjin_relaychain",
    "name": "Enjin Relaychain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/enjin_relaychain_9684b417ca.png",
    "providers": {
      "Enjin": "wss://rpc.relay.blockchain.enjin.io/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0xd8761d3c88f26dc12875c00d3165f7d67243d56fc85b4cf19937601a7916e5a9",
      "addressPrefix": 2135,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000000000000000",
      "symbol": "ENJ",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "enjin_matrixchain",
    "name": "Enjin Matrixchain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/enjin_matrixchain_0d7b0a46c8.png",
    "providers": {
      "MatrixChain": "wss://rpc.matrix.blockchain.enjin.io/",
      "Dwellir": "wss://enjin-matrix-rpc-1.dwellir.com/"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": "enjin_relaychain",
      "paraId": 1000,
      "genesisHash": "0x3af4ff48ec76d2efc8476730f423ac07e25ad48f5f4c9dc39c778b164d808615",
      "addressPrefix": 1110,
      "chainType": null,
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "100000000000000000",
      "symbol": "ENJ",
      "decimals": 18,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "vara_testnet",
    "name": "Vara Network Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/vara_5aa38c4458.png",
    "providers": {
      "Vara": "wss://testnet.vara-network.io"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x525639f713f397dcf839bd022cd821f367ebcf179de7b9253531f8adbe5436d6",
      "addressPrefix": 137,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000",
      "symbol": "TVARA",
      "decimals": 12,
      "hasNativeNft": null,
      "supportStaking": null,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "goldberg_testnet",
    "name": "Avail Goldberg Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/avl_4f65922c68.png",
    "providers": {
      "Avail Goldberg Testnet": "wss://goldberg.avail.tools/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": null,
      "genesisHash": "0x6f09966420b2608d1947ccfb0f2a362450d1fc7fd902c29b67c906eaa965a7ae",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "10000000000000",
      "symbol": "AVL",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "energy_web_x_testnet",
    "name": "EWX Staging Parachain",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/energy_web_x_testnet_89fd545f06.png",
    "providers": {
      "EWX": "wss://ewx-staging-parachain-argon-wmfbanx0xb.energyweb.org/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": 2000,
      "genesisHash": "0x89cac7a3b10e408ad81c92013900023f4378713bef4e82c3e3efaf818f009ba4",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "VT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  },
  {
    "slug": "energy_web_chain",
    "name": "Energy Web Chain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/energy_web_a4602440e1.png",
    "providers": {
      "Energy Web Chain": "https://rpc.energyweb.org"
    },
    "evmInfo": {
      "evmChainId": 246,
      "blockExplorer": "http://explorer.energyweb.org/",
      "existentialDeposit": "0",
      "symbol": "EWT",
      "decimals": 18,
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://explorer.energyweb.org/api?module=contract&action=getabi"
    },
    "substrateInfo": null,
    "extraInfo": null
  },
  {
    "slug": "energy_web_x_rococo",
    "name": "Energy Web X Rococo",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "ordinal": 9999,
    "icon": "https://static-data.subwallet.app/chains/images/icon/energy_web_a4602440e1.png",
    "providers": {
      "EWX": "wss://public-rpc.testnet.energywebx.com/ws"
    },
    "evmInfo": null,
    "substrateInfo": {
      "relaySlug": null,
      "paraId": 3345,
      "genesisHash": "0xac123be800b7c9a3e3449bb70edd8e3d9008d27826381451eebf94bce1db1fbe",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "crowdloanUrl": null,
      "blockExplorer": null,
      "existentialDeposit": "0",
      "symbol": "VT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": false,
      "supportSmartContract": null,
      "crowdloanParaId": null,
      "crowdloanFunds": []
    },
    "extraInfo": null
  }
]`;

export default chains;

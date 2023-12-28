// Copyright 2019-2022 @subwallet/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

const buyTokenConfigs = `
[
  {
    "serviceInfo": {
      "transak": {
        "network": "mainnet",
        "symbol": "DOT",
        "isSuspended": false
      },
      "banxa": {
        "network": "DOT",
        "symbol": "DOT",
        "isSuspended": false
      },
      "coinbase": {
        "network": "polkadot",
        "symbol": "DOT",
        "isSuspended": false
      }
    },
    "network": "polkadot",
    "slug": "polkadot-NATIVE-DOT",
    "symbol": "DOT",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "mainnet",
        "symbol": "KSM",
        "isSuspended": false
      },
      "banxa": {
        "network": "KSM",
        "symbol": "KSM",
        "isSuspended": false
      },
      "coinbase": {
        "network": "kusama",
        "symbol": "KSM",
        "isSuspended": false
      }
    },
    "network": "kusama",
    "slug": "kusama-NATIVE-KSM",
    "symbol": "KSM",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "ETH",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "ETH",
        "isSuspended": false
      },
      "coinbase": {
        "network": "ethereum",
        "symbol": "ETH",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-NATIVE-ETH",
    "symbol": "ETH",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "astar",
        "symbol": "ASTR",
        "isSuspended": false
      }
    },
    "network": "astar",
    "slug": "astar-NATIVE-ASTR",
    "symbol": "ASTR",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "avaxcchain",
        "symbol": "AVAX",
        "isSuspended": false
      },
      "coinbase": {
        "network": "avalanche-c-chain",
        "symbol": "AVAX",
        "isSuspended": false
      }
    },
    "network": "avalanche_c",
    "slug": "avalanche_c-NATIVE-AVAX",
    "symbol": "AVAX",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "bsc",
        "symbol": "BNB",
        "isSuspended": false
      }
    },
    "network": "binance",
    "slug": "binance-NATIVE-BNB",
    "symbol": "BNB",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "banxa": {
        "network": "TERNOA",
        "symbol": "CAPS",
        "isSuspended": false
      }
    },
    "network": "ternoa",
    "slug": "ternoa-NATIVE-CAPS",
    "symbol": "CAPS",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "mainnet",
        "symbol": "DOCK",
        "isSuspended": false
      }
    },
    "network": "dockPosMainnet",
    "slug": "dockPosMainnet-NATIVE-DOCK",
    "symbol": "DOCK",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "arbitrum",
        "symbol": "ETH",
        "isSuspended": false
      },
      "coinbase": {
        "network": "arbitrum",
        "symbol": "ETH",
        "isSuspended": false
      }
    },
    "network": "arbitrum_one",
    "slug": "arbitrum_one-NATIVE-ETH",
    "symbol": "ETH",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "base",
        "symbol": "ETH",
        "isSuspended": false
      },
      "coinbase": {
        "network": "base",
        "symbol": "ETH",
        "isSuspended": false
      }
    },
    "network": "base_mainnet",
    "slug": "base_mainnet-NATIVE-ETH",
    "symbol": "ETH",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "optimism",
        "symbol": "ETH",
        "isSuspended": false
      },
      "coinbase": {
        "network": "optimism",
        "symbol": "ETH",
        "isSuspended": false
      }
    },
    "network": "optimism",
    "slug": "optimism-NATIVE-ETH",
    "symbol": "ETH",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "fantom",
        "symbol": "FTM",
        "isSuspended": false
      },
      "banxa": {
        "network": "FTM",
        "symbol": "FTM",
        "isSuspended": false
      }
    },
    "network": "fantom",
    "slug": "fantom-NATIVE-FTM",
    "symbol": "FTM",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "mainnet",
        "symbol": "GLMR",
        "isSuspended": false
      },
      "banxa": {
        "network": "GLMR",
        "symbol": "GLMR",
        "isSuspended": false
      }
    },
    "network": "moonbeam",
    "slug": "moonbeam-NATIVE-GLMR",
    "symbol": "GLMR",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "polygon",
        "symbol": "MATIC",
        "isSuspended": false
      },
      "banxa": {
        "network": "MATIC",
        "symbol": "MATIC",
        "isSuspended": false
      },
      "coinbase": {
        "network": "polygon",
        "symbol": "MATIC",
        "isSuspended": false
      }
    },
    "network": "polygon",
    "slug": "polygon-NATIVE-MATIC",
    "symbol": "MATIC",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "moonriver",
        "symbol": "MOVR",
        "isSuspended": false
      }
    },
    "network": "moonriver",
    "slug": "moonriver-NATIVE-MOVR",
    "symbol": "MOVR",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "pioneer",
        "symbol": "NEER",
        "isSuspended": false
      }
    },
    "network": "pioneer",
    "slug": "pioneer-NATIVE-NEER",
    "symbol": "NEER",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "1INCH",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-1INCH-0x111111111117dC0aa78b770fA6A738034120C302",
    "symbol": "1INCH",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "APE",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "APE",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-APE-0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    "symbol": "APE",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "BAT",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "BAT",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-BAT-0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    "symbol": "BAT",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "banxa": {
        "network": "BOBA",
        "symbol": "BOBA",
        "isSuspended": false
      }
    },
    "network": "boba",
    "slug": "boba-ERC20-BOBA-0xa18bf3994c0cc6e3b63ac420308e5383f53120d7",
    "symbol": "BOBA",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "bsc",
        "symbol": "BUSD",
        "isSuspended": true
      }
    },
    "network": "binance",
    "slug": "binance-ERC20-BUSD-0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "symbol": "BUSD",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "BUSD",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "BUSD",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-BUSD-0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    "symbol": "BUSD",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "banxa": {
        "network": "ETH",
        "symbol": "CHZ",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-CHZ-0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
    "symbol": "CHZ",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "COMP",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "COMP",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-COMP-0xc00e94Cb662C3520282E6f5717214004A7f26888",
    "symbol": "COMP",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "banxa": {
        "network": "BSC",
        "symbol": "CAKE",
        "isSuspended": false
      }
    },
    "network": "binance",
    "slug": "binance-ERC20-Cake-0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    "symbol": "Cake",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "DAI",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "DAI",
        "isSuspended": false
      },
      "coinbase": {
        "network": "ethereum",
        "symbol": "DAI",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-DAI-0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "symbol": "DAI",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "LINK",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "LINK",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA",
    "symbol": "LINK",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "coinbase": {
        "network": "ethereum",
        "symbol": "MATIC",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-MATIC-0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    "symbol": "MATIC",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "MKR",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "MKR",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-MKR-0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    "symbol": "MKR",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "coinbase": {
        "network": "optimism",
        "symbol": "OP",
        "isSuspended": false
      }
    },
    "network": "optimism",
    "slug": "optimism-ERC20-OP-0x4200000000000000000000000000000000000042",
    "symbol": "OP",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "SAND",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "SAND",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-SAND-0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    "symbol": "SAND",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "UNI",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-UNI-0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    "symbol": "UNI",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "bsc",
        "symbol": "USDC",
        "isSuspended": false
      }
    },
    "network": "binance",
    "slug": "binance-ERC20-USDC-0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    "symbol": "USDC",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "USDC",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "USDC",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "symbol": "USDC",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "bsc",
        "symbol": "USDT",
        "isSuspended": false
      }
    },
    "network": "binance",
    "slug": "binance-ERC20-USDT-0x55d398326f99059fF775485246999027B3197955",
    "symbol": "USDT",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "USDT",
        "isSuspended": false
      },
      "banxa": {
        "network": "ETH",
        "symbol": "USDT",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "symbol": "USDT",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "polygon",
        "symbol": "USDT",
        "isSuspended": false
      }
    },
    "network": "polygon",
    "slug": "polygon-ERC20-USDT-0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    "symbol": "USDT",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "VERSE",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-VERSE-0x249cA82617eC3DfB2589c4c17ab7EC9765350a18",
    "symbol": "VERSE",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "WBTC",
        "isSuspended": false
      },
      "coinbase": {
        "network": "ethereum",
        "symbol": "WBTC",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-WBTC-0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    "symbol": "WBTC",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "alephzero",
        "symbol": "AZERO",
        "isSuspended": false
      },
      "banxa": {
        "network": "AZERO",
        "symbol": "AZERO",
        "isSuspended": false
      }
    },
    "network": "aleph",
    "slug": "aleph-NATIVE-AZERO",
    "symbol": "AZERO",
    "support": "SUBSTRATE"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "ethereum",
        "symbol": "SHIB",
        "isSuspended": false
      }
    },
    "network": "ethereum",
    "slug": "ethereum-ERC20-SHIB-0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    "symbol": "SHIB",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "arbitrum",
        "symbol": "USDC",
        "isSuspended": false
      }
    },
    "network": "arbitrum_one",
    "slug": "arbitrum_one-ERC20-USDC-0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    "symbol": "USDC",
    "support": "ETHEREUM"
  },
  {
    "serviceInfo": {
      "transak": {
        "network": "polygon",
        "symbol": "USDC",
        "isSuspended": false
      }
    },
    "network": "polygon",
    "slug": "polygon-ERC20-USDC-0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    "symbol": "USDC",
    "support": "ETHEREUM"
  }
]`;

export default buyTokenConfigs;

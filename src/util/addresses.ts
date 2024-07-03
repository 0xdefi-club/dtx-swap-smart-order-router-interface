import { Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';
import { ChainId } from './chains';

export const V3_CORE_FACTORY_ADDRESS = FACTORY_ADDRESS;
export const QUOTER_V2_ADDRESS = '0xEA7F4A0f3F942C056d7e6E19243a20bA7Eff8d3a';
export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0x5291030B4a200C08910E90371c20A891e23946c2';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xE84670fc7D7053C80085A7f7e89C6d220d2f41C7';
export const SWAP_ROUTER_ADDRESS = '0x6fe7Be39A45686fDb642aE3F174575875e9b656D';
export const V3_MIGRATOR_ADDRESS = '0xF2682012D577514Cbc6162E712822716EA537637';

export const UNISWAP_MULTICALL_ADDRESS =
  '0xd710BC1eB7D80bd1064830a268079CB5FeD3Af51';
// export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
export const MULTICALL2_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11';

export const WETH9: {
  [chainId in Exclude<
    ChainId,
    ChainId.POLYGON | ChainId.POLYGON_MUMBAI
  >]: Token;
} = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(
    ChainId.GÖRLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.KOVAN]: new Token(
    ChainId.KOVAN,
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISTIC_KOVAN]: new Token(
    ChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_RINKEBY]: new Token(
    ChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BASE_SEPOLIA]: new Token(
    ChainId.BASE_SEPOLIA,
    '0x287F7599d26Fc98BBc7Fc6CF86804F5a88d0808a',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.TAIKO]: new Token(
    ChainId.TAIKO,
    '0xA51894664A773981C6C112C43ce576f315d5b1B6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};

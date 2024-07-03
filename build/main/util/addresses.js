'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WETH9 =
  exports.MULTICALL2_ADDRESS =
  exports.UNISWAP_MULTICALL_ADDRESS =
  exports.V3_MIGRATOR_ADDRESS =
  exports.SWAP_ROUTER_ADDRESS =
  exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  exports.TICK_LENS_ADDRESS =
  exports.ARB_GASINFO_ADDRESS =
  exports.OVM_GASPRICE_ADDRESS =
  exports.QUOTER_V2_ADDRESS =
  exports.V3_CORE_FACTORY_ADDRESS =
    void 0;
const sdk_core_1 = require('@uniswap/sdk-core');
const v3_sdk_1 = require('@uniswap/v3-sdk');
const chains_1 = require('./chains');
exports.V3_CORE_FACTORY_ADDRESS = v3_sdk_1.FACTORY_ADDRESS;
exports.QUOTER_V2_ADDRESS = '0xEA7F4A0f3F942C056d7e6E19243a20bA7Eff8d3a';
exports.OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
exports.ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
exports.TICK_LENS_ADDRESS = '0x5291030B4a200C08910E90371c20A891e23946c2';
exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xE84670fc7D7053C80085A7f7e89C6d220d2f41C7';
exports.SWAP_ROUTER_ADDRESS = '0x6fe7Be39A45686fDb642aE3F174575875e9b656D';
exports.V3_MIGRATOR_ADDRESS = '0xF2682012D577514Cbc6162E712822716EA537637';
exports.UNISWAP_MULTICALL_ADDRESS =
  '0xd710BC1eB7D80bd1064830a268079CB5FeD3Af51';
// export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
exports.MULTICALL2_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11';
exports.WETH9 = {
  [chains_1.ChainId.MAINNET]: new sdk_core_1.Token(
    chains_1.ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.ROPSTEN]: new sdk_core_1.Token(
    chains_1.ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.RINKEBY]: new sdk_core_1.Token(
    chains_1.ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.GÖRLI]: new sdk_core_1.Token(
    chains_1.ChainId.GÖRLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.KOVAN]: new sdk_core_1.Token(
    chains_1.ChainId.KOVAN,
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.OPTIMISM]: new sdk_core_1.Token(
    chains_1.ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.OPTIMISTIC_KOVAN]: new sdk_core_1.Token(
    chains_1.ChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.ARBITRUM_ONE]: new sdk_core_1.Token(
    chains_1.ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.ARBITRUM_RINKEBY]: new sdk_core_1.Token(
    chains_1.ChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.BASE_SEPOLIA]: new sdk_core_1.Token(
    chains_1.ChainId.BASE_SEPOLIA,
    '0x287F7599d26Fc98BBc7Fc6CF86804F5a88d0808a',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [chains_1.ChainId.TAIKO]: new sdk_core_1.Token(
    chains_1.ChainId.TAIKO,
    '0xA51894664A773981C6C112C43ce576f315d5b1B6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUEwQztBQUMxQyw0Q0FBa0Q7QUFDbEQscUNBQW1DO0FBRXRCLFFBQUEsdUJBQXVCLEdBQUcsd0JBQWUsQ0FBQztBQUMxQyxRQUFBLGlCQUFpQixHQUFHLDRDQUE0QyxDQUFDO0FBQ2pFLFFBQUEsb0JBQW9CLEdBQy9CLDRDQUE0QyxDQUFDO0FBQ2xDLFFBQUEsbUJBQW1CLEdBQUcsNENBQTRDLENBQUM7QUFDbkUsUUFBQSxpQkFBaUIsR0FBRyw0Q0FBNEMsQ0FBQztBQUNqRSxRQUFBLG9DQUFvQyxHQUMvQyw0Q0FBNEMsQ0FBQztBQUNsQyxRQUFBLG1CQUFtQixHQUFHLDRDQUE0QyxDQUFDO0FBQ25FLFFBQUEsbUJBQW1CLEdBQUcsNENBQTRDLENBQUM7QUFFbkUsUUFBQSx5QkFBeUIsR0FDcEMsNENBQTRDLENBQUM7QUFDL0Msa0ZBQWtGO0FBQ3JFLFFBQUEsa0JBQWtCLEdBQUcsNENBQTRDLENBQUM7QUFFbEUsUUFBQSxLQUFLLEdBS2Q7SUFDRixDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUMxQixnQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDMUIsZ0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQzFCLGdCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUN4QixnQkFBTyxDQUFDLEtBQUssRUFDYiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDeEIsZ0JBQU8sQ0FBQyxLQUFLLEVBQ2IsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQzNCLGdCQUFPLENBQUMsUUFBUSxFQUNoQiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUNuQyxnQkFBTyxDQUFDLGdCQUFnQixFQUN4Qiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLE1BQU0sRUFDTixlQUFlLENBQ2hCO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksZ0JBQUssQ0FDL0IsZ0JBQU8sQ0FBQyxZQUFZLEVBQ3BCLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQ25DLGdCQUFPLENBQUMsZ0JBQWdCLEVBQ3hCLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7SUFDRCxDQUFDLGdCQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxnQkFBSyxDQUMvQixnQkFBTyxDQUFDLFlBQVksRUFDcEIsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixNQUFNLEVBQ04sZUFBZSxDQUNoQjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGdCQUFLLENBQ3hCLGdCQUFPLENBQUMsS0FBSyxFQUNiLDRDQUE0QyxFQUM1QyxFQUFFLEVBQ0YsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7Q0FDRixDQUFDIn0=

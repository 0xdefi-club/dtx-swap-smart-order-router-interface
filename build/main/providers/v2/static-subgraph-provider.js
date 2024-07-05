'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StaticV2SubgraphProvider = void 0;
const v2_sdk_1 = require('@uniswap/v2-sdk');
const lodash_1 = __importDefault(require('lodash'));
const chains_1 = require('../../util/chains');
const log_1 = require('../../util/log');
const token_provider_1 = require('../token-provider');
const token_provider_2 = require('./../token-provider');
const BASES_TO_CHECK_TRADES_AGAINST = {
  [chains_1.ChainId.MAINNET]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MAINNET],
    token_provider_1.DAI_MAINNET,
    token_provider_1.USDC_MAINNET,
    token_provider_1.USDT_MAINNET,
    token_provider_1.WBTC_MAINNET,
  ],
  [chains_1.ChainId.ROPSTEN]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ROPSTEN],
  ],
  [chains_1.ChainId.RINKEBY]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.RINKEBY],
    token_provider_1.DAI_RINKEBY_1,
    token_provider_1.DAI_RINKEBY_2,
  ],
  [chains_1.ChainId.GÖRLI]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GÖRLI],
  ],
  [chains_1.ChainId.KOVAN]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KOVAN],
  ],
  //v2 not deployed on optimism/arbitrum or their testnets
  [chains_1.ChainId.OPTIMISM]: [],
  [chains_1.ChainId.ARBITRUM_ONE]: [],
  [chains_1.ChainId.ARBITRUM_RINKEBY]: [],
  [chains_1.ChainId.OPTIMISTIC_KOVAN]: [],
  [chains_1.ChainId.POLYGON]: [],
  [chains_1.ChainId.POLYGON_MUMBAI]: [],
  [chains_1.ChainId.BASE_SEPOLIA]: [],
  [chains_1.ChainId.TAIKO]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.TAIKO],
    token_provider_2.USDC_TAIKO,
    token_provider_2.TAIKO_TAIKO,
  ],
};
/**
 * Provider that does not get data from an external source and instead returns
 * a hardcoded list of Subgraph pools.
 *
 * Since the pools are hardcoded, the liquidity/price values are dummys and should not
 * be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. subgraph not available.
 *
 * @export
 * @class StaticV2SubgraphProvider
 */
class StaticV2SubgraphProvider {
  constructor(chainId) {
    this.chainId = chainId;
  }
  async getPools(tokenIn, tokenOut) {
    log_1.log.info('In static subgraph provider for V2');
    const bases = BASES_TO_CHECK_TRADES_AGAINST[this.chainId];
    const basePairs = lodash_1.default.flatMap(bases, (base) =>
      bases.map((otherBase) => [base, otherBase])
    );
    if (tokenIn && tokenOut) {
      basePairs.push(
        [tokenIn, tokenOut],
        ...bases.map((base) => [tokenIn, base]),
        ...bases.map((base) => [tokenOut, base])
      );
    }
    const pairs = lodash_1
      .default(basePairs)
      .filter((tokens) => Boolean(tokens[0] && tokens[1]))
      .filter(
        ([tokenA, tokenB]) =>
          tokenA.address !== tokenB.address && !tokenA.equals(tokenB)
      )
      .value();
    const poolAddressSet = new Set();
    const subgraphPools = lodash_1
      .default(pairs)
      .map(([tokenA, tokenB]) => {
        const poolAddress = v2_sdk_1.Pair.getAddress(tokenA, tokenB);
        if (poolAddressSet.has(poolAddress)) {
          return undefined;
        }
        poolAddressSet.add(poolAddress);
        const [token0, token1] = tokenA.sortsBefore(tokenB)
          ? [tokenA, tokenB]
          : [tokenB, tokenA];
        return {
          id: poolAddress,
          liquidity: '100',
          token0: {
            id: token0.address,
          },
          token1: {
            id: token1.address,
          },
          supply: 100,
          reserve: 100,
        };
      })
      .compact()
      .value();
    return subgraphPools;
  }
}
exports.StaticV2SubgraphProvider = StaticV2SubgraphProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXN1YmdyYXBoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy92Mi9zdGF0aWMtc3ViZ3JhcGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsNENBQXVDO0FBQ3ZDLG9EQUF1QjtBQUN2Qiw4Q0FBcUU7QUFDckUsd0NBQXFDO0FBQ3JDLHNEQU8yQjtBQUMzQix3REFBOEQ7QUFPOUQsTUFBTSw2QkFBNkIsR0FBbUI7SUFDcEQsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFFO1FBQ3pDLDRCQUFXO1FBQ1gsNkJBQVk7UUFDWiw2QkFBWTtRQUNaLDZCQUFZO0tBQ2I7SUFDRCxDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQzlELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqQixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRTtRQUN6Qyw4QkFBYTtRQUNiLDhCQUFhO0tBQ2Q7SUFDRCxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQzFELENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDMUQsd0RBQXdEO0lBQ3hELENBQUMsZ0JBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO0lBQ3RCLENBQUMsZ0JBQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO0lBQzFCLENBQUMsZ0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7SUFDOUIsQ0FBQyxnQkFBTyxDQUFDLGdC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

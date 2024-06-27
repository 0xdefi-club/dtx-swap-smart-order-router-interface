'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StaticV3SubgraphProvider = void 0;
const v3_sdk_1 = require('@uniswap/v3-sdk');
const jsbi_1 = __importDefault(require('jsbi'));
const lodash_1 = __importDefault(require('lodash'));
const amounts_1 = require('../../util/amounts');
const chains_1 = require('../../util/chains');
const log_1 = require('../../util/log');
const token_provider_1 = require('../token-provider');
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
    token_provider_1.DAI_ROPSTEN,
    token_provider_1.USDT_ROPSTEN,
    token_provider_1.USDC_ROPSTEN,
  ],
  [chains_1.ChainId.RINKEBY]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.RINKEBY],
    token_provider_1.DAI_RINKEBY_1,
    token_provider_1.DAI_RINKEBY_2,
    token_provider_1.USDC_RINKEBY,
    token_provider_1.USDT_RINKEBY,
  ],
  [chains_1.ChainId.GÖRLI]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GÖRLI],
    token_provider_1.USDT_GÖRLI,
    token_provider_1.USDC_GÖRLI,
    token_provider_1.WBTC_GÖRLI,
    token_provider_1.DAI_GÖRLI,
  ],
  [chains_1.ChainId.KOVAN]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KOVAN],
    token_provider_1.USDC_KOVAN,
    token_provider_1.USDT_KOVAN,
    token_provider_1.WBTC_KOVAN,
    token_provider_1.DAI_KOVAN,
  ],
  [chains_1.ChainId.OPTIMISM]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISM],
    token_provider_1.USDC_OPTIMISM,
    token_provider_1.DAI_OPTIMISM,
    token_provider_1.USDT_OPTIMISM,
    token_provider_1.WBTC_OPTIMISM,
  ],
  [chains_1.ChainId.ARBITRUM_ONE]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_ONE],
    token_provider_1.WBTC_ARBITRUM,
    token_provider_1.DAI_ARBITRUM,
    token_provider_1.USDC_ARBITRUM,
    token_provider_1.USDT_ARBITRUM,
  ],
  [chains_1.ChainId.ARBITRUM_RINKEBY]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_RINKEBY],
    token_provider_1.DAI_ARBITRUM_RINKEBY,
    token_provider_1.UNI_ARBITRUM_RINKEBY,
    token_provider_1.USDT_ARBITRUM_RINKEBY,
  ],
  [chains_1.ChainId.OPTIMISTIC_KOVAN]: [
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISTIC_KOVAN],
    token_provider_1.DAI_OPTIMISTIC_KOVAN,
    token_provider_1.WBTC_OPTIMISTIC_KOVAN,
    token_provider_1.USDT_OPTIMISTIC_KOVAN,
    token_provider_1.USDC_OPTIMISTIC_KOVAN,
  ],
  [chains_1.ChainId.POLYGON]: [
    token_provider_1.USDC_POLYGON,
    token_provider_1.WETH_POLYGON,
    token_provider_1.WMATIC_POLYGON,
  ],
  [chains_1.ChainId.POLYGON_MUMBAI]: [
    token_provider_1.DAI_POLYGON_MUMBAI,
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.POLYGON_MUMBAI],
    token_provider_1.WMATIC_POLYGON_MUMBAI,
  ],
  [chains_1.ChainId.BASE_SEPOLIA]: [
    token_provider_1.USDC_BASE_SEPOLIA,
    chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.BASE_SEPOLIA],
    token_provider_1.DAI_BASE_SEPOLIA,
  ],
};
/**
 * Provider that uses a hardcoded list of V3 pools to generate a list of subgraph pools.
 *
 * Since the pools are hardcoded and the data does not come from the Subgraph, the TVL values
 * are dummys and should not be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. Subgraph not available.
 *
 * @export
 * @class StaticV3SubgraphProvider
 */
class StaticV3SubgraphProvider {
  constructor(chainId, poolProvider) {
    this.chainId = chainId;
    this.poolProvider = poolProvider;
  }
  async getPools(tokenIn, tokenOut) {
    log_1.log.info('In static subgraph provider for V3');
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
      .flatMap(([tokenA, tokenB]) => {
        return [
          [tokenA, tokenB, v3_sdk_1.FeeAmount.LOWEST],
          [tokenA, tokenB, v3_sdk_1.FeeAmount.LOW],
          [tokenA, tokenB, v3_sdk_1.FeeAmount.MEDIUM],
          [tokenA, tokenB, v3_sdk_1.FeeAmount.HIGH],
        ];
      })
      .value();
    log_1.log.info(
      `V3 Static subgraph provider about to get ${pairs.length} pools on-chain`
    );
    const poolAccessor = await this.poolProvider.getPools(pairs);
    const pools = poolAccessor.getAllPools();
    const poolAddressSet = new Set();
    const subgraphPools = lodash_1
      .default(pools)
      .map((pool) => {
        const { token0, token1, fee, liquidity } = pool;
        const poolAddress = v3_sdk_1.Pool.getAddress(
          pool.token0,
          pool.token1,
          pool.fee
        );
        if (poolAddressSet.has(poolAddress)) {
          return undefined;
        }
        poolAddressSet.add(poolAddress);
        const liquidityNumber = jsbi_1.default.toNumber(liquidity);
        return {
          id: poolAddress,
          feeTier: amounts_1.unparseFeeAmount(fee),
          liquidity: liquidity.toString(),
          token0: {
            id: token0.address,
          },
          token1: {
            id: token1.address,
          },
          // As a very rough proxy we just use liquidity for TVL.
          tvlETH: liquidityNumber,
          tvlUSD: liquidityNumber,
        };
      })
      .compact()
      .value();
    return subgraphPools;
  }
}
exports.StaticV3SubgraphProvider = StaticV3SubgraphProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXN1YmdyYXBoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy92My9zdGF0aWMtc3ViZ3JhcGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELGdEQUF3QjtBQUN4QixvREFBdUI7QUFDdkIsZ0RBQXNEO0FBQ3RELDhDQUFxRTtBQUNyRSx3Q0FBcUM7QUFDckMsc0RBMEMyQjtBQVEzQixNQUFNLDZCQUE2QixHQUFtQjtJQUNwRCxDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDakIsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUU7UUFDekMsNEJBQVc7UUFDWCw2QkFBWTtRQUNaLDZCQUFZO1FBQ1osNkJBQVk7S0FDYjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqQixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRTtRQUN6Qyw0QkFBVztRQUNYLDZCQUFZO1FBQ1osNkJBQVk7S0FDYjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqQixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBRTtRQUN6Qyw4QkFBYTtRQUNiLDhCQUFhO1FBQ2IsNkJBQVk7UUFDWiw2QkFBWTtLQUNiO0lBQ0QsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUU7UUFDdkMsMkJBQVU7UUFDViwyQkFBVTtRQUNWLDJCQUFVO1FBQ1YsMEJBQVM7S0FDVjtJQUNELENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNmLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFFO1FBQ3ZDLDJCQUFVO1FBQ1YsMkJBQVU7UUFDViwyQkFBVTtRQUNWLDBCQUFTO0tBQ1Y7SUFDRCxD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

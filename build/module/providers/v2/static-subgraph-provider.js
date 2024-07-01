import { Pair } from '@uniswap/v2-sdk';
import _ from 'lodash';
import { ChainId, WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
import { log } from '../../util/log';
import { DAI_MAINNET, DAI_RINKEBY_1, DAI_RINKEBY_2, USDC_MAINNET, USDT_MAINNET, WBTC_MAINNET, } from '../token-provider';
const BASES_TO_CHECK_TRADES_AGAINST = {
    [ChainId.MAINNET]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
        DAI_MAINNET,
        USDC_MAINNET,
        USDT_MAINNET,
        WBTC_MAINNET,
    ],
    [ChainId.ROPSTEN]: [WRAPPED_NATIVE_CURRENCY[ChainId.ROPSTEN]],
    [ChainId.RINKEBY]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY],
        DAI_RINKEBY_1,
        DAI_RINKEBY_2,
    ],
    [ChainId.GÖRLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.GÖRLI]],
    [ChainId.KOVAN]: [WRAPPED_NATIVE_CURRENCY[ChainId.KOVAN]],
    //v2 not deployed on optimism/arbitrum or their testnets
    [ChainId.OPTIMISM]: [],
    [ChainId.ARBITRUM_ONE]: [],
    [ChainId.ARBITRUM_RINKEBY]: [],
    [ChainId.OPTIMISTIC_KOVAN]: [],
    [ChainId.POLYGON]: [],
    [ChainId.POLYGON_MUMBAI]: [],
    [ChainId.BASE_SEPOLIA]: [],
    [ChainId.TAIKO]: [],
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
export class StaticV2SubgraphProvider {
    constructor(chainId) {
        this.chainId = chainId;
    }
    async getPools(tokenIn, tokenOut) {
        log.info('In static subgraph provider for V2');
        const bases = BASES_TO_CHECK_TRADES_AGAINST[this.chainId];
        const basePairs = _.flatMap(bases, (base) => bases.map((otherBase) => [base, otherBase]));
        if (tokenIn && tokenOut) {
            basePairs.push([tokenIn, tokenOut], ...bases.map((base) => [tokenIn, base]), ...bases.map((base) => [tokenOut, base]));
        }
        const pairs = _(basePairs)
            .filter((tokens) => Boolean(tokens[0] && tokens[1]))
            .filter(([tokenA, tokenB]) => tokenA.address !== tokenB.address && !tokenA.equals(tokenB))
            .value();
        const poolAddressSet = new Set();
        const subgraphPools = _(pairs)
            .map(([tokenA, tokenB]) => {
            const poolAddress = Pair.getAddress(tokenA, tokenB);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXN1YmdyYXBoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy92Mi9zdGF0aWMtc3ViZ3JhcGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsYUFBYSxFQUNiLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLFlBQVksR0FDYixNQUFNLG1CQUFtQixDQUFDO0FBTzNCLE1BQU0sNkJBQTZCLEdBQW1CO0lBQ3BELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUU7UUFDekMsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtLQUNiO0lBQ0QsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUM7SUFDOUQsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDakIsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRTtRQUN6QyxhQUFhO1FBQ2IsYUFBYTtLQUNkO0lBQ0QsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDMUQsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7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
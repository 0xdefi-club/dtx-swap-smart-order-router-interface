import {
  DAI_MAINNET,
  TAIKO_TAIKO,
  USDC_MAINNET,
  USDT_MAINNET,
  WBTC_MAINNET,
  WMATIC_POLYGON,
  WMATIC_POLYGON_MUMBAI,
} from '../../providers/token-provider';
import { ChainId, WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
export const BASES_TO_CHECK_TRADES_AGAINST = (_tokenProvider) => {
  return {
    [ChainId.MAINNET]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
      DAI_MAINNET,
      USDC_MAINNET,
      USDT_MAINNET,
      WBTC_MAINNET,
    ],
    [ChainId.ROPSTEN]: [WRAPPED_NATIVE_CURRENCY[ChainId.ROPSTEN]],
    [ChainId.RINKEBY]: [WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY]],
    [ChainId.GÖRLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.GÖRLI]],
    [ChainId.KOVAN]: [WRAPPED_NATIVE_CURRENCY[ChainId.KOVAN]],
    [ChainId.OPTIMISM]: [WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM]],
    [ChainId.OPTIMISTIC_KOVAN]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISTIC_KOVAN],
    ],
    [ChainId.ARBITRUM_ONE]: [WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE]],
    [ChainId.ARBITRUM_RINKEBY]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_RINKEBY],
    ],
    [ChainId.POLYGON]: [WMATIC_POLYGON],
    [ChainId.POLYGON_MUMBAI]: [WMATIC_POLYGON_MUMBAI],
    [ChainId.BASE_SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[ChainId.BASE_SEPOLIA]],
    [ChainId.TAIKO]: [WRAPPED_NATIVE_CURRENCY[ChainId.TAIKO], TAIKO_TAIKO],
  };
};
const getBasePairByAddress = async (
  tokenProvider,
  _chainId,
  fromAddress,
  toAddress
) => {
  const accessor = await tokenProvider.getTokens([toAddress]);
  const toToken = accessor.getTokenByAddress(toAddress);
  if (!toToken) return {};
  return {
    [fromAddress]: [toToken],
  };
};
export const ADDITIONAL_BASES = async (tokenProvider) => {
  return {
    [ChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18',
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x561a4717537ff4AF5c687328c0f7E90a319705C0',
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x853d955acef822db058eb8505911ed77f175b99e',
        '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
        '0x853d955acef822db058eb8505911ed77f175b99e'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
      )),
    },
  };
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (tokenProvider) => {
  return {
    [ChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
        DAI_MAINNET.address
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
        WRAPPED_NATIVE_CURRENCY[1].address
      )),
    },
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVycy9sZWdhY3ktcm91dGVyL2Jhc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxXQUFXLEVBRVgsV0FBVyxFQUNYLFlBQVksRUFDWixZQUFZLEVBQ1osWUFBWSxFQUNaLGNBQWMsRUFDZCxxQkFBcUIsR0FDdEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNckUsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcsQ0FDM0MsY0FBOEIsRUFDZCxFQUFFO0lBQ2xCLE9BQU87UUFDTCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQix1QkFBdUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFO1lBQ3pDLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7U0FDYjtRQUNELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzlELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzlELENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzFELENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzFELENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ2hFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVB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

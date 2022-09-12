import ANCHOR from "../images/token_icons/ANCHOR-Token.svg";
import BTC from "../images/token_icons/BTCB-Token.svg";
import BNB from "../images/token_icons/WBNB-Token-Icon.svg";
import ETH from "../images/token_icons/ETH-Token.svg";
import BUSD from "../images/token_icons/BUSD-Token.svg";
import ADA from "../images/token_icons/ADA.svg";
import defaultImg from "../images/token_icons/default.svg";
// import USDT from "../images/token_icons/USDT.svg";
import POLKADOT from "../images/token_icons/POLKADOT.svg";
import TRON from "../images/token_icons/TRON.svg";
import CAKE from "../images/token_icons/CAKE.svg";
import SHRIYO from "../images/token_icons/saitamaIcons/shriyo-Inu.png";
import IMPACTXP from "../images/token_icons/saitamaIcons/impactXp.png";
import Kishimoto from "../images/token_icons/saitamaIcons/kishimoto.png";
import USDT from "../images/token_icons/saitamaIcons/USDT.png";
import MANDOX from "../images/token_icons/saitamaIcons/MandoX.png";
import SAITA from "../images/saitaswap.png";
import SHAMAN from "../images/schdule.png";
import LP from "../images/Pool-Header-Logo.png";
import ETH1 from "../images/token_icons/Ethreallogo.png";
import routerABI from "../ABI/router.ABI.json";
import SaitamaIcon from "../../assets/images/token_icons/saitamaIcons/SaitaIcon.png";
import SaitaRealty from "../../assets/images/token_icons/saitamaIcons/SaitaRealty_Icon.png";
import Kodachi from "../../assets/images/token_icons/saitamaIcons/Kodachi1.png";
import factoryABI from "../ABI/factory.ABI.json";
import pairABI from "../ABI/pair.ABI.json";
import farmABI from "../ABI/farmABI.json";
import anchorABI from "../ABI/anchor.ABI.json";
import referralsABI from "../ABI/referrals.ABI.json";
import shaman from "../images/token_icons/saitamaIcons/shaman.png";
export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";
export const DEFLATIONNARY_TOKENS = [
  "0xce3f08e664693ca792cace4af1364d5e220827b2", //saita
  "0x1E2F15302B90EddE696593607b6bD444B64e8F02", //shriyu
  "0xb12494C8824fc069757F47d177E666c571Cd49aE", //impact
  "0xf5b1fd29d23e98db2d9ebb8435e1082e3b38fb65", //kishimoto
  "0x33d203fa03bb30b133de0fe2d6533c268ba286b6", //mandox
  "0x5fCe9Fc9B5d62aF082A59D0823A062F7529eFA5a", //shaman
  "0x142a774E8b52550E88E196CedD7A5835acB646D0", //SaitaRealty
];
export const LIQUIDITY_PROVIDER_FEE = 0.2;

// ******** BSC_MAIN_NET LP's, WETH and USD **********
// export const ANCHOR_BUSD_LP = "0xca8cb77efac26f901042196f766bac4ee5077df0";
// export const BNB_BUSD_LP = "0xe2466652a46e47fa278be0a2ad8dce7c8445be41";
// export const WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
// export const USD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
export const pancakeFactory = "0x35113a300ca0D7621374890ABFEAC30E88f214b1";

// ******** BSC_TEST_NET LP's, WETH and USD **********
export const ANCHOR_BUSD_LP = "0xE49d2CE0157D43941F05E969793aAFa71D90BaA4";
export const BNB_BUSD_LP = "0xE5799D95Ac7ECCbAf672777eDb516D29c030f5a9";
export const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; //mainNet weth
export const USD = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
export const Saitama = "0xce3f08e664693ca792cace4af1364d5e220827b2"; //mainnet Saita

// ******** BSC_MAIN_NET Token List **********
export const TOKEN_LIST = [
  // {
  //   icon: USDT,
  //   name: "ether token",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: USDT,
  //   name: "saitama token",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "SAITAMA",
  // },
  {
    icon: ETH,
    name: "ETH",
    address: "BNB",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "ETH",
  },
  {
    icon: SaitamaIcon,
    name: "SAITAMA",
    address: "0xce3f08e664693ca792cace4af1364d5e220827b2",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SAITAMA",
  },
  {
    icon: USDT,
    name: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    isAdd: false,
    isDel: false,
    decimals: 6,
    symbol: "USDT",
  },
  {
    icon: SaitaRealty,
    name: "SaitaRealty",
    address: "0x142a774E8b52550E88E196CedD7A5835acB646D0",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SRLTY",
  },
  {
    icon: Kodachi,
    name: "Kodachi Token ",
    address: "0x57c411e9a358e2d2d0a6b058cEDb709175e8fd16",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "KODACHI",
  },
  {
    icon: SHRIYO,
    name: "Shiryo-Inu",
    address: "0x1E2F15302B90EddE696593607b6bD444B64e8F02",
    isAdd: false,
    isDel: !0,
    decimals: 9,
    symbol: "Shiryo-Inu",
  },
  {
    icon: IMPACTXP,
    name: "ImpactXP",
    address: "0xb12494C8824fc069757F47d177E666c571Cd49aE",
    isAdd: false,
    isDel: !0,
    decimals: 9,
    symbol: "ImpactXP",
  },
  {
    icon: Kishimoto,
    name: "Kishimoto",
    address: "0xf5b1fd29d23e98db2d9ebb8435e1082e3b38fb65",
    isAdd: false,
    isDel: !0,
    decimals: 9,
    symbol: "Kishimoto",
  },
  {
    icon: MANDOX,
    name: "Mandox",
    address: "0x33d203fa03bb30b133de0fe2d6533c268ba286b6",
    isAdd: false,
    isDel: !0,
    decimals: 9,
    symbol: "Mandox",
  },
  {
    icon: shaman,
    name: "Shaman",
    address: "0x5fCe9Fc9B5d62aF082A59D0823A062F7529eFA5a",
    isAdd: false,
    isDel: !0,
    decimals: 18,
    symbol: "Shaman",
  },
  // {
  //   icon: USDT,
  //   name: "wrapped ether token",
  //   address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WETH",
  // },
  // {
  //   icon: BUSD,
  //   name: "BUSD",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BUSD",
  // },
  // {
  //   icon: ANCHOR,
  //   name: "ANCHOR",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ANCHOR",
  // },
  // {
  //   icon: BNB,
  //   name: "WBNB",
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WBNB",
  // },
  // {
  //   icon: BTC,
  //   name: "BTCB",
  //   address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BTCB",
  // },
  // {
  //   icon: ETH,
  //   name: "B-ETH",
  //   address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: CAKE,
  //   name: "CAKE",
  //   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "CAKE",
  // },
];

// ==============================

// WETH: {
//   name: 'wrapped ether token',
//   dec: 18,
//   sym: 'WETH',
//   icon: Eth,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
// },
// TUR: {
//   name: 'tur token',
//   dec: 18,
//   sym: 'TUR',
//   icon: Gen,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0xEe8F3Df788B0357d35D66F9023626f99f29a8351',
// },
// STEEP: {
//   name: 'steep labs token',
//   dec: 18,
//   sym: 'STEEP',
//   icon: Gen,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0x8605c0c5E361dd897A5526558C48E7ff0D51353c',
// },
// SAITAMA: {
//   name: 'saitama token',
//   dec: 18,
//   sym: 'SAITAMA',
//   icon: Saitama,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0x352E956eB0247792842ABD234d3f7425BBf544c2',
// }
// }
// ********* BSC_MAIN_NET Contract Address **********
export const MAIN_CONTRACT_LIST = {
  router: {
    address: "0x0c17e776CD218252ADFca8D4e761D3fe757e9778",
    Block: 15210794,
    abi: routerABI,
  },
  panCakeRouter: {
    address: "0x0c17e776CD218252ADFca8D4e761D3fe757e9778",
    blockNumber: 15210794,
    abi: routerABI,
  },
  factory: {
    address: "0x35113a300ca0D7621374890ABFEAC30E88f214b1",
    blockNumber: 6430279,
    abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    abi: pairABI,
  },
  farm: {
    address: "0xD2aC89e85Dd0c7c4ef62E5448F6eD8c1d98547F4",
    blockNumber: 10889234,
    abi: farmABI,
  },
  anchorNew: {
    address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
    blockNumber: 10350461,
    abi: anchorABI,
  },
  referrals: {
    address: "0xe25e719d59574E5eA1F681e49da5207bc56916fB",
    blockNumber: 10004593,
    abi: referralsABI,
  },
};

// ******** BSC_TEST_NET Token List **********
// export const TOKEN_LIST = [
//   {
//     icon: BNB,
//     name: "BNB",
//     address: "BNB",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "BNB",
//   },
//   {
//   {
//     icon: BUSD,
//     name: "BUSD",
//     address: "0x781F761139BB3B776DB8fD73DA5524E8eE458a97",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "BUSD",
//   },
//   {
//     icon: ETH,
//     name: "ETH",
//     address: "0xe76833b8880B33adeC6d996B753E461A251bFd4e",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "ETH",
//   },
//   {
//     icon: ADA,
//     name: "Cardano",
//     address: "0x8c033367885a452254b0FD4B8B4BBb0552D9Cd63",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "ADA",
//   },
//   {
//     icon: defaultImg,
//     name: "Matic Token",
//     address: "0x589Ffc4669b1126364c472dd7E954C404F6649b0",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "MATIC",
//   },
//   {
//     icon: defaultImg,
//     name: "MDex",
//     address: "0xc0ABFCD5a3090728939E74A036F9c82b4B261796",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "MDX",
//   },
// ];

// ********* BSC_TestNet Contract Address **********
// export const MAIN_CONTRACT_LIST = {
//   router: {
//     address: "0x7489714061Fdf3B194D7151174817a3b2A1a918d",
//     blockNumber: 6810080,
//     abi: routerABI,
//   },
//   factory: {
//     address: "0x33c86EBefA8910Aa85Fa09AC09714Caee54a7AA6",
//     blockNumber: 6809737,
//     abi: factoryABI,
//   },
//   pair: {
//     address: "",
//     blockNumber: 0,
//     abi: pairABI,
//   },
//   farm: {
//     address: "0xD6813A8809aD40e6d7Bd1540D454b126F10CBcEA",
//     blockNumber: 10004492,
//     abi: farmABI,
//   },
//   anchorNew: {
//     address: "0xe121335A886FA620671D0d2a946139Fa5B265AB0",
//     blockNumber: 10350461,
//     abi: anchorABI,
//   },
//   referrals: {
//     address: "0xF28b3D49Fd5d0B3DF81B9d3E559092CAeF512f9A",
//     blockNumber: 10004593,
//     abi: referralsABI,
//   },
// };

// ******* Extra tokens just for icons *********
// {
//   icon: defaultImg,
//   name: "Dai Token",
//   address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "DAI",
// },
// {
//   icon: BTC,
//   name: "BTCB Token",
//   address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "BTCB",
// },
// {
//   icon: USDT,
//   name: "Tether USD",
//   address: "0x55d398326f99059fF775485246999027B3197955",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "USDT",
// },
// {
//   icon: POLKADOT,
//   name: "Polkadot Token",
//   address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "DOT",
// },
// {
//   icon: TRON,
//   name: "TRON",
//   address: "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "TRX",
// },
// {
//   icon: CAKE,
//   name: "PancakeSwap Token",
//   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "Cake",
// },
// {
//   icon: BNB,
//   name: "Wrapped BNB",
//   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "WBNB",
// }

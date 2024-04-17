import { getPriceCoin, getTopCrypto } from "../logic/dataFetch.js"

export const getAllCrypto = async (req,res)=>{
    try {
        const data = await getTopCrypto()
        const filteredData = data.Data.map(crypto => ({
            CoinInfo: crypto.CoinInfo,
            RAW: {
                PRICE:crypto.RAW.USD.PRICE,
                OPENDAY:crypto.RAW.USD.OPENDAY,
                HIGHDAY:crypto.RAW.USD.HIGHDAY,
                LOWDAY:crypto.RAW.USD.LOWDAY
            }
          }));
            // const VES =  await getPriceCoin("USD","VES",1)
            // const EUR = await getPriceCoin("USD","EUR",1)
            // const coins = {
            //     VES:VES.result,
            //     EUR:EUR.result
            // }
        res.json({
            "cryptos": [
              {
                "CoinInfo": {
                  "Id": "1182",
                  "Name": "BTC",
                  "FullName": "Bitcoin",
                  "Internal": "BTC",
                  "ImageUrl": "/media/37746251/btc.png",
                  "Url": "/coins/btc/overview",
                  "Algorithm": "SHA-256",
                  "ProofType": "PoW",
                  "Rating": {
                    "Weiss": {
                      "Rating": "B+",
                      "TechnologyAdoptionRating": "A-",
                      "MarketPerformanceRating": "D"
                    }
                  },
                  "NetHashesPerSecond": 609533389029758000000,
                  "BlockNumber": 839565,
                  "BlockTime": 527.411,
                  "BlockReward": 6.25,
                  "AssetLaunchDate": "2009-01-03",
                  "MaxSupply": 20999999.9769,
                  "Type": 1,
                  "DocumentType": "Webpagecoinp"
                },
                "RAW": {
                  "PRICE": 63791.0226591721,
                  "OPENDAY": 63824.6972155569,
                  "HIGHDAY": 63848.8430775068,
                  "LOWDAY": 63678.2576672256
                }
              },
              {
                "CoinInfo": {
                  "Id": "7605",
                  "Name": "ETH",
                  "FullName": "Ethereum",
                  "Internal": "ETH",
                  "ImageUrl": "/media/37746238/eth.png",
                  "Url": "/coins/eth/overview",
                  "Algorithm": "Ethash",
                  "ProofType": "PoS",
                  "Rating": {
                    "Weiss": {
                      "Rating": "B-",
                      "TechnologyAdoptionRating": "B",
                      "MarketPerformanceRating": "D"
                    }
                  },
                  "NetHashesPerSecond": 0,
                  "BlockNumber": 19671474,
                  "BlockTime": 12,
                  "BlockReward": 2.044338104121828,
                  "AssetLaunchDate": "2015-07-30",
                  "MaxSupply": -1,
                  "Type": 1,
                  "DocumentType": "Webpagecoinp"
                },
                "RAW": {
                  "PRICE": 3084.57511237431,
                  "OPENDAY": 3085.42274282198,
                  "HIGHDAY": 3086.55744600809,
                  "LOWDAY": 3079.67639070151
                }
              },
              {
                "CoinInfo": {
                  "Id": "171986",
                  "Name": "USDT",
                  "FullName": "Tether",
                  "Internal": "USDT",
                  "ImageUrl": "/media/37746338/usdt.png",
                  "Url": "/coins/usdt/overview",
                  "Algorithm": "N/A",
                  "ProofType": "N/A",
                  "Rating": {
                    "Weiss": {
                      "Rating": "",
                      "TechnologyAdoptionRating": "",
                      "MarketPerformanceRating": ""
                    }
                  },
                  "NetHashesPerSecond": 0,
                  "BlockNumber": 0,
                  "BlockTime": 0,
                  "BlockReward": 0,
                  "AssetLaunchDate": "2014-10-06",
                  "MaxSupply": -1,
                  "Type": 1,
                  "DocumentType": "Webpagecoinp"
                },
                "RAW": {
                  "PRICE": 1.00041254090219,
                  "OPENDAY": 1.00042753320388,
                  "HIGHDAY": 1.00042761302337,
                  "LOWDAY": 1.0004040401453
                }
              },
              {
                "CoinInfo": {
                  "Id": "204788",
                  "Name": "BNB",
                  "FullName": "Binance Coin",
                  "Internal": "BNB",
                  "ImageUrl": "/media/40485170/bnb.png",
                  "Url": "/coins/bnb/overview",
                  "Algorithm": "BEP-2",
                  "ProofType": "PoSA",
                  "Rating": {
                    "Weiss": {
                      "Rating": "C",
                      "TechnologyAdoptionRating": "C",
                      "MarketPerformanceRating": "C-"
                    }
                  },
                  "NetHashesPerSecond": 0,
                  "BlockNumber": 373613914,
                  "BlockTime": 0,
                  "BlockReward": 0,
                  "AssetLaunchDate": "2019-04-18",
                  "MaxSupply": -1,
                  "Type": 1,
                  "DocumentType": "Webpagecoinp"
                },
                "RAW": {
                  "PRICE": 539.200107897255,
                  "OPENDAY": 537.500231883748,
                  "HIGHDAY": 539.500084793743,
                  "LOWDAY": 536.400324805746
                }
              }
            ],
            "coins": {
              "VES": 36.243564,
              "EUR": 0.94166
            }
          }).status(200)
    } catch (error) {
        console.log(error)
        res.json({message:"Error Interno"}).status(500)
    }
}

export const getCoins = async(req,res)=>{
    try {
       const VES =  await getPriceCoin("USD","VES")
       const EUR = await getPriceCoin("USD","EUR")
       const data = {
        VES:VES.result,
        EUR:EUR.result
       }
       res.json(data)
    } catch (error) {
        console.log(error)
        res.json({message:"Error Interno"}).status(500)
    }
}

export const getQuote = async(req,res)=>{
  const {amount,currency} = req.params
  try {
    console.log(amount,currency)
  } catch (error) {
    console.log(error)
  }
}


export const getExchangeRate = async(req,res)=>{
    const {amount,currency} = req.params
    try {
            const value =  await getPriceCoin("USD",currency,amount)

          res.json(value.result)      
    } catch (error) {
        console.log(error)
    }
}
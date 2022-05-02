require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BFsD1HFvU_HK-8EU626Wyn_q0oRkYTHK',
      accounts: [ '14fbb7bc29e81eb46c19d80f25c92e0616274ebffac583b98183a0cbf8a4d764' ]
    }
  }
}
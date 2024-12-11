const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SimpleDEXModule = buildModule("SimpleDEX", (m) => {
  // Desplegar TokenA
  const tokenA = m.contract("TokenA");
  
  // Desplegar TokenB
  const tokenB = m.contract("TokenB");
  
  // Desplegar SimpleDEX con las direcciones de TokenA y TokenB
  const simple = m.contract("SimpleDEX", [
    tokenA, // Pasamos directamente el futuro de TokenA
    tokenB  // Pasamos directamente el futuro de TokenB
  ]);

  return { simple, tokenA, tokenB };
});

module.exports = SimpleDEXModule;
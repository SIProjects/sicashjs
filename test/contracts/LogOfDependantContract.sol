pragma solidity ^0.5.8;

import "./LogOfDependantContractChild.sol";

// https://github.com/sicashproject/sicashjs/issues/4
contract LogOfDependantContract {
  LogOfDependantContractChild testContract;

  constructor() public {
    testContract = new LogOfDependantContractChild();
  }

  function emitLog() public {
    testContract.emitFoo();
  }
}

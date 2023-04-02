// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CompanySubscription {
    IERC20 public token;
    uint256 public subscriptionAmount;
    uint256 public subscriptionPeriod;

    struct Company {
        string name;
        string website;
        string planName;
        uint256 subscriptionAmount;
        uint256 timePeriod;
        string walletAddress;
        string description;
        string imageUrl;
        uint256 endTime;
    }

    mapping(address => Company) public companies;

    event CompanyRegistered(address indexed companyAddress, string name, string website);

    constructor(address _tokenAddress, uint256 _subscriptionAmount, uint256 _subscriptionPeriod) {
        token = IERC20(_tokenAddress);
        subscriptionAmount = _subscriptionAmount;
        subscriptionPeriod = _subscriptionPeriod;
    }

    function registerCompany(
        string memory _name,
        string memory _website,
        string memory _planName,
        uint256 _subscriptionAmount,
        string memory _walletAddress,
        string memory _description,
        string memory _imageUrl
    ) external {
        require(token.balanceOf(msg.sender) >= subscriptionAmount, "Insufficient token balance");
        require(token.transferFrom(msg.sender, address(this), subscriptionAmount), "Token transfer failed");

        Company storage company = companies[msg.sender];
        company.name = _name;
        company.website = _website;
        company.planName = _planName;
        company.subscriptionAmount = _subscriptionAmount;
        company.timePeriod = subscriptionPeriod;
        company.walletAddress = _walletAddress;
        company.description = _description;
        company.imageUrl = _imageUrl;
        company.endTime = block.timestamp + subscriptionPeriod * 1 days;

        emit CompanyRegistered(msg.sender, _name, _website);
    }
}





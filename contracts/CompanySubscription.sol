// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


// contract CompanySubscription {
//     struct Subscription {
//         string companyName;
//         string website;
//         string planName;
//         uint256 subscriptionAmount;
//         uint256 timePeriod;
//         string walletAddress;
//         string description;
//         string logoUrl;
//     }

//     IERC20 private token;
//     address public admin;
//     Subscription[] public subscriptions;

//     constructor(IERC20 _token) {
//         token = _token;
//         admin = msg.sender;
//     }

//     function createSubscription(
//         string memory _companyName,
//         string memory _website,
//         string memory _planName,
//         uint256 _subscriptionAmount,
//         uint256 _timePeriod,
//         string memory _walletAddress,
//         string memory _description,
//         string memory _logoUrl
//     ) public {
//         require(
//             token.transferFrom(msg.sender, admin, _subscriptionAmount),
//             "Token transfer failed"
//         );
//         Subscription memory newSubscription = Subscription({
//             companyName: _companyName,
//             website: _website,
//             planName: _planName,
//             subscriptionAmount: _subscriptionAmount,
//             timePeriod: _timePeriod,
//             walletAddress: _walletAddress,
//             description: _description,
//             logoUrl: _logoUrl
//         });
//         subscriptions.push(newSubscription);
//     }

//     function getSubscriptionsCount() public view returns (uint256) {
//         return subscriptions.length;
//     }
// }

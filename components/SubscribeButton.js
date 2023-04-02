// import { useState } from "react";
// import { ethers } from "ethers";
// import subscriptionContractData from "../contracts/subscription";

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();
// const contract = new ethers.Contract(
//   subscriptionContractData.address,
//   subscriptionContractData.abi,
//   signer
// );

// export default function SubscribeButton() {
//   const [loading, setLoading] = useState(false);

//   const handleSubscribe = async () => {
//     setLoading(true);
//     try {
//       const tx = await contract.subscribe({ gasLimit: 1000000 });
//       await tx.wait();
//       alert("Subscription successful!");
//     } catch (error) {
//       console.error("Error subscribing: ", error);
//       alert("Subscription failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button onClick={handleSubscribe} disabled={loading}>
//       {loading ? "Subscribing..." : "Subscribe"}
//     </button>
//   );
// }

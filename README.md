# Advanced Blockchain Assesment

Couple of assumptions or short comings from my side: 
* used alerts to show incorrect chain error
* I have made ETH (native token) transfer flexible in form of ERC20 but i am differentiating it on the basis of its symbol provided in tokens.ts
* All ERC20s should be listed along with network id in the format given in tokens.tsx
* I didnt do a lot of design work due to my hectic schedule
* You can add N ERC20 tokens for same functionality
* DAI was hard to get from faucet so i tested with some other ERC20
* So there wasnt anything mentioned in notion to separate transfer of token in UI e.g a selector for current token for which i have used query parameter approach
* http://localhost:3000/?token=DAI , http://localhost:3000/?token=ETH or http://localhost:3000/?token=CHZ or any other ERC20 can be transferred by just updating the url of the app, since it wasnt heavily focused on in notion doc i decided the easiest and conveniant solution for me.
* if no token is provided you are redirected to eth transfer by default
* Using Context API because this was a very small application and using redux for such an application seemed overkill to me
* Things are tested from my end but im open to update if anything seems to be remaining

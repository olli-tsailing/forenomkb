import {OAuth} from 'forcejs';


let oauth = OAuth.createInstance("3MVG9rKhT8ocoxGmS5DVtphBZcvQuzMpH2TgdtykdWD.bcLLmnFJlE1_bCEwkp22gpwwVl63AO88mcxFaRPVS"
                                ,"https://test.salesforce.com",
                                "https://immense-gorge-00490.herokuapp.com/index.html"
                                );
oauth.login()
    .then(oauthResult => {
        //console.log(oauthResult);
        renderLightningOutComponent(oauthResult);
    });

let renderLightningOutComponent = (oauthResult) => {
    const token = oauthResult.accessToken;
    const lightningEndPointURI = "https://forenom--qa.sandbox.lightning.force.com";
    $Lightning.use("c:KBExtLightningOutApp", () => {
        $Lightning.createComponent("c:KBExtLightningOutCmp", {},
           "lightningComponent",
            (cmp) => {
               //Component COde
            });
  },lightningEndPointURI,token );

}

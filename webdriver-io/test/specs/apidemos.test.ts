import { expect } from '@wdio/globals'
import { APIDemosActions } from "../actions/apidemos.action";

const apiDemoActions = new APIDemosActions();

describe("ApiDemos", async() => {
    it("Hello ApiDemos", async() =>{
        await apiDemoActions.waitForAppBtn();
        await apiDemoActions.clickAppBtn();
        await apiDemoActions.ClickAlertDialogsBtn();
        await apiDemoActions.ClickTextEntryDialogBtn();
        await apiDemoActions.fillUsernameField("Janitra");
        await apiDemoActions.fillPasswordField("Janitra");

        expect(await apiDemoActions.getUsernameFieldValue()).toEqual("Janitra");
        await expect(apiDemoActions.passwordField).toBeDisplayed();
    })
})
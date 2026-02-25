import { APIDemosPage } from "../pageObjects/apidemos.page";

export class APIDemosActions{
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async verifyAppBtn() {
        return await APIDemosPage.appBtn().isDisplayed();
    }

    async ClickSearchBtn() {
        await APIDemosPage.searchBtn().click();
    }

    async ClickAlertDialogsBtn() {
        await APIDemosPage.alertDialogsBtn().click();
    }

    async ClickTextEntryDialogBtn() {
        await APIDemosPage.textEntryDialogBtn().click();
    }

    async ClickInvokeSearchBtn() {
        await APIDemosPage.InvokeSearchBtn().click();
    }

    async fillQueryField(query: string) {
        await APIDemosPage.prefillQueryField().setValue(query);
    }

    async fillUsernameField(query: string) {
        await APIDemosPage.prefillUsernameField().setValue(query);
    }

    async fillPasswordField(query: string) {
        await APIDemosPage.prefillPasswordField().setValue(query);
    }

    async fillAppDataField(query: string) {
        await APIDemosPage.appDataField().setValue(query);
    }

    async getQueryFieldValue() {
        return await APIDemosPage.prefillQueryField().getText();
    }

    async getUsernameFieldValue() {
        return await APIDemosPage.prefillUsernameField().getText();
    }

    get passwordField() {
        return APIDemosPage.prefillPasswordField();
    }

    async getAppDataFieldValue() {
        return await APIDemosPage.appDataField().getText();
    }

}
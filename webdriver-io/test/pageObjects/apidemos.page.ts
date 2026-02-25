import { $ } from '@wdio/globals'

export class APIDemosPage{
    static appBtn() {
        return $('//android.widget.TextView[@content-desc="App"]');
    }
    
    static searchBtn() {
        return $('//android.widget.TextView[@content-desc="Search"]');
    }

    static alertDialogsBtn() {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    static textEntryDialogBtn() {
        return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
    }

    static InvokeSearchBtn() {
        return $('//android.widget.TextView[@content-desc="Invoke Search"]');
    }

    static prefillQueryField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_prefill"]');
    }

    static prefillUsernameField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    }

    static prefillPasswordField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
    }

    static appDataField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_appdata"]')
    }

}
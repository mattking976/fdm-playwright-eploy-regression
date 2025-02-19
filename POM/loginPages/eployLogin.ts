// eploy login pages
// create a list of accessable DOM elements
// export this list in a read-only format.

import { Page } from 'playwright';

export class EployData {
    static #instance: EployData;

    // SuFa locators
    private usernameInputLocator: string = 'ctl00_main_ctl02_txtUsername';
    private passwordInputLocator: string = 'ctl00_main_ctl02_txtPassword';
    private submitButtonLocatior: string = 'ctl00_main_ctl02_btnSubmit';
    private eployLogoLocator: string = 'ctl00_AdminTopBar1_imgLogo';
    private longTimeout: number = 7000;

    // private constructor for singleton class
    private constructor() {}

    public static get instance(): EployData {
        if (!EployData.#instance) {
            EployData.#instance = new EployData();
        }

        return EployData.#instance;
    }

    public usernameInput(): string {
        return this.usernameInputLocator;
    }

    public passwordInput(): string {
        return this.passwordInputLocator;
    }

    public submitButton(): string {
        return this.submitButtonLocatior;
    }

    public eployHomeLogo(): string {
        return this.eployLogoLocator;
    }

    public eployLongTimeout(): number {
        return this.longTimeout;
    }
}

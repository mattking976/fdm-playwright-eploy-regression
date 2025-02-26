// eploy login pages
// create a list of accessable DOM elements
// export this list in a read-only format.

export class EployData {
    static #instance: EployData;

    // SuFa locators
    private usernameInputLocator: string = 'ctl00_main_ctl02_txtUsername';
    private passwordInputLocator: string = 'ctl00_main_ctl02_txtPassword';
    private submitButtonLocatior: string = 'ctl00_main_ctl02_btnSubmit';
    private eployLogoLocator: string = 'ctl00_AdminTopBar1_imgLogo';
    private locationCodeSearch: string = 'QuickSearchKeyword';
    private quickSearchPanel: string = 'QuickSearchPanel';
    private longTimeout: number = 15000; // 15 second timeout for the long page load times

    // private constructor for singleton class
    private constructor() {}

    public static get instance(): EployData {
        if (!EployData.#instance) {
            EployData.#instance = new EployData();
        }

        return EployData.#instance;
    }

    public get usernameInput(): string {
        return this.usernameInputLocator;
    }

    public get passwordInput(): string {
        return this.passwordInputLocator;
    }

    public get submitButton(): string {
        return this.submitButtonLocatior;
    }

    public get eployHomeLogo(): string {
        return this.eployLogoLocator;
    }

    public get eployLongTimeout(): number {
        return this.longTimeout;
    }

    public get eployLocationCodeSearch(): string {
        return this.locationCodeSearch;
    }

    public get eployQuickSearchPanel(): string {
        return this.quickSearchPanel;
    }
}

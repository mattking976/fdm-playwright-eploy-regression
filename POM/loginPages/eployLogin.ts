// eploy login pages
// create a list of accessable DOM elements
// export this list in a read-only format.

class EployData {
    private static instance: EployData;

    // SuFa locators
    private usernameInputLocator: string = 'SOMELOCATOR';
    private passwordInputLocator: string = 'SOMELOCATOR';

    // private constructor for singleton class
    private constructor() {}

    public usernameInput(): string {
        return this.usernameInputLocator;
    }

    public passwordInput(): string {
        return this.passwordInputLocator;
    }
}

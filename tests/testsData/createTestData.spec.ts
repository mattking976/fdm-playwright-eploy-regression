import { expect, test } from '@playwright/test';

import envVars from '../../globalENVsetup';
import { EployData } from '../../POM/loginPages/eployLogin';

test.describe('A tool for creating test data', () => {
    test('Create a new FDM account', async ({ page }) => {
        // create a new FDM accounts
        /* 
            1. navigate to eploy login page.
            2. sign up with a new user.
            3. sign in with new user.
            4. complete further forms
            5. update account to be active 
            6. Ensure that this returns as ok and there are no errors with the process
        */
        const eployData = EployData.instance;

        // Navigate to the Eploy loging page and input a username
        await page.goto(envVars.eployENV);

        const usernameInput = page.getByTestId(eployData.usernameInput());
        const passwordInput = page.getByTestId(eployData.passwordInput());
        const submitButton = page.getByTestId(eployData.submitButton());

        await expect(usernameInput).toBeVisible();

        // input username and password into the appropriate fields
        await usernameInput.fill(envVars.eployUsername);
        await passwordInput.fill(envVars.eployPassword);

        // submit username and password
        await submitButton.click();

        const logo = page.getByTestId(eployData.eployHomeLogo());

        // Page load times are large so having to push timout to cope with this
        await expect(logo).toBeVisible({ timeout: 7000 });
    });
});

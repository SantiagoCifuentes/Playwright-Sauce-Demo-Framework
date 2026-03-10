import { test, expect } from '../src/fixtures/TestFixture';
import 'dotenv/config';



test('correct login', async ({ page , loginPage}) => {
 await page.goto(process.env.BASE_URL!);
 await loginPage.login(process.env.SAUCEUSERNAME!, process.env.SAUCEPASSWORD!);

 await expect(page).toHaveURL(/.*inventory.html/);
 await expect(page.getByText('Products')).toBeVisible();
 await expect(page.locator('.shopping_cart_link')).toBeVisible();

});


test('incorrect login', async ({ page, loginPage }) => {
        await page.goto(process.env.BASE_URL!);
        await loginPage.login('wrong_user', 'wrong_password');
    
        await expect(page).toHaveURL(process.env.BASE_URL!);
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });

    
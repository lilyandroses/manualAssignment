///<reference types = 'cypress'/>

import PowerShampoo from '../pageobjects/PowerShampooPage'
import checkOutPage from '../pageobjects/checkoutPage';
import PowerShampooCoupon from '../pageobjects/PowerShampoowithCoupon';

const powerShampoo = new PowerShampoo();
const checkout = new checkOutPage();
const powerShampooCoupon = new PowerShampooCoupon();

describe('E2E with cupoun discountflow for shampoo', () => {
    it('Verify user checkout the product using cupoun discount code and register them self', () => {

        // step 1:Start from the product page for the Power Shampoo
        cy.visit('https://manual:menofmanual@www.devel.manual.co/hair-loss/power-shampoo')
        cy.url().should('include', 'devel.manual.co/hair-loss/power-shampoo')
        cy.get('#CookieBanner button').click({ force: true })
        //step-2:Opt for %0%DIscount and add the one-off (not subscription) version of the product to the cart

        powerShampooCoupon.optForDiscount()
        powerShampoo.clickOnChooseYourPlanButton()
        powerShampoo.clickOnOneOffText()
        powerShampoo.clickOnGetStartedButton()

        //step 3:Assert Same Product and price Gets added 
        powerShampoo.verifyProductTitle("Power Shampoo")
        powerShampoo.verifyProductPrice("£14.00")
        // powerShampoo.verifyTotalIs("£9.99")

        //step 4 :hange QTY to 2 and assert Discount is applied

        powerShampooCoupon.addQTY2andAssert()
        powerShampooCoupon.VerifyDiscount("-£7.00")
        
        //step 5 Proceed to the checkout page
        powerShampoo.clickOnCheckoutButton()

        // step 6:verify page gets open 
        checkout.verifyChecoutPageUrl()

        //step 7 Register new user
        checkout.registerUser()
        checkout.addAddressAndContinuePayment()
        checkout.addPaymentDetailsAndSubmitOrder()

        // step 8 Verify the Thank You screen 
        checkout.verifyThankyouScreenDisplalyed()
    })
})
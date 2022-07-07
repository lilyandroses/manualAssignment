///<reference types = 'cypress'/>

import PowerShampoo from '../pageobjects/PowerShampooPage'
import checkOutPage from '../pageobjects/checkoutPage';

const powerShampoo = new PowerShampoo();
const checkout = new checkOutPage();

describe('E2E flow for shampoo', ()=>{
    it('Verify user checkout the product and register them self', ()=>{

        //Step 1 -	Start from the product page for the Power Shampoo
        cy.visit('https://manual:menofmanual@www.devel.manual.co/hair-loss/power-shampoo')
        cy.url().should('include','devel.manual.co/hair-loss/power-shampoo')
        cy.get('#CookieBanner button').click({ force: true })
        //Step 2 - Add the one-off (not subscription) version of the product to the cart
     
        powerShampoo.clickOnCloseIcon()
        powerShampoo.clickOnChooseYourPlanButton()
      
        powerShampoo.clickOnOneOffText()
        powerShampoo.clickOnGetStartedButton()

        //step 3:Assert Same Product and price Gets added 
        powerShampoo.verifyProductTitle("Power Shampoo")
        powerShampoo.verifyProductPrice("£14.00")
        powerShampoo.verifyTotalIs("£14.00")

        //Step 4 -	Proceed to the checkout page
        powerShampoo.clickOnCheckoutButton()

        //step-5 verify page gets open 
        checkout.verifyChecoutPageUrl()

        // Step-6.	Register new user
        checkout.registerUser()
        checkout.addAddressAndContinuePayment()
        checkout.addPaymentDetailsAndSubmitOrder()

        //Step-7 - Verify the Thank You screen 
        checkout.verifyThankyouScreenDisplalyed()
    })
})
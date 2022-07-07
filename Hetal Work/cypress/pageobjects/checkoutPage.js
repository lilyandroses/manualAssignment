

const userdata = require('../dataobjects/userData.json')
const cardData = require('../dataobjects/paymentData.json')
const email = "test"+ Date.now() + "@gmail.com"


//const checkoutPageHeader = "#manual-logo-white-copy #manual-wordmark-green"
const firstNameTextBox = "[name='firstName']"
const lastNametextBox = "[name='lastName']"
const emailtextBox = "[name='email']"
const passwordTextBox = "[name='plainPassword']"
const phoneNumberTextbox = "[name='phoneNumber']"
const birthDay = "[name='birthday']"
const privacyCheckBox = "[name='agreeTermsAndPrivacy']"
const keepInfromCHeckBox = "[name='subscribedToNewsletter']"
const submitButton = "[type='submit']"
const pinCode = "[name='postcode']"
const addressDropdown = ".select"
const cardNumberTextBox = "#checkout-frames-card-number"
const expiryDate = "#checkout-frames-expiry-date"
const cvv = "#checkout-frames-cvv"
const Finalmessage = "h1"

class checkOutPage{
    verifyChecoutPageUrl(){
        cy.url().should('include','checkout/review')
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    registerUser(){
        cy.get(firstNameTextBox).type(userdata.firstName)
        cy.get(lastNametextBox).type(userdata.lastName)
        cy.get(emailtextBox).type(email)
        cy.get(passwordTextBox).type(userdata.password)
        cy.get(phoneNumberTextbox).type(userdata.phone)
        cy.get(birthDay).type(userdata.birthdate)
        cy.get(privacyCheckBox).click({force: true})
        cy.get(keepInfromCHeckBox).click({force: true})
        cy.get(submitButton).click({multiple: true})

    }

    addAddressAndContinuePayment(){
        cy.get(pinCode).type("N1 7LQ")
        cy.contains("FIND ADDRESS").click()
        cy.get(addressDropdown).select("2")
        cy.contains("Continue to payment").click()

    }

    addPaymentDetailsAndSubmitOrder(){
    cy.iframe("[name='checkout-frames-cardNumber']").then(body=>{
            cy.wrap(body).find(cardNumberTextBox).type(cardData.cardNumber)
        })
        cy.iframe("[name='checkout-frames-expiryDate']").then(body=>{
            cy.wrap(body).find(expiryDate).type(cardData.expiryDate)
        })
        cy.iframe("[name='checkout-frames-cvv']").then(body=>{
            cy.wrap(body).find(cvv).type(cardData.Cvv)
        })
        cy.contains("Place order").click()
    }

    verifyThankyouScreenDisplalyed(){
        cy.wait(7000)
        cy.get(Finalmessage).should('contain.text', "Thanks for your order,")
    }
}

export default checkOutPage
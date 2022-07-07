///<reference types = 'cypress'/>

const closeIconOfpopup = ".xxs-screen-hidden"
const chooseYourPlan = ".VariantSelector_btnWrapper__1WGaf  button"
const getStartedButton = "#HairProductsPanel > div[class*='HairProductCard_HairProductCard']:nth-child(1) button"
const productTitle = "a[data-qa='productCartTitle']"
const productPrice = "div[data-qa='productCartPrice']"
const totalprice = "[data-qa='addDiscountDiv'] + div > div[data-qa='cartTotalsRowLabel']"
const checkOutButton = "#checkout-btn"
//const image = "img"
class PowerShampoo {

    clickOnCloseIcon() {
        cy.wait(3000)
        cy.get(closeIconOfpopup).click()
    }
    //verifyimage() {
      //  cy.wait(3000)
      //  cy.get(image).should('have.attr', 'src', "https://frontend-uk-nextjs-dev.vercel.app/_next/image/?url=%2Fimages%2Fnext%2Fhair-loss%2FPower-Shampoo%402x.png&w=384&q=75")
   // }
    clickOnChooseYourPlanButton() {
        cy.get(chooseYourPlan).click()
    }

    clickOnOneOffText() {
        cy.contains('One off').click()
    }

    clickOnGetStartedButton() {
        cy.get(getStartedButton).click()
        cy.get(getStartedButton).click()
    }

    verifyProductTitle(text) {
        cy.get(productTitle).should('have.text', text)
    }
    verifyProductPrice(price) {
        cy.get(productPrice).should('have.text', price)
    }
    verifyTotalIs(tprice) {
        cy.get(totalprice).should('contains.text', "Total").next("div").should("contains.text", tprice)

    }
    
    clickOnCheckoutButton() {
        cy.get(checkOutButton).click({force:true})
    }


}

export default PowerShampoo
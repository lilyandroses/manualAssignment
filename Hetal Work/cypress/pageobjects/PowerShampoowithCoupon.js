///<reference types = 'cypress'/>

const email = "test" + Date.now() + "@gmail.com"
const enterEmail = "[placeholder='Enter email address']"
const clickonplus = "[class*='Cart_quantityPlus']"
const qty2 = "[class*='Cart_quantityValue']"
const discountApplied = "#totalsOpenDiscount"
const discount = "div[class*='ddDiscount_AddDiscountDiscount']"


class PowerShampooCoupon {

    optForDiscount() {
        cy.get(enterEmail).type(email)
        cy.contains("Get 50% off").click()
    }
    addQTY2andAssert() {
        cy.wait(1000)
        cy.get(clickonplus).click()
        cy.wait(1000)
        cy.get(qty2).should('have.text', '2')
    }
    verifyAppliedDiscount(text) {
        cy.get(discountApplied).should('have.text'.text)

    } VerifyDiscount(text) {
      //  cy.get(discount).should('contain.text', "50% OFF FIRST ORDER").parent().next(".Cart_totalsValue__HalYy").should('contain.text', text)
    }


}
export default PowerShampooCoupon
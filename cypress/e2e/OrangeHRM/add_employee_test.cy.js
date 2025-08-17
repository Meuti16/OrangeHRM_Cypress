import { LoginPage } from "../../support/pages/login_page.cy.js"
import { AddEmployee } from "../../support/pages/add_employee_page.cy.js"
import { DashboardPage } from "../../support/pages/dashboard_page.cy.js"
import { PimPage } from "../../support/pages/pim_page.cy.js"

let addEmployeePage = new AddEmployee
let dashboardPage = new DashboardPage()
let pimPage = new PimPage()
let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
    loginPage.fillUsername(Cypress.env('orangehrm_username'))
    loginPage.fillPassword(Cypress.env('orangehrm_password'))
    loginPage.clickButtonLogin()
    cy.wait(3000)
    loginPage.validateLoginSuccess('Dashboard')
})

describe('PIM-Add New Employee', { testIsolation: true }, () => {
    it('Add New Employee with Required Fields(Positive)', () => { 
        dashboardPage.clickPimMenuText()
        pimPage.clickAddEmployeeTab()
        cy.wait(3000)
        addEmployeePage.fillFirstname(Cypress.env('orangehrm_new_firstname'))
        addEmployeePage.fillLastname(Cypress.env('orangehrm_new_lastname'))
        addEmployeePage.uploadFoto()
        addEmployeePage.clickButtonSave()
        cy.wait(5000)
        addEmployeePage.verifyEmployeeCreatedSuccessfully(Cypress.env('orangehrm_new_employee_name'))
        addEmployeePage.validateImageIsVisible()
    })
    
    it('add employees by leaving the required fields blank (Negative)', () => { 
        dashboardPage.clickPimMenuText();
        pimPage.clickAddEmployeeTab();
        addEmployeePage.uploadFoto()
        addEmployeePage.clickButtonSave(); 
        cy.wait(3000);
        addEmployeePage.validateErrorMessageInFirstnameField('Required');
        addEmployeePage.validateErrorMessageInLastnameField('Required');
    })
})




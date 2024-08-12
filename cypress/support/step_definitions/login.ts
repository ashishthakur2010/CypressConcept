import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import NaukriLoginPage from '../../e2e/Naukri/PageObjects/NaukriLoginPage'

Given('I open Naukri website', () => {
	NaukriLoginPage.open()
})

When('I enter login and password to inputs', () => {
	NaukriLoginPage.login('parabank-1@yopmail.com', 'Test1234')
})

Then('I should see correct URL', () => {
	NaukriLoginPage.verifyTheUrl()
})

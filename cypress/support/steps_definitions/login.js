/// <reference types="cypress"/>
/*global Given, Then, When*/

Given('Estou logado no site amazon', () => {
    cy.visit('https://amazon.com.br')
})

And('busco pelo curso java', () =>{
    console.log('Passei aqui')
})

When('existe o curso', () =>{
    console.log('Passei aqui')
}) 

Then('curso comprado', () =>{
    console.log('Passei aqui')
})
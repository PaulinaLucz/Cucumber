const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
    
});

//login test

When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const elem =await $('#flash');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});

//add remove elements test

When("I add elemnts with clic add elemnts", async () => {
    await $('#content > div > button').click();
});

Then("I should see a field saying delete", async () => {
    const elem =await $('#elements > button');
    await expect(elem).toBeExisting();
});

When("I delete elemnts with clic delete", async () => {
    await $('#elements > button').click();
});

Then("I should desapir field saying delete", async () => {
    const elem =await $('#content > div > button');
    await expect(elem).toBeExisting();
});

//checkboxes tests

When("I clic chceck boxes checkbox 1", async () => {
    await $('#checkboxes > input[type=checkbox]:nth-child(1)').click();
})

Then("I should see a check checkbox 1", async () => {
    const elem = await $('#checkboxes > input[type=checkbox]:nth-child(1)')
    await expect(elem).toBeSelected()
});
        
When("I duble clic chceck boxes checkbox 2", async () => {
    await $('#checkboxes > input[type=checkbox]:nth-child(3)').doubleClick();
})

Then("I should see a check checkbox 2", async () => {
    const elem = await $('#checkboxes > input[type=checkbox]:nth-child(3)')
    await expect(elem).toBeSelected()
});

//key_presses tests

When("I chceck some {word}", async (elements) => {
    const input = await $('#target');
    await input.setValue(elements);
    await browser.keys([elements]);
});   

Then("I should see a {string}", async (names) => {
    const elem =await $('#result');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(names);   
});



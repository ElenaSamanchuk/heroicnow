var assert = require('assert');

describe('register form', function() {

    it('input of correct values', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','Ivan01011901');
        browser.click('label');
        browser.click('#submit');
        assert.equal((browser.isVisible('#firstname-error')|browser.isVisible('#lastname-error')|browser.isVisible('#email-field-error')|browser.isVisible('#password-error')|browser.isVisible('#checkboxagree-error')),false,'should not be messages on the screen',browser.saveScreenshot('1.png')); 
    }); 

    it('input of null values', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','');
        browser.setValue('input[name="lastname"]','');
        browser.setValue('input[name="email"]','');
        browser.setValue('input[name="password"]','');
        browser.click('#submit');
        assert.equal((browser.isVisible('#firstname-error')&browser.isVisible('#lastname-error')&browser.isVisible('#email-field-error')&browser.isVisible('#password-error')&browser.isVisible('#checkboxagree-error')),true,'should be messages on the screen',browser.saveScreenshot('2.png')); 
    });

    it('input of spaces', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','      ');
        browser.setValue('input[name="lastname"]','      ');
        browser.setValue('input[name="email"]','      ');
        browser.setValue('input[name="password"]','      ');
        browser.click('#submit');
        assert.equal((browser.isVisible('#firstname-error')&browser.isVisible('#lastname-error')&browser.isVisible('#email-field-error')&browser.isVisible('#password-error')&browser.isVisible('#checkboxagree-error')),true,'should be messages on the screen',browser.saveScreenshot('3.png')); 
    });

    it('input of digits in the firstname and lastname fields', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','123456');
        browser.setValue('input[name="lastname"]','123456');
        browser.setValue('input[name="email"]','123456');
        browser.setValue('input[name="password"]','123456');
        browser.click('#submit');
        assert.equal((browser.isVisible('#firstname-error')&browser.isVisible('#lastname-error')&browser.isVisible('#email-field-error')&browser.isVisible('#checkboxagree-error')),true,'should be messages on the screen',browser.saveScreenshot('4.png'));
   });

    it('input of characters', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','//////');
        browser.setValue('input[name="lastname"]','//////');
        browser.setValue('input[name="email"]','//////');
        browser.setValue('input[name="password"]','//////');
        browser.click('#submit');
        assert.equal((browser.isVisible('#firstname-error')&browser.isVisible('#lastname-error')&browser.isVisible('#email-field-error')&browser.isVisible('#password-error')&browser.isVisible('#checkboxagree-error')),true,'should be messages on the screen',browser.saveScreenshot('5.png'));
    });

    it('input one character', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','a');
        browser.setValue('input[name="lastname"]','a');
        browser.setValue('input[name="email"]','a');
        browser.setValue('input[name="password"]','a');
        browser.click('#submit');
        assert.equal((browser.isVisible('#firstname-error')&browser.isVisible('#lastname-error')&browser.isVisible('#email-field-error')&browser.isVisible('#password-error')&browser.isVisible('#checkboxagree-error')),true,'should be messages on the screen',browser.saveScreenshot('6.png'));
    });

    it('input adress without .ru', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail');
        browser.setValue('input[name="password"]','Ivan01011901');
        browser.click('label');
        browser.click('#submit');
        assert.equal((browser.isVisible('#email-field-error')),true,'should be messages on the screen',browser.saveScreenshot('7.png'));
    });

    it('input of Russian letters', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Иван');
        browser.setValue('input[name="lastname"]','Иванов');
        browser.setValue('input[name="email"]','ивановиван01011901@mail.ru');
        browser.setValue('input[name="password"]','Иванов');
        browser.click('label');
        browser.click('#submit');
        assert.equal((browser.isVisible('#email-field-error')&browser.isVisible('#password-error')),true,'should be messages on the screen',browser.saveScreenshot('8.png'));
    });

    it('input of 4 characters in the password', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','1234');
        browser.click('label');
        browser.click('#submit');
        assert.equal((browser.isVisible('#password-error')),true,'should be messages on the screen',browser.saveScreenshot('9.png'));
    });

    it('input of characters more than envisaged', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','0123456789012345678901234567890123456789');
        browser.setValue('input[name="lastname"]','0123456789012345678901234567890123456789');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','0123456789012345678901234567890123456789');
        browser.click('label');
        browser.click('#submit');
        assert.equal((browser.isVisible('#password-error')),true,'should be messages on the screen',browser.saveScreenshot('10.png'));
    });

    it('input without a tick', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','Ivan01011901');
        browser.click('#submit');
        assert.equal((browser.isVisible('#checkboxagree-error')),true,'should be messages on the screen',browser.saveScreenshot('11.png')); 
    });
    });  

       
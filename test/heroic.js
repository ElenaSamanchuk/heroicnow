var assert = require('assert');

describe('register form', function() {
    it('should not be messages on the screen, input of correct values', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','01011901');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('1.png');
    });   

    it('should be messages on the screen, input without a tick', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','01011901');
        browser.click('#submit');
        browser.saveScreenshot('2.png');
    });


    it('should be messages on the screen, input of null values', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','');
        browser.setValue('input[name="lastname"]','');
        browser.setValue('input[name="email"]','');
        browser.setValue('input[name="password"]','');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('3.png');
    }); 


    it('should be messages on the screen, input of spaces in the firstname and lastname fields', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]',' ');
        browser.setValue('input[name="lastname"]',' ');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','12345678');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('4.png');
    }); 

    it('should be messages on the screen, input of digits in the firstname and lastname fields', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','1');
        browser.setValue('input[name="lastname"]','1');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail.ru');
        browser.setValue('input[name="password"]','12345678');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('5.png');
    }); 

    it('should be messages on the screen, input of Russian letters', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','а');
        browser.setValue('input[name="lastname"]','а');
        browser.setValue('input[name="email"]','а');
        browser.setValue('input[name="password"]','а');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('6.png');
    });


    it('should be messages on the screen, input of English letters', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','b');
        browser.setValue('input[name="lastname"]','b');
        browser.setValue('input[name="email"]','b');
        browser.setValue('input[name="password"]','b');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('7.png');
    });


    it('should be messages on the screen, input of characters', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','/');
        browser.setValue('input[name="lastname"]','/');
        browser.setValue('input[name="email"]','/');
        browser.setValue('input[name="password"]','/');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('8.png');
    });

    it('should be messages on the screen, input of characters more than 30 in the firstname and lastname, than 24 in the password', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','0123456789012345678901234567890123456789');
        browser.setValue('input[name="lastname"]','0123456789012345678901234567890123456789');
        browser.setValue('input[name="email"]','0123456789012345678901234567890123456789');
        browser.setValue('input[name="password"]','0123456789012345678901234567890123456789');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('9.png');
    });

    it('should be messages on the screen, input of 4 characters in the password', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','0123');
        browser.setValue('input[name="lastname"]','0123');
        browser.setValue('input[name="email"]','0123');
        browser.setValue('input[name="password"]','0123');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('10.png');
    });

    it('should be messages on the screen, input adress without .ru', function () {
        browser.url('https://heroicnow.com/step1.php?id=1&site=46');
        browser.setValue('input[name="firstname"]','Ivan');
        browser.setValue('input[name="lastname"]','Ivanov');
        browser.setValue('input[name="email"]','ivanovivan01011901@mail');
        browser.setValue('input[name="password"]','01011901');
        browser.click('label');
        browser.click('#submit');
        browser.saveScreenshot('11.png');
    });






    });
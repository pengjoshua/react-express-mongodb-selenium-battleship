const {Builder, By, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const test = require('./testing');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

test.describe('Battleship UI', function() {

  test.it('can reach the Battleship webpage', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Battleship'), 15000);
  });

  test.it('can change ship orientation', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Battleship'), 5000);
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.className('destroyer')).click();
    yield driver.findElement(By.className('destroyer')).click();
  });

  test.it('can place vertically oriented ships on board', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Battleship'), 5000);
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.id('square1')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.id('square2')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.id('square3')).click();
    yield driver.findElement(By.className('destroyer')).click();
    yield driver.findElement(By.id('square4')).click();
  });

  test.it('can place horizontally oriented ships on board', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Battleship'), 5000);
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.className('destroyer')).click();
    yield driver.findElement(By.id('square40')).click();
  });

  test.it('can place ships on board, hit all the ships, sink all the ships, and win', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Battleship'), 5000);
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.className('destroyer')).click();
    yield driver.findElement(By.id('square40')).click();
    yield driver.wait(until.elementLocated(By.className('shootships')), 5000);
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.id('square1')).click();
    yield driver.findElement(By.id('square2')).click();
    yield driver.findElement(By.id('square3')).click();
    yield driver.findElement(By.id('square4')).click();
    yield driver.findElement(By.id('square5')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.id('square11')).click();
    yield driver.findElement(By.id('square12')).click();
    yield driver.findElement(By.id('square13')).click();
    yield driver.findElement(By.id('square14')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.id('square21')).click();
    yield driver.findElement(By.id('square22')).click();
    yield driver.findElement(By.id('square23')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.id('square31')).click();
    yield driver.findElement(By.id('square32')).click();
    yield driver.findElement(By.id('square40')).click();
    yield driver.findElement(By.id('square41')).click();
    yield driver.wait(until.elementLocated(By.className('winner')), 5000);
  });

  test.it('can win, go back in move history to the beginning, and win again', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Battleship'), 5000);
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.className('destroyer')).click();
    yield driver.findElement(By.id('square40')).click();
    yield driver.wait(until.elementLocated(By.className('shootships')), 5000);
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.id('square1')).click();
    yield driver.findElement(By.id('square2')).click();
    yield driver.findElement(By.id('square3')).click();
    yield driver.findElement(By.id('square4')).click();
    yield driver.findElement(By.id('square5')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.id('square11')).click();
    yield driver.findElement(By.id('square12')).click();
    yield driver.findElement(By.id('square13')).click();
    yield driver.findElement(By.id('square14')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.id('square21')).click();
    yield driver.findElement(By.id('square22')).click();
    yield driver.findElement(By.id('square23')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.id('square31')).click();
    yield driver.findElement(By.id('square32')).click();
    yield driver.findElement(By.id('square40')).click();
    yield driver.findElement(By.id('square41')).click();
    yield driver.wait(until.elementLocated(By.className('winner')), 5000);
    yield driver.findElement(By.id('move0')).click();
    yield driver.findElement(By.className('carrier')).click();
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.className('battleship')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.className('cruiser')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.className('submarine')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.className('destroyer')).click();
    yield driver.findElement(By.id('square40')).click();
    yield driver.wait(until.elementLocated(By.className('shootships')), 5000);
    yield driver.findElement(By.id('square0')).click();
    yield driver.findElement(By.id('square1')).click();
    yield driver.findElement(By.id('square2')).click();
    yield driver.findElement(By.id('square3')).click();
    yield driver.findElement(By.id('square4')).click();
    yield driver.findElement(By.id('square5')).click();
    yield driver.findElement(By.id('square10')).click();
    yield driver.findElement(By.id('square11')).click();
    yield driver.findElement(By.id('square12')).click();
    yield driver.findElement(By.id('square13')).click();
    yield driver.findElement(By.id('square14')).click();
    yield driver.findElement(By.id('square20')).click();
    yield driver.findElement(By.id('square21')).click();
    yield driver.findElement(By.id('square22')).click();
    yield driver.findElement(By.id('square23')).click();
    yield driver.findElement(By.id('square30')).click();
    yield driver.findElement(By.id('square31')).click();
    yield driver.findElement(By.id('square32')).click();
    yield driver.findElement(By.id('square40')).click();
    yield driver.findElement(By.id('square41')).click();
    yield driver.wait(until.elementLocated(By.className('winner')), 5000);
  });

  test.after(() => driver.quit());
});

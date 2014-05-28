'example startup activities using a local server
'initialiseLocalServer "firefox"
'initialiseLocalServer "chrome"
'initialiseLocalServer "internet explorer"

'example startup activities using a local server - you need to put in your sauce username and password
'initialiseSauceServer sauce_username, sauce_password, "Firefox", "26", "OS X 10.6", ""
'initialiseSauceServer sauce_username, sauce_password, "Android", "4.2", "Linux", ""
'initialiseSauceServer sauce_username, sauce_password, "iPad", "7.1", "OS X 10.9",""

'go to etesting shop
shufti.navigate "http://shop.etesting-lab.com"
'click the link for books and add an item
shufti.click browser("Browser").Page("Page").Link("booksLink")
shufti.click browser("Browser").Page("Page").WebElement("addToCart")
'have a look at the cart and buy contents
shufti.navigate "http://shop.etesting-lab.com/cart"
'shameless waits
wait 20
shufti.click browser("Browser").Page("Page").Link("cartLink")
wait 20
shufti.click browser("Browser").Page("Page").WebElement("termsOfService")
shufti.click browser("Browser").Page("Page").WebElement("checkout")
shufti.click browser("Browser").Page("Page").WebElement("checkoutAsGuest")

'if address is cached from a previous order - choose new
if shufti.elementExists(browser("Browser").Page("Page").WebElement("billingAddressSelect")) then 
  shufti.selectFromList browser("Browser").Page("Page").WebElement("billingAddressSelect"), "New Address"
End if

shufti.sendKeys browser("Browser").Page("Page").WebElement("firstName"), "Bungo"
shufti.sendKeys browser("Browser").Page("Page").WebElement("lastName"), "Womble"
shufti.sendKeys browser("Browser").Page("Page").WebElement("email"), second(now) & minute(now) & "bw@etesting-lab.com"
shufti.selectFromList browser("Browser").Page("Page").WebElement("country"), "United Kingdom"
shufti.sendKeys browser("Browser").Page("Page").WebElement("city"), "London"
shufti.sendKeys browser("Browser").Page("Page").WebElement("address1"), "1 High Street"
shufti.sendKeys browser("Browser").Page("Page").WebElement("postcode"), "WC1A 1AA"
shufti.sendKeys browser("Browser").Page("Page").WebElement("phoneNumber"), "07905362111"
shufti.click browser("Browser").Page("Page").WebElement("billingButton")
shufti.click browser("Browser").Page("Page").WebElement("shippingButton")
shufti.click browser("Browser").Page("Page").WebElement("shippingMethodButton")
shufti.sendKeys browser("Browser").Page("Page").WebElement("cardHolderName"), "Mr B Womble"
shufti.sendKeys browser("Browser").Page("Page").WebElement("cardNumber"), "4751111111111116"
shufti.sendKeys browser("Browser").Page("Page").WebElement("cardCode"), "123"
shufti.click browser("Browser").Page("Page").WebElement("paymentInfo")
shufti.click browser("Browser").Page("Page").WebElement("confirmOrder")
shufti.assertTextMatches browser("Browser").Page("Page").WebElement("confirmationMessage"), "Your order has been successfully processed!"
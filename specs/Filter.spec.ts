import {browser,element,by} from "protractor";
import {SearchPage} from "./../PageObjects/SearchPageObjects";

let objSearchPage: SearchPage;


beforeEach(() => {
    objSearchPage = new SearchPage();
    browser.waitForAngularEnabled(false);
});


describe("Test Suite",function(){
    it("Test case",async function(){
        await browser.sleep(3000);
        await browser.get("https://www.ncl.com/");
        expect(browser.getTitle()).toContain("Cruise Deals");
        await browser.driver.manage().window().maximize();
        await browser.sleep(3000);
        
        let windowHandles=browser.getAllWindowHandles();
        console.log("Total Handles -"+(await windowHandles).length);

        //Click dates field
       // browser.switchTo().frame(element(by.id("lightbox_pop")));
        //element(by.xpath("//div[@id='iosOverlay']//div[@id='close']/a")).click();

        //browser.switchTo().defaultContent();
        await browser.actions().mouseMove(objSearchPage.popupCloseButton).click().perform();
        //await objSearchPage.popupCloseButton.click();
        await browser.sleep(3000);
        console.log("Closed popup");
        await objSearchPage.dateField.click();
        console.log("Date popup clicked");
        await browser.sleep(3000);
        //select first available month from calender picker
        await browser.actions().mouseMove(objSearchPage.firstAvailableMonthField).click().perform();
        //await objSearchPage.firstAvailableMonthField.click();
        //fetch month name for first available month
         var month=objSearchPage.firstAvailableMonthValueField.getText();
        //fetch count of cruises based on selected month
        var filterCruiseCount=parseInt(await objSearchPage.filterCruiseCountField.getText());
        //click Apply button
        await objSearchPage.applyFilterButton.click();
        //click Find a Cruise button
        await objSearchPage.findCruiseButton.click();
        await browser.sleep(10000);
        await objSearchPage.singupCloseButton.click();
        await browser.sleep(5000);
        //keep on clicking more results field if available
        objSearchPage.clickMoreResults();

        //Validate search results count
        var resultCount=objSearchPage.searchResults();
        expect(resultCount.count()).toEqual(filterCruiseCount);

        
    });

    

})

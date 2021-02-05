"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SearchPageObjects_1 = require("./../PageObjects/SearchPageObjects");
let objSearchPage;
beforeEach(() => {
    objSearchPage = new SearchPageObjects_1.SearchPage();
    protractor_1.browser.waitForAngularEnabled(false);
});
describe("Test Suite", function () {
    it("Test case", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.get("https://www.ncl.com/");
            expect(protractor_1.browser.getTitle()).toContain("Cruise Deals");
            yield protractor_1.browser.driver.manage().window().maximize();
            yield protractor_1.browser.sleep(3000);
            let windowHandles = protractor_1.browser.getAllWindowHandles();
            console.log("Total Handles -" + (yield windowHandles).length);
            //Click dates field
            // browser.switchTo().frame(element(by.id("lightbox_pop")));
            //element(by.xpath("//div[@id='iosOverlay']//div[@id='close']/a")).click();
            //browser.switchTo().defaultContent();
            yield protractor_1.browser.actions().mouseMove(objSearchPage.popupCloseButton).click().perform();
            //await objSearchPage.popupCloseButton.click();
            yield protractor_1.browser.sleep(3000);
            console.log("Closed popup");
            yield objSearchPage.dateField.click();
            console.log("Date popup clicked");
            yield protractor_1.browser.sleep(3000);
            //select first available month from calender picker
            yield protractor_1.browser.actions().mouseMove(objSearchPage.firstAvailableMonthField).click().perform();
            //await objSearchPage.firstAvailableMonthField.click();
            //fetch month name for first available month
            var month = objSearchPage.firstAvailableMonthValueField.getText();
            //fetch count of cruises based on selected month
            var filterCruiseCount = parseInt(yield objSearchPage.filterCruiseCountField.getText());
            //click Apply button
            yield objSearchPage.applyFilterButton.click();
            //click Find a Cruise button
            yield objSearchPage.findCruiseButton.click();
            yield protractor_1.browser.sleep(10000);
            yield objSearchPage.singupCloseButton.click();
            yield protractor_1.browser.sleep(5000);
            //keep on clicking more results field if available
            objSearchPage.clickMoreResults();
            //Validate search results count
            var resultCount = objSearchPage.searchResults();
            expect(resultCount.count()).toEqual(filterCruiseCount);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9GaWx0ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE4QztBQUM5QywwRUFBOEQ7QUFFOUQsSUFBSSxhQUF5QixDQUFDO0FBRzlCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDWixhQUFhLEdBQUcsSUFBSSw4QkFBVSxFQUFFLENBQUM7SUFDakMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUdILFFBQVEsQ0FBQyxZQUFZLEVBQUM7SUFDbEIsRUFBRSxDQUFDLFdBQVcsRUFBQzs7WUFDWCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUIsSUFBSSxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVELG1CQUFtQjtZQUNwQiw0REFBNEQ7WUFDM0QsMkVBQTJFO1lBRTNFLHNDQUFzQztZQUN0QyxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BGLCtDQUErQztZQUMvQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsTUFBTSxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLG1EQUFtRDtZQUNuRCxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVGLHVEQUF1RDtZQUN2RCw0Q0FBNEM7WUFDM0MsSUFBSSxLQUFLLEdBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pFLGdEQUFnRDtZQUNoRCxJQUFJLGlCQUFpQixHQUFDLFFBQVEsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3JGLG9CQUFvQjtZQUNwQixNQUFNLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5Qyw0QkFBNEI7WUFDNUIsTUFBTSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixNQUFNLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLGtEQUFrRDtZQUNsRCxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUVqQywrQkFBK0I7WUFDL0IsSUFBSSxXQUFXLEdBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUczRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBSVAsQ0FBQyxDQUFDLENBQUEifQ==
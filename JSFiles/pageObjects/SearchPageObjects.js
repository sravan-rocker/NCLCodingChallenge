"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPage = void 0;
const protractor_1 = require("protractor");
class SearchPage {
    constructor() {
        this.dateField = protractor_1.element(protractor_1.by.xpath("//div[@data-code='dates']//i[contains(@class,'nis-calendar')]"));
        this.firstAvailableMonthField = protractor_1.element(protractor_1.by.xpath("//li[@class='listing_item']/div[@class='btn-group']"));
        this.firstAvailableMonthValueField = protractor_1.element(protractor_1.by.xpath("//li[@class='listing_item']/div[@class='btn-group']/label"));
        this.filterCruiseCountField = protractor_1.element(protractor_1.by.xpath("//div[@data-code='dates']//div[contains(@class,'total')]/span[1]"));
        ;
        this.applyFilterButton = protractor_1.element(protractor_1.by.xpath("//div[@data-code='dates']//a[@title='Apply']"));
        this.findCruiseButton = protractor_1.element(protractor_1.by.xpath("//a[text()='Find a Cruise']"));
        this.popupCloseButton = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Continue to NCL')]"));
        this.singupCloseButton = protractor_1.element(protractor_1.by.xpath("//div[@class='modal-body']//a[@title='Close']"));
    }
    clickMoreResults() {
        for (var i = 1; i < 3; i++) {
            try {
                var moreresultsButton = protractor_1.element(protractor_1.by.xpath("//button[text()='View More Results']"));
                //browser.executeScript("arguments[0].scrollIntoView();",moreresultsButton);
                protractor_1.browser.actions().mouseMove(moreresultsButton).perform();
                // moreresultsButton.click();
                protractor_1.browser.actions().mouseMove(moreresultsButton).click().perform();
                console.log("MoreResults clicked for time -" + i);
                // moreresultsButton.click();
                protractor_1.browser.sleep(10000);
            }
            catch (e) {
                console.log("Error is caught for counter-" + i);
            }
        }
    }
    searchResults() {
        return protractor_1.element.all(protractor_1.by.xpath("//ul[@class='sections']//div[@class='container']/div[contains(@class,'body')]/ul[@class='listing -block']/li"));
    }
}
exports.SearchPage = SearchPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFnZU9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9TZWFyY2hQYWdlT2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBK0Q7QUFHL0QsTUFBYSxVQUFVO0lBYW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyx3QkFBd0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyw2QkFBNkIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO1FBQ2xILElBQUksQ0FBQyxzQkFBc0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUNuSCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNoQixJQUFHO2dCQUNDLElBQUksaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztnQkFDaEYsNEVBQTRFO2dCQUM1RSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0RCw2QkFBNkI7Z0JBQzVCLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELDZCQUE2QjtnQkFDNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFNUI7WUFBQSxPQUFNLENBQUMsRUFBQztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7SUFDRixDQUFDO0lBR0osYUFBYTtRQUNULE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4R0FBOEcsQ0FBQyxDQUFDLENBQUM7SUFDakosQ0FBQztDQUtKO0FBbERELGdDQWtEQyJ9
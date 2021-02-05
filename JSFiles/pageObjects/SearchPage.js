"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superCalculatorPageObjects = void 0;
const protractor_1 = require("protractor");
class superCalculatorPageObjects {
    static get dateField() {
        return protractor_1.element(protractor_1.by.xpath("//div[@data-code='dates']"));
    }
    static get firstAvailableMonthField() {
        return protractor_1.element(protractor_1.by.xpath("//li[@class='listing_item']/div[@class='btn-group']"));
    }
    static get firstAvailableMonthValueField() {
        return protractor_1.element(protractor_1.by.xpath("//li[@class='listing_item']/div[@class='btn-group']/label"));
    }
    static get filterCruiseCountField() {
        return protractor_1.element(protractor_1.by.xpath("//div[@data-code='dates']//div[contains(@class,'total')]/span[1]"));
    }
    static get applyFilterButton() {
        return protractor_1.element(protractor_1.by.xpath("//div[@data-code='dates']//a[@title='Apply']"));
    }
    static get findCruiseButton() {
        return protractor_1.element(protractor_1.by.xpath("//a[text()='Find a Cruise']"));
    }
}
exports.superCalculatorPageObjects = superCalculatorPageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1NlYXJjaFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWlFO0FBRWpFLE1BQWEsMEJBQTBCO0lBRW5DLE1BQU0sS0FBSyxTQUFTO1FBQ2hCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsTUFBTSxLQUFLLHdCQUF3QjtRQUMvQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELE1BQU0sS0FBSyw2QkFBNkI7UUFDcEMsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxNQUFNLEtBQUssc0JBQXNCO1FBQzdCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsTUFBTSxLQUFLLGlCQUFpQjtRQUN4QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELE1BQU0sS0FBSyxnQkFBZ0I7UUFDdkIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FHSjtBQTNCRCxnRUEyQkMifQ==
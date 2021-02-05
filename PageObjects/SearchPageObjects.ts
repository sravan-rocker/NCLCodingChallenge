import { ElementFinder,element,by, browser } from "protractor";
import { protractor } from "protractor/built/ptor";

export class SearchPage {

    dateField:ElementFinder;
    firstAvailableMonthField:ElementFinder;
    firstAvailableMonthValueField:ElementFinder;
    applyFilterButton:ElementFinder;
    filterCruiseCountField:ElementFinder;
    findCruiseButton:ElementFinder;
    popupCloseButton:ElementFinder;
    singupCloseButton:ElementFinder;



    constructor(){
        this.dateField=element(by.xpath("//div[@data-code='dates']//i[contains(@class,'nis-calendar')]"));
        this.firstAvailableMonthField=element(by.xpath("//li[@class='listing_item']/div[@class='btn-group']"));
        this.firstAvailableMonthValueField=element(by.xpath("//li[@class='listing_item']/div[@class='btn-group']/label"));
        this.filterCruiseCountField=element(by.xpath("//div[@data-code='dates']//div[contains(@class,'total')]/span[1]"));;
        this.applyFilterButton=element(by.xpath("//div[@data-code='dates']//a[@title='Apply']"));
        this.findCruiseButton=element(by.xpath("//a[text()='Find a Cruise']"));
        this.popupCloseButton=element(by.xpath("//a[contains(text(),'Continue to NCL')]"));
        this.singupCloseButton=element(by.xpath("//div[@class='modal-body']//a[@title='Close']"));
    }

    clickMoreResults(){
        for(var i=1;i<3;i++){
            try{
                var moreresultsButton=element(by.xpath("//button[text()='View More Results']"));
                //browser.executeScript("arguments[0].scrollIntoView();",moreresultsButton);
                browser.actions().mouseMove(moreresultsButton).perform();
                   // moreresultsButton.click();
                    browser.actions().mouseMove(moreresultsButton).click().perform();
                    console.log("MoreResults clicked for time -"+i);
                   // moreresultsButton.click();
                    browser.sleep(10000);
                
            }catch(e){
                console.log("Error is caught for counter-"+i);
            }
        }
       }
    

    searchResults(){
        return element.all(by.xpath("//ul[@class='sections']//div[@class='container']/div[contains(@class,'body')]/ul[@class='listing -block']/li"));
    }


    

}
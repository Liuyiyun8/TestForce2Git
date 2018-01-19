@RestResource(UrlMapping='/Books/*')
Global class CtrlBooksRest {
    @HttpGet
    global static List<Book__c> getBooks() {
    	RestRequest request = RestContext.request;
    	String bookId = request.params.get('bookId');
    	if(bookId != null) {
	        return [SELECT Id, Name, Unit_Price__c FROM Book__c WHERE Id = :bookId];
    	} else {
    		return [SELECT Id, Name, Unit_Price__c FROM Book__c];
    	}
    }
}
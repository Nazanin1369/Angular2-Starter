export class DataService {
	
	constructor() {
		
	}
	
	getCustomers() {		
		return  [
		      {"id": 1, "firstName":"Ted",      "lastName": "James", 	"orderTotal": 40.99}, 
		      {"id": 2, "firstName":"Michelle", "lastName": "Thompson", "orderTotal": 89.99}, 
		      {"id": 3, "firstName":"Zed",      "lastName": "Bishop", 	"orderTotal": 29.99}, 
		      {"id": 4, "firstName":"Tina",     "lastName": "Adams", 	"orderTotal": 15.99}
		];	
	}	
}


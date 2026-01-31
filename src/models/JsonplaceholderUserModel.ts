interface geoItem {
	lng: string;
	lat: string;
}

interface addressItem {
	zipcode: string;
	geo: geoItem;
	suite: string;
	city: string;
	street: string;
}

interface companyItem {
	bs: string;
	catchPhrase: string;
	name: string;
}

export interface JsonplaceholderUserModel {
	website: string;
	address: addressItem;
	phone: string;
	name: string;
	company: companyItem;
	id: number;
	email: string;
	username: string;
}


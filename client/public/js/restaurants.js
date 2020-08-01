$(function () {
	// TODO user stars rate
	const restaurants = [
		{
			"id": 21,
			"name": "Pasta Basta",
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2D2kdNZeKi2tWrFGe4vTimRD0RboG9i1fwg&usqp=CAU",
			"type": "restaurant",
			"website": "https://pastabasta.co.il/manu/",
			"description": "Italian restaurant you chose a pasta type , choose dressing and choose additional vegetables to go into the dish, 3 stages, simple as it sounds.",
			"phone": "04-683-7080",
			"vegan": true,
			"area": "Kiryat Shemoneh",
			"longitude": 33.235229,
			"latitude": 35.589943
		},
		{
			"id": 22,
			"name": "Pasta Basta",
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2D2kdNZeKi2tWrFGe4vTimRD0RboG9i1fwg&usqp=CAU",
			"type": "restaurant",
			"website": "https://pastabasta.co.il/manu/",
			"phone": "054-4423857",
			"description": "Italian restaurant you chose a pasta type , choose dressing and choose additional vegetables to go into the dish, 3 stages, simple as it sounds.",
			"vegan": true,
			"area": "Haifa",
			"longitude": 32.802461,
			"latitude": 34.983378
		},
		{
			"id": 23,
			"name": "Caffe Hamidrechov",
			"img": "/image/midrechov.png",
			"website": "https://hakubia.co.il/midrahov/",
			"description": " This cafe specializes in Italian cuisine.The convenient location of Cafe Hamidrahov makes it easy to reach by any transport.Get your meal started with delicious coffee.",
			"type": "coffee shope",
			"phone": "073-758-5690",
			"vegan": false,
			"area": "Kfar Sava",
			"longitude": 32.183330,
			"latitude": 34.905338
		},
		{
			"id": 24,
			"name": "Golan Brewery",
			"img": "https://upload.wikimedia.org/wikipedia/en/4/40/Golan_Brewery_logo.jpg",
			"website": "http://www.brewhouse-golan.co.il/",
			"description": "Golan Brewery is a brewery in the Golan Heights settlement of Qatzrin. It won the award for Best Israeli Brewery at the BIRA 2011 competition.",
			"type": "restaurant",
			"phone": "050-9995490",
			"vegan": false,
			"area": "Qatzrin",
			"longitude": 32.987353,
			"latitude": 35.707096
		},
		{
			"id": 25,
			"img": "https://www.galilole.org.il/sites/default/files/banner/%D7%94%D7%97%D7%A7%D7%95%D7%A8%D7%94%20-%20%D7%91%D7%90%D7%A0%D7%A8%20150-150.gif",
			"name": "Jacov's Hakura",
			"type": "pub",
			"website": "https://www.facebook.com/hakura2017",
			"phone": "058-799-7763",
			"vegan": false,
			"description": "Hakura in Arabic means backyard. The bar located In the Northwest settlement in Israel with good vibes, good beers, snooker table and lovely dogs playing with each other. ",
			"area": "Metulla",
			"longitude": 33.281074,
			"latitude": 35.580845
		},
		{
			"id": 26,
			"name": "The Witch And The Milkman",
			"website": "https://the-witch.co.il/",
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRliKXfqc_eS_-bsbO8ZUfDoezstka_DGrGYw&usqp=CAU",
			"type": "restaurant",
			"vegan": false,
			"phone": "058-664-4266",
			"description": "This restaurant specialty is in various delightful Casseroles, such as the famous Osso bucco Meat Casserole and even a fabulous vegetarian casserole. . The restaurant is only a 20 minute drive from Mount Hermon, very convenient.   ",
			"area": "Gan Hatzafon",
			"longitude": 33.223619,
			"latitude": 35.614964
		},
		{
			"id": 27,
			"website": "https://www.facebook.com/pages/category/Indian-Restaurant/%D7%98%D7%90%D7%9C%D7%99-%D7%94%D7%95%D7%93%D7%99%D7%AA-%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%AA-%D7%A7%D7%A8%D7%99%D7%99%D7%AA-%D7%A9%D7%9E%D7%95%D7%A0%D7%94-199444150455222/",
			"name": "Cafe Talis",
			"img": "https://scontent.fhfa1-2.fna.fbcdn.net/v/t31.0-8/p960x960/17039417_199453490454288_8756782407825876900_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=qcYKHi0usAAAX_Q1jpq&_nc_ht=scontent.fhfa1-2.fna&_nc_tp=6&oh=bd6abd0019df4672bdee515449b133aa&oe=5F3FD149",
			"type": "coffee shope",
			"phone": "04-607-7764",
			"vegan": false,
			"area": "Kiryat Shemoneh",
			"description": "vegan Indian authentic food ,with indian vibe ,open kitchen ,fresh dishes everyday,chill music ,and smell of india.",
			"longitude": 32.811374,
			"latitude": 34.997877
		},
		{
			"id": 28,
			"name": "Anita's Ice Cream",
			"type": "ice cream parlor",
			"web": "https://www.anita-gelato.com/",
			"description": "Anita’s world-famous boutique ice cream .Anita’s boutique ice creams are 100% hand-made from natural ingredients. You can pick from over 150 different kinds of frozen yogurt, sorbets, and organic sugar- free, fat-free, soy-based and real cream-based ice creams",
			"vegan": true,
			"img": "https://images.happycow.net/venues/1024/54/54/hcmp54540_91033.jpeg",
			"area": "Tel Aviv",
			"phone": "03-624-6383",
			"longitude": 32.062412,
			"latitude": 34.764861
		},
		{
			"id": 29,
			"name": "Landwer Caffe",
			"img": "/image/landver.png",
			"web": "https://www.landwercafe.co.il",
			"phone": "03-506-1125",
			"type": "coffee shope",
			"vegan": true,
			"area": "Tel Aviv",
			"description": "Caffe and restaurant ",
			"longitude": 32.067666,
			"latitude": 34.775979
		},
		{
			"id": 230,
			"name": "Bahal Habaiet",
			"img": "/image/bait.jpg",
			"phone": "054-337-3101",
			"web": "https://www.facebook.com/BalAbait-%D7%91%D7%A2%D7%9C-%D7%94%D7%91%D7%99%D7%AA-2647686771927000/?ref=page_internal",
			"type": "restaurant",
			"vegan": false,
			"area": "Rechovot",
			"description": "Bar and restaurant on Herzl Street in Rehovot, offering a variety of 'shearing' dishes: Italian, American, Greek, Middle Eastern and Israeli food	",
			"longitude": 31.901918,
			"latitude": 34.808682
		}
	];
	const restTemplate = $("#rest-template");
	const restList = $("#rest-list")
	// console.log(restaurants)
	for (let rest of restaurants) {
		// clone the element
		const clone = $(restTemplate.html());
		// start filling the template fields
		const img = $(".rest-img", clone);
		img.attr("src", rest.img || "http://placehold.it/100x100");
		const title = $(".rest-title", clone);
		title.text(rest.name || "missing name")
		const desc = $(".rest-desc", clone)
		desc.text(rest.description || "missing description");
		const location = $(".rest-location", clone);
		location.text(rest.area || "missing area");
		const website = $(".rest-website", clone);
		website.attr("href", rest.website || "#");
		// website.text(rest.website || "missing website");
		const phone = $(".rest-phone", clone);
		phone.attr("href", "tel:" + (rest.phone || "#"));
		phone.text(rest.phone || "missing phone");
		restList.append(clone);
	}



});


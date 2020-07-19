$(function () {
	// const stars = document.querySelector(".rating").children
	// for (let i = 0; i < stars.length; i++) {
	// 	stars[i].addEventListener("mouseover", function () {
	// 		// console.log(i)
	// 		for (let j = 0; j < stars.length; j++) {
	// 			stars[j].classList.remove("fa-star")
	// 			stars[j].classList.add("fa-star-o")
	// 		}
	// 		for (let j = 0; j <= i; j++) {
	// 			stars[j].classList.remove("fa-star-o")
	// 			stars[j].classList.add("fa-star")
	// 		}
	// 	});
	// 	stars[i].addEventListener("mouseout", function () {
	// 		// console.log(i)
	// 		for (let j = 0; j < stars.length; j++) {
	// 			stars[j].classList.remove("fa-star")
	// 			stars[j].classList.add("fa-star-o")
	// 		}
	// 		for (let j = 0; j <= i; j++) {
	// 			stars[j].classList.remove("fa-star-o")
	// 			stars[j].classList.add("fa-star")
	// 		}

	// 	});
	// }
	const restaurants = [
		{
			"id": 21,
			"name": "Pasta Basta",
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2D2kdNZeKi2tWrFGe4vTimRD0RboG9i1fwg&usqp=CAU",
			"type": "restaurant",
			"vegan": true,
			"area": "Kiryat Shemona",
			"longitude": 33.235229,
			"latitude": 35.589943
		},
		{
			"id": 22,
			"name": "Pasta Basta",
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2D2kdNZeKi2tWrFGe4vTimRD0RboG9i1fwg&usqp=CAU",
			"type": "restaurant",
			"vegan": true,
			"area": "Haifa",
			"longitude": 32.802461,
			"latitude": 34.983378
		},
		{
			"id": 23,
			"name": "Caffe Hamidrechov",
			"type": "coffee shope",
			"vegan": false,
			"area": "Kfar Sabba",
			"longitude": 32.183330,
			"latitude": 34.905338
		},
		{
			"id": 24,
			"name": "Golan Brewery",
			"type": "restaurant",
			"vegan": false,
			"area": "Katzrin",
			"longitude": 32.987353,
			"latitude": 35.707096
		},
		{
			"id": 25,
			"name": "Hachakura",
			"type": "pub",
			"vegan": false,
			"area": "Katzrin",
			"longitude": 33.281074,
			"latitude": 35.580845
		},
		{
			"id": 26,
			"name": "The witch and the milkman",
			"type": "restaurant",
			"vegan": false,
			"area": "Gan Hatzafon",
			"longitude": 33.223619,
			"latitude": 35.614964
		},
		{
			"id": 27,
			"name": "Tails",
			"type": "coffee shope",
			"vegan": false,
			"area": "Haifa",
			"longitude": 32.811374,
			"latitude": 34.997877
		},
		{
			"id": 28,
			"name": "Anita's ice cream",
			"type": "ice cream parlor",
			"vegan": true,
			"area": "Tel Aviv",
			"longitude": 32.062412,
			"latitude": 34.764861
		},
		{
			"id": 29,
			"name": "Landver",
			"type": "coffee shope",
			"vegan": true,
			"area": "Tel Aviv",
			"longitude": 32.067666,
			"latitude": 34.775979
		},
		{
			"id": 230,
			"name": "Bahal Habaiet",
			"type": "restaurant",
			"vegan": false,
			"area": "Rechovot",
			"longitude": 31.901918,
			"latitude": 34.808682
		}
	];
	const restTemplate = $("#rest-template");
	const restList = $("#rest-list")
	console.log(restaurants)
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
		website.text(rest.website || "missing website");
		const phone = $(".rest-phone", clone);
		phone.attr("href", "tel:" + (rest.phone || "#"));
		phone.text(rest.phone || "missing phone");
		restList.append(clone);
	}



});


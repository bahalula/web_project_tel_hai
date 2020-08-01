$(function () {

	// function initRating(ratingElement) {
	// 	const stars = $(".fa-star", ratingElement);
	// 	stars.on("hover", (event) => {

	// 	});
	// }
	let ratingsMap;
	try {
		ratingsMap = JSON.parse(localStorage.getItem("rating"));
	} catch (err) {
		ratingsMap = {};
	}

	function setStars(elem) {
		const id = $(elem).closest(".entry").data("id");
		const rating = ratingsMap[id];
		if (!rating) {
			$(".fa-star", elem).removeClass("fill");
		} else {
			const toTurnOn = $(`.fa-star:lt(${rating})`, elem);
			toTurnOn.addClass("fill");
			const toTurnOff = $(`.fa-star:gt(${rating - 1})`, elem)
			toTurnOff.removeClass("fill");
		}
	}

	$(document).on("click", ".fa-star", function (event) {
		const rating = $(this).index() + 1;
		const id = $(this).closest(".entry").data("id");
		ratingsMap[id] = rating;
		localStorage.setItem("rating", JSON.stringify(ratingsMap));
		// code when clicking

	})
	$(document).on("mouseenter", ".fa-star", function (event) {
		$(this).siblings().removeClass("fill");
		$(this).prevAll().addClass("fill");
		$(this).addClass("fill");
	});

	$(document).on("mouseleave", ".rating", function (event) {
		setStars($(this));
	});

	const vacation = [
		{
			"id": 31,
			"name": "Neve Ayala - luxury suites",
			"type": "guest room",
			"area": "Hatzor HaGlilit",
			"web": "https://www.resort.co.il/suite/neve-ayala-suites/",
			"img": "https://www.zimmer.co.il/neve-ayala/ARN_4357_resize.jpg",
			"phone": "052-368-8339",
			"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
			"longitude": 32.987505,
			"latitude": 35.542255
		},
		{
			"id": 32,
			"name": "Hvaya Banofh",
			"type": "guest room",
			"area": "Rosh Pinna",
			"web": "https://my.weekend.co.il/%D7%97%D7%95%D7%95%D7%99%D7%94_%D7%91%D7%A0%D7%95%D7%A3/",
			"img": "https://my.weekend.co.il/Templates/customerimages/18015/gallery/image_18015_21.jpg?w=500&quality=70",
			"phone": "053-809-5052",
			"description": "nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold",
			"longitude": 32.995879,
			"latitude": 35.529706
		},
		{
			"id": 33,
			"name": "Adi hotel",
			"type": "hotel",
			"area": "Eilat",
			"web": "http://www.adihotel.co.il/",
			"img": "http://www.adihotel.co.il/wp-content/themes/adihotelHeb/img/logo.png",
			"description": "The Hotel is situated in the centre of Eilat within short walking distance to the beach – near the mall, the pubs and restaurants of a large tourist center.",
			"phone": " 08-6388111",
			"longitude": 29.551383,
			"latitude": 34.950469
		},
		{
			"id": 34,
			"name": "Hahava Be Bikta Shell Phaam",
			"type": "resort",
			"area": "Amirim",
			"web": "https://www.zimmer.co.il/premium.asp?site_id=1274",
			"phone": "052-321-2145",
			"img": "https://www.amirims.co.il/amirim/12_1358929050(1).jpg",
			"description": "semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante",
			"longitude": 32.937932,
			"latitude": 35.454242
		},
		{
			"id": 35,
			"name": "Four Seasons  Ba Galilee",
			"type": "guest room",
			"area": "Ilaniya",
			"web": "https://www.facebook.com/Ilaniya4seasonsresort/",
			"img": "https://scontent.ftlv8-1.fna.fbcdn.net/v/t31.0-8/175748_132568046833483_2339223_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=GxdH81QJVRsAX9yVJIF&_nc_ht=scontent.ftlv8-1.fna&oh=0b2c9fc598d1537b612212c71b86eea6&oe=5F468DEF",
			"phone": "054-739-9828",
			"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
			"longitude": 32.751392,
			"latitude": 35.407840
		},
		{
			"id": 36,
			"name": "Zimmer Elrome",
			"type": "guest room",
			"area": "El rome",
			"web": "https://www.zimmer-elrom.com/",
			"phone": "052-2796275",
			"img": "https://ezzimmer.com/wp-content/uploads/17-6-1024x640.jpg",
			"description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
			"longitude": 33.183069,
			"latitude": 35.772769
		},
		{
			"id": 37,
			"name": "Elipaz ",
			"type": "guest room",
			"area": "Elipaz",
			"web": "http://elifaz.co.il/",
			"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcaIxgOGB6Z3qHskrEpSQZkg17DQ421z9rDw&usqp=CAU",
			"description": "Discover the wonderful world of the friendly desert. Five minutes from Timna Park.",
			"phone": "08-6356230",
			"longitude": 29.796360,
			"latitude": 35.011493
		},
		{
			"id": 38,
			"name": "Red white ",
			"type": "guest room",
			"area": "Amirim",
			"phone": "050-2266162",
			"img": "https://vegan-friendly.co.il/img/logos/%D7%90%D7%93%D7%95%D7%9D%D7%9C%D7%91%D7%9F%D7%9C%D7%95%D7%92%D7%95.png",
			"description": "World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed",
			"longitude": 32.935672,
			"latitude": 35.448069
		},

		{
			"id": 39,
			"name": "Romance Bamarom",
			"type": "guest room",
			"area": "Kahal",
			"web": "https://www.facebook.com/r.bamarom/",
			"img": "https://scontent.ftlv8-1.fna.fbcdn.net/v/t1.0-9/1499490_187264774799799_1346958314_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=hyaOlWPWXSYAX-EOROY&_nc_ht=scontent.ftlv8-1.fna&oh=036164183b51876ecc8a8a0bc5e12658&oe=5F481BBB",
			"phone": "050-586-8326",
			"description": "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules",
			"longitude": 31.680342,
			"latitude": 34.556754
		},
		{
			"id": 40,
			"name": "Vila Shnhav",
			"type": "guest room",
			"area": "Eilat",
			"web": "https://my.weekend.co.il/%D7%95%D7%99%D7%9C%D7%94_%D7%A9%D7%A0%D7%94%D7%91/",
			"img": "https://my.weekend.co.il/Templates/customerimages/24829/gallery/image_24829_17.jpg?w=1028&h=510&mode=crop&quality=70",
			"description": " Wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. ",
			"phone": "053-938-6943",
			"longitude": 31.680342,
			"latitude": 34.556754
		}
	];
	const vacTemplate = $("#vac-template");
	const vacList = $("#vac-list")
	// console.log(vacation)
	for (let vac of vacation) {
		// clone the element
		const clone = $(vacTemplate.html());
		clone.addClass("entry")
		clone.data("id", vac.id);
		// start filling the template fields
		const img = $(".vac-img", clone);
		img.attr("src", vac.img || "http://placehold.it/100x100");
		const title = $(".vac-title", clone);
		title.text(vac.name || "missing name")
		const desc = $(".vac-desc", clone)
		desc.text(vac.description || "missing description");
		const location = $(".vac-location", clone);
		location.text(vac.area || "missing area");
		const website = $(".vac-website", clone);
		website.attr("href", vac.website || "#");
		const phone = $(".vac-phone", clone);
		phone.attr("href", "tel:" + (vac.phone || "#"));
		phone.text(vac.phone || "missing phone");
		if (ratingsMap[vac.id] !== undefined) {
			setStars($(".rating", clone));
		}
		vacList.append(clone);
	}

});


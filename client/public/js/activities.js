$(function () {

	let ratingsMap;
	try {
		ratingsMap = JSON.parse(localStorage.getItem("rating"));
	} catch (err) {
		ratingsMap = {};
	}

	function setStars(elem) {
		// for knowing which card the event (click) came from. 
		const id = $(elem).closest(".entry").data("id");
		// user's rate of restaurant  [saved in local storage]
		const rating = ratingsMap[id];
		//  no rates by user yet.  
		if (!rating) {
			$(".fa-star", elem).removeClass("fill");
		} else {
			// lt: index less than rating-value
			const toTurnOn = $(`.fa-star:lt(${rating})`, elem);
			toTurnOn.addClass("fill");
			// gt: index greater than rating-value
			const toTurnOff = $(`.fa-star:gt(${rating - 1})`, elem)
			toTurnOff.removeClass("fill");
		}
	}

	// code when clicking
	$(document).on("click", ".fa-star", function (event) {
		const rating = $(this).index() + 1;
		// saves the rating data for the current card from among the others
		const id = $(this).closest(".entry").data("id");
		ratingsMap[id] = rating;
		// saving the data in local storage
		localStorage.setItem("rating", JSON.stringify(ratingsMap));

	})

	$(document).on("mouseenter", ".fa-star", function (event) {
		$(this).siblings().removeClass("fill");
		$(this).prevAll().addClass("fill");
		$(this).addClass("fill");
	});

	$(document).on("mouseleave", ".rating", function (event) {
		setStars($(this));
	});

	const activities = [
		{
			"id": 41,
			"name": "Lev Hamidbar",
			"type": "camping",
			"area": "Tzokim",
			"web": "https://levhamidbar.co.il/",
			"phone": "058-5325442",
			"img": "https://levhamidbar.co.il/wp-content/uploads/2017/10/lev-logo-header.png",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
			"longitude": 30.483259,
			"latitude": 35.163427
		},
		{
			"id": 42,
			"name": "Dor HaBonim Beach",
			"type": " Beach Nature Reserve",
			"area": "Atlit",
			"web": "https://www.parks.org.il/reserve-park/%D7%A9%D7%9E%D7%95%D7%A8%D7%AA-%D7%98%D7%91%D7%A2-%D7%97%D7%95%D7%A3-%D7%93%D7%95%D7%A8-%D7%94%D7%91%D7%95%D7%A0%D7%99%D7%9D/",
			"description": "The nature reserve is a beautiful and picturesque beach, a coastal strip with more bays and inlets than any other in Israel.",
			"img": "https://static.parks.org.il/wp-content/uploads/2017/08/logo-1.png",
			"phone": "04-8252266",
			"longitude": 32.651558,
			"latitude": 34.925154
		},
		{
			"id": 43,
			"name": "Nacahl Hashofet",
			"type": "Trek",
			"area": "Megido",
			"img": "https://www.lametayel.co.il/specials/wp-content/uploads/2018/11/lametayel_logo.png",
			"web": "https://www.tiuli.com/tracks/58/%D7%A0%D7%97%D7%9C-%D7%94%D7%A9%D7%95%D7%A4%D7%98",
			"phone": "1-800-350-550",
			"description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			"longitude": 32.629456,
			"latitude": 35.106495
		},
		{
			"id": 44,
			"name": "Shveitsarya ha-Ktana",
			"type": "Trek",
			"area": "Hacarmel",
			"web": "https://www.tiuli.com/tracks/24/%D7%A9%D7%95%D7%95%D7%99%D7%A6%D7%A8%D7%99%D7%94-%D7%94%D7%A7%D7%98%D7%A0%D7%94-%D7%A0%D7%97%D7%9C%D7%99-%D7%9B%D7%9C%D7%97-%D7%95%D7%A0%D7%97%D7%9C-%D7%92%D7%9C%D7%99%D7%9D",
			"phone": "04-822-8983",
			"img": "https://www.lametayel.co.il/specials/wp-content/uploads/2018/11/lametayel_logo.png",
			"description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"longitude": 32.747264,
			"latitude": 35.026468
		},

		{
			"id": 44,
			"name": "Negev Camel Ranch",
			"type": "Camping",
			"area": "Eastern-Negev",
			"web": "https://cameland.co.il/",
			"img": "https://iphone-image.apkpure.com/v2/app/a/a/3/aa3dd4f128d600edde38e01ed30fe92a.jpg",
			"description": "Camel tours for all ages: an amazing desert experience for the whole family. Our vision is to give our guests a unique desert experience Come and enjoy the peace and tranquility in our home the Negev Desert! ",
			"phone": "08-655-2829",
			"longitude": 31.029870,
			"latitude": 35.076652
		},
		{
			"id": 45,
			"name": "Forest Fairy",
			"type": "Camping",
			"area": "Beit Oren",
			"web": "https://www.fairyforest.info/",
			"phone": "058-6437171",
			"img": "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/199542_199464903520647_1317323345_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=DK8M4WegzH8AX_kMl1y&_nc_ht=scontent.ftlv6-1.fna&oh=b8890d950486285b937b4158af7bded1&oe=5F4A1A5D",
			"description": "Fairy Forest is an ecological camp site located on the northern slopes of Kibutz Beit-Oren.",
			"longitude": 32.732278,
			"latitude": 35.000948
		},
		{
			"id": 46,
			"name": "YogiForDogi",
			"type": "Yoga Studio",
			"area": "Tel Aviv",
			"web": "https://www.facebook.com/yogifordogi/",
			"img": "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/74692446_100552958085496_5648097236526039040_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=iG-sEeph-_IAX-bsNFm&_nc_ht=scontent.ftlv6-1.fna&oh=db59a3b12899716d1609486075bdf6f7&oe=5F488F36",
			"phone": "053-124-4334",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
			"longitude": 32.089025,
			"latitude": 34.779887
		},
		{
			"id": 47,
			"name": "Dog park",
			"type": "Dog Friendly Garden",
			"area": "Kiryat Shemona",
			"web": "https://ragli.co.il/%D7%92%D7%99%D7%A0%D7%95%D7%AA-%D7%9B%D7%9C%D7%91%D7%99%D7%9D/%D7%92%D7%99%D7%A0%D7%AA-%D7%9B%D7%9C%D7%91%D7%99%D7%9D-%D7%AA%D7%9C-%D7%97%D7%99/",
			"img": "https://ragli.co.il/wp-content/uploads/2019/12/%D7%A8%D7%92%D7%9C%D7%99-%D7%9C%D7%95%D7%92%D7%95.png",
			"description": "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremd.	",
			"phone": "053-134-5443",
			"longitude": 33.238310,
			"latitude": 35.579500
		},
		{
			"id": 48,
			"name": "Dog Park",
			"type": "Dog Friendly Garden park",
			"img": "https://i.pinimg.com/originals/e9/4b/2b/e94b2b8e978f4c467d65bd764aa7f090.png",
			"web": "https://www.nahariya.muni.il/culture/Inthecity/parks/Pages/dogs-park.aspx",
			"area": "Nahariya",
			"description": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed.",
			"phone": "03-4332552",
			"longitude": 32.989025,
			"latitude": 35.083041
		},
		{
			"id": 49,
			"name": "Dog Go",
			"type": "Running Group",
			"area": "Tel Aviv",
			"web": "https://runpanel.co.il/canny-cross/",
			"img": "https://f0.pngfuel.com/png/608/261/run-free-dog-fields-cambuslang-dog-park-dog-png-clip-art.png",
			"phone": "052-293-8052",
			"description": "ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
			"longitude": 32.129757,
			"latitude": 34.792234
		},
		{
			"id": 450,
			"name": "Park Nesher",
			"type": "Dog Friendly Garden",
			"web": "https://www.kkl.org.il/recreation-and-tours/scenic-lookouts/scenic-lookouts-north/nesher-park/",
			"img": "/image/450.jpg",
			"phone": "1-800-250-250",
			"description": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz",
			"area": "Nesher",
			"longitude": 33.773243,
			"latitude": 35.031116
		}
	];

	const actTemplate = $("#act-template");
	const actList = $("#act-list")
	// console.log(activities)
	for (let act of activities) {
		// clone the element
		const clone = $(actTemplate.html());
		clone.addClass(".entry");
		clone.data("id", act.id);
		// start filling the template fields
		const img = $(".act-img", clone);
		img.attr("src", act.img || "http://placehold.it/100x100");
		const title = $(".act-title", clone);
		title.text(act.name || "missing name")
		const desc = $(".act-desc", clone)
		desc.text(act.description || "missing description");
		const location = $(".act-location", clone);
		location.text(act.area || "missing area");
		const website = $(".act-website", clone);
		website.attr("href", act.website || "#");
		const phone = $(".act-phone", clone);
		phone.attr("href", "tel:" + (act.phone || "#"));
		phone.text(act.phone || "missing phone");
		const type = $(".act-type", clone);
		type.text(act.type || "missing activity type");
		if (ratingsMap[act.id] !== undefined) {
			setStars($(".rating", clone));
		}
		actList.append(clone);
	}



});


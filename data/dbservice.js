const db = require("./data.json")
function addRestaurant({ name, long, lat }) {

}
function getRestaurant(id) {
    return db.restaurants.find(x => x.id == id)
}



module.exports = {
    getRestaurant,
    addRestaurant
}
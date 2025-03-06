// export data via mongoexport
// Only works for collections with simple data that fits the limitations of JSON
mongoexport --db store --collection orders --out store.orders.json --jsonArray
mongoexport --db store --collection products --out store.products.json --jsonArray
mongoexport --db store --collection categories --out store.categories.json --jsonArray
mongoexport --db store --collection reviews --out store.reviews.json --jsonArray
mongoexport --db store --collection users --out store.users.json --jsonArray
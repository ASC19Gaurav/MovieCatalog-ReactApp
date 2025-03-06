// import data 
mongoimport --db exStore --collection orders --drop --file store.orders.json --jsonArray
mongoimport --db exStore --collection products --drop --file store.products.json --jsonArray
mongoimport --db exStore --collection categories --drop --file store.categories.json --jsonArray
mongoimport --db exStore --collection reviews --drop --file store.reviews.json --jsonArray
mongoimport --db exStore --collection users --drop --file store.users.json --jsonArray

# Exercises
- Check the version of `mongoimport`
```
mongoimport --version
```

Import the shows collection using mongoimport. For example, run this from the terminal from within this folder. 

```
mongoimport --uri="mongodb://localhost:27017" --db=ascendionfsd --collection=shows --file=""./shows.json --jsonArray
  ```

- For Atlas connect this way to import to a collection
```
mongoimport --uri  mongodb+srv://puranik:sQzYXLFNBvGYXDfF@cluster0.o0qfi.mongodb.net/showsDB  --collection  shows  --jsonArray  --file  "./shows.json"
```
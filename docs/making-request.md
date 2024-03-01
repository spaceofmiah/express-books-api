# Making Request

To interact with the application API, ensure you've gone through the setup flow in getting started guide.


### Books Endpoints

**List Books** ( _GET_ `/books` )

Returns all books available in the database


```javascript
{
    body: null
    query: null,
    params: null
}
```
**_Body Data_**

**_Path Params Data_**

**_Example Request In curl_**

copy below code and run on your terminal/powershell

```bash
curl --location 'http://localhost:3000/books'
```

**GET Book** ( _GET_ `/books/:id` )

Retrieves and returns a book instance whose id is supplied in `:id` path parameter placeholder.

When the supplied `id` is not found in the database, the system would return `Book not found`

```javascript
{  
    body: null,
    query: null,
    params: {
        id: "objects unique identifier"
    }
}
```

**_Body Data_**


**_Path Params Data_**

- id:string [required]: a book's unique identifier

**_Example Request In curl_**

copy below code and run on your terminal/powershell

```bash
curl --location 'http://localhost:3000/books/65e199d1a71ef1d755a88496'
```


**Create Book** ( _POST_ `/books` )

Create a new book instance and returns the newly created instance.
Validation check is made on the client's request and properly handled.

```javascript
{
    body: {
        "title":  "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "price":  "85.0"
    },
    query: null,
    params: null
}
```

**_Body Data_**

title: string [ _required_ ] : book's title
author: string [ _required_ ] : book's author name
price: Decimal [ _required_ ] : book's cost

**_Example Request In curl_**

copy below code and run on your terminal/powershell

```curl
curl --location 'http://localhost:3000/books' \
--header 'Content-Type: application/json' \
--data '{
	"title": "Harry Portal",
    "author": "J.K Rowlings",
    "price": "210.0"
}'
```

**Update Book** ( _PUT_ `/books/:id` )

Updates already existing book instance in the database.

When the supplied `id` is not found in the database, the system would return `Book not found`

```javascript
{
    body: {
        "title":  "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "price":  "85.0"
    },
    query: null,
    params: {
        id: "objects unique identifier"
    }
}
```

**_Body Data_**

title: string [ _optional_ ] : book's title
author: string [ _optional_ ] : book's author name
price: Decimal [ _optional_ ] : book's cost


**_Path Params Data_**

- id:string [ _required_ ]: a book's unique identifier

**_Example Request In curl_**

copy below code and run on your terminal/powershell

```bash
curl --location --request PUT 'http://localhost:3000/books/65e18cde0a108b603188a9d3' \
--header 'Content-Type: application/json' \
--data '{
	"title": "Things Fall Apart"
}'
```


**DELETE Book** ( _DELETE_ `/books/:id` )

Deletes an existing book instance in the database.

When the supplied `id` is not found in the database, the system would return `Book not found`

```javascript
{  
    body: null,
    query: null,
    params: {
        id: "objects unique identifier"
    }
}
```

**_Path Params Data_**

- id:string [ _required_ ]: a book's unique identifier

**_Example Request In curl_**

copy below code and run on your terminal/powershell

```bash
curl --location --request DELETE 'http://localhost:3000/books/65e18cde0a108b603188a9d3' 
```
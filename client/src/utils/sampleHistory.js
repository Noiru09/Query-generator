//sample data for query history

const sampleHistory = [
    {
      "slNo": 1,
      "query": "select * from employees where salary > 10000",
      "dbName": "SQL",
      "queryDescription": "Find all employees with salary greater than 10000",
    },
    {
      "slNo": 2,
      "query": "SELECT name, age FROM students WHERE age >= 18",
      "dbName": "SQL",
      "queryDescription": "Retrieve names and ages of students who are 18 or older",
    },
    {
      "slNo": 3,
      "query": "db.users.find({ role: 'admin' })",
      "dbName": "MongoDB",
      "queryDescription": "Find all users with the 'admin' role",
    },
    {
      "slNo": 4,
      "query": "SELECT product_name, price FROM products WHERE category = 'Electronics'",
      "dbName": "SQL",
      "queryDescription": "Retrieve product names and prices from the Electronics category",
    },
    {
      "slNo": 5,
      "query": "db.orders.find({ status: 'shipped', orderDate: { $gte: '2023-01-01' } })",
      "dbName": "MongoDB",
      "queryDescription": "Find shipped orders placed after January 1, 2023",
    },
    {
      "slNo": 6,
      "query": "SELECT DISTINCT department FROM employees",
      "dbName": "SQL",
      "queryDescription": "Retrieve distinct department names from the employees table",
    },
    {
      "slNo": 7,
      "query": "db.customers.find({ country: 'USA' }).limit(10)",
      "dbName": "MongoDB",
      "queryDescription": "Find the first 10 customers from the USA",
    },
    {
      "slNo": 8,
      "query": "SELECT title, author FROM books WHERE year_published >= 2020 ORDER BY title ASC",
      "dbName": "SQL",
      "queryDescription": "Retrieve book titles and authors of books published after 2020, sorted alphabetically",
    },
    {
      "slNo": 9,
      "query": "db.orders.find({ totalAmount: { $gt: 100 } })",
      "dbName": "MongoDB",
      "queryDescription": "Find orders with a total amount greater than 100",
    },
    {
      "slNo": 10,
      "query": "SELECT customer_name, order_date FROM orders WHERE order_status = 'Pending'",
      "dbName": "SQL",
      "queryDescription": "Retrieve customer names and order dates for pending orders",
    },
  ];
  
 export default sampleHistory;
  
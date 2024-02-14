import sqlite3

conn = sqlite3.connect('new_database.db')
print("Connected to database successfully")

# Define the SQL query with auto-incrementing ID and password field for a table named 'users'
conn.execute('''CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                password TEXT)''')

print("Created table successfully!")

conn.close()

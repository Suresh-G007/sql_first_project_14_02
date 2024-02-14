from flask import Flask, render_template, request, session, redirect, url_for, jsonify
import sqlite3

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Define a dictionary to store user data (in production, use a database)
users = {}


@app.route("/")
def home():
    return render_template("login.html")


@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        confirm_password = request.form.get("confirm_password")
        if password == confirm_password:
            try:
                # Connect to the SQLite database
                conn = sqlite3.connect('new_database.db')
                cur = conn.cursor()
                # Insert user data into the 'users' table
                cur.execute(
                    "INSERT INTO users (name, password) VALUES (?, ?)", (username, password))
                conn.commit()
                session["username"] = username
                return render_template("login.html")
            except sqlite3.Error as e:
                return f"Error: {e}"
            finally:
                conn.close()
        else:
            return "Passwords do not match"
    return render_template("signup.html")


@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    try:
        # Connect to the SQLite database
        conn = sqlite3.connect('new_database.db')
        cur = conn.cursor()
        # Execute a SELECT query to retrieve the user with the given username and password
        cur.execute("SELECT * FROM users WHERE name=? AND password=?",
                    (username, password))
        user = cur.fetchone()
        if user:
            # If a user with the given credentials exists, store the username in the session
            session["username"] = username
            return jsonify({"success": True})
        else:
            # If no user with the given credentials exists, return an error message
            return jsonify({"success": False, "msg": "Login failed. Invalid credentials"})
    except sqlite3.Error as e:
        return jsonify({"success": False, "msg": f"Error: {e}"})
    finally:
        conn.close()


@app.route('/logout')
def logout():
    username = request.args.get('username')
    password = request.args.get('password')

    print(username)
    print(password)

    # Connect to the database
    conn = sqlite3.connect('new_database.db')
    cur = conn.cursor()

    # Execute SQL to delete user with the provided username and password
    cur.execute("DELETE FROM users WHERE name=? AND password=?",
                (username, password))

    # Commit changes and close connection
    conn.commit()
    conn.close()

    # Redirect to the login page after logout
    return redirect('/')


@app.route('/index')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)

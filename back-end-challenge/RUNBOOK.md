## Testing instructions
1. Clone current branch locally
2. Open the project in your IDE
3. Open a terminal window at the root folder of project and change directory into back-end-challenge:
`cd back-end-challenge`
4. In your terminal window create a virtual environment (requires [Python3](https://www.python.org/downloads/)):
    - Mac/Linux: `python3 -m venv venv`
    - Windows: `py -3 -m venv venv`
5. Activate the virtual environment
    - Mac/Linux: `. venv/bin/activate`
    - Windows: `venv\Scripts\activate`
6. Install flask
`pip install Flask`
7. Run the following command to host the API on port 5001 of your local machine
`flask --app flask_api run --port 5001`
8. Use a 3rd party API program, or a programming language to make GET and POST requests to the locally hosted program
   `http://127.0.0.1:5001/reservation`
   - POST requests should follow the following body format:
```
{
    "user": "username",
    "event": "event name",
    "start_time": "2023-05-21T00:00:00",
    "end_time": "2023-05-27T00:00:00"
}
```
   - GET requests should use the following body format:

```
    {
        "user": "username"
    }
```

Note: Requests must use 'Content-Type: application/json' header for success
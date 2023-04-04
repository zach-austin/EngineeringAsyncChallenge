from flask import Flask, request, make_response
from datetime import datetime
from json import dumps

app = Flask(__name__)

class Event(object):
    def __init__(self, event_name: str, start_time: datetime, end_time: datetime):
        self.name = event_name
        self.start = start_time
        self.end = end_time

events = {}

@app.route("/reservation", methods=['GET', 'POST'])
def reservation_service():
    resp = None
    if request.method == 'GET':
        resp = get_reservations(request.get_json())

    elif request.method == 'POST':
        resp = post_reservation(request.get_json())

    else:
        resp = make_response('"message": "Service not supported"', 405)
    
    resp.headers["Content-Type"] = "application/json"
    return resp
    
def get_reservations(request_dict):
    if "user" not in request_dict.keys():
        return make_response('{"message": "Required \'user\' key missing from request body"}', 400)

    user = request_dict["user"]
    if user not in events.keys() or events[user] == None:
        return make_response('{"message": "User ' + f'\'{user}\'' + ' not found."}' , 404)
    
    events_list = { 
        "events" : get_serializable_events(user) 
    }
    return make_response(dumps(events_list), 200)

def get_serializable_events(user):
    serializable_events = []
    for event in events[user]:
        serializable_events.append(
            {
                "event": event.name,
                "start_time": event.start.isoformat(),
                "end_time": event.end.isoformat()
            }
        )
    return serializable_events

def post_reservation(request_dict):
    REQUIRED_KEYS = [
        "user",
        "event",
        "start_time",
        "end_time"
    ]
    errors = []
    for key in REQUIRED_KEYS:
        if key not in request_dict.keys() or not request_dict[key]:
            errors.append(f'{key} is required')
    print(errors)
    if errors:
        message = '{"message": "' + ", ".join(errors) + '"}'
        return make_response(message, 400)
        
    now = datetime.now()
    start = request_dict["start_time"]
    end = request_dict["end_time"]
    try:
        start = datetime.fromisoformat(start)
        end = datetime.fromisoformat(end)
    except:
        return make_response('{"message": "Start and end times must be in ISO format."}', 400)

    if start < now:
        return make_response('{"message": "This event has passed."}', 400)

    user = request_dict["user"]
    if user in events.keys():
        user_events = events[user]

        for event in user_events:
            if (
                ( start < event.start and end < event.start ) 
                or
                ( start > event.end and end > event.end )
            ):
                continue
            else:
                return make_response('{"message": "This event overlaps a current event."}', 409)

        else:
            events[user].append(Event(request_dict["event"], start, end))

    else:
        events[user] = [
            Event(request_dict["event"], start, end)
        ]

    return make_response('{"message": "Successfully added event."}', 201)
import {Client} from "mqtt";

const host = "test.mosquitto.org";
const port = 1883;

let client = new Client({host: host, port: port,id: "Ankit"});


client.onReady = () => { 
    trace('connection up\n'); 
    client.subscribe("/topic/ankitTestMqtt");
    client.publish("/topic/ankitTestMqtt", "LoveYouJS");
 };

client.onMessage = (t, b) => {
     trace(`received message on ${t} with body ${String.fromArrayBuffer(b)}\n`);
    
    };

client.onClose = () => {
     trace(`server closed connection\n`);
    
    };
    
// client.publish("/foo", "bar");
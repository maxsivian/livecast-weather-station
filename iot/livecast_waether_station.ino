#include <Wire.h>
#include <ESP8266WiFi.h>
#include "SFE_BMP180.h"
#include "DHT.h"


String apiKey = "3CXWZEFPCM3HRUBQ";
const char *ssid = "WMS";
const char *pass = "0123456789";
const char *server = "api.thingspeak.com";


DHT dht(D3, DHT11);
SFE_BMP180 bmp;
double T, P;
char status;
WiFiClient client;


void setup() {
  Serial.begin(9600);
  delay(10);
  bmp.begin();
  Wire.begin();
  dht.begin();
  pinMode(D0, INPUT);
  WiFi.begin(ssid, pass);


  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
}

void loop() {
  //BMP180 sensor
  status = bmp.startTemperature();
  if (status != 0) {
    delay(status);
    status = bmp.getTemperature(T);

    status = bmp.startPressure(3);  // 0 to 3
    if (status != 0) {
      delay(status);
      status = bmp.getPressure(P, T);
      if (status != 0) {
      }
    }
  }

  //DHT11 sensor
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }


  //Rain sensor
  int r = 0;
  if (digitalRead(D0) == LOW) {
    r = 1;
  }



  //Light sensor
  int l = analogRead(A0);
  l = map(l, 0, 1024, 100, 0);


  if (client.connect(server, 80)) {
    String postStr = apiKey;
    postStr += "&field1=";
    postStr += String(t);
    postStr += "&field2=";
    postStr += String(h);
    postStr += "&field3=";
    postStr += String(P, 2);
    postStr += "&field4=";
    postStr += String(l);
    postStr += "&field5=";
    postStr += String(r);

    postStr += "\r\n\r\n\r\n\r\n";

    client.print("POST /update HTTP/1.1\n");
    client.print("Host: api.thingspeak.com\n");
    client.print("Connection: close\n");
    client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\n");
    client.print("Content-Type: application/x-www-form-urlencoded\n");
    client.print("Content-Length: ");
    client.print(postStr.length());
    client.print("\n\n\n\n");
    client.print(postStr);

    Serial.print("Temperature: ");
    Serial.println(t);
    Serial.print("Humidity: ");
    Serial.println(h);
    Serial.print("Pressure: ");
    Serial.println(P, 2);
    Serial.print("Light: ");
    Serial.println(l);
    Serial.print("Rain: ");
    Serial.println(r ? "Detected" : "Not Detected");
  }

  client.stop();
  delay(1000);
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const jsonParser = bodyParser.json();
const admin = require("firebase-admin");

const serviceAccount = {
    type: "service_account",
    project_id: "surfboard-c7a7d",
    private_key_id: "18061e01f24c91c4993f783fbce987168c2485fe",
    private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnrhAa6Gdt1QO3\n5W6RPwJeU7MUD5VXJFJgfwZbalzWz4wHQlNKCtJLM1QWJO45ZRzSLx+NkmX9quAT\nRQZA01kl5odASVftA1rLPet79u6/SyTaLynPOH8pnKt5SD+fzY77DCnLbzSRzWJI\n6qabvMHoMPNkyj30P6RM4xrrR717de7Q7iYwpr4bbAnTLsuR3UTLPDbz4T9q2asW\nGlHRXhOALh8AYWKItPXi5babtN9uq+KbjY/c6z3dv5QbTSJMeffpyMq4eMrosXgX\nmXnONPNFq/vkY1ZGfrei6ynBKY+U6SUPQhCFE73dIYuWQMmC8XjeuygnvTDjXWEv\nfjbL0vW5AgMBAAECggEAUbHSkumMCszvxNb5abajNsXcx/dXsV8262C3/i3yEY6J\nELhV0As5rf3SB//yOPB0fEsNOnKLUm3AQmMsysSt+HM6ji2tswIhaEhAxOLoKzc3\nOz4jRpymB+YW/T4gEYGbGeExM7Z4jFjee9wnVFVAvBmtW/vU931SVUuIv/zx6oYe\n7FRJEy7GVgNM2PmmvkuWbxeKiUBGMZtkqHrfRBqZKZOD1SWOxqVO4dxpvtCXzGPS\nseXnk066oI3yeRKDywzw1wK9eae3dHfrVy/J/ZEdgBqXNmJwyVokG0FxScQcK/DE\n82q3fc/Kym2P0pR0Jm6vh1+O87ORXi+X4XtpEFRKSQKBgQDSo1BSe0R664ovHA1G\nDZHCxFQIP3N5Z4ifqyJ0Bo9ZwvWET5Qsbc/qUQH3vGfTtM/uaSG1FZTKVktCeLYt\n0WDMZ0mR5U4i8ZLjPExupo4bko1UcgRmp0gYhpM3IY7JMSGPFGCnnaoNP2La+r1l\nZtbk9+O8lZzaqTCG51EtIhBUxwKBgQDLym4MF5V3X/lvX9T9BtFc5nv29eS9/xIS\nnl1KT05zaGwU435NqLE1I7PFlMRn75Rpp/g62eNJswh5icqhDcgEbsLaobRz4cQI\nbblmMPF2FZtAircB3xsPwxBYxfMEOHo1n6z3wZeDaVr/b01lJRvcYTp/ko4auRnm\nDyD5mRrhfwKBgQCEMxO6cLsuGp6Dqqt6CBIvl2DWPFyRGbXZ4GKjR2q4/29wNzHc\nIJ+ZhHYjsg/IA3dtPnZ1XLIhu79IXNKaNwr1vu2hr7U2oT97duDRoZ8XFwe0tEqm\n0t6g5fWHaHxhMYDKeBOhn4aXAe1dWnl8JutAkYRRW+UyJ3XZdVyxYuu1CQKBgC0N\n5wCDYkcPD91gqXz7OeQ5DKUPve+Had515pgcKnL3XhXMKctPhUYDS6Zd+oIkBILL\nYOTZ8RcFHtWH8iVjH5pjRm8BmxyXiDh40alXHrsFkdpWEJm4UopMjNujf9OqDNK4\nJ4xq321tKHIakFjROHSjhkRYCVS9IY2sQJUOFVRPAoGBAIZ2tNIP8cgB/xAl1c2w\nRjxbtzA0PylZ2qWzzDQIupkdO239dHbXrxXnvptTJL/+YpH3Xz3EXNebIfsptQII\nzlJpd2E8/sUGPCHenEs3enYPfVSdz953NjYDZ8MDMFlL6tNzspF2ggngfb10L5VX\nAUKPtiTA2kXdsN7ejcAPh11V\n-----END PRIVATE KEY-----\n",
    client_email:
        "firebase-adminsdk-xo97a@surfboard-c7a7d.iam.gserviceaccount.com",
    client_id: "118157661524683513977",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xo97a%40surfboard-c7a7d.iam.gserviceaccount.com",
};
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

db.collection("names").doc("1").get();
// .then((data) => console.log(data.data()));
// .then((snapshot) => {
//     snapshot.forEach((data) => console.log(data.data()));
// });

app.use(jsonParser);
app.get("/", (req, res) => {
    console.log(req.query);

    res.send(req.body.name);
});

app.listen(port, () => {
    console.log(`Application is running on port : ${port}`);
});

/**
 * 
 */

var appTitle="ΣΤΑΔΙΑ ΕΠΙΛΥΣΗΣ ΠΡΟΒΛΗΜΑΤΟΣ";
var appVersion="1.0";
var appProductionDate="21.02.2018";

var creatorName="Παναγιώτης Τσάκωνας";
var creatorData="εκπαιδευτικός ΠΕ04.01-ΠΕ86, Φυσικής-Πληροφορικής";

var realisedBy="Παναγιώτης Τσάκωνας";
var realisedByData="εκπαιδευτικός ΠΕ04.01-ΠΕ86, Φυσικής-Πληροφορικής";

var pedagogicDesigner1="Παναγιώτης Τσάκωνας";
var designedByData1="εκπαιδευτικός ΠΕ04.01-ΠΕ86, Φυσικής-Πληροφορικής";
var pedagogicDesigner2="Αθανάσιος Τζιμογιάννης";
var designedByData2="Καθηγητής Τμήματος Κοινωνικής και Εκπαιδευτικής Πολιτικής Πανεπιστημίου Πελοποννήσου";

var coordinatorName="Αθανάσιος Τζιμογιάννης";
var coordinatorData="Καθηγητής Τμήματος Κοινωνικής και Εκπαιδευτικής Πολιτικής Πανεπιστημίου Πελοποννήσου";

function showAppInfo(){
    document.getElementById("pageTitle").innerHTML=appTitle;
    document.getElementById("appVersion").innerHTML=appVersion;
    document.getElementById("appProductionDate").innerHTML=appProductionDate;
    //created by
    document.getElementById("u194-3").innerHTML=creatorName;
    document.getElementById("creatorData").innerHTML=creatorData;
    //realised by
    /*document.getElementById("u194-12").innerHTML=realisedBy;
    document.getElementById("realisedByData").innerHTML=realisedByData;*/
    //pedagogical design
    /*document.getElementById("u194-112").innerHTML=pedagogicDesigner1;
    document.getElementById("designedByData1").innerHTML=designedByData1;*/
    /*document.getElementById("u194-118").innerHTML=pedagogicDesigner2;
    document.getElementById("designedByData2").innerHTML=designedByData2;*/
    //coordinator
    document.getElementById("u194-18").innerHTML=coordinatorName;
    document.getElementById("coordinatorData").innerHTML=coordinatorData;

    showAppTitle();
}

function showAppTitle(){
    document.getElementById("appTitle").innerHTML=appTitle;
    document.title=appTitle;
}
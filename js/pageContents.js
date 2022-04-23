/**
 * 
 */
var pgIntroΑ;
var pgIntroB;
var pgDataSearchA;
var pgDataSearchB;
var pgGeometryA;
var pgGeometryB;
var pgGeometryC;
var pgGeometryD;
var pgGeometryE;
var pgSafeDrivingA;
var pgSafeDrivingB;
var pgPostmanA;
var pgPostmanB;
var pgPostmanC;
var pgPostmanD;
var pgPostmanE;
var pgPuzzle;

function pageNumbering(){
	var pgIndex=1;
	pgIntroΑ=pgIndex;
	pgIndex++;
	pgIntroB=pgIndex;
	pgIndex++;
	pgDataSearchA=pgIndex;
	pgIndex++;
	pgDataSearchB=pgIndex;
	pgIndex++;
	pgGeometryA=pgIndex;
	pgIndex++;
	pgGeometryB=pgIndex;
	pgIndex++;
	pgGeometryC=pgIndex;
	pgIndex++;
	pgGeometryD=pgIndex;
	pgIndex++;
	pgGeometryE=pgIndex;
	pgIndex++;
	pgSafeDrivingA=pgIndex;
	pgIndex++;
	pgSafeDrivingB=pgIndex;
	pgIndex++;
	pgPostmanA=pgIndex;
	pgIndex++;
	pgPostmanB=pgIndex;
	pgIndex++;
	pgPostmanC=pgIndex;
	pgIndex++;
	pgPostmanD=pgIndex;
	pgIndex++;
	pgPostmanE=pgIndex;
	pgIndex++;
	pgPuzzle=pgIndex;
	pgIndex++;
	
	maxPage=pgIndex-1;
	generateTableOfContents();
}

function generateTableOfContents(){
	var menuEntry="<div tabindex='0' class='onclick-menu'>";
	menuEntry+="<ul class='onclick-menu-content'>";
	menuEntry+="<li><button onclick='selectPage("+pgIntroΑ+")'>Αλγόριθμοι</button></li>";
	menuEntry+="<li><button onclick='selectPage("+pgDataSearchA+")'>Κατανοώντας ένα πρόβλημα</button></li>";
	menuEntry+="<li><button onclick='selectPage("+pgGeometryA+")'>Α. Ένα πρόβλημα Γεω-μέτρησης</button></li>";
	menuEntry+="<li><button onclick='selectPage("+pgSafeDrivingA+")'>Β. Ασφαλής οδήγηση</button></li>";
	menuEntry+="<li><button onclick='selectPage("+pgPostmanA+")'>Γ. Πρόβλημα λογικής</button></li>";
	menuEntry+="<li><button onclick='selectPage("+pgPuzzle+")'>Δ. Σπαζοκεφαλιά</button></li>";
	menuEntry+="</ul>";
	menuEntry+="</div>";
	document.getElementById("tableOfContents").innerHTML=menuEntry;
}

function definePageContents(){
	clearPageContents();
	switch(currentPage){
	case pgIntroΑ:
		pageTitle="Αλγόριθμοι";
		pageContent.push("Παρά το ότι καθημερινά καλούμαστε να επιλύσουμε προβλήματα, είτε στο περιβάλλον του σχολείου, είτε ευρύτερα, κανείς δεν μας έχει πει με ποιον ακριβώς τρόπο μπορούμε να το πετύχουμε αυτό.");
		pageContent.push("Πολλοί βασίζονται σε έναν απροσδιόριστο συνδυασμό ταλέντου και έμπνευσης προκειμένου να αντιμετωπίσουν με επιτυχία ένα πρόβλημα.");
		pageContent.push("Δεν είμαστε όμως όλοι οι άνθρωποι ικανοί για κάτι τέτοιο.");
		pageContent.push("Ευτυχώς, στο πλαίσιο ενός μαθήματος Αλγοριθμικής Σκέψης / Προγραμματισμού μπορούμε να αναπτύξουμε μια συστηματική μέθοδο ώστε να αντιμετωπίζουμε χωρίς κόπο αλλά και με σίγουρα βήματα, ένα μεγάλο πλήθος προβλημάτων.");
		pagePic.push("problemSolving.png");
		pagePic.push("maze.gif");
		pagePic.push("choice.gif");
		pagePic.push("problemSolved.gif");
		break;
	case pgIntroB:
		pageTitle="Πώς επιλύουμε ένα πρόβλημα; (2/2)";
		pageContent.push("Η μέθοδος αυτή περιλαμβάνει πέντε στάδια, που φαίνονται στο διπλανό σχήμα.");
		pageContent.push("Στη συνέχεια, θα δούμε μερικά παραδείγματα προβλημάτων, όπου θα προσπαθήσουμε να εφαρμόσουμε τη μέθοδο αυτή κατά τρόπο ώστε να <b>αντιληφθούμε</b> καλύτερα την έννοια, τη σημασία και τον τρόπο εφαρμογής κάθε σταδίου.");
		pagePic.push("stages.png");
		break;
	case pgDataSearchA:
		pageTitle="Κατανοώντας ένα πρόβλημα (1/2)";
		pageContent.push("Το πρώτο πράγμα που πρέπει να κάνουμε για να λύσουμε ένα πρόβλημα είναι να το <i>κατανοήσουμε.</i>");
		pageContent.push("Η κατανόηση ενός προβλήματος αποτελεί συνάρτηση δύο παραγόντων:");
		pageContent.push("α. της σωστής διατύπωσης εκ μέρους του δημιουργού του,");
		pageContent.push("β. της ορθής ερμηνείας από τη μεριά εκείνου που καλείται να το αντιμετωπίσει.");
		pageContent.push("Ένα απλό παράδειγμα κακοδιατυπωμένου προβλήματος είναι το ακόλουθο:");
		pageContent.push("Βρείτε έναν αριθμό μικρότερο του 7 <b>και</b> μεγαλύτερο του 20.");
		pagePic.push("problemSolving.jpg");
		break;
	case pgDataSearchB:
		pageTitle="Κατανοώντας ένα πρόβλημα (2/2)";
		pageContent.push("Με την προϋπόθεση ότι ο δημιουργός του προβλήματος έχει κάνει καλά τη δουλειά του, για να λύσουμε ένα πρόβλημα πρέπει να καταλάβουμε σε τι αναφέρεται και σε ποια στοιχεία της εκφώνησης μπορούμε να βασιστούμε.");
		pageContent.push("Όπως θα φανεί στη συνέχεια, αυτό απαιτεί προσοχή, παρατηρητικότητα, εξάσκηση και λογική σκέψη.");
		pageContent.push("Έτσι, προκειμένου να λύσουμε τον κύβο του Rubik, πρέπει να παρατηρήσουμε ότι υπάρχουν τριών ειδών κυβάκια:");
		pageContent.push("αυτά που έχουν μια όψη και βρίσκονται στο κέντρο κάθε έδρας του κύβου,");
		pageContent.push("αυτά που έχουν δύο όψεις και βρίσκονται στο μέσο κάθε ακμής, και");
		pageContent.push("αυτά που έχουν τρεις όψεις και βρίσκονται στις γωνίες του κύβου.");
		pageContent.push("Παίζοντας λίγο με τον κύβο διαπιστώνουμε ότι τα κυβάκια μιας όψης παραμένουν αμετακίνητα και στην ουσία καθορίζουν το χρώμα κάθε πλευράς.");
		pageContent.push("Για να αρχίσουμε λοιπόν να φτιάχνουμε τον κύβο πρέπει κάθε κυβάκι δύο όψεων να τοποθετηθεί σε εκείνη τη θέση όπου τα χρώματα των δύο όψεών του ταυτίζονται με το χρώμα των αντίστοιχων κεντρικών.");
		pageContent.push("Αντίστοιχος κανόνας ισχύει και για τα κυβάκια τριών όψεων.");
		pageLinks.push("https://el.wikipedia.org/wiki/Κύβος_του_Ρούμπικ");
		pageLinks.push("https://en.wikipedia.org/wiki/Rubik%27s_Cube");
		pageLinks.push("https://www.youtube.com/watch?v=j7ad6ZxGtYA");
		pageLinks.push("https://www.youtube.com/watch?v=D3g1BH6Yo8M");
		pagePic.push("problemSolving2.png");
		break;
	case pgGeometryA:
		pageTitle="Α. Ένα πρόβλημα Γεω-μέτρησης (1/5)";
		pageContent.push("Ως πρώτο αναλυτικό παράδειγμα ας δούμε ένα απλό πρόβλημα:");
		pageContent.push("Προκειμένου να πετύχουμε καλύτερη σοδειά, θέλουμε να ρίξουμε λίπασμα σε ένα χωράφι.");
		pageContent.push("Στη συσκευασία του λιπάσματος αναγράφονται η χημική του σύνθεση, η καλύτερη περίοδος χρήσης του μέσα στο ημερολογιακό έτος, το καθαρό βάρος της συσκευασίας, η ποσότητα που αντιστοιχεί σε κάθε τετραγωνικό μέτρο γης και η τιμή του.");
		pageContent.push("Πόση ποσότητα λιπάσματος πρέπει να αγοράσουμε;");
		pageContent.push("");
		multChoice.push("Η απάντηση εξαρτάται από:");
		multChoice.push("Τη χημική σύνθεση");
		multChoice.push("Την περίοδο χρήσης");
		multChoice.push("Την ποσότητα ανά τετραγωνικό μέτρο");
		multChoice.push("Την τιμή");
		pagePic.push("fertiliser.jpg");
		pagePic.push("1.katanoisi.png");
		expectingUserInput=true;
		correctAnswer=3;
		break;
	case pgGeometryB:
		pageTitle="Α. Ένα πρόβλημα Γεω-μέτρησης (2/5)";
		pageContent.push("Σε κάθε επιλύσιμο πρόβλημα αναφέρονται εκείνα τα στοιχεία που θα μας οδηγήσουν στη λύση, καθώς και άλλα τα οποία μας είναι αδιάφορα.");
		pageContent.push("Για παράδειγμα, η χημική σύνθεση σχετίζεται με το είδος της καλλιέργειας. Η εκφώνηση όμως μας επιτρέπει να συμπεράνουμε ότι αυτός ο παράγοντας έχει ήδη ληφθεί υπόψη κατά την επιλογή του λιπάσματος από όσα κυκλοφορούν στην αγορά.");
		pageContent.push("Αντίστοιχα, η τιμή θα μας ενδιέφερε αν μας ζητούσαν το κόστος της αγοράς.");
		pageContent.push("Αναλύοντας το παράδειγμά μας, διαπιστώνουμε ότι <i>μόνο</i> η αναλογία λιπάσματος ανά τετραγωνικό μέτρο θα καθορίσει την απαιτούμενη ποσότητα, ενώ όλα τα υπόλοιπα στοιχεία μπορoύν να <i>αφαιρεθούν</i> από το συλλογισμό μας, καθιστώντας τον απλούστερο.");
		pageContent.push("Άρα, το ερώτημα που μας ενδιαφέρει διατυπώνεται τελικά ως εξής:");
		pageContent.push("<b>'Ποιο είναι το εμβαδόν του χωραφιού;'</b>");
		pageContent.push("");
		multChoice.push("Η απάντηση εξαρτάται από:");
		multChoice.push("Την τοποθεσία του χωραφιού");
		multChoice.push("Το σχήμα του χωραφιού");
		multChoice.push("Το υψόμετρο του χωραφιού");
		pagePic.push("egypt.jpg");
		pagePic.push("2.analisi.png");
		expectingUserInput=true;
		correctAnswer=2;
		break;
	case pgGeometryC:
		pageTitle="Α. Ένα πρόβλημα Γεω-μέτρησης (3/5)";
		pageContent.push("Το πρόβλημα λύνεται πολύ απλά, αν γνωρίζουμε το σχήμα του χωραφιού, ή, <i>καλύτερα</i>, αν εμείς έχουμε δώσει στο χωράφι τέτοιο σχήμα ώστε το εμβαδό του να υπολογίζεται εύκολα με βάση τη Γεωμετρία.");
		pageContent.push("Συνήθως, για να γίνεται ευκολότερα ο υπολογισμός του εμβαδού, αλλά και για να διευκολύνονται οι περισσότερες αγροτικές εργασίες, οι καλλιεργήσιμες εκτάσεις χοντρικά έχουν σχήμα ορθογωνίου παραλληλογράμμου.");
		pageContent.push("Αν αυτό ισχύει στην περίπτωσή μας τότε το πρόβλημα λύνεται εύκολα.");
		pageContent.push("");
		multChoice.push("Πόσα στοιχεία χρειάζεσαι για να βρεις το εμβαδό ένος τέτοιου χωραφιού;");
		multChoice.push("Ένα");
		multChoice.push("Δύο");
		multChoice.push("Τέσσερα");
		multChoice.push("Η εκφώνηση είναι ελλιπής");
		pagePic.push("geometry.jpg");
		pagePic.push("2.analisi.png");
		pagePic.push("3.sinthesi.png");
		expectingUserInput=true;
		correctAnswer=2;
		break;
	case pgGeometryD:
		pageTitle="Α. Ένα πρόβλημα Γεω-μέτρησης (4/5)";
		pageContent.push("Σε ένα πρώτο στάδιο κατηγοριοποίησης του προβλήματος μπορούμε να πούμε πως σε όσα προβλήματα απαιτείται υπολογισμός εμβαδού εργαζόμαστε με παρόμοιο τρόπο.");
		pageContent.push("Ως παραδείγματα μπορούμε να αναφέρουμε τον υπολογισμό των τεμαχίων πλακιδίων που απαιτούνται για την κάλυψη του δαπέδου ενός δωματίου ή της ποσότητας υλικών που χρειάζονται για την εξωτερική θερμομόνωση μιας κατοικίας.");
		pageContent.push("Ευρύτερα, το πρόβλημα αυτό κατηγοριοποιείται ως ένα από εκείνα που λύνονται με βάση <b>αναλογίες μεγεθών</b>.");
		pagePic.push("4.katigoriopoiisi.png");
		expectingUserInput=true;
		correctAnswer=2;
		break;
	case pgGeometryE:
		pageTitle="Α. Ένα πρόβλημα Γεω-μέτρησης (5/5)";
		pageContent.push("Με τη γενίκευση, μεταφέρονται τα αποτελέσματα της λύσης σε άλλες παρεμφερείς καταστάσεις ή προβλήματα.");
		pageContent.push("Για παράδειγμα μπορούμε να γενικεύσουμε τον υπολογισμό του εμβαδού για τις περιπτώσεις σχημάτων που δεν είναι ορθογώνια παραλληλόγραμμα.");
		pageContent.push("Εκτός από τους τύπους υπολογισμού του εμβαδού βασικών γεωμετρικών σχημάτων, υπάρχουν πολλές ακόμη τεχνικές, περισσότερο ή λιγότερο προσεγγιστικές.");
		pageLinks.push("http://www.geo.auth.gr/322/chapter073.html");
		pageLinks.push("http://synergasia.minedu.gov.gr/modules/document/file.php/S-GEN103/Mathimatika_B-Gym/index%20b1_3.html");
		pageLinks.push("http://www.gravoplex.com/Planimeter/GMapPlanimeter.html");
		pageLinks.push("http://repfiles.kallipos.gr/html_books/9863/Ch7.S2.html");
		pageLinks.push("http://www.hms.gr/apothema/?s=sa&i=2487");
		pagePic.push("5.genikeysi.png");
		expectingUserInput=true;
		correctAnswer=2;
		break;
	case pgSafeDrivingA:
		pageTitle="Β. Ασφαλής οδήγηση (1/2)";
		pageContent.push("Στην καθημερινότητά μας χρησιμοποιούμε τη γλώσσα των μαθηματικών για να λύσουμε ένα πρόβλημα.");
		pageContent.push("Για παράδειγμα, στα αυτοκίνητα νέας τεχνολογίας ενσωματώνονται συστήματα ασφάλειας του οδηγού, των επιβατών και των πεζών.");
		pageContent.push("Ένα τέτοιο σύστημα (μπορεί να) αποτελείται από:");
		pageContent.push("α. ένα (ή περισσότερα) ραντάρ που εντοπίζει εμπόδια στην πορεία του αυτοκινήτου μετρώντας την απόστασή του από αυτά,");
		pageContent.push("β. τον ταχογράφο που καταγράφει τη στιγμιαία ταχύτητα του οχήματος,");
		pageContent.push("γ. το λογισμικό που υπολογίζει και εφαρμόζει αυτόματα την απαιτούμενη επιβράδυνση ώστε το όχημα να αποφύγει τη σύγκρουση.");
		var picNo=parseInt(6*Math.random()+1);
		pagePic.push("carRadar"+picNo+".jpg");
		pageLinks.push("https://youtu.be/uLEqCzaGTLA?t=34s");
		pageLinks.push("https://youtu.be/YESLzxma4QI?t=23s");
		pageLinks.push("https://youtu.be/IMYi3G7dkU4");
		pageLinks.push("https://youtu.be/r8G0n5LeJo0");
		multChoice.push("Πόσα δεδομένα χρειάζεται το λογισμικό του οχήματος για να εκτελέσει ασφαλές φρενάρισμα;");
		multChoice.push("Ένα");
		multChoice.push("Δύο");
		multChoice.push("Τρία");
		multChoice.push("Η εκφώνηση είναι ελλιπής");
		expectingUserInput=true;
		correctAnswer=3;
		break;
	case pgSafeDrivingB:
		pageTitle="Β. Ασφαλής οδήγηση (2/2)";
		pageContent.push("Και πάλι θα πρέπει να επικεντρωθούμε σε στοιχεία που καθορίζουν τη λύση.");
		pageContent.push("Συγκεκριμένα, θα υποθέσουμε ότι η επιβράδυνση είναι σταθερή, οπότε, από τη Φυσική της Α΄Λυκείου, γνωρίζουμε δύο εξισώσεις που περιγράφουν την κίνηση του οχήματος.");
		pageContent.push("Για την ταχύτητα <code>υ</code> ισχύει:");
		pageContent.push("<code>υ = υ<sub>ο</sub> - α <sup>.</sup> t</code>");
		pageContent.push("Για την μετατόπιση <code>x</code> ισχύει:");
		pageContent.push("<code>x = υ<sub>ο</sub> <sup>.</sup> t - 0,5 <sup>.</sup> α <sup>.</sup> t<sup>2</sup></code>");
		var picNo=parseInt(6*Math.random()+1);
		pagePic.push("carRadar"+picNo+".jpg");
		multChoice.push("Με πόσα δεδομένα νομίζεις ότι πρέπει να τροφοδοτήσουμε το λογισμικό για να υπολογίσει την τιμή της επιβράδυνσης;");
		multChoice.push("Ένα");
		multChoice.push("Δύο");
		multChoice.push("Τρία");
		multChoice.push("Η εκφώνηση είναι ελλιπής");
		expectingUserInput=true;
		correctAnswer=3;
		break;
	case pgPostmanA:
		pageTitle="Γ. Πρόβλημα λογικής (1/5)";
		pageContent.push("Ένας ταχυδρόμος χτυπά το κουδούνι μιας μονοκατοικίας για να παραδώσει μια Συστημένη επιστολή. Η ιδιοκτήτρια του σπιτιού ανοίγει την πόρτα και ο ταχυδρόμος την παρακαλεί να υπογράψει για την παραλαβή. Όσο εκείνη υπογράφει, ο ταχυδρόμος βλέπει από το άνοιγμα της πόρτας κάποια παιδάκια να παίζουν.");
		pageContent.push("- 'Τι χαριτωμένα!', λέει. 'Δικά σας είναι;'");
		pageContent.push("- 'Ναι, είναι οι τρεις κόρες μου', απαντά η κυρία.");
		pageContent.push("- 'Να σας ζήσουν...'");
		pageContent.push("- 'Ευχαριστώ.'");
		pageContent.push("- 'Πόσων ετών είναι;' ρωτά ο ταχυδρόμος.");
		pageContent.push("- 'Επειδή μου αρέσουν οι σπαζοκεφαλιές', απαντά εκείνη, 'δε θα σας απαντήσω ευθέως, θα σας πω όμως ότι το γινόμενο των ηλικιών τους ισούται με 36, ενώ το άθροισμά τους ισούται με τον αριθμό του απέναντι σπιτιού.'");
		pageContent.push("Ο ταχυδρόμος ρίχνει μια ματιά στο απέναντι σπίτι, σκέπτεται για λίγο και λέει:");
		pageContent.push("- 'Ξέρετε, και μένα μου αρέσουν οι σπαζοκεφαλιές, ελπίζω λοιπόν ότι θα συμφωνήσετε μαζί μου πως με αυτά τα στοιχεία δε μπορώ να βρω τις ηλικίες των παιδιών.'");
		pageContent.push("Με τη σειρά της σκέφτεται και η κυρία και τελικά λέει:");
		pageContent.push("- 'Να με συγχωρείτε, έχετε απόλυτο δίκιο. Σας λέω λοιπόν επιπλέον ότι το μικρό μου κοριτσάκι είναι ξανθό.'");
		pageContent.push("- 'Ααα, πολύ ωραία!', απαντά ο ταχυδρόμος, 'τώρα είναι πανεύκολο να βρω τις ηλικίες τους.' και αποχωρεί.");
		pagePic.push("postman.jpg");
		multChoice.push("Αν και το κανονικό ερώτημα αυτής της κλασικής σπαζοκεφαλιάς είναι 'ποιες είναι οι ηλικίες των κοριτσιών;' εμείς εδώ θα επικεντρωθούμε και πάλι στο πόσα είναι τα δεδομένα του προβλήματος, ξεκαθαρίζοντας ότι η εκφώνηση <b>δεν</b> είναι ελλιπής.");
		multChoice.push("Τρία");
		multChoice.push("Τέσσερα");
		multChoice.push("Πέντε");
		multChoice.push("Έξι");
		expectingUserInput=true;
		correctAnswer=2;
		break;
	case pgPostmanB:
		pageTitle="Γ. Πρόβλημα λογικής (2/5)";
		pageContent.push("Αφού μόνο μία εξίσωση καταφέραμε να βρούμε, η οποία όμως έχει τρεις αγνώστους, η μαθηματικοποιημένη προσέγγιση της λύσης δε φαίνεται να αποδίδει.");
		pageContent.push("Ίσως να είμαστε τυχεροί ώστε μόνο μία τριάδα αριθμών να δίνει γινόμενο 36, οπότε τελικά το πρόβλημα να λύνεται ευκολότερα απ΄ ό,τι νομίζαμε αρχικά.");
		pageContent.push("Για να είμαστε σίγουροι ότι δεν θα παραλείψουμε καμία τριάδα, θα τις καταγράψουμε κατά τρόπο συστηματικό, αρχίζοντας από εκείνη/εκείνες των οποίων ο πρώτος αριθμός είναι 1:");
		pageContent.push("1 , 1 , 36");
		pageContent.push("1 , 2 , 18");
		pageContent.push("");
		pageContent.push("(ήδη διαψεύστηκε η ευχή μας ότι η τριάδα είναι μοναδική)");
		pageContent.push("");
		pageContent.push("1 , 3 , 12");
		pageContent.push("1 , 4 , 9");
		pageContent.push("1 , 6 , 6");
		pageContent.push("");
		pageContent.push("2 , 2 , 9");
		pageContent.push("2 , 3 , 6");
		pageContent.push("");
		pageContent.push("3 , 3 , 4");
		pageContent.push("Προφανώς κάτι λείπει για να λύσουμε το πρόβλημα...");
		pageContent.push("Ποιο δεδομένο της εκφώνησης δεν έχουμε εντοπίσει και εκμεταλλευτεί ακόμη;");
		var picNo=parseInt(7*Math.random()+1);
		pagePic.push("postman"+picNo+".jpg");
		pagePic.push("2.analisi.png");
		multChoice.push("Μάλλον πρέπει να προσπαθήσουμε να κατανοήσουμε το πρόβλημα καλύτερα...");
		break;
	case pgPostmanC:
		pageTitle="Γ. Πρόβλημα λογικής (3/5)";
		pageContent.push("Η εκφώνηση κάνει λόγο για το άθροισμα των ηλικιών.");
		pageContent.push("Παρ΄ ότι δε μπορούμε να φτιάξουμε δεύτερη εξίσωση, ας δούμε τι αθροίσματα δίνουν οι τριάδες που εντοπίσαμε:");
		pageContent.push("1 + 1 + 36 = 38");
		pageContent.push("1 + 2 + 18 = 21");
		pageContent.push("1 + 3 + 12 = 16");
		pageContent.push("1 + 4 + 9 = 14");
		pageContent.push("1 + 6 + 6 = 13");
		pageContent.push("2 + 2 + 9 = 13");
		pageContent.push("2 + 3 + 6 = 11");
		pageContent.push("3 + 3 + 4 = 10");
		pageContent.push("Αν γνωρίζαμε τον αριθμό του απέναντι σπιτιού θα δημιουργούσαμε μια δεύτερη εξίσωση...");
		pageContent.push("Αφού όμως ο αριθμός αυτός δεν αναφέρεται στην εκφώνηση, προφανώς θα πρέπει να <b>αφαιρεθεί</b> από τα δεδομένα.");
		pagePic.push("postman.jpg");
		break;
	case pgPostmanD:
		pageTitle="Γ. Πρόβλημα λογικής (4/5)";
		pageContent.push("Ο ταχυδρόμος, αν και βλέπει τον αριθμό του απέναντι σπιτιού, δε μπορεί να βρει τις ηλικίες. Γιατί;");
		pageContent.push("1 + 1 + 36 = 38");
		pageContent.push("1 + 2 + 18 = 21");
		pageContent.push("1 + 3 + 12 = 16");
		pageContent.push("1 + 4 + 9 = 14");
		pageContent.push("1 + 6 + 6 = 13");
		pageContent.push("2 + 2 + 9 = 13");
		pageContent.push("2 + 3 + 6 = 11");
		pageContent.push("3 + 3 + 4 = 10");
		pageContent.push("");
		pageContent.push("Προφανώς επειδή υπάρχουν περισσότερες από μία τριάδες που δίνουν το <b>ίδιο</b> άθροισμα.");
		pageContent.push("Πραγματικά, αν ο αριθμός του απέναντι σπιτιού ήταν 38 ή 21 ή 16 ή 14 ή 11 ή 10 ο ταχυδρόμος θα είχε ήδη βρει τις ηλικίες των κοριτσιών, θα συνέχιζε τη διανομή των επιστολών κι εμείς θα χάναμε την ευκαιρία να αντιληφθούμε πόσο καλά κρυμμένα μπορεί να είναι τα δεδομένα ενός προβλήματος.");
		pageContent.push("Στην πραγματικότητα, το δεδομένο είναι <span class='emphasis'>η αδυναμία του να απαντήσει</span>, που οδηγεί στο συμπέρασμα ότι ο αριθμός του απέναντι σπιτιού είναι 13 και οι πιθανές λύσεις του προβλήματος είναι δύο:");
		pageContent.push("1 + 6 + 6 = 13");
		pageContent.push("2 + 2 + 9 = 13");
		var picNo=parseInt(7*Math.random()+1);
		pagePic.push("postman"+picNo+".jpg");
		pagePic.push("1.katanoisi.png");
		multChoice.push("Και οι δύο λύσεις περιλαμβάνουν δίδυμα κορίτσια.<br>Στην πρώτη δίδυμα είναι τα δύο μεγάλα, ενώ στη δεύτερη τα δύο μικρά.<br>Ποια είναι τελικά η σωστή λύση;");
		multChoice.push("  [1 , 6 , 6]");
		multChoice.push("  [2 , 2 , 9]");
		expectingUserInput=true;
		correctAnswer=1;
		break;
	case pgPostmanE:
		pageTitle="Γ. Πρόβλημα λογικής (5/5)";
		pageContent.push("Και το τελευταίο δεδομένο της εκφώνησης είναι καλά κρυμένο. Αν και η έμφαση δίνεται (παραπλανητικά) στο χρώμα των μαλλιών του κοριτσιού, η ουσία κρύβεται στο ότι είναι <span class='emphasis'>μοναδικό</span>, αφού η μητέρα χρησιμοποιεί ενικό αριθμό: '<b>το</b> μικρό μου κοριτσάκι είναι ξανθό'");
		pageContent.push("Άρα η λύση είναι:");
		pageContent.push("1 , 6 , 6");
		pageContent.push("");
		pageContent.push("Το παράδειγμα αυτό είναι πολλαπλά χρήσιμο αφού δείχνει ότι:");
		pageContent.push("1. Η κατανόηση οδηγεί σε καλύτερη ανάλυση και η ανάλυση οδηγεί σε βαθύτερη κατανόηση, δηλ. κατά την αντιμετώπιση ενός προβλήματος περνάμε πολλές φορές από τα δύο αυτά στάδια, μέχρι την κρίσιμη στιγμή όπου φτάνουμε στην επίλυση.");
		pageContent.push("2. Ποτέ δε μένουμε άπραγοι μπροστά στις δυσκολίες ενός προβλήματος, αλλά εκμεταλλευόμαστε το παραμικρό στοιχείο, χωρίς απαραίτητα να ξέρουμε εκ των προτέρων πού θα μας οδηγήσει, όπως συνέβη όταν αρχίσαμε να καταγράφουμε τις πιθανές τριάδες.");
		pageContent.push("3. Συχνά η σκέψη μας μπορεί να βοηθηθεί από μια γραπτή ή σχηματική παράθεση των δεδομένων του προβλήματος, που οδηγεί σε αναστοχασμό και εναλλακτική θεώρηση του προβλήματος, όπως συνέβη με την καταγραφή των τριάδων, η οποία ανέδειξε τη σύμπτωση του αθροίσματος σε δύο από αυτές.");
		pagePic.push("1.katanoisi.png");
		pagePic.push("2.analisi.png");
		pagePic.push("3.sinthesi.png");
		pagePic.push("road.png");
		break;
	case pgPuzzle:
		initialisePattern();
		pageTitle="Δ. Σπαζοκεφαλιά";
		pageContent.push("Για να δοκιμάσεις τις ικανότητές σου στη λύση ενός προβλήματος, χρησιμοποίησε το ποντίκι για να ενώσεις τις εννέα κουκίδες σχεδιάζοντας τέσσερα ευθύγραμμα τμήματα καθένα από τα οποία αρχίζει εκεί που τελειώνει το προηγούμενο.");
		pageContent.push("Αν φτάσεις σε αδιέξοδο, μπορείς να ξεκινήσεις από την αρχή χρησιμοποιώντας το εργαλείο <img src='img/delete.png' class='referenceImage'>.");
		pageContent.push("Μπορείς πάντα να αποκαλύψεις τη λύση πατώντας το εργαλείο <img src='img/showSolution.png' class='referenceImage'>.");
		$("#images").hide(jQueryAnimationRate);
		$("#question").hide(jQueryAnimationRate);
		$("#canvasArea").show(jQueryAnimationRate);
		$("#clearDrawing").show(jQueryAnimationRate);
		$("#showSolution").show(jQueryAnimationRate);
		//initialiseCanvas();
		drawScene();
		userDrawing=true;
		break;
	}
}

function showHint(){
	var hint="";
	clearHint();
	switch(currentPage){
	case pgGeometryB:
		switch(hintLevel){
		case 0:
			hint="Ποια είναι η έννοια του όρου 'εμβαδό';";
			break;
		case 1:
			hint="Όποτε μέχρι τώρα χρειάστηκε να υπολογίσεις εμβαδό, με ποιον τρόπο το έκανες;";
			break;
		case 2:
			hint="Υπάρχουν σχήματα των οποίων το εμβαδό μπορεί να υπολογιστεί εύκολα;";
			break;
		default:
			hint="Χρειαζόμαστε πληροφορίες για το σχήμα του χωραφιού, ώστε να μπορούμε να υπολογίσουμε το εμβαδό του. Στο στάδιο αυτό <i>κατανοούμε</i> τον κυρίαρχο ρόλο που παίζει στη λύση του προβλήματος η έννοια του εμβαδού, καθώς επίσης και ότι η διατύπωση του προβλήματος είναι <i>ελλιπής</i>.";
			break;
		}
		/*document.getElementById("hint").innerHTML=hint;
		hintLevel++;*/
		break;
	case pgGeometryC:
		switch(hintLevel){
		case 0:
			hint="Θυμήσου το γεωμετρικό τύπο για τον υπολογισμό του εμβαδού ενός <a href='https://el.wikipedia.org/wiki/Εμβαδόν' target='_blank'>ορθογωνίου παραλληλογράμμου</a>...";
			break;
		case 1:
			hint="Ο τύπος είναι   <code>Εμβαδό = Βάση x Ύψος</code>";
			break;
		default:
			hint="Η Βάση και το Ύψος είναι τα <b>δύο</b> δεδομένα που χρειάζονται για τον υπολογισμό. Καταλήγουμε λοιπόν ότι οι διαστάσεις του χωραφιού μας οδηγούν στον υπολογισμό του εμβαδού και η αναγραφόμενη αναλογία μας δίνει την απαιτούμενη ποσότητα λιπάσματος.";
			break;
		}
		/*document.getElementById("hint").innerHTML=hint;
		hintLevel++;*/
		break;
	case pgSafeDrivingA:
		switch(hintLevel){
		default:
			hint="Η σωστή απάντηση είναι <i>τρία</i> δεδομένα. Όμως <b>ποια</b> είναι αυτά;";
			break;
		}
		/*document.getElementById("hint").innerHTML=hint;
		hintLevel++;*/
		break;
	case pgSafeDrivingB:
		switch(hintLevel){
		case 0:
			hint="Έχεις στη διάθεσή σου δύο εξισώσεις, άρα μπορείς να βρεις τις τιμές το πολύ δύο αγνώστων ποσοτήτων.";
			break;
		case 1:
			hint="Εκτός από την επιβράδυνση <code>α</code>, στις εξισώσεις εμφανίζονται άλλα τέσσερα φυσικά μεγέθη: <code>x</code>, <code>υ</code>, <code>υ<sub>o</sub></code> και <code>t<sub>o</sub></code>. Ποιων από αυτά τις τιμές γνωρίζουμε;";
			break;
		case 2:
			hint="Η απόσταση <code>x</code> προσδιορίζεται από το ραντάρ, ενώ η αρχική ταχύτητα <code>υ<sub>o</sub></code> είναι γνωστή από τον ταχογράφο. Φαίνεται ότι τα άγνωστα μεγέθη που απομένουν είναι τρία... Μήπως το πρόβλημα είναι τελικά άλυτο;";
			break;
		default:
			hint="Ασφαλές φρενάρισμα σημαίνει ότι η τελική ταχύτητα <code>υ</code> είναι μηδέν.<p>Τελικά τα δεδομένα είναι τρία και οι άγνωστοι δύο, άρα το σύστημα των εξισώσεων μπορεί να λυθεί.</p><p>Είναι σημαντικό να κατανοήσουμε ότι τα δεδομένα ενός προβλήματος <b>δεν έχουν πάντα αριθμητική μορφή</b>.</p>";
			break;
		}
		/*document.getElementById("hint").innerHTML=hint;
		hintLevel++;*/
		break;
	case pgPostmanA:
		if(hintLevel>=0){
			hint="<br>Ας ξεκινήσουμε από το προφανές δεδομένο: το πλήθος των αγνώστων ηλικιών είναι 3. Ας τις συμβολίσουμε με α, β και γ.";
		}
		if(hintLevel>=1){
			hint+="<br>Γνωρίζουμε ακόμη ότι το γινόμενο των ηλικιών ισούται με 36, άρα ισχύει<br><code>α <sup>.</sup> β <sup>.</sup> γ = 36</code>.";
		}
		if(hintLevel>=2){
			hint+="<br>Έχουμε λοιπόν μια εξίσωση με τρεις αγνώστους. Δυστυχώς δεν έχουμε άλλη εξίσωση αφού το άθροισμα ισούται με τον αριθμό του απέναντι σπιτιού, αλλά αυτός δεν μας έχει δοθεί, δηλαδή <code>α + β + γ = <span style='color:red'>.. ; ..</span></code>";
		}
		if(hintLevel>=3){
			hint+="<br>Για να προσδιορίσουμε τις τιμές των τριών αγνώστων χρειαζόμαστε πρόσθετα δεδομένα, αλλά ποια μπορεί να είναι αυτά; Τι ρόλο μπορεί να παίζει το χρώμα των μαλλιών;";
		}
		if(hintLevel>=4){
			hint+="<br>Όπως θα φανεί από τη συνέχεια της ανάλυσης, τα δεδομένα του προβλήματος είναι τέσσερα. Όμως ποια ακριβώς είναι αυτά;";
		}
		/*document.getElementById("hint").innerHTML=hint;
		hintLevel++;*/
		break;
	}
	currentHint=document.getElementById("hint").innerHTML=hint;
	hintLevel++;
}

function clearHint(){
	document.getElementById("hint").innerHTML="";
}

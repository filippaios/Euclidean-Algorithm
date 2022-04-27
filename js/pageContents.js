/**
 * 
 */
var pgIntroΑ;
var pgIntroB;
var pgDataSearchA;
var pgGeometryA;
var pgGeometryB;
var pgGeometryC;
var pgGeometryD;
var pgGeometryE;
var pgSafeDrivingA;
var pgSafeDrivingB;



function pageNumbering() {
	var pgIndex = 1;
	pgIntroΑ = pgIndex;
	pgIndex++;
	pgIntroB = pgIndex;
	pgIndex++;
	pgDataSearchA = pgIndex;
	pgIndex++;	
	pgGeometryA = pgIndex;
	pgIndex++;
	pgGeometryB = pgIndex;
	pgIndex++;
	pgGeometryC = pgIndex;
	pgIndex++;
	pgGeometryD = pgIndex;
	pgIndex++;
	pgGeometryE = pgIndex;
	pgIndex++;
	pgSafeDrivingA = pgIndex;
	pgIndex++;
	pgSafeDrivingB = pgIndex;
	pgIndex++;
	maxPage = pgIndex - 1;
	generateTableOfContents();
}

function generateTableOfContents() {
	var menuEntry = "<div tabindex='0' class='onclick-menu'>";
	menuEntry += "<ul class='onclick-menu-content'>";
	menuEntry += "<li><button onclick='selectPage(" + pgIntroΑ + ")'>Αλγόριθμοι</button></li>";
	menuEntry += "<li><button onclick='selectPage(" + pgDataSearchA + ")'>Ιστορική Εξέληξη</button></li>";
	menuEntry += "<li><button onclick='selectPage(" + pgGeometryA + ")'>Τυποποιημένοι αλγόριθμοι</li>";
	menuEntry += "<li><button onclick='selectPage(" + pgGeometryB + ")'>Αλγόριθμοι Μέγιστου Κοινού Διαιρέτη</li>";
	menuEntry += "<li><button onclick='selectPage(" + pgSafeDrivingA + ")'>Εφαρμογή Αλγόριθμου Ευκλείδη</li>";
	menuEntry += "<li><button onclick='selectPage(" + pgSafeDrivingB + ")'>Πηγές Μαθησιακού Αντικειμένου</li>";
	
	
	menuEntry += "</ul>";
	menuEntry += "</div>";
	document.getElementById("tableOfContents").innerHTML = menuEntry;
}

function definePageContents() {
	clearPageContents();
	switch (currentPage) {
		case pgIntroΑ:
			pageTitle = "Αλγόριθμοι";
			pageContent.push("Αλγόριθμος είναι μια πεπερασμένη σειρά ενεργειών, αυστηρά καθορισμένων και εκτελέσιμων σε πεπερασμένο χρόνο, που στοχεύουν στην επίλυση ενός προβλήματος.");
			pageContent.push("Η έννοια του αλγορίθμου δεν συνδέεται αποκλειστικά και μόνο με προβλήματα της Πληροφορικής. Για παράδειγμα, το δέσιμο της γραβάτας αποτελεί ένα πρόβλημα, για την επίλυση του οποίου χρειάζεται να εκτελεστεί μια πεπερασμένη σειρά ενεργειών. Η αλληλουχία των ενεργειών οδηγεί στο επιθυμητό αποτέλεσμα. Η αλληλουχία δεν είναι απαραίτητα μοναδική για την επίτευξη αυτού του, αφού, υπάρχουν και άλλοι τρόποι για το δέσιμο της γραβάτας.");
			pagePic.push("problemSolving.png");
			break;

		case pgDataSearchA:
			pageTitle = "Ιστορική Εξέληξη";
			pageContent.push("Η λέξη αλγόριθμος (algorithm) προέρχεται από μια μελέτη του Πέρση μαθηματικού Μοχάμεντ Ιμπν Μουσά Αλ Χουαρίζμι (Muhammad ibn Mūsā al-Khwārizmī), που έζησε περί το 825 μ.Χ.");
			pageContent.push("Παρόλα αυτά, η ύπαρξη και η ηλικία μερικών αλγορίθμων αριθμεί χιλιάδες χρόνια. Σήμερα, το πεδίο της μελέτης των αλγορίθμων (το οποίο καλείται θεωρία αλγορίθμων) είναι ένα ιδιαίτερα ευρύ πεδίο έρευνας.");
			pagePic.push("problemSolving.jpg");
			break;
		case pgIntroB:
			pageTitle = "Κριτήρια αλγορίθμου";
			pageContent.push("Οι αλγόριθμοι θα πρέπει να πληρούν κάποια πρότυπα και να διατυπώνονται με συγκεκριμένο τρόπο.");
			pageContent.push("Έτσι ένας αλγόριθμος πρέπει να ικανοποιεί τα επόμενα κριτήρια:");
			pageContent.push("-Καθοριστικότητα");
			pageContent.push("-Περατότητα");
			pageContent.push("-Αποτελεσματικότητα");
			pageContent.push("-Επεκτασιμότητα");
			pageContent.push("-Να έχει είσοδο δεδομένων, επεξεργασία και έξοδο αποτελεσμάτων");			
			break;
		
		case pgGeometryA:
			pageTitle = "Τυποποιημένοι αλγόριθμοι";
			pageContent.push("Οι αλγόριθμοι είναι σημαντικοί γιατί σχετίζονται άμεσα με τον τρόπο με τον οποίο οι υπολογιστές επεξεργάζονται δεδομένα και παράγουν πληροφορίες.");
			pageContent.push(" Ένα πρόγραμμα υπολογιστών είναι ουσιαστικά ένας αλγόριθμος που λέει στον υπολογιστή ποια συγκεκριμένα βήματα να εκτελέσει (σε ποια συγκεκριμένη σειρά) προκειμένου να επιτευχθεί ένας συγκεκριμένος στόχος, όπως π.χ. ο υπολογισμός των μισθών των υπαλλήλων ή η εκτύπωση των ελέγχων των μαθητών. Κατά συνέπεια, ''ένας αλγόριθμος μπορεί να θεωρηθεί οποιαδήποτε ακολουθία εντολών που μπορεί να εκτελεσθεί από μια υπολογιστική μηχανή'' (Μηχανή Τιούρινγκ).Αυτός ο ορισμός δόθηκε τον 20ο αιώνα από τον Άλαν Τιούρινγκ.");
			
			pageContent.push("");
			pageContent.push("Χαρακτηριστικά, όταν ένας αλγόριθμος συνδέεται με την επεξεργασία πληροφοριών, τα δεδομένα διαβάζονται από μια συσκευή εισόδου, γράφονται σε μια συσκευή εξόδου, και / ή αποθηκεύονται για την περαιτέρω χρήση. Τα αποθηκευμένα στοιχεία θεωρούνται ως τμήμα της εσωτερικής κατάστασης του συστήματος που εκτελεί τον αλγόριθμο.");
			pageContent.push("");		
			multChoice.push("Τα βήματα δημιουργίας αλγόριθμου είναι:");
			multChoice.push("Κατανόηση του Αλγόριθμου");
			multChoice.push("Αποφυγή του προβλήματος");
			multChoice.push("Διατύπωση του αλγόριθμου");
			multChoice.push("Έλεγχος του καιρού");
			pagePic.push("fertiliser.jpg");			
			expectingUserInput = true;
			correctAnswer = 3;
			break;
		case pgGeometryB:
			pageTitle = "Αλγόριθμοι Μέγιστου Κοινού Διαιρέτη";
			pageContent.push("Μέγιστος κοινός διαιρέτης στη θεωρία αριθμών ονομάζεται ο μεγαλύτερος ακέραιος που διαιρεί δύο ή περισσότερους ακέραιους αριθμούς.Ο μέγιστος κοινός διαιρέτης των α,b συμβολίζεται με ΜΚΔ(a,b) ή gcd(a,b) ή απλούστερα (a,b). ");
			pageContent.push("");
			pageContent.push("<b>Ορολογία:</b>");
			
			pageContent.push("Διαιρέτης του αριθμού α λέγεται κάθε φυσικός αριθμός κ για τον οποίο υπάρχει αριθμός μ τέτοιος, ώστε: α=μκ. Με άλλα λόγια όποιος από τους αριθμούς α, α/2, α/2, α/4, ... είναι φυσικός, είναι διαιρέτης του α. Κάθε διαιρέτης του α είναι μικρότερος ή ίσος του α, αφού ο μ είναι φυσικός (μη μηδενικός) αριθμός.");
			pageContent.push("<b>Κοινός διαιρέτης</b> των αριθμών α και β λέγεται κάθε αριθμός κ, ο οποίος είναι ταυτόχρονα διαιρέτης του α και διαιρέτης του β. Δηλαδή υπάρχουν φυσικοί αριθμοί μ και ν τέτοιοι, ώστε α=μκ και β=νκ. Κάθε ζεύγος α και β έχει τουλάχιστον ένα κοινό διαιρέτη το 1. Κάθε κοινός διαιρέτης είναι μικρότερος ή ίσος με τους α και β.");
			pageContent.push("<b>Μέγιστος κοινός διαιρέτης</b> των αριθμών α και β είναι ο μεγαλύτερος κοινός διαιρέτης των α και β. Επειδή κάθε κοινός διαιρέτης είναι μικρότερος ή ίσος με τους α και β, αποδεικνύεται ότι υπάρχει μέγιστος διαιρέτης τους.");
			pageContent.push("");					
			pagePic.push("geometry.jpg");			
			
			break;
		case pgGeometryC:
			pageTitle = "1ος Τρόπος Εύρεσης ΜΚΔ ";
			pageContent.push("Έστω ότι ψάχνουμε τον ΜΚΔ(27,9).");
			pageContent.push("Οι διαιρέτες του 27 είναι: 1,3,9,27");
			pageContent.push("Οι διαιρέτες του 9 είναι: 1, 3, 9");
			pageContent.push("Ο μεγαλύτερος διαιρέτης κοινός και στις δύο λίστες είναι ο<b> 9</b> ");
			pageContent.push("Επομένως, ο μέγιστος κοινός διαιρέτης (GCD) των αριθμών 27 και 9 είναι ο 9 ");

			multChoice.push("ΜΚΔ (20,5)");
			multChoice.push("10");
			multChoice.push("5");
		
			pagePic.push("4.katigoriopoiisi.png");
			expectingUserInput = true;
			correctAnswer = 2;
			break;
		case pgGeometryD:
			pageTitle = "2ος Τρόπος Εύρεσης ΜΚΔ (Ανάλυση Δύο Αριθμών σε Γινόμενο Πρώτων Παραγόντων)";
			pageContent.push("ΒΗΜΑ 1: Βρες τους πρώτους παράγοντες του a");
			pageContent.push("ΒΗΜΑ 2: Βρες τους πρώτους παράγοντες του b");
			pageContent.push("ΒΗΜΑ 3: Βρες όλους τους κοινούς πρώτους παράγοντες");
			pageContent.push("ΒΗΜΑ 4: Υπολόγισε το γινόμενο 𝑝 όλων των κοινών πρώτων παραγόντων. ΜΚΔ = p");
			pageContent.push("");			
			pageContent.push("<b>Παραδείγματα:</b>.");
			pageContent.push("Έστω a=1035 και b=759");
			pageContent.push("&nbsp;&nbsp;-1035=32 * 5 * 23");
			pageContent.push("&nbsp;&nbsp;-759=3*11*23");
			pageContent.push("Μέγιστος κοινός διαιρέτης των 1035 και 759 είναι ο 3 * 23=69");
			pageContent.push("");
			pageContent.push("");
			pageContent.push("Έστω a=16 και b=24");
			pageContent.push("&nbsp;&nbsp;-16=2 *2 *2*2");
			pageContent.push("&nbsp;&nbsp;-24=2*2*2*3");
			pageContent.push("Παίρνουμε τα κοινά με τον μικρότερο εκθέτη άρα 2*2*2= 8");
			pageContent.push("");
			pageContent.push("");
			pageContent.push("Έστω a=45 και b=20");
			pageContent.push("&nbsp;&nbsp;-45=3*3*5");
			pageContent.push("&nbsp;&nbsp;-20=2*2*10");
			pageContent.push("Παίρνουμε τα κοινά με τον μικρότερο εκθέτη άρα το 5");
			pageContent.push("");
			pageContent.push("<b>Ο αλγόριθμος δεν είναι σαφής: χρειαζόμαστε ένα επιπλέον αλγόριθμο για να βρίσκουμε τους πρώτους παράγοντες(και άλλον ένα για να βρίσκουμε τους κοινούς πρώτους παράγοντες)</b> ");

			pagePic.push("geometry2.jpg");
			multChoice.push("ΜΚΔ (255,28)");
			multChoice.push("1");
			multChoice.push("5");
			multChoice.push("8");		
			expectingUserInput = true;
			correctAnswer = 1;
			
			break;
		case pgGeometryE:
			pageTitle = "3ος Τρόπος Εύρεσης ΜΚΔ (Αλγόριθμος Ευκλείδη)";
			pageContent.push("<b>Ο αλγόριθμος αυτός μπορεί να εκφραστεί και με κωδικοποιημένο τρόπο ως εξής:</b>");
			pageContent.push("");
			pageContent.push("Αλγόριθμος Ευκλείδης");
			pageContent.push("Διάβασε x, y");
			pageContent.push("z ← y");
			pageContent.push("Όσο z ≠ 0 επανάλαβε");
			pageContent.push("z ← x mod y");
			pageContent.push("x ← y");
			pageContent.push("y ← z");
			pageContent.push("Τέλος_επανάληψης");
			pageContent.push("Εμφάνισε x");
			pageContent.push("Τέλος Ευκλείδης");
			pageContent.push("");
			pageContent.push("Η εύρεση του ΜΚΔ είναι μια επαναληπτική διαδικασία που συνεχίζεται όσο το υπόλοιπο (mod) της διαίρεσης x διά του y είναι διάφορο του μηδενός.");
			pageContent.push("Η επαναληπτική διαδικασία έχει την έννοια «όσο ισχύει η συνθήκη (δηλαδή όσο z ≠ 0) επαναλάμβανε τη διαδικασία, αλλιώς μην εκτελείς άλλο τη διαδικασία και συνέχισε στο επόμενο βήμα».");
			pageContent.push("Οι εντολές του τύπου x ← y δεν έχουν την έννοια της ισότητας, αλλά της εκχώρησης τιμής του δεξιού μέλους στη μεταβλητή του αριστερού μέλους.");
			pageContent.push("Αυτό σημαίνει ότι μετά την εκτέλεση της εντολής η μεταβλητή του αριστερού μέλους θα έχει τιμή ίση με αυτή του δεξιού μέλους.");
			pageContent.push("");
			pageContent.push("");			
			pagePic.push("5.genikeysi.png");			
			break;

		case pgSafeDrivingA:
			pageTitle = "Εφαρμογή Αλγόριθμου Ευκλείδη";
			var codeBlock = '<div class="main">' +
				' <div class="head">' +
				' <h2> ΜΚΔ (Εύρεση Μέγιστου Κοινού Διαιρέτη) </h2>' +
				'</div>' +
				' <div style="text-align: center">'+
				' <input type="number" placeholder="Enter R1" id="r1" required> <br> <br>' +
				' <input type="number" placeholder="Enter R2" id="r2" required> <br> <br>' +
				'  <button class="btn" type="button" onclick="getInputValue();">Get Value</button>' +
				'  </div>' +
				'  <hr>' +
				' <div class="result">' +
				'   GCD = <span id="gcd" style="color: #ff0000"></span>' +
				' </div>'+
			'</div>';			
			pageContent.push(codeBlock);
			break;

		case pgSafeDrivingB:
			pageTitle = "Πηγές Μαθησιακού Αντικημένου";
			var codeBlock = '<a href="http://ebooks.edu.gr/ebooks/v/html/8547/2716/Pliroforiki_B-Lykeiou_html-empl/index2_2.html">Πληροφορική Β Λυκείου</a>';
			var codeBlock2 = '<a href="http://users.sch.gr/aistos/download/maths%20pdf/mkd.pdf">Τρόποι Υπολογισμού ΜΚΔ</a>';
			var codeBlock3 = '<a href="https://eclass.upatras.gr/modules/document/file.php/CULTURE158/ita-section-15.pdf">Πανεπιστήμιο Πατρών</a>';
			var codeBlock4 = '<a href="https://photodentro.edu.gr/v/item/ds/8521/10508">Φωτόδεντρο</a>';
			var codeBlock5 = '<a href="https://www.rajlama.com.np/blog/html-and-javascript-code-to-find-the-gcd-greatest-common-division-of-two-numbers">Javascript-HTML Code</a>';

			pageContent.push(codeBlock);
			pageContent.push(codeBlock2);
			pageContent.push(codeBlock3);
			pageContent.push(codeBlock4);
			pageContent.push(codeBlock5);
			break;
		
	}
}

function gcd(a, b) {
	var R;
	while ((a % b) > 0) {
		R = a % b;
		a = b;
		b = R;
	}
	return b;
}

function getInputValue() {
	var r1 = document.getElementById("r1").value;
	var r2 = document.getElementById("r2").value;
	console.log(r1);
	console.log(r2);
	document.getElementById("gcd").innerHTML = gcd(r1, r2);
}
function showHint() {
	var hint = "";
	clearHint();
	switch (currentPage) {		
		case pgGeometryC:
			switch (hintLevel) {
				case 0:
					hint = "Οι διαιρέτες του 20 είναι: 1,2,4,5,10. Οι διαιρέτες του 5 είναι: 1,5. Οπότε......? ";
					break;				
				default:
					hint = "Σωστό!";
					break;
			}
			/*document.getElementById("hint").innerHTML=hint;
			hintLevel++;*/
			break;
		case pgGeometryD:
			switch (hintLevel) {
				case 0:
					hint = "Δεν υπάρχουν κοινού διαιρέτες. Οπότε......? ";
					break;
				case 1:
					hint = "Δεν υπάρχουν κοινού διαιρέτες. Οπότε......? ";
					break;
				default:
					hint = "Σωστό!";
					break;
			}
			/*document.getElementById("hint").innerHTML=hint;
			hintLevel++;*/
			break;
		
		
		
	}
	currentHint = document.getElementById("hint").innerHTML = hint;
	hintLevel++;
}

function clearHint() {
	document.getElementById("hint").innerHTML = "";
}



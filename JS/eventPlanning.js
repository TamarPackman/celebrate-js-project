
// להצגת הספירה עד מספר המוצרים הקיימים ללקוח בעגלה
let numOfItems = localStorage.getItem('countBag');
let ifChange = sessionStorage.getItem('ifChange');
if (ifChange) {
    ifChange = parseInt(ifChange);
}
if (!numOfItems || !ifChange || ifChange === 0) {

    numOfItems = 0;
}

numOfItems = parseInt(numOfItems);
let currentNumber = 100; // התחל מהמספר הגבוה ביותר

function updateNumber() {
    if (currentNumber >= numOfItems) {
        document.querySelector(".number").innerHTML = currentNumber;
        currentNumber--; // הפחת את המספר
    } else {
        clearInterval(intervalId); // עצור את ה-setInterval כאשר המספרים מגיעים ל-6
    }
}

//עדכון המספר כל 0.50 שניות
let intervalId = setInterval(updateNumber, 15);




document.querySelectorAll('.navbar-item').forEach(item => {
    const originalSrc = item.querySelector('img').src;
    const hoverSrc = item.getAttribute('data-hover-img');

    document.querySelector("#logoutImg").onclick = () => {

        document.querySelector("#allBubbles").innerHTML = '';
        document.getElementById('timeOfDayContainer').style.display = "none";
        document.getElementById('currentDateContainer').style.display = "none";
        document.getElementById('calendarContainer').style.display = "none";
        document.querySelector("#profileText").style.display = 'none';
        document.getElementById('profile-picture').style.display = "none";


        sessionStorage.setItem('ifChange', JSON.stringify(0));
        document.querySelector("#guest").innerHTML = "שלום אורח";
        document.querySelector("#login").className = "elementor-button-login";
        document.querySelector("#login").innerHTML = "התחברות";
        document.querySelector("#profile-picture-input").style.display = 'none';
        document.querySelector("#default-icon").style.display = 'block';
        document.querySelector("#profileText").style.display = 'block';
        document.querySelector("#profileText").innerHTML = 'אין משתמש פעיל במערכת.';

        document.querySelector("#profileText").scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector("#profileText").scrollIntoView({
            behavior: 'smooth'
        });
        sessionStorage.setItem('ifChange', JSON.stringify(0));

        if (document.querySelector("#default-icon").style.display = 'block') {

            setTimeout(() => {
                window.scrollBy(0, -150);
            }, 500); // זמן המתנה ל-500ms לפני התזוזה הנוספת
        }
        else {
            setTimeout(() => {
                window.scrollBy(0, -150);
            }, 500); // זמן המתנה ל-500ms לפני התזוזה הנוספת
        }
        // document.querySelector("#login").onclick = () => {

        //     const savedImage = localStorage.getItem('profilePicture');
        //     const imgElement = document.getElementById('profile-image');
        //     imgElement.src = savedImage;
        //     imgElement.style.display = 'block';
        //     document.getElementById('default-icon').style.display = 'none';
        //     let temp = localStorage.getItem('connectionObject');
        //     temp = JSON.parse(temp);
        //     document.querySelector("#profileText").innerHTML = `${temp.userName} ${temp.famelyName}`;

        // }
        location.reload(true);

    }

    document.querySelector("#user").onclick = () => {
        document.querySelector("#allBubbles").innerHTML = '';
        document.getElementById('timeOfDayContainer').style.display = "none";
        document.getElementById('currentDateContainer').style.display = "none";
        document.getElementById('calendarContainer').style.display = "none";

        document.querySelector(".profile-container").style.display = 'block';
        document.getElementById('profile-picture').style.display = 'block';


        let temp1 = sessionStorage.getItem('ifChange');
        temp1 = JSON.parse(temp1);
        if (temp1 == 1) {

            let temp = localStorage.getItem('connectionObject');
            temp = JSON.parse(temp);
            document.querySelector("#profileText").innerHTML = `${temp.userName} ${temp.famelyName}`;
            document.querySelector("#profile-image").style.display = 'block';
            document.querySelector("#profileText").style.display = 'block';
            if (localStorage.getItem('profilePicture') == null) {
                document.querySelector("#default-icon").style.display = 'block';
                document.querySelector("#profile-image").style.display = 'none';
            }

        } else {

            document.querySelector("#profileText").style.display = 'block';
            document.querySelector("#profileText").innerHTML = 'אין משתמש פעיל במערכת.';
            document.querySelector("#profile-image").style.display = 'none';
            document.querySelector("#default-icon").style.display = 'block';

        }

        // גלילה חלקה אל תמונת הפרופיל
        document.querySelector("#profile-section").scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector("#profile-section").scrollIntoView({
            behavior: 'smooth'
        });

        // תזוזה קטנה של הדף כדי להקטין את הגלילה לאחר סיום הגלילה החלקה
        setTimeout(() => {
            window.scrollBy(0, -100);
        }, 500); // זמן המתנה ל-500ms לפני התזוזה הנוספת


    }

    document.querySelector("#orders").onclick = () => {

        if (!sessionStorage.getItem('ifChange') || sessionStorage.getItem('ifChange') == 0) {
            document.querySelector('#login').classList.add('blink-link2');
            return;
        }

        window.location.href = `/HTML/cart.html`;


    }
    document.querySelector("#centeralBoard").onclick = () => {
        window.location.href = "/HTML/Index.html";

    }

    document.querySelector("#timeToday").onclick = () => {
        document.querySelector("#allBubbles").innerHTML = '';
        function displayTimeOfDay() {
            document.querySelector("#profileText").style.display = 'none';
            document.getElementById('profile-picture').style.display = "none";
            const timeOfDayContainer = document.getElementById('timeOfDayContainer');
            const currentDateContainer = document.getElementById('currentDateContainer');
            document.getElementById('timeOfDayContainer').style.display = "block";
            document.getElementById('currentDateContainer').style.display = "block";
            document.getElementById('calendarContainer').style.display = "block";
            const calendarContainer = document.getElementById('calendarContainer');

            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const day = now.getDate();
            const month = now.getMonth() + 1; // Months are 0-indexed
            const year = now.getFullYear();

            let timeOfDay = '';
            let icon = '';
            let specialMessage = '';

            if (hours >= 5 && hours < 12) {
                timeOfDay = 'בוקר טוב';
                icon = '☀️'; // Morning sun emoji
                specialMessage = 'התחלת יום נהדר!';
            } else if (hours >= 12 && hours < 17) {
                timeOfDay = 'צהריים טובים';
                icon = '🌤️'; // Afternoon sun emoji
                specialMessage = 'זמן לארוחת צהריים!';
            } else if (hours >= 17 && hours < 20) {
                timeOfDay = 'ערב טוב';
                icon = '🌅'; // Evening sunset emoji
                specialMessage = 'סיום יום מוצלח!';
            } else {
                timeOfDay = 'לילה טוב';
                icon = '🌙'; // Night moon emoji
                specialMessage = 'לילה רגוע ושקט!';
            }

            // Display the time of day
            timeOfDayContainer.innerHTML = `<span class="time-icon">${icon}</span>${timeOfDay}<br><span>${specialMessage}</span>`;

            // Display the current time and date
            currentDateContainer.innerHTML = `השעה כעת: ${hours}:${minutes}<br>התאריך היום: ${day}/${month}/${year}`;

            // Display the calendar
            const daysInMonth = new Date(year, month, 0).getDate();
            let calendarHTML = '<div class="calendar-row">';
            for (let i = 1; i <= daysInMonth; i++) {
                const isToday = i === day ? 'today' : '';
                calendarHTML += `<div class="calendar-cell ${isToday}">${i}</div>`;
                if (i % 7 === 0) calendarHTML += '</div><div class="calendar-row">';
            }
            calendarHTML += '</div>';
            calendarContainer.innerHTML = calendarHTML;
        };

        // Call the function to display the time of day, current date, and calendar
        displayTimeOfDay();

        document.querySelector("#timeOfDayContainer").scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector("#timeOfDayContainer").scrollIntoView({
            behavior: 'smooth'
        });

        // תזוזה קטנה של הדף כדי להקטין את הגלילה לאחר סיום הגלילה החלקה
        setTimeout(() => {
            window.scrollBy(0, -160);
        }, 500); // זמן המתנה ל-500ms לפני התזוזה הנוספת
    }
});




document.getElementById('profile-picture-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.getElementById('profile-image');
            imgElement.src = e.target.result;
            imgElement.style.display = 'block';
            document.getElementById('default-icon').style.display = 'none';

            // שמירת התמונה ב-Local Storage
            localStorage.setItem('profilePicture', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});


window.addEventListener('DOMContentLoaded', (event) => {
    const savedImage = localStorage.getItem('profilePicture');
    let flag = sessionStorage.getItem('ifChange');
    if (savedImage && flag == 1) {
        const imgElement = document.getElementById('profile-image');
        imgElement.src = savedImage;
        if (sessionStorage.getItem('ifChange') == 1) {
            imgElement.style.display = 'block';
            document.getElementById('default-icon').style.display = 'none';
        }
        else {
            document.getElementById('default-icon').style.display = 'block';
        }

    }
    else {

    }
});

document.querySelector('#allReference').onclick = () => {
    document.querySelector("#profileText").style.display = 'none';
    document.getElementById('profile-picture').style.display = "none";
    document.getElementById('timeOfDayContainer').style.display = "none";
    document.getElementById('currentDateContainer').style.display = "none";
    document.getElementById('calendarContainer').style.display = "none";



    let bubbleForRefernce = localStorage.getItem('bubbleArray');

    if (bubbleForRefernce) {
        bubbleForRefernce = JSON.parse(bubbleForRefernce);

        bubbleForRefernce.forEach((element) => {
            let star1 = document.createElement('i');
            star1.className = 'fa fa-star';
            let star2 = document.createElement('i');
            star2.className = 'fa fa-star';
            let star3 = document.createElement('i');
            star3.className = 'fa fa-star';
            let star4 = document.createElement('i');
            star4.className = 'fa fa-star';
            let star5 = document.createElement('i');
            star5.className = 'fa fa-star';
            let bubble = document.createElement('div');

            let imageBubble = document.createElement('img');
            imageBubble.src = '/generalPictures/בועה.png';

            let stars = document.createElement('div');
            stars.className = 'stars';
            bubble.appendChild(imageBubble);

            stars.appendChild(star1);
            stars.appendChild(star2);
            stars.appendChild(star3);
            stars.appendChild(star4);
            stars.appendChild(star5);
            bubble.append(stars);


            let value = element.text;
            let p = document.createElement('p');
            bubble.className = "bubble";

            p.innerHTML = value;
            bubble.appendChild(p);

            document.querySelector("#allBubbles").append(bubble);
            for (i = 4; i >= 5 - element.numOfStar; i--) {

                stars.children[i].classList.add("adition");

            }
        }


        );
    }
}


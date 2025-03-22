if (document.querySelector('footer')) {
    document.querySelectorAll('#footerMenu a')[0].onclick = () => {
        let free = '';
        location.href = `/HTML/globalProducts.html?freeType=${free}&catagory=eventVenue`;
    }
    document.querySelectorAll('#footerMenu a')[1].onclick = () => {
        let free = '';
        location.href = `/HTML/globalProducts.html?freeType=${free}&catagory=CareAndBeauty`;
    }
    document.querySelectorAll('#footerMenu a')[2].onclick = () => {
        let free = '';
        location.href = `/HTML/globalProducts.html?freeType=${free}&catagory=music`;
    }
    document.querySelectorAll('#footerMenu a')[3].onclick = () => {
        let free = '';
        location.href = `/HTML/globalProducts.html?freeType=${free}&catagory=photo`;
    }
    document.querySelectorAll('#footerMenu a')[4].onclick = () => {
        let free = '';
        location.href = `/HTML/globalProducts.html?freeType=${free}&catagory=CatringAndBar`;
    }

}






function scrollToPercentage(percentage) {
    // Calculate the target scroll position based on the percentage
    const targetPosition = document.documentElement.scrollHeight * (percentage / 100);

    // Smoothly scroll to the calculated position
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}



if (document.getElementById("search")) {
    document.getElementById("search").addEventListener("click", function () {
        scrollToPercentage(12);
    });

}

//פונקציה לעדכון כפתור בראש העמוד אם המשתמש מחובר

let flag = sessionStorage.getItem('ifChange');

if (parseInt(JSON.parse(flag))) {

    document.querySelector(".elementor-button-login").innerHTML = "תכנון אירוע";
    document.querySelector(".elementor-button-login").className = "elmemtpurple-button";

    let getFromLocal = localStorage.getItem("connectionObject");
    getFromLocal = JSON.parse(getFromLocal);
    let siteUserName = getFromLocal.userName;
    let helloUser = `${siteUserName}, Hello`;
    document.querySelector("#guest").innerHTML = helloUser;
    document.querySelectorAll('#myModal')[0].style.display = "none";
}



// פונקציה לבדיקה אם המשתמש מחובר
const form = document.querySelector('form');
form.onsubmit = (e) => {

    e.preventDefault();
    let getFromLocal = localStorage.getItem("connectionObject");
    if (getFromLocal != null)
        getFromLocal = JSON.parse(getFromLocal).userName;
    let siteUserName = e.target['siteUserName'].value;
    if (getFromLocal == null || siteUserName != getFromLocal) {
        document.querySelector("#clickToLogIn").classList.add('blink-link');
    } else {
        document.querySelector(".elementor-button-login").innerHTML = "תכנון אירוע";
        document.querySelector(".elementor-button-login").className = "elmemtpurple-button";
        let helloUser = `${siteUserName}, Hello`;
        document.querySelector("#guest").innerHTML = helloUser;
        document.querySelectorAll('#myModal')[0].style.display = "none";
        sessionStorage.setItem('ifChange', JSON.stringify(1));
        if (document.querySelector('#allBag')) {
            location.reload(true);
        }
        if (document.querySelector(".navbar-item")) {

            location.reload();
            //     let x=localStorage.getItem('countBag');
            //     x=parseInt(x);
            //    document.querySelector(".number").innerHTML=x;
        }
    }


}


let modal = document.getElementById("myModal");
let btn = document.querySelector("#login");
let span = document.getElementsByClassName("close")[0];
let modal1 = document.querySelectorAll("#myModal")[1];
let span1 = document.querySelectorAll(".close")[1];


//פונקציה להצגת הטופס
btn.onclick = function () {
    if (sessionStorage.getItem('ifChange') == 1) {
        location.href = '/HTML/eventPlanning.html';
        modal.onsubmit = () => {


        }
    }

    else {
        modal.style.display = "block";
        modal.style.zIndex = "9999999";
        modal.style.marginTop = "-2%";

    }
    //פונקציה להסתרת הטופס
    span.onclick = function () {
        modal.style.display = "none";
    }

    //פונקציה להסתרת הטופס בלחיצה על המסך
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}



//פונקציה לפתיחת טופס הרשמה והסתרת טופס התחברות
document.querySelector("#clickToLogIn").onclick = (e) => {
    modal.style.display = "none";
    modal1.style.display = "block";
    modal1.style.marginTop = "-0.4%";
    let modal3 = document.querySelectorAll("#myModal")[3];
    if (modal3)
        modal3.style.display = "none";

    span1.onclick = function () {

        modal1.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }

    


}


//פונקציה לעדכון פרטי המשתמש הנרשם
document.querySelectorAll('form')[1].onsubmit = (e) => {
    localStorage.removeItem('countBag');
    localStorage.removeItem('currentBag')
    e.preventDefault();
    const connectionObject = {
        email: e.target['email'].value,
        password: e.target['password'].value,
        passwordVerification: e.target['passwordVerification'].value,
        userName: e.target['name'].value,
        famelyName: e.target['familyName'].value,
        phoneNumber: e.target['phoneNum'].value,
        city: e.target['city'].value
    };

    localStorage.setItem('connectionObject', JSON.stringify(connectionObject));
    document.querySelectorAll('#myModal')[1].style.display = "none";
    document.querySelector(".elementor-button-login").innerHTML = "תכנון אירוע";
    document.querySelector(".elementor-button-login").className = "elmemtpurple-button";
    let helloUser = localStorage.getItem('connectionObject');
    helloUser = (JSON.parse(helloUser)).userName;
    helloUser = `${helloUser}, Hello`;
    document.querySelector("#guest").innerHTML = helloUser;
    sessionStorage.setItem('ifChange', JSON.stringify(1));
    if (document.querySelector('#allBag')) {
        location.reload(true);
    }


    let dateArr = [{ code: 1, date: '2024-08-23' }, { code: 2, date: '2024-08-13' }, { code: 7, date: '2024-08-13' }, { code: 8, date: '2024-08-23' }, { code: 18, date: '2024-08-13' }, { code: 13, date: '2024-08-13' }, { code: 19, date: '2024-08-23' }, { code: 23, date: '2024-08-13' }, { code: 26, date: '2024-08-13' }, { code: 28, date: '2024-08-23' }, { code: 29, date: '2024-08-13' },
    { code: 30, date: '2024-08-13' },
    { code: 33, date: '2024-08-23' }, { code: 43, date: '2024-08-13' }, { code: 53, date: '2024-08-13' },
    { code: 23, date: '2024-08-20' }, { code: 12, date: '2024-08-10' }, { code: 19, date: '2024-08-10' },
    { code: 3, date: '2024-08-20' }, { code: 3, date: '2024-08-10' }, { code: 3, date: '2024-08-10' },
    { code: 16, date: '2024-08-20' }, { code: 28, date: '2024-08-10' }, { code: 27, date: '2024-08-10' },
    { code: 33, date: '2024-08-23' }, { code: 43, date: '2024-08-13' }, { code: 53, date: '2024-08-13' },
    { code: 23, date: '2024-08-20' }, { code: 12, date: '2024-08-10' }, { code: 19, date: '2024-08-10' },
    { code: 3, date: '2024-08-20' }, { code: 3, date: '2024-08-10' }, { code: 3, date: '2024-08-14' },
    { code: 16, date: '2024-08-12' }, { code: 28, date: '2024-08-17' }, { code: 27, date: '2024-08-22' },
    { code: 3, date: '2024-08-13' }, { code: 1, date: '2024-08-13' }, { code: 2, date: '2024-08-13' },
    { code: 8, date: '2024-08-13' }, { code: 13, date: '2024-08-13' },
    { code: 3, date: '2024-08-15' }, { code: 1, date: '2024-08-15' }, { code: 2, date: '2024-08-15' },
    { code: 40, date: '2024-08-15' }, { code: 5, date: '2024-08-15' },
    { code: 8, date: '2024-08-13' }, { code: 32, date: '2024-08-13' },
    { code: 9, date: '2024-08-16' }, { code: 11, date: '2024-08-17' }, { code: 9, date: '2024-08-17' },
    { code: 6, date: '2024-08-19' }, { code: 13, date: '2024-08-17' }
    ];
    localStorage.setItem('dateArr', JSON.stringify(dateArr));
};




//פונקציה לעדכון המשתנה בכתובת העמוד שלפיו יוצגו המוצרים המתבקשים
document.querySelectorAll('.submenu')[1].children[0].onclick = () => {
    document.querySelectorAll('.submenu')[1].children[0].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[1].children[0].innerHTML}&catagory=eventVenue`;

}
document.querySelectorAll('.submenu')[1].children[1].onclick = () => {
    document.querySelectorAll('.submenu')[1].children[1].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[1].children[1].innerHTML}&catagory=eventVenue`;
}
document.querySelectorAll('.submenu')[2].children[0].onclick = () => {
    document.querySelectorAll('.submenu')[2].children[0].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[2].children[0].innerHTML}&catagory=CareAndBeauty`;
}
document.querySelectorAll('.submenu')[2].children[1].onclick = () => {
    document.querySelectorAll('.submenu')[2].children[1].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[2].children[1].innerHTML}&catagory=CareAndBeauty`;
}
document.querySelectorAll('.submenu')[2].children[2].onclick = () => {
    document.querySelectorAll('.submenu')[2].children[2].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[2].children[2].innerHTML}&catagory=CareAndBeauty`;
}
document.querySelectorAll('.submenu')[2].children[3].onclick = () => {
    document.querySelectorAll('.submenu')[2].children[3].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[2].children[3].innerHTML}&catagory=CareAndBeauty`;
}
document.querySelectorAll('.submenu')[2].children[4].onclick = () => {
    document.querySelectorAll('.submenu')[2].children[4].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[2].children[4].innerHTML}&catagory=CareAndBeauty`;
}
document.querySelectorAll('.submenu')[3].children[0].onclick = () => {
    document.querySelectorAll('.submenu')[3].children[0].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[3].children[0].innerHTML}&catagory=music`;
}
document.querySelectorAll('.submenu')[3].children[1].onclick = () => {
    document.querySelectorAll('.submenu')[3].children[1].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[3].children[1].innerHTML}&catagory=music`;
}
document.querySelectorAll('.submenu')[3].children[2].onclick = () => {
    document.querySelectorAll('.submenu')[3].children[2].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[3].children[2].innerHTML}&catagory=music`;
}
document.querySelectorAll('.submenu')[4].children[0].onclick = () => {
    document.querySelectorAll('.submenu')[4].children[0].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[4].children[0].innerHTML}&catagory=photo`;
}
document.querySelectorAll('.submenu')[4].children[1].onclick = () => {
    document.querySelectorAll('.submenu')[4].children[1].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[4].children[1].innerHTML}&catagory=photo`;
}
document.querySelectorAll('.submenu')[5].children[0].onclick = () => {
    document.querySelectorAll('.submenu')[5].children[0].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[5].children[0].innerHTML}&catagory=CatringAndBar`;
}
document.querySelectorAll('.submenu')[5].children[1].onclick = () => {
    document.querySelectorAll('.submenu')[5].children[1].href = `/HTML/globalProducts.html?HallName=${document.querySelectorAll('.submenu')[5].children[1].innerHTML}&catagory=CatringAndBar`;
}


//להוסיף


//פונקציה להפעלת החיפוש לפי צורת החיפוש המתבקש
if (document.querySelector(".search-button")) {

    document.querySelector(".search-button").onclick = (e) => {
        let free = document.querySelector("#free").value;
        let service = document.querySelector("#service").value;

        if (service != "תחום שירות") {

            if (service === "מקום אירוע") {
                document.querySelector("#searchButton").href = `/HTML/globalProducts.html?freeType=${free}&catagory=eventVenue`;
            }
            if (service === "טיפוח ויופי") {
                document.querySelector("#searchButton").href = `/HTML/globalProducts.html?freeType=${free}&catagory=CareAndBeauty`;
            }
            if (service === "מוזיקה") {
                document.querySelector("#searchButton").href = `/HTML/globalProducts.html?freeType=${free}&catagory=music`;
            }
            if (service === "צילום") {
                document.querySelector("#searchButton").href = `/HTML/globalProducts.html?freeType=${free}&catagory=photo`;
            }
            if (service === "קיטרינג ובר") {
                document.querySelector("#searchButton").href = `/HTML/globalProducts.html?freeType=${free}&catagory=CatringAndBar`;
            }

        }

        else {
            if (free === '') {
                let catagory = '';
                let freeType = '';
                location.href = `/HTML/globalProducts.html?catagory=${catagory}&freeType=${freeType}`
            }



            tempDB = {
                products: [],
                jsonArray: ["/Data/eventVenue.json", "/Data/CareAndBeauty.json", "/Data/music.json", "/Data/photo.json", "/Data/CatringAndBar.json"],
                htmlArray: ["eventVenue", "CareAndBeauty", "music", "photo", "CatringAndBar"]
            }

            let res = 0;
            for (let i = 0; i < 5 && !res; i++) {
                $.ajax({
                    url: tempDB.jsonArray[i],
                    success: (data) => {
                        const { products } = data;
                        tempDB.products = products;
                        res = isInclude(free, tempDB.htmlArray[i]);
                    }
                })
            }
        }

    }
}



//פונקציה לשימוש פונקצית החיפוש הראשית המסננת את המוצרים הנדרשים
const isInclude = (free, link) => {

    if (tempDB.products[0].catagory.includes(free)) {
        free = '';
        document.querySelector("#searchButton").href = `/HTML/globalProducts.html?catagory=${link}&freeType=${free}`;
        return 1;
    }
    //להוסיף
    else {
        tempDB.products.some((element) => {
            if (element.subCatagory.includes(free) || element.name.includes(free)) {
                document.querySelector("#searchButton").href = `/HTML/globalProducts.html?catagory=${link}&freeType=${free}`;
                return 1;
            }
        });
        return 0;

    }
}


//פונקציה להפנייה לעמוד סל הקניות
document.querySelector("#bag").onclick = () => {

    if (!sessionStorage.getItem('ifChange') || sessionStorage.getItem('ifChange') == 0) {
        document.querySelector('#login').classList.add('blink-link2');
        return;
    }

    location.href = `/HTML/cart.html`;

}




// קוד JavaScript לניהול תצוגת הניווט
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});



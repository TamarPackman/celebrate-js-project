
const searchParams = new URLSearchParams(location.search);
let codeToSearch = parseInt(searchParams.get('Code'));
let catagoryProduct = searchParams.get('catagory');

const DB = {

    products: []
};

if (catagoryProduct === 'מקום ארוע')
    catagoryProduct = 'eventVenue';
if (catagoryProduct === 'טיפוח ויופי')
    catagoryProduct = 'CareAndBeauty';
if (catagoryProduct === 'מוזיקה')
    catagoryProduct = 'music';
if (catagoryProduct === 'צילום')
    catagoryProduct = 'photo';
if (catagoryProduct === 'קייטרינג ובר')
    catagoryProduct = 'CatringAndBar';


$.ajax({

    url: `/Data/${catagoryProduct}.json`,
    success: (data) => {
        const { products } = data;
        DB.products = products;
        setProducts();
    }
});

let tmp = '';
let name = '', phone = '', address = '', profil = '', text = '', heart = '', backgroundPicture = '', subCatagory = '', image = '';
const setProducts = () => {
    for (let i = 0; i < DB.products.length; i++) {

        if (DB.products[i].code === codeToSearch) {
            tmp = DB.products[i].name;
            Name = DB.products[i].name;
            phone = DB.products[i].phone;
            address = DB.products[i].address;
            profil = DB.products[i].profil;
            text = DB.products[i].text;
            heart = DB.products[i].heart;
            backgroundPicture = DB.products[i].backgroundPicture;
            subCatagory = DB.products[i].subCatagory
            image = [...DB.products[i].image]

            document.querySelector("#businessName").innerHTML = Name;
            document.querySelector("#headerGlobalImg").src = profil;

            document.querySelector("#globalText").innerHTML = text;
            document.querySelector('#headerGlobal').style.backgroundImage = `url("${backgroundPicture}")`;

            document.querySelector("#backgroundImg").src = backgroundPicture;


        }
    }

}

document.querySelector("#adress").onclick = (e) => {

    document.querySelector("#adress").innerHTML = address;
    document.querySelector("#adress").style.color = "white";
    document.querySelector("#adress").classList.add("important-background");
    document.querySelector("#phone").classList.add("important-background");

}


document.querySelector("#phone").onclick = (e) => {

    document.querySelector("#phone").innerHTML = phone;
    document.querySelector("#phone").style.color = "white";
    document.querySelector("#adress").style.right = "16%";
    document.querySelector("#adress").classList.add("important-background");
    document.querySelector("#phone").classList.add("important-background");

}
let modal2 = document.querySelectorAll("#myModal")[2];
document.querySelector("#turn").onclick = () => {

    if (!sessionStorage.getItem('ifChange')) {
        document.querySelector('#login').classList.add('blink-link2');
        return;
    }
    let nameForTurn = localStorage.getItem('connectionObject');
    nameForTurn = JSON.parse(nameForTurn);
    document.querySelector("#nameForTurn").value = nameForTurn.userName;
    document.querySelector("#familyForTurn").value = nameForTurn.famelyName;
    document.querySelector("#phoneForTurn").value = nameForTurn.phoneNumber;
    document.querySelector("#cityForTurn").value = nameForTurn.city;

    modal2.style.display = "block";
    let span2 = document.querySelectorAll(".close")[2];


    span2.onclick = function () {
        modal2.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }


}



let span3 = document.querySelectorAll(".close")[3];
let modal3 = document.querySelectorAll("#myModal")[3];

document.querySelector("#reference").onclick = () => {


    let modal6 = document.getElementById("myModal");
    if (sessionStorage.getItem('ifChange')) {
        let localInputName = localStorage.getItem('connectionObject');
        localInputName = JSON.parse(localInputName);
        document.querySelector("#inputName").value = localInputName.userName;
        document.querySelector("#inputFamilyName").value = localInputName.famelyName;

    }

    modal3.style.display = "block";
    span3.onclick = function () {
        modal3.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }


}

let bubbleArray = [];

const showBubble = () => {
    bubbleArray = localStorage.getItem('bubbleArray');
    if (!bubbleArray) {
        bubbleArray = [];
    }
    else {

        bubbleArray = JSON.parse(bubbleArray);
        bubbleArray.forEach((element) => {
            if (element.code === codeToSearch) {
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


        });
    }
}

showBubble();


let selectedValue;
document.querySelectorAll('form')[3].onsubmit = (e) => {

    e.preventDefault();
    if (!sessionStorage.getItem('ifChange')) {
        document.querySelector('#login').classList.add('blink-link2');
        return;
    }

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


    let value = document.querySelector('#textArea').value;
    let p = document.createElement('p');
    bubble.className = "bubble";

    p.innerHTML = value;
    bubble.appendChild(p);

    document.querySelector("#allBubbles").append(bubble);

    modal7 = document.querySelectorAll("#myModal")[3];
    modal7.style.display = "none";

    document.querySelectorAll("input[name=rating]").forEach((Element) => {
        if (Element.checked) {
            selectedValue = Element.value;
        }


    });

    for (i = 4; i >= 5 - selectedValue; i--) {

        stars.children[i].classList.add("adition");

    }

    const newObj = {
        text: value,
        numOfStar: selectedValue,
        code: codeToSearch
    };

    bubbleArray.push(newObj);
    localStorage.setItem('bubbleArray', JSON.stringify(bubbleArray));
    let span3 = document.querySelectorAll(".close")[3];
    span3.onclick = function () {
        modal3.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }


}

let localArr = localStorage.getItem('currentBag');
localArr = JSON.parse(localArr);


if (localArr != null && sessionStorage.getItem('ifChange') != null) {
    let res = localArr.find((heart) => codeToSearch === heart.code);
    if (res) {

        const loveIcon = document.getElementById('love-icon');
        loveIcon.classList.toggle('loved');
    }

}


function showWishlistPrompt() {
    let prompt = document.getElementById('wishlist-prompt');
    prompt.style.display = 'flex';

    setTimeout(function () {
        prompt.style.display = 'none';
    }, 4000); // לאחר 4 שניות הפרומפט יוסתר
}



function toggleLove() {
    if (!sessionStorage.getItem('ifChange') || sessionStorage.getItem('ifChange') == 0) {
        document.querySelector('#login').classList.add('blink-link2');
        return;
    }
    if (!document.querySelector('.loved')) {

        const loveIcon = document.getElementById('love-icon');
        loveIcon.classList.toggle('loved');

        const currentItem = {
            code: codeToSearch,
            catagory: catagoryProduct,
            subCatagory,
            name: tmp,
            image: [...image],
            phone,
            address,
            profil,
            text,
            heart,
            backgroundPicture
        };

        // לדוגמה, לקרוא לפונקציה כשמוצר מתווסף לעגלת המשאלות
        showWishlistPrompt();
        localArr.push(currentItem);
        localStorage.setItem('currentBag', JSON.stringify(localArr));
        let countBag = localStorage.getItem('countBag');
        countBag = JSON.parse(countBag);
        countBag++;
        localStorage.setItem('countBag', JSON.stringify(countBag));

    }

}

function shareContent() {
    const shareIcon = document.getElementById('share-icon');
    shareIcon.classList.add('rotating');

    setTimeout(() => {
        shareIcon.classList.remove('rotating');

        if (navigator.share) {
            navigator.share({
                title: 'שתפו אותי',
                text: 'בדקו את התוכן הזה!',
                url: window.location.href
            }).then(() => {
                console.log('תוכן שותף בהצלחה!');
            }).catch((error) => {
                console.error('שגיאה בשיתוף התוכן:', error);
            });
        } else {
            alert('שיתוף לא נתמך בדפדפן זה');
        }
    }, 500);
}



document.querySelectorAll("#myModal")[2].onsubmit = (e) => {

    e.preventDefault();

    let date = document.querySelector("#dateForTurn").value;

    let getDateArr = localStorage.getItem('dateArr');
    getDateArr = JSON.parse(getDateArr);
    let isAvalable = 0;

    getDateArr.forEach((e) => {

        if (date === e.date && codeToSearch === e.code) {
            openPopupNotValid();
            isAvalable = 1;
            return;
        }
    });

    if (!isAvalable) {
        openPopupYay();

        let dateObject = {
            code: codeToSearch,
            date: date
        };
        getDateArr.push(dateObject);
        localStorage.setItem('dateArr', JSON.stringify(getDateArr));



        let getbag = localStorage.getItem('currentBag');
        getbag = JSON.parse(getbag);
        getbag = getbag.filter(e => e.code != codeToSearch);
        localStorage.setItem('currentBag', JSON.stringify(getbag));
        let count = localStorage.getItem('countBag');
        count = JSON.parse(count);
        count--;
        localStorage.setItem('countBag', JSON.stringify(count));


    }
    document.querySelectorAll("#myModal")[2].style.display = "none";
}




function openPopupYay() {

    document.getElementById('popup').style.display = 'flex';

}

function closePopupYay() {
    document.getElementById('popup').style.display = 'none';
    openPopupMessage();
}




//פרומפט התור תפוס
function openPopupNotValid() {
    document.getElementById('popup-error').style.display = 'flex';
}

function closePopupNotValid() {
    document.getElementById('popup-error').style.display = 'none';
}


//פרומפט הודעת מערכת
function openPopupMessage() {
    document.getElementById('popup-success').style.display = 'flex';
}

function closePopupMessage() {
    document.getElementById('popup-success').style.display = 'none';
}


// if (!sessionStorage.getItem('ifChange')) {
//     document.querySelector('#login').classList.add('blink-link2');
//     return;
// }

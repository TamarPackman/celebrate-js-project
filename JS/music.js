document.getElementById('profile-picture-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.getElementById('profile-image');
            imgElement.src = e.target.result;
            imgElement.style.display = 'block';
            document.getElementById('default-icon').style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
});


function toggleLove() {
    const loveIcon = document.getElementById('love-icon');
    loveIcon.classList.toggle('loved');
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
    }, 500); // הזמן להתאמת הסיבוב לאנימציה ב-CSS
}


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text h2');
    const text = textElement.innerText;
    textElement.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

    const spans = textElement.querySelectorAll('span');
    const offset = window.innerHeight / 1.5; // שים את זה לפי הצורך

    function animateText() {
        const scrollPosition = window.scrollY + window.innerHeight;
        spans.forEach((span, index) => {
            const spanPosition = span.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition > spanPosition) {
                span.style.animation = `fadeIn 0.5s ${index * 0.1}s forwards`;
            }
        });
    }

    window.addEventListener('scroll', animateText);
    animateText(); // כדי להפעיל את האנימציה גם אם הטקסט כבר נמצא בגובה נכון
});

document.addEventListener('DOMContentLoaded', () => {
    const emptyCartButton = document.querySelector('#emptyCartButton');

    if (emptyCartButton) {
        emptyCartButton.addEventListener('click', () => {
            if (confirm('האם אתה בטוח שברצונך לרוקן את הסל?')) {
                localStorage.removeItem('currentBag');
                cart = [];
                document.querySelector("#cart").innerHTML = '<h2 class="animated-word">Wish List</h2>';
                document.querySelector("#textCountBag").innerHTML = 'אין מוצרים בעגלה';

                // הצגת חלון מעוצב לאחר ריקון הסל
                showEmptyCartPopup();
            }
        });
    }

    setProducts();
});

document.addEventListener('DOMContentLoaded', () => {
    const emptyCartButton = document.querySelector('#emptyCartButton');

    if (emptyCartButton) {
        emptyCartButton.addEventListener('click', () => {
            if (confirm('האם אתה בטוח שברצונך לרוקן את הסל?')) {
                localStorage.removeItem('currentBag');
                cart = [];
                document.querySelector("#cart").innerHTML = '<h2 class="animated-word">Wish List</h2>';
                document.querySelector("#textCountBag").innerHTML = 'אין מוצרים בעגלה';

                // הצגת חלון מעוצב לאחר ריקון הסל
                showEmptyCartPopup();
            }
        });
    }

    setProducts();
});



function showEmptyCartPopup() {
    // יצירת אלמנט הפופאפ
    const popup = document.createElement('div');
    popup.className = 'empty-cart-popup';

    // תוכן הפופאפ
    

    // הוספת הפופאפ לגוף הדף
    document.body.appendChild(popup);

    // הסרת הפופאפ לאחר 3 שניות
    setTimeout(() => {
        popup.remove();
    }, 3000);
}


// showEmptyCartPopup();



function openPopup() {
    document.getElementById('popup-success').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-success').style.display = 'none';
}

openPopup();
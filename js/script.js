
AOS.init(); // هذا السطر ضروري جداً لتشغيل المكتبة


// home page
const name = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const btnSend = document.getElementById("btn-send");
const form = document.getElementById("send-form");
const btnList = document.querySelector(".btn-list");
const ul = document.querySelector(".ul-hidden");

btnList.onclick = () => {
    if (ul.classList.contains("ul-hidden")) {
        ul.classList.remove("ul-hidden");
        ul.classList.add("visible");
        ul.style.right = "-100px";
    }
    else if (ul.classList.contains("visible")) {
        ul.classList.remove("visible");
        ul.classList.add("ul-hidden");
        ul.style.right = "-300px";
    }
};

if (form != null) {
    form.onsubmit = (e) => {
        if (name.value.length == 0) {
            name.style.border = "1px solid red";
            e.preventDefault();
        }

        if (email.value.length == 0) {
            email.style.border = "1px solid red";
            e.preventDefault();
        }

        if (textarea.value.length == 0) {
            textarea.style.border = "1px solid red";
            e.preventDefault();
        }

    }

    name.onkeyup = () => {
        if (name.value.length == 0) {
            name.style.border = "1px solid red";
        } else {
            name.style.border = "1px solid #878585";
        }
    }

    email.onkeyup = () => {
        if (email.value.length == 0) {
            email.style.border = "1px solid red";
        } else {
            email.style.border = "1px solid #878585";
        }

    }


    textarea.onkeyup = () => {
        if (textarea.value.length == 0) {
            textarea.style.border = "1px solid red";
        } else {
            textarea.style.border = "1px solid #878585";
        }

    }
}


// order page

// filter var
let whiteBtn = document.getElementById("white");
let pinkBtn = document.getElementById("pink");
let redBtn = document.getElementById("red");
let allBtn = document.getElementById("all");

let white = document.querySelectorAll(".white-card");
let pink = document.querySelectorAll(".pink-card");
let red = document.querySelectorAll(".red-card");

// filter start
if (pinkBtn && redBtn && whiteBtn && allBtn) {
    pinkBtn.onclick = () => {
        pink.forEach((item) => {
            item.classList.remove("hidden");
        });
        white.forEach((item) => {
            item.classList.add("hidden");
        });
        red.forEach((item) => {
            item.classList.add("hidden");
        });
    }

    whiteBtn.onclick = () => {
        pink.forEach((item) => {
            item.classList.add("hidden");
        });
        white.forEach((item) => {
            item.classList.remove("hidden");
        });
        red.forEach((item) => {
            item.classList.add("hidden");
        });
    }

    redBtn.onclick = () => {
        pink.forEach((item) => {
            item.classList.add("hidden");
        });
        white.forEach((item) => {
            item.classList.add("hidden");
        });
        red.forEach((item) => {
            item.classList.remove("hidden");
        });

    }
    allBtn.onclick = () => {
        pink.forEach((item) => {
            item.classList.remove("hidden");
        });
        white.forEach((item) => {
            item.classList.remove("hidden");
        });
        red.forEach((item) => {
            item.classList.remove("hidden");
        });
    }
}
// filter end


// cart code
let counter = document.querySelectorAll(".counter");
let count = 0;
let span = document.querySelector(".count");
if (span) {
    count = localStorage.getItem("cartCount") || 0;
    span.innerHTML = count;
}
counter.forEach((e) => {
    e.onclick = () => {
        span.innerHTML = ++count;
        localStorage.setItem("cartCount", count);

        let card = e.closest(".card");

        let item = {
            name: card.dataset.name,
            price: card.dataset.price,
            img: card.querySelector("img").src
        };
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
});

let container = document.getElementById("cart-container");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
if (container) {
    cartItems.forEach(item => {
        container.innerHTML += `
              <div class="card bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-[0_0_10px_#e4098d] flex flex-col items-center justify-center gap-10 pb-5 w-[50%] mx-auto md:w-full pink-card  "
               ">
                <img src="${item.img}" alt="" class="w-[100%] h-[100%] object-cover  ">
                <div class="flex items-center gap-5 justify-between w-[80%]">

                    <strong class="text-center text-[#e4098d] text-md">$${item.price}</strong>
                     <p class="text-center text-[#e4098d] text-md">${item.name}</p>          
                </div>
            </div>
        `;
    });
}



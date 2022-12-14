// 메뉴 객체 배열.
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "resources/buttermilk_pancakes.jpeg",
        desc: "Buttermilk Pancake is so delicious and yeeeeaaaaah aaaaaabbbbbccccc dddd eee fff ggg"
    },
    {
        id: 2,
        title: "Hamburger",
        category: "lunch",
        price: 16.99,
        img: "resources/hamburger.jpeg",
        desc: "Hamburger is so delicious and yeeeeaaaaah aaaaaabbbbbccccc dddd eee fff ggg"
    },
    {
        id: 3,
        title: "Chocolate Peanut Butter Shakes",
        category: "shakes",
        price: 15.99,
        img: "resources/shakes.jpeg",
        desc: "Chocolate Peanut Butter Shakes is so delicious and yeeeeaaaaah aaaaaabbbbbccccc dddd eee fff ggg"
    },
    {
        id: 4,
        title: "Beef",
        category: "dinner",
        price: 18.99,
        img: "resources/meat.webp",
        desc: "Beef is so delicious and yeeeeaaaaah aaaaaabbbbbccccc dddd eee fff ggg"
    },
    {
        id: 5,
        title: "Sunny Side Up Fried Eggs",
        category: "breakfast",
        price: 14.99,
        img: "resources/sunny_side_up.jpg",
        desc: "Sunny Side Up Fried Eggs is so delicious and yeeeeaaaaah aaaaaabbbbbccccc dddd eee fff ggg"
    }
]

// DOM을 참조.
const menuContainer = document.querySelector(".menu_container");
const btnContainer = document.querySelector(".category_container");
const categoryBtns = document.querySelectorAll(".category_button");

// HTML과 script가 로드된 시점에 발생하는 이벤트. -> all 카테고리의 메뉴를 보여주고 버튼에 리스너를 설정한다.
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayFilteredMenuItems();
})

// 메뉴를 화면에 띄워주는 함수.
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(menuItem) {
        // 메뉴를 article DOM으로 구성.
        return `<article class="menu_div">
        <img class="menu_image" src=${menuItem.img} alt=${menuItem.title} />
        <span class="menu_title">${menuItem.title}</span>
        <span>$${menuItem.price}</span>
        <span>${menuItem.desc}</span>
        </article>`;
    });
    // join을 통해 배열의 내용을 연결하여 하나로 만든다.
    displayMenu = displayMenu.join("");
    // 구성한 DOM을 메뉴 컨테이너의 innerHTML로 넘겨준다.
    menuContainer.innerHTML = displayMenu;
}

// 클릭된 카테고리의 메뉴들(필터링된 메뉴들)을 보여주는 함수.
function displayFilteredMenuItems() {
    console.log(categoryBtns);
    // 각각의 카테고리 버튼에 이벤트 리스너를 추가.
    categoryBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            console.log(e.currentTarget.dataset.id);
            // 클릭된 버튼의 카테고리 값.
            const clickedCategory = e.currentTarget.dataset.id;
            // all 카테고리일 경우, 전체 메뉴 항목들을 보여준다.
            if (clickedCategory === "all") {
                displayMenuItems(menu);
            } else {
                // all 이 아닌 다른 카테고리일 경우,
                // 클릭된 버튼의 카테고리에 속하는 메뉴 항목들을 필터링한다.
                const filteredMenu = menu.filter(function(menuItem) {
                    if (menuItem.category === clickedCategory) {
                        return menuItem;
                    }
                });
                // 필터링된 메뉴들을 보여준다.
                displayMenuItems(filteredMenu);
            }
        });
    });
}
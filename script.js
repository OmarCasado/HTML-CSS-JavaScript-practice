
/****************************************** TOGGLE MENU BELOW ******************************************/

//toggle-menuというidのa要素を習得して、toggleMenuというconstにおさめる
const toggleMenu = document.querySelector("#toggle-menu");

//top_navというidのnav要素を習得して、navbarLinksというconstにおさめる
const navbarLinks = document.querySelector("#top_nav");

//toggleMenu constをクリックしたらshowMenuという関数が実行されるようにEventListenerをtoggleMenuに与える
toggleMenu.addEventListener("click", showMenu);

//showMenuという関数を作り、navbarLinksにclassList.toggle()をつけることでshowというクラスの有無を切り替えます
//showというクラスをcssでdisplay flexにする
function showMenu () {
  navbarLinks.classList.toggle("show");

}

/****************************************** TOGGLE MENU ABOVE ******************************************/
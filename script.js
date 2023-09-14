
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

const xmark = document.querySelector('#toggle-menu img');
xmark.classList.add("x-markhidden");
let flag = true;


toggleMenu.onclick = function () {
  if (flag === true) {
    xmark.classList.remove("x-markhidden");
    flag = false;
  } else {
    xmark.classList.add("x-markhidden");
    flag = true;
  }
}


// toggleMenu.onclick = function () {
//   if (isAdd === true) {
//     // pTag.classList.toggle('wahaha');だけでもいける、falseを追加しなくても
//     xmark.classList.add('x-markhidden');
//     isAdd = false;
//   } else {
//     // pTag.classList.toggle('wahaha');だけでもいける、trueを追加しなくても
//     xmark.classList.remove('x-markhidden');
//     isAdd = true;

//   }
// }


/****************************************** TOGGLE MENU ABOVE ******************************************/



/************************************* INDEX.HTML SLIDESHOW BELOW *************************************/

// i という変数を0に設定する
let i = 0;

//imagesArrayという配列を定義する
let imagesArray = [];

//slideShowというidのimgタグを取得して、同名の定数におさめる
const slideShow = document.querySelector("#about_card2");

// 見せたいイメージを配列の値として記入する
imagesArray[0] = "images/o-dan/o-dan_discover.jpg";
imagesArray[1] = "images/o-dan/o-dan_faraway.jpg";
imagesArray[2] = "images/o-dan/o-dan_mix.jpg";

//changeImageという関数をつくる
function changeImage () {
  slideShow.src = imagesArray[i];
  

  if (i < imagesArray.length - 1) {
    i += 1;
  } else {
    i = 0;
  }

/*setTimeout()は決まったミリセカンド数後に関数を実行する。  1 second = 1000 milliseconds.*/
  setTimeout("changeImage()", 4000);
}

window.onload = changeImage;


/************************************* INDEX.HTML SLIDESHOW ABOVE *************************************/


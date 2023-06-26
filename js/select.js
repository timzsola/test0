$(document).ready(function () {


    // 滑動至指定區塊位置
    $('.menu a').click(function () {

        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({ scrollTop: pos.top }, 1500);

    });

    //滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('', 1);
        } else {
            $('#gotop').stop().fadeOut();
        }

    });


    //滑動載入
    $('.smoove').smoove({
        offset: '30%'
    }
    );
});
















/*
 * 商品列表
 *
 */


let all__products = [
    {
        product: "",
        img: "img/woodtext.png",
        plus__img: "",
        more: "./index.html",
        number: "",
        title: "原木地板",
        model: "產品代碼-D213211",
        cost: 3480,
        code: 3480,
        color: "red"

    },
    {
        product: "",
        img: "img/woodtext.png",
        plus__img: "",
        more: "./index.html",
        number: "",
        title: "原木地板",
        model: "產品代碼-D213212",
        cost: 3490,
        code: 3480,
        color: "purple"
    },
    {
        product: "",
        img: "img/woodtext.png",
        plus__img: "",
        more: "./index.html",
        number: "",
        title: "原木地板",
        model: "產品代碼-D213213",
        cost: 3500,
        code: 3480,
        color: "yellow"
    },// 第4個
    {
        product: "",
        img: "img/woodtext.png",
        plus__img: "",
        more: "./index.html",
        number: "",
        title: "原木地板",
        model: "產品代碼-D213211",
        cost: 3600,
        code: 3480,
        color: "yellow"
    },
    // 第5個
    {
        product: "",
        img: "img/woodtext.png",
        plus__img: "",
        more: "./index.html",
        number: "",
        title: "原木地板",
        model: "產品代碼-D213211",
        cost: 3800,
        code: 3480,
        color: "yellow"
    },
    // 第6個
    {
        product: "",
        img: "img/woodtext.png",
        plus__img: "",
        more: "./index.html",
        number: "",
        title: "原木地板",
        model: "產品代碼-D213211",
        cost: 4000,
        code: 3480,
        color: "yellow"
    },


];

//  join() 方法會將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串。
//  map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
document.getElementById("productsList").innerHTML = `
  <p class="product__total"> 總共有 <span id="listNum">${all__products.length}</span> 個商品</p>
    <ul  class="productsList">
    ${all__products
        .map(function (pds) {
            return `     
       <li class="product__item ${pds.color ? pds.color : ""}" data-price="${pds.cost}" data-title="${pds.title}">
        <span class="product__number">${pds.number}</span>
        <div class="product__cover">
          <img class="product__img" src="${pds.img}">
        </div>
        <div class="product__introduction">
          <h3 class="product__title">${pds.title}</h3>
          <p class="product__model">${pds.model}</p>
          <p class="product__cost">NT$ ${pds.cost}</p>
          <p class="product__price">NT$ ${pds.code}</p>
          <a href="${pds.more}">更多介紹</a>
        </div>
      </li>
      `;
        })
        .join("")}
      </ul>
  
  `;


/*
 * 勾選顯示類別
 *
 */

/* 所有商品 */
let allProducts = document.querySelectorAll(".product__item");
/* 所有選項標籤 */
let checkbox = document.querySelectorAll("input[type=checkbox]"
);
/* 總共顯示商品數量 */
let listNum = document.getElementById("listNum");
let colors = []; /* 勾選的顏色 */

// filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
// push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
// forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
// jQuery :contains() 選擇器可用來選取子元素內包含特定文字的元素

for (i = 0; i < checkbox.length; i++) {
    /* 點擊任意選項標籤時觸發 */
    //console.log('是否勾選',e.currentTarget.checked)
    //console.log('被勾選的id',e.currentTarget.id)
    checkbox[i].addEventListener("click", (e) => {

        /* 將被勾選項目的ID存到colors陣列裡面 */

        if (e.currentTarget.checked) {
            // console.log('原陣列',colors)

            /* 若點擊項目為「勾選」狀態，在colors陣列塞入該選項id */
            colors.push(e.currentTarget.id);

            // console.log('新陣列',colors)

        } else {

            /* 若點擊項目為「取消勾選」狀態，在colors陣列移出該選項id，利用filter()回傳新陣列*/

            colors = colors.filter(function (value) {
                // console.log('被取消勾選的ID',e.currentTarget.id)
                // console.log('原陣列個別項目',value)

                /* 只回傳不等於該選項id的值 */
                return value != e.currentTarget.id;
            });

            // console.log('回傳之後新的陣列',colors)
        }

        /*
         *判斷顯示的商品
         */

        item = 0; /* 勾選後顯示的數量 */

        allProducts.forEach((product) => {
            // console.log('每個個別產品',product)

            /* 先將所有商品隱藏 */
            product.style.display = "none";

            /* 用forEach()跑一次colors陣列，與個別product的class比對，*/
            colors.forEach((color) => {

                /* 如果class中有包含該顏色，就改變為display:block，並且item+1 */
                if (product.classList.contains(color)) {
                    product.style.display = "block";
                    item++;
                    // console.log('目前被勾選顯示的數量',item)
                }
            });

            /* 改變顯示商品數量 */
            listNum.innerHTML = item;

            /* 判斷colors陣列是否為空，"是" 則全部商品顯示 */
            if (colors.length <= 0) {
                product.style.display = "block";
                listNum.innerHTML = allProducts.length; /* 顯示數量改回商品總數 */
            }
        });
    });
}


/*
 * 改變排序
 *
 */

let productBox = document.querySelector(".productsList");
const originLists = Array.from(productBox.children); /* 原商品陣列(未排序) */
// Array.from() 方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。


let lists = Array.from(productBox.children); /* 用來排序的陣列 */
let select = document.getElementById("select"); /* 下拉選單 */

select.onchange = sortingValue;

// DOM .firstChild屬性 用於返回其父節點元素的firstchild節點
// .append 在每個匹配元素裡面的末尾處插入參數內容。
function sortingValue() {
    if (this.value === "default") {

        /* 清除ul裡面的li */
        while (productBox.firstChild) {
            productBox.removeChild(productBox.firstChild);
        }

        /* print出原商品陣列 */
        productBox.append(...originLists)

    }

    if (this.value === "az") {
        sortCaps(true);
    }

    if (this.value === "za") {
        sortCaps(false);
    }

    if (this.value === "lowToHigh") {
        sortCost(true);
    }

    if (this.value === "highToLow") {
        sortCost(false);
    }
}

/* 按照價格排序 */
function sortCost(asc) {
    //sort() 方法會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列。
    let sortli = lists.sort((a, b) => {
        // console.log('前一個項目',a)
        // console.log('後一個項目',b)
        let aPrice = a.getAttribute("data-price");
        let bPrice = b.getAttribute("data-price");
        // console.log('前項目價格',aPrice)
        // console.log('後項目價格',bPrice)

        /* asc判斷升降冪 
        asc 帶true 走升冪
        asc 帶false 走降冪
        */

        /* 
         升冪排序
         arr.sort(function(a,b){
           return a - b
           return 為負 前後兩個值排序不變(前, 後)
           前值是a, 後值是b => [a, b]
         })
    
         降冪排序
         arr.sort(function(a,b){
           return b - a
           return 為正 前後兩個值排序對調(後, 前)
           前值是a, 後值是b => [b, a]
         })
         
        */

        if (asc) {
            return aPrice - bPrice
        } else {
            return bPrice - aPrice
        }



    });

    while (productBox.firstChild) {
        productBox.removeChild(productBox.firstChild);
    }

    productBox.append(...sortli);
}

/* 按照字母排序 */
function sortCaps(asc) {


    let sortli = lists.sort((a, b) => {
        let aTitle = a.getAttribute("data-title").toUpperCase();
        let bTitle = b.getAttribute("data-title").toUpperCase();

        let type;
        type = asc ? 1 : -1
        /* 三元運算子
           condition？true：false
        */

        return aTitle > bTitle ? (1 * type) : (-1 * type);
        // 升序 z > a ? 1 : -1; [a,z]
        // 降序 z > a ? -1 : 1; [z,a]
    });

    while (productBox.firstChild) {
        productBox.removeChild(productBox.firstChild);
    }

    productBox.append(...sortli);
}


baris_produk.innerHTML = ""

var data_mentah = null

console.log("data mentah:", data_mentah)

function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>'
    Object.keys(data_mentah).forEach(function (opsi) {
        select_kopi.innerHTML += `<option value="${opsi}">${opsi}</option>`;
    })
    console.log("Melakukan Update Select")
}
// updateSelect();



var data_kopi = [ ]
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>

                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-dark fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <div >
                                       <button data-id="${kopi.id}" data-summary="" data-image="${kopi.foto}" data-name="${kopi.nama}" data-quantity="1" data-price="${kopi.harga}"
                                        class="btn text-white w-100 btn-dark my-cart-btn"><i class="bi bi-cart"></i> Add To Cart</button>
                                        </div>
                        </div>
                </div>
            </div>`
    });
    // <span class="terjual"> terjual :  ${kopi.terjual}</span>

    // <a href="${kopi.link}" class="btn btn-dark w-100"><i class="bi bi-cart4"></i> Beli</a>


    if (baris_produk.innerHTML.length < 1) {
        baris_produk.innerHTML +=
            ` <h6 class="fs-5 w-100">Produk tidak ditemukan</h6>`
    };
}

// var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber = "data1.json"
// var sumber = "data.json"

$.getJSON(sumber).then(data => {
    console.log("Data dari getJSON ", data)
    data_mentah = data
    updateSelect()
})

// var Sumber2 = "data.json"
//         // GetData(null, "", null)

//         filter.onclick = function () {
//             var search = cari.value
//             var kat = kategori.value
//             var sort = select_sort.value
//             GetData(kat, search, sort)
//         }

//         function GetData(kat, search, sort) {
//             $.getJSON(Sumber2).then(function (data) {

//                 // FILTER KATEGORI
//                 switch (kat) {
//                     case "signature":
//                         Data = data.signature
//                         break
//                     case "classic":
//                         Data = data.classic
//                         break
//                     case "fancy":
//                         Data = data.fancy
//                         break
//                     case "nonkopi":
//                         Data = data.nonkopi
//                         break
//                     default:
//                         Data = [...data.signature, ...data.classic, ...data.fancy, ...data.nonkopi]
//                         break
//                 }

//                 // FILTER URUTAN HARGA
//                 switch (sort) {
//                     case "harga-terendah":
//                         Data.sort((a, b) => a.harga - b.harga)
//                         break
//                     case "harga-tertinggi":
//                         Data.sort((a, b) => b.harga - a.harga)
//                         break
//                     case "most-popular":
//                         Data.sort((a, b) => b.terjual - a.terjual)
//                         break
//                 }

//                 // FILTER SEARCH
//                 if (search !== "") {
//                     search = search.toUpperCase();
//                     Data = Data.filter(aray => aray.nama.toUpperCase().includes(search));
//                 }

//                 ShowData(Data)
//             })
//         }
        
//         var Sumber2 = "data.json"
       
// filter.onclick = function () {
//     var search = cari.value
//     var kat = kategori.value
//     var sort = select_sort.value
//     GetData(kat, search, sort)
// }

{/* <option value="arabica">Arabica</option>
<option value="robusta">Robusta</option>
<option value="nonkopi">Non Kopi</option */}

// function GetData(kat, search, sort) {
//     $.getJSON(Sumber2).then(function (data) {

//         // FILTER KATEGORI
//         switch (kat) {
//             case "arabica":
//                 Data = data.arabica
//                 break
//             case "robusta":
//                 Data = data.robusta
//                 break
//             case "nonkopi":
//                 Data = data.nonkopi
//                 break
//             default:
//                 Data = [...data.arabica, ...data.robusta, ...data.nonkopi]
//                 break
//         }

//         // FILTER URUTAN HARGA
//         switch (sort) {
//             case "harga-terendah":
//                 Data.sort((a, b) => a.harga - b.harga)
//                 break
//             case "harga-tertinggi":
//                 Data.sort((a, b) => b.harga - a.harga)
//                 break
//             case "most-popular":
//                 Data.sort((a, b) => b.terjual - a.terjual)
//                 break
//         }

//         // FILTER SEARCH
//         if (search !== "") {
//             search = search.toUpperCase();
//             Data = Data.filter(aray => aray.nama.toUpperCase().includes(search));
//         }

//         updateTampilan(Data)
//     })
// }

// $(function () {

//     var goToCartIcon = function ($addTocartBtn) {
//         var $cartIcon = $(".my-cart-icon");
//         var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({ "position": "fixed", "z-index": "999" });
//         $addTocartBtn.prepend($image);
//         var position = $cartIcon.position();
//         $image.animate({
//             top: position.top,
//             left: position.left
//         }, 500, "linear", function () {
//             $image.remove();
//         });
//     }

//     $('.my-cart-btn').myCart({
//         currencySymbol: 'Rp. ',
//         classCartIcon: 'my-cart-icon',
//         classCartBadge: 'my-cart-badge',
//         classProductQuantity: 'my-product-quantity',
//         classProductRemove: 'my-product-remove',
//         classCheckoutCart: 'my-cart-checkout',
//         affixCartIcon: true,
//         showCheckoutModal: true,
//         numberOfDecimals: 3,
//         cartItems: [],
//         clickOnAddToCart: function ($addTocart) {
//             goToCartIcon($addTocart);
//         },
//         afterAddOnCart: function (products, totalPrice, totalQuantity) {
//             //console.log("afterAddOnCart", products, totalPrice, totalQuantity);
//         },
//         clickOnCartIcon: function ($cartIcon, products, totalPrice, totalQuantity) {
//             //console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
//         },
//         checkoutCart: function (products, totalPrice, totalQuantity) {
//             var checkoutString = "Total Price: " + totalPrice + ".000 \nTotal Quantity: " + totalQuantity;
//             checkoutString += "\n\n id \t name \t price \t quantity";
//             $.each(products, function () {
//                 checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.price + " \t " + this.quantity);
//             });

//             //console.log(checkoutString);
//             window.open("https://wa.me/6282221924292?text=" + encodeURI(checkoutString));
//         }
//     });

// });
       

        
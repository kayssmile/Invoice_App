/* Invoice App */ 


/* Imports  */

import * as Tools from "./Modules/Functions.js";

/* DOM Selectors Wrappers */

var wrapper_content = document.querySelector(".wrapper_content");
var wrapper_main = document.querySelector(".wrapper_main");
var wrapper_NewandEditInvoice = document.querySelectorAll(".wrapper_newandeditInvoice");
var wrapper_NewInvoice = wrapper_NewandEditInvoice[0];
var wrapper_EditInvoice = wrapper_NewandEditInvoice[1];
var wrapper_ViewInvoice = document.querySelector(".wrapper_Viewinvoice");

var wrapper_content = document.querySelector(".wrapper_content");

/* DOM Selectors Menu */





var filter_box = document.querySelector(".header__title--filter");
console.log(filter_box);


/* Event Listeners */

wrapper_content.addEventListener("click", delegation_InvoiceApp);
wrapper_NewInvoice.addEventListener("click", delegation_NewInvoice);
wrapper_ViewInvoice.addEventListener("click", delegation_ViewInvoice);









/* Functions*/


function delegation_ViewInvoice(event){

    var element = event.target;

    if(element.matches(".Viewinvoice__headeredit")|| element.matches(".Viewinvoice__headeredit--text")){

        wrapper_ViewInvoice.classList.remove("enable");
        wrapper_ViewInvoice.classList.add("disable");
        wrapper_EditInvoice.classList.remove("disable");
        wrapper_EditInvoice.classList.add("enable");
        
    }


}











function delegation_NewInvoice(event){

    var element = event.target;

    if(element.matches(".delete_item")){

        element.parentNode.parentNode.parentNode.remove();
        
    }
    if(element.matches(".delete_item--path")){

        element.parentNode.parentNode.parentNode.parentNode.remove();

    }
    if(element.matches(".wrapper_newandeditInvoice__form--button")){

        let id = element.previousElementSibling.getAttribute("data-id");
        Tools.createnewitem(id);

    }
    if(element.matches(".wrapper_newandeditInvoice__form--text")){

        if(element.parentNode.classList == "wrapper_newandeditInvoice__form--button"){

            let id = element.parentNode.previousElementSibling.getAttribute("data-id");
            Tools.createnewitem(id);

        }

    }
    if(element.matches(".wrapper_newandeditInvoice__form--buttonsmall") || element.matches(".discard")){
        
        console.log("clik");
        Tools.deleteallInputs();

    }

}








function delegation_InvoiceApp(event){

    var element = event.target;


/*     Menu Delegation     */

    if(element.matches(".menu__itemtop") || element.matches(".menu__itemtop--svg") || element.matches(".menu__itemtop--svgpath")){
        
        wrapper_main.classList.remove("disable");
        wrapper_NewInvoice.classList.remove("enable");
        wrapper_ViewInvoice.classList.remove("enable");
        wrapper_EditInvoice.classList.remove("enable");

        wrapper_main.classList.add("enable");
        wrapper_NewInvoice.classList.add("disable");
        wrapper_ViewInvoice.classList.add("disable");
        wrapper_EditInvoice.classList.add("disable");

    }

/*     Main Delegation     */

    if(element.matches(".header__btn") || element.matches(".header__btn--text") || element.matches(".header__btn--circle")){

        wrapper_main.classList.remove("enable");
        wrapper_main.classList.add("disable");
        wrapper_NewInvoice.classList.remove("disable");
        wrapper_NewInvoice.classList.add("enable");

    }
    if(element.matches(".main__invoice") || element.matches(".main__invoice--check") || element.matches(".main__invoice--checkpath")){

        wrapper_main.classList.remove("enable");
        wrapper_main.classList.add("disable");
        wrapper_ViewInvoice.classList.remove("disable");
        wrapper_ViewInvoice.classList.add("enable");

    }
    if(element.matches(".header__select--svg")){

        filter_box.style.backgroundColor = green; // ...? 

    }

/*     NewInvoice Delegation     */

   
}

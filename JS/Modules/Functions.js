





function deleteallInputs(){

    let all_inputs = document.querySelectorAll("input");
    var all_inputs_var = document.querySelectorAll(".js_inputnew");

    let arr_all_inputs = Array.from(all_inputs);
    var all_inputs_newInvoice = arr_all_inputs.slice(0,12);

    for(let input of all_inputs_newInvoice){

        input.value = "";

    }

    for(let input of all_inputs_var){

        input.value = "";
    }

}








function createnewitem(id){


    var wrappers_InvoiceForm = document.querySelectorAll(".wrapper_newandeditInvoice__form");
    var wrapper_NewInvoiceForm = wrappers_InvoiceForm[0];

    var button_newItem = document.querySelector(".wrapper_newandeditInvoice__form--button");

    let idneu = parseInt(id) + 1;
    let item_div = document.createElement("div");
    item_div.classList.add("wrapper_newandeditInvoice__form--item");
    item_div.setAttribute("data-id", idneu);

    let names_div = document.createElement("div");
    names_div.classList.add("wrapper_newandeditInvoice__form--flex", "wrap");

    names_div.innerHTML = `<p class="wrapper_newandeditInvoice__form--text width40">Item Name</p>
                        <input type="text" placeholder="Banner Design"  id="item${idneu}_name" class="wrapper_newandeditInvoice__form--inputmobile js_inputnew width40">
                        <p class="wrapper_newandeditInvoice__form--text width10">Qty.</p>
                        <p class="wrapper_newandeditInvoice__form--text width20 ">Price</p>
                        <p class="wrapper_newandeditInvoice__form--text width19 ">Total</p>
                        <p class="wrapper_newandeditInvoice__form--textpseudo "></p>`;

    let inputs_div = document.createElement("div");
    inputs_div.classList.add("wrapper_newandeditInvoice__form--flex");

    inputs_div.innerHTML = `<input type="text" placeholder="Service Name"  id="item${idneu}_name" class="wrapper_newandeditInvoice__form--inputdesktop js_inputnew width40">
                            <input type="text" placeholder="Services Count"  id="item${idneu}_Qty" class="wrapper_newandeditInvoice__form--input js_inputnew width10">
                            <input type="text" placeholder="Service Price"  id="item${idneu}_price" class="wrapper_newandeditInvoice__form--input js_inputnew width20">
        
                            <p class="wrapper_newandeditInvoice__form--textsized ">400.00</p>
        
                            <div class="wrapper_newandeditInvoice__form--flextext">

                                <svg class="delete_item" width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path class="delete_item--path" d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fill-rule="nonzero"/>
                            </svg>`;

    item_div.appendChild(names_div);
    item_div.appendChild(inputs_div);

    wrapper_NewInvoiceForm.insertBefore(item_div, button_newItem);

}

export {createnewitem,deleteallInputs};
var suNe = document.createElement("input");
suNe.type = "text";
suNe.id = "suNe";
var suNse = document.createElement("input");
suNse.type = "submit";
suNse.id = "suNse";
var ul2 = document.getElementById("user_list2");
ul2.insertBefore(suNse, ul2.firstChild);
ul2.insertBefore(suNe, ul2.firstChild);

suNse.addEventListener("click", function() {
  let suN = document.getElementById("suNe").value;
  let uNe1 = document.getElementById("user_list2").getElementsByClassName("li_user clearfix");
  let uN = document.getElementById("user_list2").getElementsByClassName("user_name");
  for(let ii = 0; ii < uN.length; ii++) {
    let uNe2 = uN[ii].innerText;
    let uNm = uNe2.indexOf(suN);
    if (suN == "") {
      uNe1[ii].style.display = '';
    } else if (uNm == -1) {
      uNe1[ii].style.display = 'none';
    } else {
      uNe1[ii].style.display = '';
    }
  }
})

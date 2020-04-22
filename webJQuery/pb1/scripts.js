// document.getElementById('cars1').ondblclick=function(){
//     var list2=document.getElementById('cars2');
//     var el=this[this.selectedIndex];
//     this.removeChild(el);
//     list2.appendChild(el);
//
// };
//
// document.getElementById('cars2').ondblclick=function(){
//     var list1=document.getElementById('cars1');
//     var el=this[this.selectedIndex];
//     this.removeChild(el);
//     list1.appendChild(el);
// };

$("select option").dblclick(function () {
    if($(this).parent().attr("id")===$("#cars1").attr("id"))
        $("#cars2").append(this);
    else
        $("#cars1").append(this);
});

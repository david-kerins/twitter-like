// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

//$(document).ready(function(){
//    var code = document.code_search.search;
//    var remaining = document.code_search.remLen1;
//    
//    function textCounting(field,cntfield,maxlimit) {
//      if (field.value.length > maxlimit) // if too long...trim it!
//        field.value = field.value.substring(0, maxlimit);
//        // Set the value
//        // otherwise, update 'characters left' counter
//      else
//        cntfield.value = maxlimit - field.value.length;
//    }
//  $('#test').keydown(function(){textCounting(code, remaining, 5)});        
//  $('#test').keyup(function(){textCounting(code, remaining, 5)});    
//});

//<SCRIPT LANGUAGE="JavaScript">
//<!-- Dynamic Version by: Nannette Thacker -->
//<!-- http://www.shiningstar.net -->
//<!-- Original by :  Ronnie T. Moore -->
//<!-- Web Site:  The JavaScript Source -->
//<!-- Use one function for multiple text areas on a page -->
//<!-- Limit the number of characters per textarea -->
//<!-- Begin
function textCounter(field,cntfield,maxlimit) {
  if (field.value.length > maxlimit) // if too long...trim it!
    field.value = field.value.substring(0, maxlimit);
  // otherwise, update 'characters left' counter
  else
    cntfield.value = maxlimit - field.value.length;
  }
  //  End -->
  //</script>

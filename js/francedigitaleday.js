
$(document).ready(function() {
  
  $('#delegations .startup').hover(
    function() {
      $('.logo', $(this)).addClass('hidden');
      $('.details', $(this)).removeClass('hidden');
    },
    function() {
      $('.logo', $(this)).removeClass('hidden');
      $('.details', $(this)).addClass('hidden');
    });
  
});
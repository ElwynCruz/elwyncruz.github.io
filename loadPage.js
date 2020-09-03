
<script src='http://code.jquery.com/jquery-latest.min.js' type="text/javascript"></script>

<script>
$(document).ready(function(){
  $("p,td, h1").click(function(event){
    $("div").html("Triggered by a " + event.target.nodeName + " element.");
  });
});
</script>




$(document).ready(function() {
  $("#clicker").click(function () {
    alert("Hello!");
    $(".hide_div").hide();
  });
});

$(document).ready(function() {
			$("td").click(function() {
        $("#"+curPage+"-info").hide(1000);
        curPage = event.target.id;
        $("#"+event.target.id+"-info").show(1000);

			};
		});
</script>

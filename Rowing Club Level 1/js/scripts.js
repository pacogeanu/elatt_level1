

var children = document.getElementsByTagName("li");

for (var i = 0; i < children.length; i++) {
    children[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
  });
}
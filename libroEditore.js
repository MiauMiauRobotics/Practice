window.addEventListener("load", function(){
	var editore = textFramed.document;
	editore.designMode = "on";

	boldButton.addEventListener("click", function(){
		editore.execCommand("Bold", false, null);
	}, false);

	italicButton.addEventListener("click", function(){
		editore.execCommand("Italic", false, null);
	}, false);

	supButton.addEventListener("click", function(){
		editore.execCommand("Superscript", false, null);
	}, false);

	subButton.addEventListener("click", function(){
		editore.execCommand("Subscript", false, null);
	}, false);

	strikeButton.addEventListener("click", function(){
		editore.execCommand("Strikethrough", false, null);
	}, false);

}, false);

var fonts = document.querySelectorAll("select#fontChanger > option");

	for (var i = 0; i < fonts.length; i++) {
		fonts[i].style.fontFamily = fonts[i].value;
	}
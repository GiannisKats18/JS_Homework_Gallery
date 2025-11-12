function upDate(previewPic){
    newText = previewPic.alt
    newBackground = "url("+previewPic.src+")"
    imageBox = document.getElementById("image")
    imageBox.innerHTML = newText
    imageBox.style.backgroundImage = newBackground
	}

	function unDo(){
    document.getElementById("image").innerHTML = "Hover over an image below to display here."
    document.getElementById("image").style.backgroundImage = "url()"
	}
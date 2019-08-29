$(document).keypress(function(e) {
    if(e.which == 13) {
        $("#btn_save").click();
    }
});

$("#btn_save").click(function() {
	var options = {
        data: post_data,
        type: 'POST',

        success: function () {
            console.log("Success! File saved to your Dropbox.");
        },

        progress: function(progress) {
            console.log("Progress: " + progress);
        },

        cancel: function() {
            console.log("Cancelled");
        },

        error: function(errorMessage) {
            console.log("Error: " + errorMessage);
            console.log("Data: " + results);
            console.log("URL: " + kwl_url);
        }
    };
	Dropbox.save($('#url').val(),$('#name').val(), options);
});
$("#url").on("propertychange change keyup paste input", function(){
	var url = $('#url').val();
	if(url.indexOf("/") != -1){
		$('#name').val(url.substring(url.lastIndexOf("/")+1));
	}
	else{
		$('#name').val(url);
	}
});

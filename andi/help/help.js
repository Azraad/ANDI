$(document).ready(function(){
	
	//Manipulate screen to show all or only one alert
	//Check for url parameter
	if(window.location.search){
		//slice off the question mark
		var id_to_show = window.location.search.slice(1);
		
		//if this url parameter included the equals sign as the last character
		if(id_to_show.charAt(id_to_show.length-1) === "="){
			//trim off the equals sign
			id_to_show = id_to_show.substr(0, id_to_show.length-1 );
		}
		
		var element_to_show = $("#"+id_to_show);
		
		//if element_to_show exists
		if(!!$(element_to_show).html()){
			
			//hide all sections
			$("section").hide();
			
			//show only the section whose id matches the search parameter
			$(element_to_show).show().focus();
		}
		// else show everything
	}
	// else show everything
		
	$("#tableOfContentsControl").click(function(){
		if($("#tableOfContents").is(":visible")){
			$(this)
				.attr("aria-expanded","false")
				.html("View Table of Contents");
			$("#tableOfContents").slideUp();
		}
		else{
			$(this)
				.attr("aria-expanded","true")
				.html("Hide Table of Contents");
			$("#tableOfContents").slideDown();
		}
	});
	
	$("#detailedInstallInstructions-button").click(function(){
		if($("#detailedInstallInstructions").is(":visible")){
			$(this)
				.attr("aria-expanded","false")
				.html("Get Detailed Instructions");
			$("#detailedInstallInstructions").slideUp();
		}
		else{
			$(this)
				.attr("aria-expanded","true")
				.html("Hide Detailed Instructions");
			$("#detailedInstallInstructions").slideDown();
		}
	});
	
	$("#customConfig-button").click(function(){
		if($("#customConfig").is(":visible")){
			$(this)
				.attr("aria-expanded","false")
				.html("View the Custom Configuration Instructions");
			$("#customConfig").slideUp();
		}
		else{
			$(this)
				.attr("aria-expanded","true")
				.html("Hide the Custom Configuration Instructions");
			$("#customConfig").slideDown();
		}
	});
	
	$("button.disableCSP.expandButton").click(function(){
		if($(this).attr("aria-expanded") === "true"){
			$(this).attr("aria-expanded","false")
				.next().slideUp();
		}
		else{
			$(this).attr("aria-expanded","true")
				.next().slideDown();
		}
	});
	
});

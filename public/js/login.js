$(function(){
	
	$("#btnCommit").click(function(){	
		var method = $("#methodType option:selected").text();
		$("#loginForm").attr("method",method);
		$("#loginForm").submit();
	});
});

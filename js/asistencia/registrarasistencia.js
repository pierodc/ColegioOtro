$(document).on("ready",function(){
	hora();
});
function hora(){
	var hora=fecha.getHours();
	var minutos=fecha.getMinutes();
	var segundos=fecha.getSeconds();
	if(hora<10){ hora='0'+hora;}
	if(minutos<10){minutos='0'+minutos;}
	if(segundos<10){ segundos='0'+segundos;}
	fech=hora+":"+minutos+":"+segundos;
	$("#hora").html(fech);
	fecha.setSeconds(fecha.getSeconds()+1);
	setTimeout("hora()",1000);
}
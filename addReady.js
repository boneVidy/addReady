function addReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.attachEvent('onreadystatechange',fn)
	}
}
!window.$ && window.$ = addReady;
//author vidy;
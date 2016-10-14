$(document).ready(function() {
    $("#jsandroid").hide();
    $("#jsios").hide();
    $("#jsaward").hide();
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
        window.location.href="http://84060538.u.h5mc.com/campaigns/57f48a6e347a1976aa1b9a36/20161014080530/58001f9a7f09e10b5c323ca9/index.html";
    }else if(isiOS){
        window.location.href="http://84060538.u.h5mc.com/campaigns/57f48a6e347a1976aa1b9a36/20161014123121/57ff5f9c347a194be058378e/index.html";
    }else{
        window.location.href="http://84060538.u.h5mc.com/campaigns/57f48a6e347a1976aa1b9a36/20161014123121/57ff5f9c347a194be058378e/index.html";
    }
});

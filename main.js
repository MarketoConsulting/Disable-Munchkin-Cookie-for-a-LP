<script>
function disableMarketoCookie(){
    name = "_mkto_trk";
    value = "";
    days = -1;
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
document.addEventListener("DOMContentLoaded",disableMarketoCookie);
</script>

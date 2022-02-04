function cal(){
    h2m=document.getElementById("h2m");
    h2s=document.getElementById("h2s");
    ti=Number(document.getElementById("inp").value);
    out=document.getElementById("out");
    if(h2m.checked){
        st=ti+" Hour = "+ti*60+" Min";
        out.innerHTML="<p>"+st+"</p>";        
    }
    else if(h2s.checked){
        st=ti+" Hour = "+ti*3600+" Sec";
        out.innerHTML="<p>"+st+"</p>"; 
    }
}
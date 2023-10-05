let a;
let b;
function display(value) {
    
    a = document.getElementById("val");
    if (value == '=') {
        b=ex(a.value);
        document.getElementById("val").value=b
    } else {
        a.value = a.value + value;
    }
    let c=value
    let m=a.value
    let d=m.length
    if((c==="+"||c==="-"||c==="/"||c==="*")&&(m[d-2]==="+"||m[d-2]==="-"||m[d-2]==="*"||m[d-2]==="/")){
        document.getElementById("val").value=(a.value).slice(0, -2) + (a.value).slice(-1)
    }
}
function clickPress(event) {
    alert("hello")
    if (event.key=="Enter") 
    {
       a = document.getElementById("val");
       b=ex(a.value);
       document.getElementById("val").value=b
    }
}
function cancel(){
    document.getElementById("val").value  = "";
    document.getElementById("val").value = "";
}
function cut(){
    let c=(a.value).toString()
    let d=c.substring(0,(a.value).length-1)
    document.getElementById("val").value=d
}
function pow(){
    document.getElementById("val").value=a.value*a.value;
}
function cube(){
    document.getElementById("val").value=a.value*a.value*a.value;
}
function oneD(){
    document.getElementById("val").value=1/a.value;
}
function ex(tarun){
    let x=[]
    let y=[]
    let z=tarun.split(/([+\-*/])/)
    for(let t=0;t<z.length;t++){
        if(z[t]==="+"||z[t]==="-"||z[t]==="*"||z[t]==="/"){
            if(x.length>0&& prec(x[x.length-1])>=prec(z[t])){
                let opera=x.pop()
                let o2=y.pop()
                let o1=y.pop()
                y.push(harsh(o1,o2,opera))
            }
            x.push(z[t])
        }else{
            y.push(parseFloat(z[t]))
        }
    }for(let i=0;i<x.length;i++){
        let opera=x.pop()
        let o2=y.pop()
        let o1=y.pop()
        y.push(harsh(o1,o2,opera))
    }
        return y[0]
}
function prec(m){
    if(m==="+"||m==="-"){
        return 1;
    }else if(m==="*"||m==="/"){
        return 2;
    }
    return 0;
}
function harsh(a,b,c){
    if(c==="+"){
        return a+b;
    }if(c==="-"){
        return a-b;
    }if(c==="*"){
        return a*b;
    }if(c==="/"){
        if(b!==0){
            return a/b;
        }else{
            alert("no");
        }
    }
}



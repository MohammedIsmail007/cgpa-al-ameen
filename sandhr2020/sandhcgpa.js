var vale = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem1 = [4,3,4,3,3,1.5,1.5];
var sum =0 ;
var gpa = [];
var tot1 = 0;
let mulsum1 = 0;
function get1(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa.push(vale[val]*sem1[i]);
        sum += 7 * vale[val]*sem1[i];
        mulsum1 = sum;
        tot1 = mulsum1 / 140 ;
    }
    document.getElementById("gpa1").value = tot1;
}

function sem1cgpacalc(){
    var semcgpa1;
    semcgpa1 = document.getElementById("gpa1").value;
    
    document.getElementById("totcgpa1").value = semcgpa1;

}

/*SEMESTER 2............................................*/


var vale2 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem2 = [4,3,3,3,1.5,1.5,1.5,0];
var sum2 =0 ;
var gpa2 = [];
var tot2 = 0;
var mulsum2 = 0;

function get2(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val2 = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa2.push(vale2[val2]*sem2[i]);
        sum2 += 8 * vale2[val2]*sem2[i];
        mulsum2 =  sum2;
        tot2 = mulsum2 / 136 ;
        
    }
    document.getElementById("gpa2").value = tot2;
}

function sem2cgpacalc(){
    var semcgpa2;
    semcgpa2 = document.getElementById("gpa2").value;    
    document.getElementById("totcgpa2").value = semcgpa2;

}

/*SEMESTER 2 end............................................*/

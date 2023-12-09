var vale = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem1 = [4,3,4,3,3,1.5,1.5];
var sum =0 ;
var gpa = [];
function get1(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa.push(vale[val]*sem1[i]);
        sum +=vale[val]*sem1[i];
        
        
    }
    document.getElementById("gpa1").value = sum;
}

function sem1cgpacalc(){
    var semcgpa1,credtot1;
    sem1gpa = document.getElementById("gpa1").value;
    credtot1 = 20;
    
    semcgpa1 = sem1gpa/credtot1;
    
    document.getElementById("totcgpa1").value = semcgpa1;

}

/*SEMESTER 2............................................*/


var vale2 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem2 = [4,3,3,3,1.5,1.5,1.5,0];
var sum2 =0 ;
var gpa2 = [];
function get2(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val2 = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa2.push(vale2[val2]*sem2[i]);
        sum2 +=vale2[val2]*sem2[i];
        
        
    }
    document.getElementById("gpa2").value = sum2;
}

function sem2cgpacalc(){
    var semcgpa2,credtot2;
    sem2gpa = document.getElementById("gpa2").value;
    credtot2 = 17.5;
    
    semcgpa2 = sem2gpa/credtot2;
    
    document.getElementById("totcgpa2").value = semcgpa2;

}

/*SEMESTER 2 end............................................*/

/*SEMESTER 3............................................*/

var vale3 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem3 = [4,4,3,3,3,1.5,1.5,1.5,3];
var sum3 =0 ;
var gpa3 = [];
var tot3 = 0;
let mulsum3 = 0;

function get3(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val3 = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa3.push(vale3[val3]*sem3[i]);
        sum3 += 9 * vale3[val3]*sem3[i];
        mulsum3 = sum3;
        tot3 = mulsum3 / 220.5 ;
        
        
    }
    document.getElementById("gpa3").value = tot3;
}

function sem3cgpacalc(){
    var semcgpa3;
    sem3gpa = document.getElementById("gpa3").value;
 
    
    semcgpa3 = tot3;
    
    document.getElementById("totcgpa3").value = semcgpa3;

}

/**SEMESTER 3 END ------------------------------------------------------------ */
/**SEMESTER 4 ------------------------------------------------------------------- */

var vale4 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem4 = [3,4,3,4,3,1,1.5,1.5,3];
var sum4 =0 ;
var gpa4 = [];
function get4(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val4 = ses[i].options[ses[i].selectedIndex].value;
     
        gpa4.push(vale4[val4]*sem4[i]);
        sum4 +=vale4[val4]*sem4[i];
        
        
    }
    document.getElementById("gpa4").value = sum4;
}


function sem4cgpacalc(){
    var semcgpa4,credtot4;
    sem4gpa = document.getElementById("gpa4").value;
    credtot4 = 24;
    
    semcgpa4 = sem4gpa/credtot4;
    
    document.getElementById("totcgpa4").value = semcgpa4;

}


var vale5 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem5 = [3,3,3,4,4,4,0];
var sum5 =0 ;
var gpa5 = [];
function get5(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val5 = ses[i].options[ses[i].selectedIndex].value;
       
        gpa5.push(vale5[val5]*sem5[i]);
        sum5 +=vale5[val5]*sem5[i];
        
        
    }
    document.getElementById("gpa5").value = sum5;
}

function sem5cgpacalc(){
    var semcgpa5,credtot5;
    sem5gpa = document.getElementById("gpa5").value;
    credtot5 = 21;
    
    semcgpa5 = sem5gpa/credtot5;
    
    document.getElementById("totcgpa5").value = semcgpa5;

}

var vale6 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem6 = [4,3,3,3,4,4,0];
var sum6 =0 ;
var gpa6 = [];
function get6(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val6 = ses[i].options[ses[i].selectedIndex].value;
       
        gpa6.push(vale6[val6]*sem6[i]);
        sum6 +=vale6[val6]*sem6[i];
        
        
    }
    document.getElementById("gpa6").value = sum6;
}

function sem6cgpacalc(){
    var semcgpa6,credtot6;
    sem6gpa = document.getElementById("gpa6").value;
    credtot6 = 21;
    
    semcgpa6 = sem6gpa/credtot6;
    
    document.getElementById("totcgpa6").value = semcgpa6;

}



var vale7 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem7= [3,3,3,4,4,4,3];
var sum7 =0 ;
var gpa7 = [];
function get7(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val7 = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa7.push(vale7[val7]*sem7[i]);
        sum7 +=vale7[val7]*sem7[i];
        
        
    }
    document.getElementById("gpa7").value = sum7;
}


function sem7cgpacalc(){
    var semcgpa7,credtot7;
    sem7gpa = document.getElementById("gpa7").value;
    credtot7 = 24;
    
    semcgpa7 = sem7gpa/credtot7;
    
    document.getElementById("totcgpa7").value = semcgpa7;

}




var vale8 = {'O':10,'Aplus':9,'A':8,'Bplus':7,'B':6,'C':5,'other':0};
var sem8 = [10,3];
var sum8 =0 ;
var gpa8 = [];
function get8(){
    var ses = document.getElementsByTagName("select");
    for(var i=0; i<ses.length; i++){
        var val8 = ses[i].options[ses[i].selectedIndex].value;
        //console.log("value of "+i+" is "+val+" = "+vale[val]+" "+sem1[i]+" "+vale[val]*sem1[i]);
        gpa8.push(vale8[val8]*sem8[i]);
        sum8 +=vale8[val8]*sem8[i];
        
        
    }
    document.getElementById("gpa8").value = sum8;
}



function sem8cgpacalc(){
    var semcgpa8,credtot8;
    sem8gpa = document.getElementById("gpa8").value;
    credtot8 =13;
    
    semcgpa8 = sem8gpa/credtot8;
    
    document.getElementById("totcgpa8").value = semcgpa8;

}


let request=require("request");
let cheerio=require("cheerio");
//let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary"
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
request(url,cb);
// console.log("Before");
function cb(error,response,html){
    // console.log(html);
    let cheerioselector=cheerio.load(html);
    //let element=cheerioselector(".match-comment .d-flex.match-comment-padder.align-items-center .match-comment-long-text p")
    //console.log(element.length);
   // console.log(element.text());
   //let element=cheerioselector("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard")
  // console.log(element).html();
    //let text=cheerioselector(element[0]).text();
    //let bowlersHtml="";
    let tables=cheerioselector(".table.batsman");
   // console.log(tables.html());
   
//    let text=cheerioselector(element).html();
//    console.log(text);
let max=-1;
let hpname="";
for(let  i=0;i<tables.length;i++){
    //bowlersHtml+=cheerioselector(tables[i]).html();
    //console.log("Hello");
    let teambatsmen=cheerioselector(tables[i]).find("tr");
    // let teambatsmen=cheerioselector(tables[i]).html();
    for(let j=0;j<teambatsmen.length;j++){
        //let eachbolcol=cheerioselector(teambowler[j]).find("td");
        let eachbatcol=cheerioselector(teambatsmen[j]).find("td");
        //console.log(playername[j]);
        if(eachbatcol.length == 8){
        let playername=cheerioselector(eachbatcol[0]).text();
        let runs=cheerioselector(eachbatcol[2]).text();
        
        console.log(playername,"  ",max);
        if(Number(runs)>=max){
            max=runs;
            hpname=playername;
        }
        }
        
    }
   // console.log(teambatsmen);
console.log("---------------------------------");
console.log(hpname," ",max);

}
//console.log(bowlersHtml);

}
// console.log("After");


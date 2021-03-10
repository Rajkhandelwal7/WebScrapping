let request=require("request");
let cheerio=require("cheerio");
let sinnglematchwinnigstats=require("./singlematch");

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results"
request(url,cb);
function cb(error,response,html){
    let chselector=cheerio.load(html);
    let element=chselector('a[data-hover="Scorecard"]');
    let matchcard=chselector(".col-md-8.col-16");
    for(let i=0;i<matchcard.length;i++){
        let allanchors=cheerio(matchcard[i]).find(".match-cta-container .btn.btn-sm.btn-outline-dark.match-cta");
        let links=chselector(allanchors[2]).attr("href");
        let fulllink="https://www.espncricinfo.com"+links;
        //console.log(fulllink);
        sinnglematchwinnigstats.fn(fulllink);
    }
    //console.log(element.length);
}
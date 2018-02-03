function reactionImage() {
    // $("#button").on("click", e => {
    if ($('#mode').hasClass("GIF")) {
        var q = ["reactions", "fuck-you", "school", "die", "sad", "why", "kill-me", "congratulations", "good job", "boss", "eyeroll", "please-no", "no"];
        var qRand = Math.floor(Math.random() * q.length);
        $.ajax({
            type: "GET",
            url: "https://api.giphy.com/v1/gifs/search?q=" + q[qRand] + "&limit=200&api_key=H3f3RCwlJrH01TzhUECP0qe6iEXw0FcV",
            success: data => {
                var rand = Math.floor(Math.random() * 200);
                var imgurl = data.data[rand].id;
                document.getElementById('image').innerHTML = '<iframe src=""  width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
                $('.giphy-embed').attr('src', "https://giphy.com/embed/" + imgurl);
            }
        })
    } else {
        $.ajax({
            type: 'GET',
            headers: {
                'Authorization': 'Client-ID 1148aadad018606'
            },
            url: 'https://api.imgur.com/3/album/ViivF',
            success: function (data) {
                var pRand = Math.floor(Math.random() * data.data.images_count);
                var imgurl = data.data.images[pRand].link;
                // console.log(imgurl);
                document.getElementById('image').innerHTML = '<img class="reactpic" src="" />';
                $('.reactpic').attr('src', imgurl);
            }
        });

    }
    // }) 


};

function sentence() {
    //random numbers 
    var rstarter = Math.floor(Math.random() * starter.length);
    var rstarter2 = Math.floor(Math.random() * starter2.length);
    var rsubj = Math.floor(Math.random() * subj.length);
    var r2subj = Math.floor(Math.random() * subj.length);
    var robj = Math.floor(Math.random() * obj.length);
    var r2obj = Math.floor(Math.random() * obj.length);
    var rverb = Math.floor(Math.random() * verb.length);
    var riverb = Math.floor(Math.random() * iverb.length);
    var riverb2 = Math.floor(Math.random() * iverb.length);
    var r2verb = Math.floor(Math.random() * verb.length);
    var rplace = Math.floor(Math.random() * place.length);
    var radj = Math.floor(Math.random() * adj.length);
    var r2adj = Math.floor(Math.random() * adj.length);
    var radv = Math.floor(Math.random() * adverb.length);
    var rtim = Math.floor(Math.random() * times.length);
    var rdi = Math.floor(Math.random() * dialogue.length);

  
    //parts of speech
    var strt = starter[rstarter];
    var strt2 = starter2[rstarter2];
    var sbj = subj[rsubj];
    var sbj2 = subj[r2subj];
    var v = verb[rverb];
    var v2 = verb[r2verb];
    var o = obj[robj];
    var o2 = obj[r2obj];
    var iv = iverb[riverb];
    var iv2 = iverb[riverb2];
    var a = adj[radj];
    var a2 = adj[r2adj];
    var adv = adverb[radv];
    var p = place[rplace];
    var tim = times[rtim];
    var dia = dialogue[rdi];

    var posNoun = possessive(sbj);
  
    

    // present participle (-ing form ) if ends in e, delete e and add ing 
    //if 2 words: first word present part(v split ) else present part v 
    var PP;

    ///WHY IS IT IV2 AND NOT IV 
    if (countWords(iv2) > 1) {
        var str = iv2.split(" ");
        PP = presentPart(str[0]);
        for (i = 1; i < countWords(iv2); i++) {
            PP += " " + str[i];
        }
    }
    else {
        PP = presentPart(iv2);
    }

    var P2;
    if (countWords(v) > 1) {
        var str = v.split(" ");
        P2 = presentPart(str[0]);
        for (i = 1; i < countWords(v); i++) {
            P2 += " " + str[i];
        }
    }
    else {
        P2 = presentPart(v);
    }

    //third person singular form (-es form)

    var P3 = thirdPer(v);
var ingstart;

if (sbj == "bae" || sbj == "squad" || sbj == "the professor"|| sbj == "he"|| sbj == "she"||sbj == "your mom"|| sbj == "someone") {
    ingstart = "starts";
}
else {
    ingstart="start";
}
    // console.log(PP);
    var tv, tiv;
    if (sbj == "bae" || sbj == "squad" || sbj == "the professor"|| sbj == "someone"|| sbj == "your mom"|| sbj == "he"|| sbj == "she") {
        tv = thirdPer(v);
        tiv = thirdPer(iv);
    }
    else {
        tv = v;
        tiv = iv;
    }

    // console.log(sbj+" "+tv);

    var content;
    var skels = [
        (strt + " " + sbj + " " + tv + " " + o),
        (strt + " " + sbj + " " + tv + " " + o),
        (strt2 + " " + sbj + " " + tv + " " + o),
        (strt + " " + sbj + " " + tiv),
        (strt + " " + sbj + " " + tv + " " + o + " " + p),
        ("me walking in to" + " " + v + " " + o),
        (strt + " you're " + a + " and you start thinking about " + o),
        ("me when I " + iv + " instead of " + PP),
        ("me thinking about how much i " + iv),
        ("me thinking about how much i " + v + " " + o),
        ("me thinking about " + o),
        ("me trying to " + iv),

        ("when someone who's " + a + " starts talking about " + o),
       // (strt + " you " + iv + " the night before your exam"),
        (strt + " you're " + a + " and someone starts talking about " + o),

        (strt + " " + o),
        ("when I'm " + p + " and i see " + o),
        (strt + " " + "you " + iv + " " + p),
        (o + " be like"),
        ("when I show up " + p + " but all I brought is " + o),
        ("trying to party " + p),
        ("why " + v + " " + o + " when you can " + iv),
        ("why " + iv2 + " when you can " + iv),
        
        ("bae: come over \<br> me: i can't i gotta " + v + " " + o + " \<br> bae: my parents aren't home \<br> me: "),
        ("&quot;I'm gonna " + v + " it&quot; \<br> -Me, about something i most definitely should not " + v),
       // ("when someone asks &quot;" + dia + "?&quot;"),
        ("when someone asks &quot;do you ever " + v + " " + o + "?&quot;"),
        ("when someone makes fun of " + o),
        ("when you're " + a + " and " + a2),
        (strt + " you're " + a + " and someone gives you " + o),
        ("me: *" + P3 + " " + o + "* "),
        ("friends: *" + v + " " + o + "* "),
        ("me: *is " + a + "* "),
        ("friends: ur always so " + a + " \<br> me: no i'm not \<br> also me:  "),
        ("me: i dont care about " + o + " \<br>" + o + ": *exists* \<br>me:  "),
        ("when someone says &quot;you look " + a + "&quot;"),
        (o + ": hi \<br> me:  "),
        ("me @ " + o),
        ("me: i'm not gonna " + iv + " \<br> me 5 seconds later: "),

        ("me: i should " + iv + " \<br> me 5 seconds later: "),
        ("when someone asks me if i'm " + a),
       

//        ("friend: what are you thinking about \<br> me: oh nothing \<br> my brain:  "),
        //(strt+ " i'm "+p+" and i see "+robj+" missed calls "),

      //  ("when your friends " + v + " the " + o + " that you worked so hard to " + v2),
       // ("I like my " + o + " the way I like " + o2 + ": " + a),
        ("when I show up " + p + " with " + o),
        (strt + " " + o + " be " + a),
        (strt+" "+sbj+" "+ingstart+" "+P2+" "+o),
        (strt+" "+sbj+" "+ingstart+" "+PP),
       // ("when you didn't think you were gonna "+v+" "+o+" but then you "+v+" one"),
        (o+" goals"),
        (strt+" ur "+a),
        (strt+" ur "+adv+" "+a),
        (strt + " you " + adv + " " + v + " " + o),
        (strt + " "+ sbj +" " + adv + " " + tv + " " + o),
        (strt +" you "+ v + " "+ posNoun+" "+ o),
        (strt +" you help" + " "+sbj+" "+ iv),
        //("being "+a+" with "+o)

        // ("when u wanna " + v + " " + o + " but " + o + " " + v + " you"),

        // (strt +" "+ sbj +  " " + v +" "+ o+" but then "+ iv + " anyway"),
        // (strt +" i "+ adv+" "+v+" "+o+" but then ppl "+v2+" "+o2),
        // me also me
        //--("when someone asks me how i'm doing"),
        // --("reading week? more like "+iv+"ing week"),
        // (tim+" vibes "),
        // --("netflix and chill? more like netflix and "+ iv ),
        // --("netflix and chill? more like netflix and "+ v + " " + o ),
    ];
    var structure = Math.floor(Math.random() * skels.length);

    content = skels[skels.length - 2];
    //content = skels[5];
    content = skels[structure];

    document.getElementById('sentence').innerHTML = content;
    reactionImage();
};



function toggleMode() {
    $('#mode').toggleClass('GIF');
    $('#mode').toggleClass('PIC');
    if ($('#mode').hasClass("GIF")) {
        $('#mode').html("PIC // <B>GIF<B/>");

    } else {
        $('#mode').html("<B>PIC</B> // GIF");


    }
};

// function hideButton(){
//     $(''.onKeyPress)
// }

//CONJUGATION

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

function presentPart(str) {
    var presentpart;

    if (str == "die" || str == "lie") {
        presentpart = str[0] + "ying";
    }
    else if (str == "can't"|| str == "see") { //do nothing
        presentpart = str;
    }
    else if (str == "panic") { 
        presentpart = str+"king";
    }
    else if (str == "shop"|| str == "stop"|| str == "snap"||str == "skip") { //double p
        presentpart = str+"ping";
    }
    else if (str == "instagram") { //double m
        presentpart = "instagramming";
    }
   
    else if (str == "get"|| str == "forget" || str == "snapchat" || str == "quit" || str == "hit") { //double t 
        presentpart = str+"ting";
    }
    else if (str[str.length - 1] == "e") { // remove e 
        presentpart = str.slice(0, -1);
        presentpart += "ing";
    }
   
    else {
        presentpart = str + "ing";
    }
    return presentpart;
}


function thirdPer(thisVerb) {
    var thirdpv;
    if (countWords(thisVerb) > 1) {
        var str = thisVerb.split(" ");
        thirdpv = str[0] + "s";
        for (i = 1; i < countWords(thisVerb); i++) {
            thirdpv += " " + str[i];
        }

    }
    else if (thisVerb == "have") {
        thirdpv = "has";
    }
    else if (thisVerb == "be") {
        thirdpv = "is";
    }
    else if (thisVerb[thisVerb.length - 1]=="o"){
        thirdpv = thisVerb+"es";
    }
    else if (thisVerb == "can't afford") {
        thirdpv = thisVerb;
    }
    else if (thisVerb[thisVerb.length - 1] == "s" || thisVerb[thisVerb.length - 1] == "h" || thisVerb[thisVerb.length - 1] == "x") {
        thirdpv = thisVerb + "es";
    }
    else {
        thirdpv = thisVerb + "s";
    }
    return thirdpv;
}


// MAKE SUBJECTS TO POSSESSIVE I.E FRIENDS -> FRIENDS' , BAE TO BAE'S SHE TO HER, ETC
function possessive(subject) {

    var pos;

    if (subject=="you") {
        pos = "your";
    }

    else if (subject=="she") {
        pos = "her";
    }
    else if (subject=="he") {
        pos = "his";
    }
    else if (subject=="they") {
        pos = "their";
    }
    else if (subject[subject.length - 1] == "s") {
        pos = subject+"'";
    }
    else {
        pos = subject+"'s";
    }
    
    return pos;

}

//things thatll show after you click on 
$(".pizza").hide();  
$(".text").hide();

//photos in array
var relaxPhotos = [
    "",
    "https://cdn.dribbble.com/users/189524/screenshots/1931665/01-kitty_v2.gif",
        " https://media.tenor.com/images/f584f6a1d2f1134a50a2b48e3c4243f9/tenor.gif",
        "https://media.giphy.com/media/JyskkePkMKt7a/giphy.gif"
];
var hungryPhotos = [
    "",
    "https://media.giphy.com/media/Th1BV9JxpBore/giphy.gif",
        "https://media.giphy.com/media/3JgtnXdRhSflK/giphy.gif",
        "https://media.giphy.com/media/w6F3eXWKvDuiQ/giphy.gif"
];
var happyPhotos=[
    "",
    "https://media0.giphy.com/media/3o7btZjaYxqkGyOYA8/source.gif",
    "https://media.giphy.com/media/1BURfsUHbv4eQ/giphy.gif",
    "https://media0.giphy.com/media/l0K4hqqqwgFijgVLa/giphy.gif"
];
var sleepyPhotos=[
    "",
    "https://media.giphy.com/media/6h5IYmoBn2xYQ/giphy.gif",
    "https://media.giphy.com/media/SSkPTlzkzsoU/giphy.gif",
    "https://media3.giphy.com/media/QthHQMMfHaGk0/giphy.gif?cid=790b76115cd41a4c526c4f5249c3c42d&rid=giphy.gif",
];
var positivePhotos=[
    "",
    "https://i.imgur.com/o6qgjVK.gif",
    "https://media1.tenor.com/images/5dbf980426d0a1047a6f84ce53384491/tenor.gif?itemid=12327682",
    "https://media3.giphy.com/media/8wUiqijLSW81O/200w.webp?cid=790b76115cd41ab97a662e6d6b51bc5d&rid=200w.webp",
];
var mondayPhotos=[
    "",
    "https://data.whicdn.com/images/40143620/original.gif",
    "https://media.giphy.com/media/JbHuTFiahB0uk/giphy.gif",
    "https://media2.giphy.com/media/l0HU2BianPOfENByo/giphy.gif",
];
var blankPhotos=[
    "",
    "https://i.imgur.com/U5JnLH9.gif?noredirect",
    "https://i.chzbgr.com/full/8541559808/h35AE81E8/",
    "https://www.emoji.co.uk/files/emoji-one/smileys-people-emoji-one/1277-face-without-mouth.png",
];
var duckPhotos=[
    "",
    "https://media.tenor.com/images/52fa2dac183c042ce21b8c53c5ec2b95/tenor.gif",
    "https://media1.giphy.com/media/2wZvMQNmeUBiDcMnnW/source.gif",
    "https://media0.giphy.com/media/3oriObAogu8BTaUFBC/source.gif"
    ];


//When user click the tap here, it should change the page base on user ipt.
$(".click").click(function(){
    $(".pizza").show();
    var userIpt = $(".type").val().toLowerCase();
    $("input").val("");
     console.log(userIpt);
     
     //if user typed relax itll change emotions to the image.
    if(userIpt === "relax"){
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/tyAEsLxaeW11K/giphy.gif')";
        document.body.style.backgroundColor = "#65CEFE";
         $(".top").html("Relaxing ~_~");
         theme("aqua");
        change(relaxPhotos);
        text("So you're relax. Thats cool. <small>I guess</small>");
    }
    
    else if(userIpt === "hungry"){
        document.body.style.backgroundImage = "url('https://uploads.scratch.mit.edu/users/avatars/22919500.png')";
        document.body.style.backgroundColor = "#65CEFE";
         $(".top").html("Hungry :o");
         theme("orange");
        change(hungryPhotos);
        text("Stare at these images of foods. <small>Don't try to eat it.</small>");
    }
    else if(userIpt === "happy"){
        document.body.style.backgroundImage = "url('https://media1.giphy.com/media/26FPKv6XRNZiF5rUs/source.gif')";
        document.body.style.backgroundColor = "white";
         $(".top").html("Happy :D");
         theme("yellow");
        change(happyPhotos);
        text("If you're happy and you know it clap your hands. 👏👏 <br><small>I'm not clapping..I'm not happy. It's damn monday again :(</small>");
    }
    else if(userIpt === "sleepy"){
        document.body.style.backgroundImage = "url('https://media0.giphy.com/media/lck0BfsWrHeFUU63u1/giphy.gif')";
         $(".top").html("Sleepy >.>");
         theme("gray");
        change(sleepyPhotos);
        text("'' I've always envied people who sleep easily. Their brains must be cleaner, the floorboards of the skull well swept, all the little monsters closed up in a steamer trunk at the foot of the bed.'' ― David Benioff, City of Thieves <br> <small>You know theres something call sleeping..Right? Or just drink some coffee.  </small");
    }
    else if(userIpt === "positive"){
        document.body.style.backgroundImage = "url('https://media1.giphy.com/avatars/chibird/Y5Id1jkAgQmj.gif')";
         $(".top").html("Positivity! :)");
         theme("pink");
        change(positivePhotos);
        text("If you can't do it no one can! <small>Doubt that since theres alot of talented people. It's just positivity.. </small");
    }
    else if(userIpt === "monday"){
        document.body.style.backgroundImage = "url('https://media2.giphy.com/media/3oKIPiHpdCUPrms3Bu/source.gif')";
         $(".top").html("Monday.... >.< ");
         theme("orange");
        change(mondayPhotos);
        text("Just power through monday! Show monday who's the boss! <small>I'm not doing it.... Too much work .Z-Z </small");
    }
    //secret
    else if(userIpt === ""){
        document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/PartialHandsomeJanenschia-max-1mb.gif')";
         $(".top").html("Okay ._. ");
         theme("white");
        change(blankPhotos);
        text("Did you get lazy or you just want to see some cool things <small>._. you can type in duck for more secrets. </small");
    }
    else if(userIpt === "duck"){
        document.body.style.backgroundImage = "url('http://33.media.tumblr.com/6594ec504f11d61c1c45d4a9c83112db/tumblr_nrchiceMy01u2u368o1_500.gif')";
         $(".top").html("Quack");
         theme("yellow");
        change(duckPhotos);
        text("Quack QUACK quack quack <small>QUACK 100</small");
    }
});


//parameters 
function change(img){
        $(".type,.click, .mood").fadeOut();
        img.forEach(function(image){
        $("body").append("<img class = 'newer' src=" + image+ ">" );
    });
}

function text(word){
    $(".text").fadeIn();
    $(".text").html(word);   
}

function theme(color){
    $(".top").css("border-color", color);  
}
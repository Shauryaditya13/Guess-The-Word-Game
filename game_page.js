player1name=localStorage.getItem("player1namekey");
player2name=localStorage.getItem("player2namekey");
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="Question turn:"+player1name;
document.getElementById("player_answer").innerHTML="Answer turn:"+player2name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Word In Lowercase="+word);

    char1=word.charAt(1);
    console.log(char1);

    position2=Math.floor(word.length/2);
    char2=word.charAt(position2);
    console.log(char2);

    position3=word.length-1;
    char3=word.charAt(position3);
    console.log(char3);

    underline1=word.replace(char1,"_");
    underline2=underline1.replace(char2,"_");
    underline3=underline2.replace(char3,"_");
    console.log(underline3);

    questionTag="<h4 id='word_display'>q. "+underline3+"</h4>";
    inputTag="<br>answer:<input id='input_check_box' type='text'>";
    buttonTag="<br><br><button class='btn btn-info' onclick='checkanswer()'>check</button>";
    row=questionTag+inputTag+buttonTag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}


player_question="player1";
player_answer="player2";

function checkanswer() {
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log(answer);

    if(answer==word) {
        if(player_answer=="player2"){
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }else{
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
    }
    if(player_question=="player1"){
        player_question="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+player2name;
    }else{
        player_question="player1";
        document.getElementById("player_question").innerHTML="Question turn:"+player1name;
    }

    if(player_answer=="player1"){
        player_answer="player2";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player2name;
    }else{
        player_answer="player1";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player1name;
    }
    document.getElementById("output").innerHTML="";
}
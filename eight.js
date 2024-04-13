let responses=["That sandwhich was...delicious","Yes","Maybe","No","You are the father","New Ball. Who this?","Can't you figure that our yourself?","Please shake again","Get a life, loser.","HA HA HA HA HAAAA","Trust me, you don't want to know.","It's hard to say.","I have a headache. Ask again later.","Meh.","Shatap","OBVIOUSLY","Like i care.",":)","Ask Dad."]

function getRes(){
    let index=Math.floor(Math.random() * (responses.length));

    let choice=responses[index];
    document.getElementById('response').innerText=choice;
}
const submitButton=document.getElementById('submit');
const ballObj=document.getElementById('margin-ball');


submitButton.addEventListener("click",()=>{
    if (document.getElementById('question').value.trim() !== "") { 
        
            getRes();
       
    }
    });



import random

responses=["That sandwhich was...delicious","Yes","Maybe","No","You are the father","New Ball. Who this?","Can't you figure that our yourself?","Please shake again","Get a life, loser.","HA HA HA HA HAAAA","Trust me, you don't want to know.","It's hard to say.","I have a headache. Ask again later.","Meh.","Shatap","OBVIOUSLY","Like i care.",":)","Ask Dad."]

index=random.randint(0,len(responses)-1)

choice=responses[index]
with open("response.txt",'w') as res:
    res.write(choice)
    
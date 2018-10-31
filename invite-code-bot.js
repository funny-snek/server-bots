const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'Your Discord Token Here'


bot.on('message', function(message)
{
    if(message.channel.type === "dm")
    {
    message.author.send("Nice Try. Please use the proper channel."); 
    }
    else if(message.content == '!code')
    {
        var fs = require('fs');
        fs.readFile('C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/Always On Server/InviteCode.txt', 'utf8', function(err, data) {  
            if (err) throw err;
            console.log(data);
            message.author.send(data);  
        });
           

    }

}
);


bot.login(TOKEN);

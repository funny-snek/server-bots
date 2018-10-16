const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'your token here'


bot.on('message', function(message)
{

    if(message.content == '!serveroff')
    {
        var fs = require('fs');
        fs.writeFile('C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/ServerConnectionReset/serverstate.txt', 'off', function(err) {  
            if (err) throw err;
            message.reply('Server is Offline!');  
        });
           

    }

    if(message.content == '!serveron')
    {
        var fs = require('fs');
        fs.writeFile('C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/ServerConnectionReset/serverstate.txt', 'on', function(err) {  
            if (err) throw err;
            message.reply('Server is Online!');  
        });
           

    }




}
);


bot.login(TOKEN);

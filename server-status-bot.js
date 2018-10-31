onst Discord = require('discord.js');
const find = require('find-process');
const bot = new Discord.Client();
const TOKEN = 'Discord Token Goes Here'

//need to install find-process to use this bot: https://www.npmjs.com/package/find-process
// Bot will be green for online, red for offline, and will say how many players are currently online


function update() {
    
    

        find('name', 'StardewModdingAPI.exe').then(function(list){
        if (list.length >= 1)
        {
            
            bot.user.setStatus('online')

            var fs = require('fs');
        fs.readFile('C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/Always On Server/ConnectionsCount.txt', 'utf8', function(err, data) {  
            if (err) throw err;
            if (data == 1)
            {
                bot.user.setActivity(data +' Farmer Online', { type: "WATCHING"})
            }
            else
            {
                bot.user.setActivity(data +' Farmers Online', { type: "WATCHING"})
            }
        })


            
        }
        else
        {
            
            bot.user.setStatus('dnd')
            bot.user.setActivity('Server Offline',{ type: "STREAMING"})
        }

    })
    

    

  }
  bot.on("ready", () => {
    console.log("I am ready!");
    bot.setInterval(update,3000);
  });

  
  
  
  


bot.login(TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Ready to go mothafuckas");
  client.user.setPresence({ activity: { name: 'I\'m back bitches' }, status: 'dnd' })
})

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send({embed: {
    color: 3447003,
    title: "Command List",
    description: "This is a list of all the commands I have. The command prefix is `hm!`.  All commands must be typed in lower case.",
    fields: [{
        name: "Ping",
        value: "See my ping time in ms."
      },
      {
        name: "Die",
        value: "Why would you dare kill me, the Queen?"
      },
      {
        name: "Roll",
        value: "Use this command to show images of my cute corgis to your friends!"
      },
      {
        name: "Anthem",
        value: "Vibe to the British anthem like a true knighted gamer."
      },
      {
        name: "Time",
        value: "Shows the current time."
      },
      {
        name: "Shoot @someone",
        value: "Shoot your enemy, perhaps a Soviet spy or a drunk Irishman?"
      },
      {
        name: "Cum",
        value: "Every moment is a consume the cum chalice moment!"
      },
      {
        name: "RuleTag",
        value: "Yes, even I, the Queen, have a RuleTag from RuleConnect34! Make your own RuleTag [here](https://rc34.xyz/ruletag.html)."
      },
      {
        name: "六四事件",
        value: "了解有关六四事件的真相！"
      },
      {
        name: "Bugger @someone",
        value: "Bugger someone the Bruno Powroznik way, bareback!"
      },
    ],
    footer: {
      text: "This bot was made by confusedNT#6969."
	}
  }
});
  } else

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send(`Pong! ${new Date().getTime() - message.createdTimestamp} ms`);
  } else

  if (message.content.startsWith(config.prefix + "die")) {
    message.channel.send("No, I am immortal!");
  } else

  if (message.content.startsWith(config.prefix + "roll")) {
    message.channel.send("Never gonna give you up, never gonna let you down... https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif");
  } else

  if (message.content.startsWith(config.prefix + "time")) {
    message.channel.send("The current time is **69:00**.");
  }

  if (message.content.startsWith(config.prefix + "anthem")) {
    message.channel.send("God is saving me so I'll never die bitch https://youtu.be/szfHgbIj65k");
  }

  if (message.content.startsWith(config.prefix + "shoot")) {
  if(message.mentions.members.size == 1) {
let member = message.mentions.members.first()
    var shots = [`${message.author} shot ${member}! сука блять! https://media1.tenor.com/images/77c313e3e1e0b31f5cc5f66a4f7c7217/tenor.gif?itemid=11101357`, `${message.author} shot ${member}! Rest in piss, forever miss... https://lparchive.org/Grand-Theft-Auto-San-Andreas-(Screenshot)/Update%2021/11-gtasa11.gif`, `${message.author} shot ${member}! PEW PEW! https://thumbs.gfycat.com/FoolhardyPositiveGlowworm-max-1mb.gif`];
    var shot = Math.floor(Math.random() * shots.length);
    message.channel.send(shots[shot]);
  }
}

  if (message.content.startsWith(config.prefix + "cum")) {
    message.channel.send("I, Queen Elizabeth the Second, humbly submit a toast! https://media.discordapp.net/attachments/662398947716890675/700004108207390840/cumchalice.gif");
  }

  if (message.content.startsWith(config.prefix + "ruletag")) {
    message.channel.send("Here you are dear, this is my RuleTag from RuleConnect34! https://cdn.discordapp.com/attachments/699626439074381946/700368169746825256/unknown.png ");
  }

  if (message.content.startsWith(config.prefix + "六四事件")) {
    message.channel.send("除了人们一起吃蛋糕外，什么都没发生。 谈话足够，去古拉格。");
  }

  if (message.content.startsWith(config.prefix + "bugger")) {
  if(message.mentions.members.size == 1) {
let member = message.mentions.members.first()
    var buggers = [`${message.author} buggered ${member}! Buggery is fantastic! https://i.makeagif.com/media/11-06-2016/a3Y0Q4.gif`, `${message.author} buggered ${member} and gave them an Arse Injected Death Sentence (AIDS)! Buggery can be fatal! https://tenor.com/view/roblox-porn-minecraft-hump-humping-gif-15545205`, `${message.author} buggered ${member}! Buggery is good for you! https://tenor.com/view/shrek-shrek-is-love-gif-5573099`];
    var bugger = Math.floor(Math.random() * buggers.length);
    message.channel.send(buggers[bugger]);
  }
}
});

client.login(config.token);

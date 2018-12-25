const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "#"

// playing
client.on('ready', () => {                           
client.user.setGame(`#rules|#help`,'https://www.twitch.tv/ℕ o v a Codes♥');
  });
client.on('message', message => {
  let anything = [
    "وعليكم السلام",
    "ياهلا والله",
    "وعليكم السلام ورحمة الله وبركاته",
    "مرحبا بك في السيرفر"
    
    
  ]
  if(message.content === 'السلام عليكم'){
    message.reply(`${anything[Math.floor(Math.random() * anything.length)]}`)
    
    return;
  }
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown: ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
if(message.content.split(' ')[0] == prefix + 'dac') {  
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply(`**I D'ont Have Permission For That !`);
message.guild.channels.forEach(m => {
m.delete();
});
}

if(message.content.split(' ')[0] == prefix + 'dar') { 
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply(`**I D'ont Have Permission For That !`);
message.guild.roles.forEach(m => {
m.delete();
});
message.reply("`تم حذف جميع الرتب بنجاح`")
}
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('guildMemberAdd', member => {
          member.createDM().then(function (channel) {
       return channel.send("**`نورت السيرفر يا كبير  ` \n []**")
          }
          )});

		  client.on('message', message => {
        if (message.content === prefix + "mc") {
     let user = message.mentions.users.first();
     var args = message.content.split(" ").slice(1);
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
       moment.locale('en-TN'); //TN
      var id = new  Discord.RichEmbed()
         .setColor("RANDOM")
       
         .setDescription([`**Time** : ${moment().format('HH:mm:ss A')}**Date** : ${moment().format('YYYY/M/D - MMMM ')}**Today** : ${moment().format('dddd')}`])
.setFooter(`${heg.username}`,heg.avatarURL)
         message.channel.send(id)
}
});
		  
		  client.on('message', message => {
    if(message.content.startsWith("#google")) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
           const args = message.content.split(' ').slice(1);
                let query = args;
                message.channel.send({embed: {
                    color: 3447003,
                    title: "Your Search",
                    url: `https://www.google.com/search?q=${query}`,
                    description: "Look at your Search Query via Google.",
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "Powered by Google"
                    },
                }});
                
    }
});
		  
client.on('message', message => {
  if (message.content.startsWith('!فعلني')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "مفعل"));
 
 }
 });

client.on('ready', () => {
console.log("Toxic CODES - IS START");
});



client.on('message', msg => {
  if (msg.content === '#active') {
    msg.reply('تم تفعيلك');
  }
});
		  
		  client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **bc1** ' ,' **بث جماعي + للكل + مطور** ')
.addField('     **bc2**  ' ,' **بث جماعي + للكل + غير مطور** ')
.addField('     **bc3** ' , '**بث جماعي + للأونلاين + غير مطور + منشن للشخص**') 
.addField('     **bc4** ' , '**بث جماعي + للكل + غير مطور + منشن للشخص**') 
.addField('     **ping** ' ,' ** سرعة اتصال البوت**')
.addField('     **كت تويت** ' , '**هذي لعبة الكت تويت**')
.addField('     **هل تعلم ** ' ,' **  لعبة هل تعلم  ** ')
.addField('     **clear ** ' ,' **  لمسح الشات بدون رقم  ** ')
.addField('     **say ** ' ,' **  عشان يتكلم عنك  ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
		  
client.on('message', message => {
            if (message.content.startsWith("rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
		  
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '527084831893356545').setName("W");
client.channels.find('id', '527084831893356545').setName("We");
client.channels.find('id', '527084831893356545').setName("Wel");
client.channels.find('id', '527084831893356545').setName("Welc");
client.channels.find('id', '527084831893356545').setName("Welco");
client.channels.find('id', '527084831893356545').setName("Welcom");
client.channels.find('id', '527084831893356545').setName("Welcome");
client.channels.find('id', '527084831893356545').setName("Welcome T");
client.channels.find('id', '527084831893356545').setName("Welcome To");
client.channels.find('id', '527084831893356545').setName("Welcome To C");
client.channels.find('id', '527084831893356545').setName("Welcome To Co");
client.channels.find('id', '527084831893356545').setName("Welcome To Cod");
client.channels.find('id', '527084831893356545').setName("Welcome To Code");
client.channels.find('id', '527084831893356545').setName("Welcome To Codes");
  }, 3000);
});


client.on('message', message => {
var prefix = "#";
       if(message.content === prefix + "mm") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been Locked Channel**")
              });
                }
    if(message.content === prefix + "unmc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
              });
    }
       
});

		 
		 client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('526505018682114057').roles.find("name", "member").setColor("RANDOM");
  };
  setInterval(lol, 5000);
});

		 
client.login('NTI3MDY4MDkyNjE1MDk4Mzk4.DwOhOw.ViiX9IuBga1q-AgJto8VHm705cM');

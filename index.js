const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzIzNjM5NDI2NTQyMjA3MDc4.Xu0lQQ.vrcVle8ZZpcT4UgqQW5OxWFAdYE';

const prefix = '?';
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100';
const https = require('https');
const { readFileSync } = require('fs');
const ms = require("ms");
const { create } = require('domain');
const { title } = require('process');
const newUsers = [];
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 10, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 15, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 1000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: ['359731859409862656'], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
app.listen(process.env.PORT || 3000);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}.`);
    bot.user.setActivity(`Serving Humans! My prefix is ?.`);
});

    bot.on('guildMemberUpdate', (oldMember, newMember) => {
	// If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
	const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
	if (removedRoles.size > 0) console.log(`The roles ${removedRoles.map(r => r.name)} were removed from ${oldMember.displayName}.`);
	// If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
	const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
	if (addedRoles.size > 0) console.log(`The roles ${addedRoles.map(r => r.name)} were added to ${oldMember.displayName}.`);
    });

    
        


    bot.on('message', (message) => antiSpam.message(message)); 
    bot.on('message' , message=>{

    
    
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
            case 'help':
            const embed1 = new Discord.MessageEmbed()
                .setTitle("Help")
                .setColor(9384170)
                .setDescription("A help for you! My prefix is ?.")
                .addField("?ping" , "Show your latency.")
                .addField("?invite" , "Show the bot ivite link.")
                .addField("?info version" , "Shows the version of the bot.")
                .addField("?info Author" , "Shows the Dev and Creator name.")
                .addField("?info Testers" , "Shows the testers.")
                .addField("?purge" , "Remove messages from a channel.")
                .addField("?meme" , "Meme for you!")
                .addField("?kick" , "Kicks a member.")
                .addField("?ban" , "Bans a member.")
            message.channel.send(embed1);
            break;
            case 'ping':  
            message.reply('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
            break;
            case 'invite':
            message.reply('https://discord.com/oauth2/authorize?client_id=723639426542207078&scope=bot&permissions=8');
            break;
            case 'info':
            if(args[1] === 'version'){
                message.reply('Version 2.0.1');
            }
            if(args[1] === 'Author'){
                message.reply('Zack is my Creator and Developer. Any problems contact ＳＬＥＥＰ#9994.');
            }
            if(args[1] === 'Testers'){
                message.reply('An huge thank you for the people that tested the bot with me. Zax. #3970 and skeppy [アイザック] #1966 ');
            }
            break;
            case 'purge':
            if(message.member.hasPermission('ADMINISTRATOR')|| message.member.hasPermission('MANAGE_MESSAGES')){
            message.channel.bulkDelete(args[1]+1);
            console.log(message.author.tag + ' purged the channel.')
            }
            break;
            case 'rob':
            message.reply('You cant rob a person because that is bad. :D');
            break;
            case 'shutdown':
            if(message.author.id === '359731859409862656') {
                message.channel.send('The bot is shutting down.');
                setTimeout(function(){ 
                    // Restart command
                    process.exit();
                 }, 5000);  
            }
            break;
            case 'HappyBirthDay':
            message.channel.send('Happy Bithday Zax.! Have a wonderfull day!');
            break;
            case 'meme':
            https.get(url, (result) => {
                var body = ''
                result.on('data', (chunk) => {
                    body += chunk
                })
    
                result.on('end', () => {
                    var response = JSON.parse(body)
                    var index = response.data.children[Math.floor(Math.random() * 99) + 1].data
    
                    if (index.post_hint !== 'image') {
    
                        var text = index.selftext
                        const textembed = new Discord.MessageEmbed()
                            .setTitle(subRedditName)
                            .setColor(9384170)
                            .setDescription(`[${title}](${link})\n\n${text}`)
                            .setURL(`https://reddit.com/${subRedditName}`)
    
                        message.channel.send(textembed)
                    }
    
                    var image = index.preview.images[0].source.url.replace('&amp;', '&')
                    var title = index.title
                    var link = 'https://reddit.com' + index.permalink
                    var subRedditName = index.subreddit_name_prefixed
    
                    if (index.post_hint !== 'image') {
                        const textembed = new Discord.RichEmbed()
                            .setTitle(subRedditName)
                            .setColor(9384170)
                            .setDescription(`[${title}](${link})\n\n${text}`)
                            .setURL(`https://reddit.com/${subRedditName}`)
    
                        message.channel.send(textembed)
                    }
                    console.log(image);
                    const imageembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setImage(image)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})`)
                        .setURL(`https://reddit.com/${subRedditName}`)
                    message.channel.send(imageembed)
                }).on('error', function (e) {
                    console.log('Got an error: ', e)
                })
            })
            break;


            case 'hi':
                message.channel.send('Hi.@Zax.#3970');
            break;
            case 'kick':
                if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINSTRATOR")) return message.channel.send('You dont have permission to preform that command');
                let user = message.mentions.users.first();

                let member = message.guild.member(user);
                let reason = args.slice(1).join(" ");

                if (!user) return message.channel.send("Please mention user.");
                if (user.id === message.author.id) return message.channel.send("You can't kick yourself");
                if (user.id === bot.user.id) return message.channel.send("You can't kick me. :D");

                if (!reason) reason =  "No reason provided";

                member.kick(reason).then(() =>{
                    message.channel.send(`Successufully kicked **${user.tag}**`);
                    console.log(`${user.tag} was kicked by ` + message.author.id);
                }).catch(err =>{
                    message.reply("I was unable to kick the member.");
                })
                break;
                
                case 'ban':
                    let xdemb = new Discord.MessageEmbed()
                    .setColor("#00ff00")
                    .setTitle("Ban Command")
                    .addField("Description:", `Ban a member`, true)
                    .addField("Usage:", `!ban [user] [reason]`, true)
                    .addField("Example:", `!ban @Odar spam`)

                    if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Sorry you don't have permission to use this!");
                    
                    let user1 = message.mentions.users.first();
                    let member1 = message.guild.member(user1);
                    let reason1 = args.slice(1).join(" ");

                    if(!member1) return message.channel.send(xdemb)
                    if(!member1.bannable) return message.channel.send("I can't ban this user!")
                    if(member1.user.id === "359731859409862656") return message.channel.send("I can't ban my owner!")

                    if(member1.id === message.author.id) return message.channel.send("You can't ban your self")

                    if(!reason1) {
                        res = "No reason given";
                            } else {
                            res = reason1
                        }

                            member1.ban(reason1).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

                            let bean = new Discord.MessageEmbed()
                            .setColor("#00ff00")
                            .setTitle(`Ban | ${member1.user.tag}`)
                            .addField("User", member1, true)
                            .addField("Moderator", message.author, true)
                            .addField("Reason", res)
                            .setTimestamp()

                            message.channel.send(bean)

                            message.delete()
                            break;
                            
                                
                            


                                


                    

                            

                
            
            
        
        
        
        
        
        
        
        }
        
            

        

         

    
    })



bot.login(process.env.token);
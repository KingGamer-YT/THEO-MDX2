const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/4yX4WJs5/Theo-hacker-1.jpg" || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/4yX4WJs5/Theo-hacker-1.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_01_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdBVFYxZWdGS1hxV3ZLM1hGNjI1SUlxWUFzaUNNNkhWN2VGQXdPMUx0Qk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2NzcyNTk4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUE2M0U3QTVBRkRCNjFDOTREMTU2RkNFRUZBQTE2RThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTQ1MzAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2NzcyNTk4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTY0Qjk1M0YzOTg3NTVBMDZERjdEMTM3MDJBOUIwNEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTQ1MzAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2NzcyNTk4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjMwOTQ4RjhGOEQ2RUIwNTg1N0VBRkFDRUZGOTQ5MTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTQ1MzAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2NzcyNTk4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTFEM0YyNjg1NTEwRTM2RDg5OUE3NjMxQThFNzM2MjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTQ1MzA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInQwY1YtaEFBU2hta194RVdzRWE0LWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzNjMDZmYWUtYzRiZC00NGM2LTgyN2QtMzRjYzhjOWY4NTUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgOSxcbiAgICAgIDIzOCxcbiAgICAgIDEyMyxcbiAgICAgIDEzMSxcbiAgICAgIDIyNCxcbiAgICAgIDExNSxcbiAgICAgIDIyMCxcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAyNDQsXG4gICAgICAxNDUsXG4gICAgICAxOTcsXG4gICAgICAyMjcsXG4gICAgICA2OSxcbiAgICAgIDE0MixcbiAgICAgIDE0MCxcbiAgICAgIDQwLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxNDQsXG4gICAgICA3NSxcbiAgICAgIDE2NSxcbiAgICAgIDIyOCxcbiAgICAgIDIzMyxcbiAgICAgIDE1NCxcbiAgICAgIDY5LFxuICAgICAgNCxcbiAgICAgIDE0NixcbiAgICAgIDE1NSxcbiAgICAgIDY2LFxuICAgICAgOCxcbiAgICAgIDE1MSxcbiAgICAgIDEyNCxcbiAgICAgIDU2LFxuICAgICAgMTMyLFxuICAgICAgMjE3LFxuICAgICAgNjAsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbVEyYUVDRUpLd3ZMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJZbFhYbDlKVjYrbWYwaFI3QkdnVk9HcGtsVDI2RCtrVUZoU096MTJLZ009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidE15ZmorR05yOXJxbnBsNGJEcEk3V0UyUSt5MWkxWi9pOERKTklZL0hFdWJsMnlZR25zbU1RL2w4ai9aOVd5RDZpSDBCVkdHYXRYZmoxK01aOEFjQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNlRMSE1kUFd0bTBiRGxUeGpYb056Z2UyMWtxb2FhVnhuVUxDQ3NhRWtsUDRJbi9ZN05tbVU4UDVyZGE4c2ZLNjZoRmhGcXZja3IyRjhBWHM4d1dXRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY3NzI1OTg3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NzMzNjk4Mzg1MTAyMDoxOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEQC1KT0vigqxSXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY3NzI1OTg3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY5NDUzMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mVy5qc29uIjogIntcImtleURhdGFcIjpcIjFNaDAxMFc2YkdibHBDamhqVGZLNjJoZnFKR2tyRVBvWmM1dWhrZjN4UUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjA3NTM3MTYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY5NDUzMDE4OTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO-MD ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MDX2",
  ownername:process.env.OWNER_NAME|| "Theo_Idolo😎♒💨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Akwa ibom,Nigeria"
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Bamireid12/gifted-bot-md";
global.gurl  =process.env.GURL  || " ";
global.website=process.env.GURL || " " ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/156d09c083840fd8872a7.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348102925093" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "admin";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348102925093";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "•",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©𝚩𝚫𝚳𝚰𝚪𝚵𝚰𝐃_𝐒_𝐖𝚰𝐅𝚵" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"),
 
  author : process.env.PACK_AUTHER|| "𝚩𝚫𝚳𝚰𝚪𝚵𝚰𝐃_𝐒_𝐖𝚰𝐅𝚵",
  packname: process.env.PACK_NAME || "𝚩𝚫𝚳𝚰𝚪𝚵𝚰𝐃_𝐒_𝐖𝚰𝐅𝚵",
  botname : process.env.BOT_NAME  || "𝚩𝚫𝚳𝚰𝚪𝚵𝚰𝐃_𝐒_𝐖𝚰𝐅𝚵",
  ownername:process.env.OWNER_NAME|| "𝚩𝚫𝚳𝚰𝚪𝚵𝚰𝐃",

  sessionName:process.env.SESSION_ID || "SESSION_23_14_02_27_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtWRjVUa3VMM3piVGZPamFNNWtKK0dDY0NLNDVoZDdGUk5sMzFua0ttQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGZPSFE3cGpIR2ZLR3BvV0J6M0MvcmFXaFM3WmpsY0MvZ0FNczAvQlpFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvS3lOZ0t4eVJoeEVrRDJYL0ZnMUVBZ09SM29zSzBmbEJXVVljZEpSZkZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT1pCa3gvN3RkS1k5NG1yMzlETllTdTNHY3RQVktpQzRRbTdrNFI3ZzBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHMHNDTU9pVk1raksrWGZlU1VORFJsWnArQjVrbHZwWU9nWE14SlFNMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8wY2FCYkpydmR2Y2NYM0Nmb0dKUGMvc3dWR3B5ZXgyTFVhU1lrMnMxQ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VONVIxKzkwOFBNQ2k3VXZvSmU4MVlLZjdacDZHeE82WnNjZ1VyNTVVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTd2K1NsN0dFc2U5YTYzdkYxUERNS2xLTHRBL3UwTlA1Tkg4VUtiQnFqWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM4MW1XMzk5THgrTjZmKzlJR3NWZW92VTZPM0VpTUVoamhmeU40M0ptdE5tbmV1TW1aWVZrakJsNUgxYzl0R2gwbE1oRkRmSDVzcmNKVW9CVmh0bEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJlRFVqemFRR3JNTUl3anA3VnhMUWxLZXl0QXJmSXA2UjNGREVZdjA4ZUkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoVk54UnJPSlJhMmxvbkVOZnpEeVFBIiwicGhvbmVJZCI6ImE4ODYwZDJlLTMyNTUtNGNlOS1iMDk5LTczNTk1NjViMmU2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4b1gwMjZTMDJuWm1Fd1l0RE9CM2pxbnNTWk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmMyUjJ0dFJFM1dJT2VoNHJLVGNSaXUvQ2lZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhIQjFORTJGIiwibWUiOnsiaWQiOiIyMzQ4MTAyOTI1MDkzOjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKdhuOAhFlPVVIgSFVCQlktQkFNSVJFSUTjgIR+8J2UhfCfqbgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ091S2lZc0hFTVBaK2E0R0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitWRzd0SjdIKzRLWk93MlMvSkVQUVlEMXBBemFhcHp5d3YzZWlsMFNXa2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImY3Qk96Q01KMmJVa080a1NmdWV6ZXp2NVp2dFJxNDRwZjFLQUd3UDZGeGp5WUxqUk5TNm51Vk1TMzBBNzhxYy92bU9sejZMSmhWQnE1U1dDZE9aVERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwQmErMmo0RlNSazIxSG96RzU1anhGc2h4d216Ty9uNEtGQTFNVUlsYURkd0JkT0Uzb2s5VDNNNVNHcWhuS1ExcFlwY2RNUUgzWTFZRGdQcEJpT09DQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDI5MjUwOTM6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmxSdTdTZXgvdUNtVHNOa3Z5UkQwR0E5YVFNMm1xYzhzTDkzb3BkRWxwSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwOTA3NTY1M30=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = 'https://telegra.ph/file/4a55d2805e98382980145.jpg'
const cat = `𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 𝗚𝗟𝗢𝗕𝗔𝗟
👤 https://Wa.me/593992402778

𝘌𝘭𝘪𝘵𝘦 𝘉𝘰𝘵 𝘎𝘭𝘰𝘣𝘢𝘭 𝘧𝘶𝘦 𝘤𝘳𝘦𝘢𝘥𝘰 𝘦𝘯 𝘦𝘭 𝘢𝘯̃𝘰 2023 𝘱𝘢𝘳𝘢 𝘧𝘪𝘯𝘦𝘴 𝘦𝘥𝘶𝘤𝘢𝘵𝘪𝘷𝘰𝘴, 𝘭𝘶𝘤𝘳𝘢𝘵𝘪𝘷𝘰𝘴 𝘺 𝘥𝘦 𝘦𝘯𝘵𝘳𝘦𝘵𝘦𝘯𝘪𝘮𝘪𝘦𝘯𝘵𝘰.

✨ 𝗥𝗘𝗗𝗘𝗦 𝗦𝗢𝗖𝗜𝗔𝗟𝗘𝗦 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 
𝗜𝗚: https://www.instagram.com/sebxs_official0/profilecard/?igsh=Mnk0cG51b2tqdXow

𝗧𝗞: https://www.tiktok.com/@manuelito.15?_t=8hzBNnZmjxt&_r=1

🪀 𝗖𝗢𝗠𝗨𝗡𝗜𝗗𝗔𝗗
https://chat.whatsapp.com/IRTzO1BlH81Ay0Kfhqz2Wa

𝖡𝖺𝗌𝖾 𝗈𝗋𝗂𝗀𝗂𝗇𝖺𝗅 𝗌𝗂𝗇𝖼𝖾 2023 SB`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler


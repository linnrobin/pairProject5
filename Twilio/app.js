var accountSid = 'AC6249830ad7debac982793d7b2f249bed'
var authToken = '6d0d1d13296e28c5c55f6e3023af9e19'
const client = require('twilio')(accountSid, authToken);

let pelapor = {}

pelapor.name = 'Ottoyd'
pelapor.email = 'ugaipribadi@gmail.com'
pelapor.item = 'https://imgur.com/a/MuMV05p'
pelapor.telp = '+6281385902476'

let item = {}

item.name = 'dompet'
item.lokasi = 'gedung MCC'

client.messages.create({
    from:'whatsapp:+14155238886',
    to:`whatsapp:${pelapor.telp}`,
    body:`Hello ${pelapor.name} barang anda ${item.name} ${pelapor.item} telah ditemukan & dapat di ambil di ${item.lokasi}`
}).then(messages => console.log(messages.sid))
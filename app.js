const accountSid = 'AC6249830ad7debac982793d7b2f249bed'
const authToken = '6d0d1d13296e28c5c55f6e3023af9e19'
const client = require('twilio')(accountSid, authToken);
const nodemailer= require('nodemailer')

let pelapor = {}
// data dari database >> for each
pelapor.name = 'Ottoyd'
pelapor.email = 'ugaipribadi@gmail.com'
pelapor.item = 'https://imgur.com/a/MuMV05p'
pelapor.telp = '+6281385902476'

let item = {}

item.name = 'dompet'
item.lokasi = 'gedung MCC'

const trans = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pairprojectgroup5@gmail.com',
        pass: 'pairproject5!'
    }
})

const option = {
    from: 'pairprojectgroup5@gmail.com',
    to: pelapor.email,
    subject: 'Your item founded',
    text: `Your item ${item.name}  ${pelapor.item} has been founded you can take yout item at ${item.lokasi}`
}

trans.sendMail(option, (err,res) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Email Sucessfuly send', res.response)
    }
})

client.messages.create({
    from:'whatsapp:+14155238886',
    to:`whatsapp:${pelapor.telp}`,
    body:`Hello ${pelapor.name} barang anda ${item.name} ${pelapor.item} telah ditemukan & dapat di ambil di ${item.lokasi}`
}).then(messages => console.log(messages.sid))
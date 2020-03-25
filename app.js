const nodemailer= require('nodemailer')

let pelapor = {}

pelapor.name = 'Ottoyd'
pelapor.email = 'ugaipribadi@gmail.com'
pelapor.item = 'https://imgur.com/a/MuMV05p'

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
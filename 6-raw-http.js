const https = require('https')
const url = 'https://api.darksky.net/forecast/3753aafb87ef39c1b693861a43914bea/40,-75'


const request = https.request(url, (response)=> {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('This is an Error', error)
})

request.end()
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const PORT = 5000

const url = "https://www.jawapos.com/"
 
// app.get(url, function (req, res) {
//     console.log(res)
// })

/**
 * iam using axios because it will executed immediately when script executed
 * but if you want to executed by trigger you can use basic routing like "app.get" / "app.post"
 */
axios(url). 
    then(response => {
        const article = [] // var for save scrapper result data
        const html = response.data
        const $ = cheerio.load(html)
        $('.trending-item__title',html).each(function(){
            const text = $(this).text() // for title
            const url = $(this).find('a').attr('href') // for url
            article.push({
                text,
                url                
            })
        })
        console.log(article) // the response
    })

 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
const jwt = require("jsonwebtoken")

const account = {
    name:"shubh",
    account_no: 1231231231223
}
const password = "1233132242"
const token = jwt.verify('eyJhbGciOiJIUzI1NiIsnR5cCI6IkpXVCJ9.eyJuYW1lIjoic2h1YmgiLCJhY2NvdW50X25vIjoxMjMxMjMxMjMxMjIzLCJpYXQiOjE3NDExOTM1NjZ9.ThAOmZMLTYbwpTmZuESj8iJYajZQm0utNGkTlSPHZ-g',password)

console.log(token)
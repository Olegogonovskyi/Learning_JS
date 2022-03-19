// setTimeout(() =>{
//     let morningwork = (`6:00 дзвонить будильник, переставляю його на 10 хв`)
//     console.log(morningwork)
//     setTimeout(() =>{
//         let morningwork = (`6:10 дзвонить будильник, злий як чорт встаю і йду на кухню`)
//         console.log(morningwork)
//         setTimeout(() =>{
//             let morningwork = (`6:20 мию грішне тіло`)
//             console.log(morningwork)
//             setTimeout(()=>{
//                 let morningwork = (`6:30 кава+ сніданок`)
//                 console.log(morningwork)
//                 setTimeout(()=>{
//                     let morningwork = (`6:40 читаю новини і офігіваю`)
//                     console.log(morningwork)
//                     setTimeout(()=>{
//                         let morningwork = (`6:50 вибігаю з хати`)
//                         console.log(morningwork)
//                     },3000)
//                 },3000)
//             },3000)
//         }, 3000)
//         }, 3000)
//     }, 3000
// )

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let time = 6;
        console.log(`${time} - пробудження`)
        resolve (time)
    }, 3000)
})
promise
.then(time => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        time++
        console.log(`${time} - іду на роботу`)
        resolve (time)
    }, 3000)
    })
    })
    .then(value =>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                    value++
                    console.log(`${value} - Кава на роботі`)
                    resolve (value)
                }, 3000
            )
        })
    } )
    .then(value =>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                    value++
                    console.log(`${value} - наша команда робить щось важливе`)
                    resolve (value)
                }, 3000
            )
        })
    } )
    .then(value =>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                    value++
                    console.log(`${value} - Думаємо шо на обід поїсти`)
                    resolve (value)
                }, 3000
            )
        })
    } )
    .then(value =>{
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                    value++
                    console.log(`${value} - ну все, обід`)
                    resolve (value)
                }, 3000
            )
        })
    } )
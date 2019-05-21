function animationWait(timeout){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve()
            }, timeout)
    })
}

let toDoCounter = 1
let doingCounter = 1
let doneCounter = 1

document.getElementById('inputText').addEventListener('keypress',(e)=>{
if(e.keyCode===13){
    let textValue = document.getElementById('inputText').value

    let text = document.createElement('div')
    text.id = `todo${toDoCounter}`
    text.onclick = async()=>{
        let todo = document.getElementById(`${text.id}`)
        todo.classList.add('animationOut')
        await animationWait(300)
        todo.innerHTML = ''
        

        let text2 = document.createElement('div')
        text2.id = `doing${doingCounter}`
        text2.innerHTML = textValue
        document.getElementById('doingContainer').appendChild(text2)

        doingCounter++

        text2.onclick = async()=>{
            let todo1 = document.getElementById(`${text2.id}`)
            todo1.classList.add('animationOut')
            await animationWait(300)
            todo1.innerHTML = ''
            


            let text3 = document.createElement('div')
            text3.id = `done${doneCounter}`
            text3.innerHTML = textValue
            document.getElementById('doneContainer').appendChild(text3)

            doneCounter++

            text3.onclick = async()=>{
                let todo2 = document.getElementById(`${text3.id}`)
            todo2.classList.add('animationOut')
            await animationWait(300)
            todo2.innerHTML = ''
            }
        }

    }
    text.innerHTML = textValue

    document.getElementById("toDoContainer").appendChild(text)

    toDoCounter++

    document.getElementById('inputText').value = ""
}
})


// document.getElementById('inputText1').addEventListener('keypress',(e)=>{
// if(e.keyCode===13){
//     let textValue = document.getElementById('inputText1').value

//     let text = document.createElement('div')
//     text.id = `doing${doingCounter}`
//     text.classList.add('animation')
//     // text.onclick = ()=>{
//     //     let doing = document.getElementById(`${text.id}`)
//     //     doing.innerHTML = 'aay'
//     // }
//     text.innerHTML = textValue

//     document.getElementById("doingContainer").appendChild(text)

//     doingCounter++

//     document.getElementById('inputText1').value = ""
// }
// })


// document.getElementById('inputText2').addEventListener('keypress',(e)=>{
// if(e.keyCode===13){
//     let textValue = document.getElementById('inputText2').value

//     let text = document.createElement('div')
//     text.id = `done${doneCounter}`
//     text.classList.add('animation')
//     // text.onclick = ()=>{
//     //     let done = document.getElementById(`${text.id}`)
//     //     done.innerHTML = 'aay'
//     // }
//     text.innerHTML = textValue

//     document.getElementById("doneContainer").appendChild(text)

//     doneCounter++
    

//     document.getElementById('inputText2').value = ""
// }
// })



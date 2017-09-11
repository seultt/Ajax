(function () {
  const getBtn = document.querySelector('#getBtn')
  const postBtn = document.querySelector('#postBtn')
  const putBtn = document.querySelector('#putBtn')
  const delBtn = document.querySelector('#delBtn')
  const viewer = document.querySelector('.viewer')
  
  // function render() {
  //   viewer.innerHTML = JSON.stringify(JSON.parse(data), null, 2)
  // }

  // get btn
  getBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
    const userid = document.querySelector('#user_id').value
    const viewer = document.querySelector('.viewer')
    xhr.open('GET', `/users/${userid}`)
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4){
        if(xhr.status === 200) {
          console.log('responseText: ', xhr.responseText)
          viewer.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 2)
        }
        else{
          console.error('GET failed')
        }
      }
    }
  })

  // post btn
  postBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
    const userid = document.querySelector('#user_id').value
    const userpw = document.querySelector('#user_pw').value
    const userFirst = document.querySelector('#user_first').value
    const userLast = document.querySelector('#user_last').value
    xhr.open('POST', '/users')
    // request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다. applicatio 타입
    xhr.setRequestHeader('Content-type', 'application/json')
    
    let data = {userid: userid,
      password: userpw,
      firstname: userFirst,
      lastname: userLast}
    xhr.send(JSON.stringify(data))
  })

  putBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
    const userid = document.querySelector('#user_id').value
    const userpw = document.querySelector('#user_pw').value
    const userFirst = document.querySelector('#user_first').value
    const userLast = document.querySelector('#user_last').value    
    xhr.open('PUT', `/users/${userid}`)
    xhr.setRequestHeader('content-type', 'application/json')

    let data = {userid: userid,
      password: userpw,
      firstname: userFirst,
      lastname: userLast}
    xhr.send(JSON.stringify(data))
  })

  delBtn.addEventListener('click', () => {
    const userid = document.querySelector('#user_id').value
    let xhr = new XMLHttpRequest()
    xhr.open('DELETE', `/users/${userid}`)
    xhr.send(null)
    xhr.onreadystatechange = function(){
      if(this.readyState === 4) {
        if(this.status === 200){
          console.log('this.responseText: ', xhr.responseText)
        }
      }
    }

  })
    
 

})()
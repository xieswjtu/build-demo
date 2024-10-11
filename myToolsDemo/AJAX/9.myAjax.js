const myAjax = function(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest
        xhr.open("GET", url, true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404) {
                    reject(new Error ("404 not found"))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
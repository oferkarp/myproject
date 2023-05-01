const prevHTML = Table.innerHTML; // store previous state before updating Table HTML


function search_name() {
    const studentName = document.getElementById('studentName').value;
    axios.get(`https://jsonplaceholder.typicode.com/users/?name=${studentName}`)
        .then(res => {
            const studentData = res.data[0];
            const id = studentData.id; // store the id property in a separate variable
            const resultHTML = res.data.map(user => `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td></tr>`).join('');
            Table.innerHTML = "<thead><tr><th>id</th><th>name</th><th>username</th><th>email</th></tr></thead><tbody>" + resultHTML + "</tbody>";
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${id}`)
        .then(res => {
            const resultHTML = res.data.map(user => `<tr><td>${user.userId}</td><td>${user.id}</td><td>${user.title}</td><td>${user.body}</td></tr>`).join('');
            Table.innerHTML = "<thead><tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr></thead><tbody>" + resultHTML + "</tbody>";
        })
}

function search_post() {
    const studentName = document.getElementById("studentName").value;
    const prevHTML = Table.innerHTML; // store previous state before updating Table HTML
    axios
        .get(`https://jsonplaceholder.typicode.com/users/?name=${studentName}`)
        .then((res) => {
            const studentData = res.data[0];
            const id = studentData.id; // store the id property in a separate variable
            axios
                .get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
                .then((res) => {
                    const resultHTML = res.data
                        .map(
                            (post) =>
                                `<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`
                        )
                        .join("");
                    Table.innerHTML =
                        "<thead><tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr></thead><tbody>" +
                        resultHTML +
                        "</tbody>" +
                        // add a back button to go back to the previous state
                        `<br><button onclick="Table.innerHTML='${prevHTML}';">Back</button>`;
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}
function search_albums() {
    const studentName = document.getElementById('studentName').value;
    const prevHTML = Table.innerHTML; // store previous state before updating Table HTML
    axios
        .get(`https://jsonplaceholder.typicode.com/users/?name=${studentName}`)
        .then((res) => {
            const userData = res.data[0];
            const id = userData.id;
            axios
                .get(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
                .then((res) => {
                    const resultHTML = res.data
                        .map(
                            (album) =>
                                `<tr><td>${album.userId}</td><td>${album.id}</td><td>${album.title}</td></tr>`
                        )
                        .join('');
                    Table.innerHTML =
                        "<thead><tr><th>userId</th><th>id</th><th>title</th></tr></thead><tbody>" +
                        resultHTML +
                        '</tbody>' +
                        // add a back button to go back to the previous state
                        `<br><button onclick="Table.innerHTML='${prevHTML}';">Back</button>`;
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}
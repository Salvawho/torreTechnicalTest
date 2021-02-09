const app = new Vue({
    el: '#torre-profile',
    data: {
        results: [],
        searchClicked: false,
    },
    methods: {
        clickSearch() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch("https://torre.bio/api/bios/jsdelarosa", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
        //     this.searchClicked = true
        //     this.getData(this.city)
        // },
        // getData(city) {
        //     let uri = ''
        //     this.results = []
        //     if(city == "jsdelarosa") {
        //         uri = "https://torre.bio/api/bios/jsdelarosa"
        //     }
        //     else {  
        //         alert("Please choose an option")
        //     }
        //     let res = []
        //     if(uri != '') {
        //         fetch(uri, {
        //             'mode': 'cors',
        //             "method": "GET"
        //         })
        //         .then(response => {
        //             if(response.ok) {
        //                 response.json()
        //                 .then(response1 => {
        //                     this.results = response1.content.properties 
        //                     if(this.results.length == 0) {
        //                         alert('No listings found.')
        //                     }
        //                 })
        //             }
        //         })
        //         .catch(err => {
        //             alert("The API is facing issues. Please try again later.n" + err)
        //         })          
        //     }
        // }
    }
})
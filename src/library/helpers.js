export default {
    scroll(id) {
        // console.log(id);
        let el = document.getElementById(id);
        el.scrollIntoView({behavior: "smooth"});
    },
     checkUniqueBy(list, key){
            let vals = []
            for (const item of list) {
                 if(!vals.includes(item[key])){
                    vals.push(item[key])
                }
                else{return true}
            }
            return false

        }
}

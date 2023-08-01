class RequestApi{
    constructor(){
        this.xhr = new XMLHttpRequest();
        this.data = null;
    }

    getAllData(callback,callback1){
        this.xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const responseText = this.responseText;
                this.data = Array.from(JSON.parse(responseText));
                callback();
                callback1();
            }
        }
        this.xhr.open('GET','data.json');
        this.xhr.send();
    }
}
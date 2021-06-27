export function Card(title, discription){
    this.title = title;
    this.discription = discription;
    
    this.getHtml = function(){
        return `<div class="card text-white bg-dark mb-3" style="width: 400px;">
                    <div class="card-header">${this.getTime()}</div>
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.discription}</p>
                    </div>
                </div>`
    }
    this.getTime = function(){
        return new Date().toLocaleString()
    }
}
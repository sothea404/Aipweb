let api = 'https://fakestoreapi.com/products';
fetch(api)
.then(res => res.json())
.then(data =>{
    let output='';
    data.forEach(pro => {
        output += `
            <div class="col">
                  <div class="card h-100">
                    <img style="height: 20rem;" src="${pro.image}" class="object-fit-cover card-img-top" alt="">
                    <div class="card-body">
                        <span style="background-color: rgb(30, 199, 199); font-size: 10px;" class="btn p-0 py-1 px-3 text-light rounded-pill float-end">${pro.category}</span>
                      <h5 class="card-title">${pro.title}</h5>
                      <p class="card-text">${pro.description}</p>
                      <span class="btn p-0 py-1 bg-info px-3 text-light rounded-pill">${pro.price}</span>
                      <h6 class="mt-3 fw-light">Rate ${pro.rating.rate} of ${pro.rating.count}</h6>
                    </div>
                  </div>
                </div>
        `;
    });
    document.querySelector('.row').innerHTML = output;
    
})
.catch(err => alert(err))
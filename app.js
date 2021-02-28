(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('.customer-name')
    const customerText = document.querySelector('.customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    

    function createCustomer(img, name, text) {

        let fullImg = `img/img${img}.jpg`
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    
    createCustomer(1, 'John due', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro modi ipsam rerum suscipit distinctio?')

    createCustomer(2, 'Sandy kalif', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20. Richard McClintonia')

    createCustomer(3, 'Amy james', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour look even slightly believable.')

    createCustomer(4, 'Thrall organ', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')

    createCustomer(5, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.')
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('preBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.textContent = customers[index].name
               customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
             }
        })
    })
    
})()
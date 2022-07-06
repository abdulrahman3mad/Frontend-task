const container = document.getElementById("container")

for(let i=0; i<10; i++){
    container.innerHTML += `<tr>
                                <td><input type="text" name="name" id="name" placeholder="Abdulrahman" required></td>
                                <td><input type="date" name="birthdate" id="" required></td>
                                <td><input type="date" name="currentdate" id="" required></td>
                                <td><input type="text" name="job" placeholder="Software Engineer" id="job" required></td>
                                <td><input type="email" name="email" placeholder="abdulrahmanEmad@gmail.com" id="" required></td>
                                <td><input type="tel" name="phonenumber" maxlength="11" minlength="11" placeholder="011506548" id="" required></td>
                                <td><input type="number" name="salary" placeholder="5000" class="salary" required></td>
                            </tr>
                            `
}

container.innerHTML += `<tr>
                            <td colspan="6" class="total">Total</td>
                            <td><input type="text" name="salary"  class="total-salary" value="10000" id="total-salary"></td>
                        </tr>`




const QuestionsElements = document.querySelectorAll("#question")
console.log(QuestionsElements)

for(let i=0; i<QuestionsElements.length; i++){
    QuestionsElements[i].addEventListener("click", ()=>{
        QuestionsElements[i].nextElementSibling.classList.toggle("hide")
    })
}


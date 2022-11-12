
/*
//Övning 1 från objekt-bootcamp
function serch(){
    let books = [
                {title:'a', author:'b', numPage:222},
                {title:'c', author:'d', numPage:222},
                {title:'f', author:'g', numPage:222},
                {title:'h', author:'k', numPage:222}
        ]
    
        const searchResult = findBook(books, 'h');
        console.log(searchResult);

}
function findBook(booksarr, searchTit){
    // console.log(booksarr);
    // console.log(searchTit);
    for(let i=0; i < booksarr.length; i++){
        let book= booksarr[i];
        if(book.title == searchTit){
            return book;
        }
    }
    return null;

}
serch();
*/
 
/*
//övning 2 objektbootcamp
function letterFrequency(text){
    let result={};
    for (let char of text){

        if(result[char]==undefined){
            result[char]=1
        }else
        {
            result[char]++;
        }
    }
    console.log(result);
}
letterFrequency('ommar kiri');
*/

/*
//Övning 3 objectbootcamp 
function searchCode(newUsers, landsCode) {
    let result={};
    for (let i = 0; i < newUsers.length; i++) {
        let element = newUsers[i];
        if(element.nat == landsCode){
            result.name = element.name;
            result.nat = element.nat;
            console.log(result.length);
        }
    }
}
searchCode(users, 'DE');
*/

/*
// Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och 
// returnerar en ny lista innehållande endast kvinnliga eller manliga användare.

function gender(newUsers, sex) {
    let genderList= [];
    for (let i = 0; i < newUsers.length; i++) {
        let element = newUsers[i];
        //console.log(element.name.title);
        if(sex=='male')
        {
            if((element.name.title == 'Mr') ||(element.name.title == 'Monsieur')){
                let male={};
                male = element;
                genderList.push(male);

            }
        }else{
            if((element.name.title == 'Miss') ||(element.name.title == 'Mademoiselle') || (element.name.title == 'Ms') ||(element.name.title == 'Mrs'))
            {let female={};
            female = element;
            genderList.push(female)
            }
       }
    }
    return genderList;
}
console.log(gender(users, 'male'))
*/

/*
//Skapa en funktion som tar emot listan på användare och returnerar en lista 
//innehållandes endast användarnas emailaddresser

function mejladress(newUser){
    let lists= [];
    for (let i = 0; i < newUser.length; i++) {
        let email= newUser[i].email;
        let mejl ={email: email};
        lists.push(mejl);
}
return lists;
}
mejladress(users);
*/

/*
DET ÄR BRA ATT SISTA ÖVNINGAR KÖRS TILLSAMMANS!

//Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. Just nu följer deras e-mail formatet 
//förnamn.efternamn@example.com men chefen vill att de ska följa formatet efternamn.förnamn@evilcorp.countrydomain.
//Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.
function newEmail(){
    const oldEmail= mejladress(users);
    let newEmailForm = [];
    for (let i = 0; i < oldEmail.length; i++) {
        let email = oldEmail[i].email;
        let name; let lastName; let fullName; let nat;
        fullName = email.split(['@'], 1);
        fullName= fullName[0].split(['.'], 2);
        name= fullName[0];
        lastName= fullName[1];
        let newMail={};
        nat = users[i].nat.toLowerCase();
        newMail = {email: lastName + '.' + name + '@evilcorp.' + nat};
        newEmailForm.push(newMail);
    }
    return newEmailForm;  
}
    newEmail();
*/
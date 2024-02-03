document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btnPost');
    btn.addEventListener('click', function(){
        if(document.getElementById("myTextarea").value !=""){
            const postedContent = document.createElement('div');
            postedContent.className = 'postedContent';

            const postedContentHeading = document.createElement('div');
            postedContentHeading.className = 'postedContentHeading';

            const profileImageHolder = document.createElement('div');
            profileImageHolder.className = 'profileImageHolder';

            const profileImage = document.createElement('img');
            profileImage.src = 'assets/profile_image.png';
            profileImage.alt = 'img';

            profileImageHolder.appendChild(profileImage);

            const profileInfo = document.createElement('div');
            profileInfo.className = 'profileInfo';

            const name = document.createElement('span');
            name.className = 'name';
            name.textContent = 'Joanne Graham';

            const email = document.createElement('span');
            email.className = 'email';
            email.textContent = '@joannegra123';

            profileInfo.appendChild(name);
            profileInfo.appendChild(email);

            postedContentHeading.appendChild(profileImageHolder);
            postedContentHeading.appendChild(profileInfo);

            const mainContent = document.createElement('div');
            mainContent.className = 'mainContent';

            const postedText = document.createElement('p');
            postedText.className = 'postedText';
            postedText.textContent = document.getElementById("myTextarea").value;
            mainContent.appendChild(postedText);

            postedContent.appendChild(postedContentHeading);
            postedContent.appendChild(mainContent);
            document.querySelector(".feedPost").appendChild(postedContent);
            document.getElementById("myTextarea").value = "";
        }
        else {
            alert('Please enter some text before posting.');
        }
    });
});
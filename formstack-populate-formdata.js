<script  type="text/javascript">

        const populateTestData = () => {
            //const inputs = document.querySelectorAll('input.fsField input[type=text].fsField');
            const inputs = document.querySelectorAll('input[type=text].fsField');
            const numbers = document.querySelectorAll('input[type=number].fsField');
            const emails = document.querySelectorAll('input[type=email].fsField');
            const phones = document.querySelectorAll('input[type=tel].fsField');
            // const selects = document.querySelectorAll('form select');
            const selects = document.querySelectorAll('form select');
            const textareas = document.querySelectorAll('form textarea');

            // want individual groups then figure out what each is
            const groups = document.querySelectorAll('fieldset[role="group"]');

            const ccNums = document.querySelectorAll('.fsCreditcardNumberField-input');
            const ccExps = document.querySelectorAll('.fsCreditcardExpirationDateField-input');
            const ccCvv2s = document.querySelectorAll('.fsCreditcardSecurityCodeField-input');

            ccNums.forEach(ccField => {
              ccField.value = '4111111111111111'
            });

            ccExps.forEach(exp=>{
              exp.value = '0425';
            }) 
            ccCvv2s.forEach(cvv2=>{
              cvv2.value = '123';
            }) 
 
            inputs.forEach(input=>{
                input.labels.forEach(l=> {input.value += l.innerHTML.split('<span')[0] }); 
            })
            numbers.forEach(input=>{
                input.value = parseInt( Math.random() * 10);
            })
            emails.forEach(email=>{
                email.value = 't.chambers@formstack.com';
            })
            phones.forEach(phone=>{
                phone.value = '3235551212';
            })
            selects.forEach(input=>{
                oneOf(input.options).selected = true;
            });
            textareas.forEach(textArea=>{
                textArea.value = 'Large Answer field can support big text and multiple lines';
            })


            
            groups.forEach(group=>{
                  const radios = group.querySelectorAll('input[type=radio]');
                  if(radios.length > 0) {
                    oneOf(radios).checked = true;
                  }
                  const checkBoxes = group.querySelectorAll('input[type=checkbox]');
                  checkBoxes.forEach(chkBx => {
                    chkBx.checked = (Math.random() < 0.5)? true: false;
                  })
                  // ratings fieldType is a collection of buttons
                  const buttons = group.querySelectorAll('button');
                  if(buttons.length>0){
                    oneOf(buttons).click();
                  }
            })
                      const  message = `Found:
                ${inputs.length} input(s) 
                ${selects.length} select(s) 
                ${groups.length} groups(s) 
                ${textareas.length} textarea(s) 
            `;

            alert(message);    

        };
        addEventListener('load',populateTestData);
</script>
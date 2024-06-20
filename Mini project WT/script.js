// Form Validation and Submission for Recharge Page
document.addEventListener('DOMContentLoaded', function () {
    const rechargeForm = document.getElementById('rechargeForm');
    if (rechargeForm) {
      rechargeForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const phone = document.getElementById('phone').value;
        const amount = document.getElementById('amount').value;
  
        // Regular expressions for validation
        const phoneRegex = /^[0-9]{10}$/;
        const amountRegex = /^[1-9]\d*$/;
  
        if (phoneRegex.test(phone) && amountRegex.test(amount)) {
          alert(`Recharge Successful!\nPhone Number: ${phone}\nAmount: $${amount}`);
          rechargeForm.reset();
        } else {
          alert('Please enter a valid phone number and amount.');
        }
      });
    }
  });
  